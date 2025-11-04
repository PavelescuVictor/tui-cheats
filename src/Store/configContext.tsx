import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction
} from 'react';

type Config = {
    [key: string]: {} | string | number,
}

type ConfigContextType = {
  config: Config
  setConfig: Dispatch<SetStateAction<Config>>;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

type ConfigPropsTypes = {
    config: Config;
}

export const ConfigProvider = ({ config: configData, children }: React.PropsWithChildren<ConfigPropsTypes>) => {
    const [config, setConfig] = useState<Config>({
        config: configData
    });

    return <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
    </ConfigContext.Provider>
}

export const useConfig = () => {
    const ctx = useContext(ConfigContext);
    if (!ctx) {
        throw new Error('useConfig must be used inside ConfigProvider');
    }
    return ctx;
}

export const ConfigConsumer = ConfigContext.Consumer;

export default ConfigContext;
