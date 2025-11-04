import fs from "fs/promises";
import path from "path";
import { importTomlNative } from "./util";
import type { CheatSheets } from 'Store/cheatSheetsContext';

const CHEATSHEETS_DIR = path.resolve(process.cwd(), "src/config/cheatsheets");
const FILE_TYPE = "toml";

export async function loadCheatSheets(dir = CHEATSHEETS_DIR): Promise<CheatSheets> {
    const out = [] as CheatSheets;

    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
            continue;
        } else if (e.name.endsWith(FILE_TYPE)) {
            const key = full
                .slice(dir.length + 1)
                .replace(/\.toml$/, "")
                .split(path.sep)
                .join("/");
            const data = await importTomlNative(full);
            const hasValues = data && typeof data === 'object' && Object.keys(data).length > 0;
            out.push({
                name: key,
                hasValues,
                data: data
            })
        }
    }

    return out;
}
