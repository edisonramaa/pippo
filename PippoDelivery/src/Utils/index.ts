import { resolve } from "path";
import { Logger } from "./Log";
export const Log = new Logger;

export function storagePath(file: string) {
    return __dirname + `/../../storage/${file}`;
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));