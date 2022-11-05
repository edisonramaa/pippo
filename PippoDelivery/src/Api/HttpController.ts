import express, { NextFunction, Response, Request } from 'express';
import fs from 'fs';
import { Config } from '../Config';
import { WoltAPI } from './WoltApi';
/**
 * Http controller
 * Responsible of handling HTTP communication with the service
 */
export class HttpController {
    private _shutdown: boolean = false;

    shutdown() {
        this._shutdown = true;
    }

    /**
     * Middleware to enable CORS support for API
     */
    corsMiddleware(req: Request, res: Response, next: NextFunction) {
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    }

    /**
     * Middleware to prevent new request on shutdown state
     */
    shutdownMiddleware = (req: Request, res: Response, next: NextFunction) => {
        if (!this._shutdown) {
            next();
        } else {
            res.set('Connection', 'close');
            res.status(503).send({ error: 'shutdown', description: 'Server is closing down' });
        }
    };

    /**
     * Middleware for API key check
     */
    apiKeyMiddleware(key: string) {
        return (req: Request, res: Response, next: NextFunction) => {
            const apiKey = req.header('X-Api-Key');
            if (apiKey && key === apiKey) {
                next();
            } else {
                res.status(401).send({ error: 'unauthorized', description: 'Unauthorized API request' });
            }
        };
    }

    /**
     * Handle requests to API root
     */
    getRoot(req: Request, res: Response) {
        res.send({
            name: 'Wolt Service',
        });
    }

    /**
     * Handle requests to /doc
     */
    getDoc(req: Request, res: Response) {
        fs.readFile('openapi.yaml', 'utf8', (err: NodeJS.ErrnoException, data: string) => {
            data = data.replace('{{servers.url}}', req.protocol + '://' + req.headers.host);
            res.send(data);
        });
    }

    /**
     * Handle requests to /_version
     */
    getVersion(req: Request, res: Response) {
        fs.readFile('_version', 'utf8', (err: NodeJS.ErrnoException, data: string) => {
            res.send(err ? 'latest' : data);
        });
    }

    /**
     * Create new HTTP controller
     */
    create(): express.Express {
        const app = express();
        app.use(this.shutdownMiddleware);
        app.use(express.urlencoded({ extended: true, limit: '10mb' }), express.json());
        // CORS
        app.use(this.corsMiddleware);
        // Share files from public folder
        app.use(express.static('public'));
        // Root
        app.get('/', this.getRoot);
        // Documentation
        app.get('/doc', this.getDoc);
        // Version
        app.get('/_version', this.getVersion);

        //app.use(this.apiKeyMiddleware(Config.api_key));

        // routes
        app.get("/api", (req, res) => {
            res.json({ message: "Hello from server!" });
        });
        // routes
        new WoltAPI().route(app);

        return app;
    }
}
