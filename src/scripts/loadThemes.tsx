import fs from 'fs/promises';
import path from 'path';
import { importTomlNative } from './util';

const THEME_DIR = path.resolve(process.cwd(), "src/config/themes")
const THEME_FILE_NAME = "theme";
const FILE_TYPE = ".toml";

export async function loadTheme(dir = THEME_DIR) {
    let config = null;

    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.name === (THEME_FILE_NAME + FILE_TYPE)) {
            config = await importTomlNative(full);
            break;
        }
    }

    return config;
}
