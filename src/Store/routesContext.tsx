import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction,
} from 'react';

export type Route = any;

export type Routes = Array<Route>

export type StateType = {
    routes: Routes
}

export type ActionType = {
    [key: string]: () => void
};

export type SetStateType = Dispatch<SetStateAction<StateType>>

type ContextType = {
    state: StateType;
    actions: ActionType;
    setState: Dispatch<SetStateAction<StateType>>
}

const RoutesDefaultState = {
    state: {
        routes: []
    },
    setState: () => {},
    actions: {}
}

const RoutesContext = createContext<ContextType | null>(RoutesDefaultState);

export type PropsType = {
    routes: Routes
}

export const RoutesProvider = ({
    routes,
    children
}: React.PropsWithChildren<PropsType>) => {
    const [state, setState] = useState<StateType>({ routes });
    const actions = {};

    return <RoutesContext.Provider value={{ state, setState, actions }}>
        {children}
    </RoutesContext.Provider>
}

export const useRoutes = () => {
    const ctx = useContext(RoutesContext);

    if (!ctx) {
        throw new Error("useRoutes must be used inside RoutesProvider");
    }

    return ctx;
}

export const RoutesConsumer = RoutesContext.Consumer;

export default RoutesContext
