import type { BoxOptions } from '@opentui/core';
import { useTheme } from 'Store/themeContext';

interface BorderBoxProps {
    style?: BoxOptions
}

const BorderBox = (props: React.PropsWithChildren<BorderBoxProps>) => {
    const { style } = props;
    const { theme } = useTheme();

    return <box style={{
        border: true,
        borderColor: theme.mauve,
        borderStyle: "heavy",
        focusedBorderColor: theme.peach,
        ...style,
    }}>
        {props.children}
    </box>
}

export default BorderBox;
