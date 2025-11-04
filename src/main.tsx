import { render } from "@opentui/react";
import App, { AppModeType } from "components/App/App";
import { CheatSheetsProvider } from "Store/cheatSheetsContext";
import { ConfigProvider } from "Store/configContext";
import { ThemeProvider } from "Store/themeContext";
import { loadCheatSheets } from "scripts/loadCheatSheets";
import { loadConfig } from "scripts/loadConfig";
import { loadTheme } from "scripts/loadThemes";
import { APP_MODE } from "components/App/App";
import { HistoryProvider } from 'Store/historyContext';

const VALID_FLAGS = {
    "name": 'name',
}

const TOOL_ARGUMENTS_GUIDE = `
    npm run <command> <flag_format>

    Flag formats:
        --flag=value
        -flag=value
        --flag value
        -flag value

    All flags:
        - name | Name of the cheatsheet file to be loaded. Don't provide file extension.
`

function validArgs(argv: string[]) {
    if (!Array.isArray(argv) || !argv.length) {
        return false;
    }

    return true;
}

function validArg(arg: string) {
    if (!arg.startsWith("--") && !arg.startsWith("-")) {
        return false;
    }

    return true;
}

function validFlag(flag: string) {
    return Object.keys(VALID_FLAGS).includes(flag);
}

function sanitizeArgs(argv: string[]) {
    const args = [] as string[];
    for (let i = 0; i < argv.length; i++) {
        if (validArg(argv[i] as string)) {
            if (argv[i]?.includes("=")) {
                args.push(argv[i] as string);
            } else {
                args.push(argv[i]+ "=" +argv[i+1])
                i++;
            }
        }
    }

    const sanitizedArgs = [] as string[];
    args.forEach(arg => {
        const [flag, value] = arg.split("=");
        const flagName = (flag as string).replace(/^--?/, "");
        if (!validFlag(flagName)) {
            return;
        }

        const alreadyProvided = sanitizedArgs.find(arg => {
            const [argName, _] = arg.split("=");
            if ((argName as string).replace("--", "") === flagName) {
                return true;
            }
            return false;
        });
        if (alreadyProvided) {
            return;
        }
        sanitizedArgs.push(flagName + "=" + value);
    })

    return sanitizedArgs;
}

function parseArgs(argv: string[]) {
    return argv.map(arg => ({
        name: arg.split("=")[0],
        value: arg.split("=")[1]
    }));
}

function handleArgs(argv: string[]) {
    if (!validArgs(argv)) {
        return [];
    }
    const args = sanitizeArgs(argv);
    if (!validArgs(args)) {
        console.log("Please provide propper arguments");
        console.log(TOOL_ARGUMENTS_GUIDE);
        process.exit(1);
    }
    return parseArgs(args);
}

export async function main() {
    const args = handleArgs(process.argv.slice(2));
    const toolArg = args.find(arg => arg.name === VALID_FLAGS.name);
    const toolName = toolArg ? (toolArg.value as string) : "";

    const cheatSheets = await loadCheatSheets();
    const config = await loadConfig();
    const theme = await loadTheme();

    const appMode = toolName ?
        APP_MODE[AppModeType.specific] as AppModeType.specific :
        APP_MODE[AppModeType.default] as AppModeType.default
    const appProps = toolName ? { toolName, appMode } : { appMode }

    const selectedTool = toolName || null;

    console.log("Starting app in mode: " + appMode.toUpperCase());

    render(
        <ThemeProvider theme={theme}>
            <HistoryProvider history={[]}>
                <ConfigProvider config={config}>
                    <CheatSheetsProvider cheatSheets={cheatSheets} selectedTool={selectedTool}>
                        <App {...appProps}/>
                    </CheatSheetsProvider>
                </ConfigProvider>
            </HistoryProvider>
        </ThemeProvider>
    );
}
