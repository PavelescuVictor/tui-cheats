import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction,
} from 'react';

export type HistoryData = {
    [key: string]: {} | string | number;
};

export type HistoryEntry = {
    name: string;
    data: HistoryData;
};

export type History = Array<HistoryEntry>;

export type StateType = {
    history: History;
}

export type ActionType = {
    [key: string]: () => void
};

export type SetStateType = Dispatch<SetStateAction<StateType>>

export type ContextType = {
    state: StateType;
    actions: ActionType;
    setState: Dispatch<SetStateAction<StateType>>
};

const HistoryDefaultState = {
    state: {
        history: []
    },
    actions: {},
    setState: () => {}
}
const HistoryContext = createContext<ContextType | null>(HistoryDefaultState);

export type PropsType = {
    history: History
}

export const HistoryProvider = ({
    history,
    children,
} : React.PropsWithChildren<PropsType>) => {
    const [ state, setState ] = useState<StateType>({ history })
    const actions = {
        historyPush: (name = "", data = {} as HistoryData) => {
            if (typeof name !== "string" || typeof data !== "object") {
                return;
            }
            setState((prevState) => {
                const history = [...prevState.history];
                history.push({ name, data });

                return { ...prevState, history}
            })
        },
        historyPop: () => {
            setState((prevState) => {
                const history = [...prevState.history];
                history.pop();

                return { ...prevState, history }
            })
        }
    };

    return <HistoryContext.Provider value={{ state, setState, actions }}>
        {children}
    </HistoryContext.Provider>
}

export const useHistory = () => {
    const ctx = useContext(HistoryContext);

    if (!ctx) {
       throw new Error("useHistory must be used inside HistoryProvider");
    }

    return ctx;
}

export const HistoryConsumer = HistoryContext.Consumer

export default HistoryContext;
