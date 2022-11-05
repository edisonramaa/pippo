import dotenv from 'dotenv';
import Fs from 'fs';
import { Logger } from './Utils/Log';

dotenv.config();

if (!process.env.PORT) {
    throw new Error('Project is not configured properly!');
}
/**
 * Minimum length of allowed API keys. Shorter ones will be ignored
 */
const API_KEY_MIN_LENGTH = 11;

export const Config = {
    wolt: {
        port: parseInt(process.env.PORT),
    },

    services: {
        wolt: {
            url: process.env.WOLT_URL,
            key: process.env.WOLT_API_KEY,
            merchantId: process.env.WOLT_MERCHANT_ID,
        },
    },
    
    api_key: process.env.SERVICE_API_KEY || '',

};
