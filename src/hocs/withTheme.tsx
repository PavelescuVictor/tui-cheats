import { useTheme } from 'Store/themeContext';

const withTheme = (Comp: any) => {
    const { theme } = useTheme();

    return <Comp theme={theme} />
}

export default withTheme;
