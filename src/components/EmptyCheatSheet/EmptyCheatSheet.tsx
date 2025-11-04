import { useTheme } from 'Store/themeContext'
import { emptyCheatSheetStyle } from './EmptyCheatSheet.style';

const EmptyCheatSheet = () => {
    const { theme } = useTheme();

    return <box style={emptyCheatSheetStyle(theme)} padding={3}>
        <text>🤷‍♂️ [Sorry. There is no data available]</text>
    </box>
}

export default EmptyCheatSheet;
