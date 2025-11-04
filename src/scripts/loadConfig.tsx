import fs from 'fs/promises';
import path from 'path';
import { importTomlNative } from './util';

const CONFIG_DIR = path.resolve(process.cwd(), "src/config")
const CONFIG_FILE_NAME = "config";
const FILE_TYPE = ".toml";

export async function loadConfig(dir = CONFIG_DIR) {
    let config = null;

    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.name === (CONFIG_FILE_NAME +  FILE_TYPE)) {
            config = await importTomlNative(full);
            break;
        }
    }

    return config;
}
