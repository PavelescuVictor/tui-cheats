import { pathToFileURL } from 'bun';

export async function importTomlNative(filePath: string) {
  const mod = await import(pathToFileURL(filePath).href, { with: { type: "toml" } });
  return mod.default;
}
