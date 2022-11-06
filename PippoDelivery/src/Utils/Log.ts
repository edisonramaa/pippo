import fs from 'fs';

export class Logger {
    private enabled: boolean = true;

    /**
     * Write a general or a client-specific log message
     * @param string message Message to log
     */
    trace(message: string) {
        if (!this.enabled) {
            return;
        }
        var filename = './storage/log/general.log';

        const time = new Date().toISOString();
        this.write(filename, `${time} ${message}`);
        console.log(`${time} ${message}`);
    }

    /**
     * Write a log message to a certain file
     * @param string filename Path to the file to write to (relative to cwd)
     * @param string message Message to log
     */
    write(filename: string, message: string) {
        fs.appendFileSync(filename, message + '\n');
    }

    disable() {
        this.enabled = false;
    }
}
