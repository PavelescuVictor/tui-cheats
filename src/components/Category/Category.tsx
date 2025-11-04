import { useTheme } from 'Store/themeContext'
import Command from 'components/Command'
import { categoryWrapperStyle } from './Category.style'

interface CategoryProps {
    key: string
    name: string
    commands: { [key: string]: string | number }
}

const Category = (props: CategoryProps) => {
    const { theme } = useTheme();
    const {
        name,
        commands
    } = props;

    return <box style={{ width: "50%" }}>
        <text style={{ fg: theme.peach, paddingBottom: 1 }}> [{name}] </text>
        <box style={categoryWrapperStyle(theme)}>
            {Object.entries(commands).map(([command, value]) => <Command
                key={command}
                command={command}
                description={value}
            />)}
        </box>
    </box>
}

export default Category
