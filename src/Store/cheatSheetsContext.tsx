import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction,
} from "react";

export type CheatSheetData = {
    [key: string]: {} | string | number;
};

export type CheatSheet = {
    name: string;
    hasValues: boolean;
    data: CheatSheetData;
};

export type CheatSheets = Array<CheatSheet>;

export type StateType = {
    selectedTool: string | null;
    cheatSheets: CheatSheets;
}

export type ActionType = unknown;

export type SetStateType = Dispatch<SetStateAction<StateType>>

export type ContextType = {
    state: StateType;
    actions: ActionType;
    setState: Dispatch<SetStateAction<StateType>>
};

export const CheatSheetsContext = createContext<ContextType | null>(null);

export type PropsTypes = {
    cheatSheets: CheatSheets,
    selectedTool: string | null
};

export const CheatSheetsProvider = ({
    selectedTool,
    cheatSheets,
    children,
}: React.PropsWithChildren<PropsTypes>) => {
    const [ state, setState ] = useState<StateType>({ cheatSheets, selectedTool });
    const actions = {}

    return <CheatSheetsContext.Provider value={{ state, setState, actions }}>
        {children}
    </CheatSheetsContext.Provider>;
};

export const useCheatSheets = () => {
    const ctx = useContext(CheatSheetsContext);
    if (!ctx) {
        throw new Error("useCheatSheets must be used inside CheatSheetsProvider");
    }

    return ctx;
};

export const CheatSheetsConsumer = CheatSheetsContext.Consumer;

export default CheatSheetsContext;
