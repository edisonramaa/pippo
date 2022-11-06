import Http from 'http';
import Https from 'https';
import { Config } from './Config';
import { HttpController } from './Api';
import { Log } from './Utils';

// Server
export class Server {
    private shuttingDown: boolean = false;
    private http: Http.Server;
    private https: Http.Server;
    private httpController: HttpController;
    private static _instance: Server;

    constructor() {
        Server._instance = this;
    }

    static getInstance() {
        return Server._instance;
    }

    async run() {
        Log.trace('== starting application ==');

        // HTTP controller
        this.httpController = new HttpController();
        const express = this.httpController.create();

        // Server
        this.http = Http.createServer(express).listen(Config.wolt.port);
        Log.trace('listening http on *:' + Config.wolt.port);

        process.on('SIGTERM', this.shutdown);
    }

    /**
     * Shutdown the service
     */
    shutdown = (): void => {
        if (this.shuttingDown) {
            return;
        }
        Log.trace('Received SIGTERM, shutting down');
        this.shuttingDown = true;

        setTimeout(function() {
            Log.trace('Could not close all connections within timeout. Shutting down forcefully!');
            process.exit(1);
        }, 5000);

        this.httpController.shutdown();
        Promise.all([this.shutdownHttp(), this.shutdownHttps()]).then(() => {
            Log.trace('All connections closed. Shutting down.');
            process.exit(0);
        });
    };

    /**
     * Close http server and connections
     */
    shutdownHttp(): Promise<void> {
        return new Promise(resolve => {
            this.http.close(() => {
                Log.trace('HTTP connections closed');
                resolve();
            });
        });
    }

    /**
     * Close https server and connections
     */
    shutdownHttps(): Promise<void> {
        if (!this.https) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            this.https.close(() => {
                Log.trace('HTTPS connections closed');
                resolve();
            });
        });
    }
}
