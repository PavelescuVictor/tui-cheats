import { useMemo } from "react";
import {
    EmptyCheatSheet,
    CheatSheet,
    SelectionPage
} from "components";
import { useCheatSheets } from "Store/cheatSheetsContext";
import type { CheatSheet as CheatSheetType } from 'Store/cheatSheetsContext';

export enum AppModeType {
    "default" = "default",
    "specific" = "specific",
}

export const APP_MODE = {
    [AppModeType.default]: "default",
    [AppModeType.specific]: "specific",
}

interface AppProps {
    toolName?: string;
    appMode: keyof typeof AppModeType;
}

const App = (props: AppProps) => {
    const { toolName, appMode = APP_MODE[AppModeType.default] } = props;
    const { state: { cheatSheets, selectedTool } } = useCheatSheets();

    const cheatSheet = useMemo(() => {
        if (!Array.isArray(cheatSheets) || !cheatSheets.length) {
            return null;
        }

        if (typeof selectedTool === "string" && selectedTool) {
            return cheatSheets.find((cheatSheet: CheatSheetType) => cheatSheet.name === selectedTool) as CheatSheetType;
        }

        return cheatSheets.find((cheatsheet: CheatSheetType) => cheatsheet.name === toolName ) as CheatSheetType;
    }, [cheatSheets, cheatSheets.length, selectedTool]);

    if (appMode === APP_MODE[AppModeType.default] && !selectedTool) {
        return <SelectionPage />;
    }

    if (!cheatSheet || !cheatSheet.hasValues) {
        return <EmptyCheatSheet />;
    }

    return <CheatSheet cheatSheet={cheatSheet.data} />;
};

export default App;
