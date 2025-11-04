import { useTheme } from 'Store/themeContext';

export interface CommandProps {
    key: string
    command: string
    description: string | number
}

const Command = (props: CommandProps) => {
    const { theme } = useTheme();
    const { command, description } = props;

    return <box style={{ flexDirection: "row", gap: 1 }}>
        <box style={{ flexDirection: "row", gap: 1 }}>
            <text style={{ fg: theme.mauve }}>[{ command }]</text>
            <text style={{ fg: theme.mauve }}>→</text>
        </box>
        <text>{ description }</text>
    </box>
}

export default Command
