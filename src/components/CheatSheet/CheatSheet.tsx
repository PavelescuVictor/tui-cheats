import { useMemo } from 'react';
import { useKeyboard } from '@opentui/react';
import { useCheatSheets, type CheatSheetData } from 'Store/cheatSheetsContext';
import { useTheme } from 'Store/themeContext'
import Category from 'components/Category';
import { cheatSheetStyle, cheatSheetItemWrapperStyle } from './CheatSheet.style';
import type { KeyEvent } from '@opentui/core';

interface CheatSheetProps {
    cheatSheet: CheatSheetData
}

const CheatSheet = (props: CheatSheetProps) => {
    const { cheatSheet } = props;
    const { theme } = useTheme();
    const { setState } = useCheatSheets();

    useKeyboard((key: KeyEvent) => {
        if (typeof key.name === "string" && key.name === "backspace") {
            setState((prevState) => ({
                ...prevState,
                selectedTool: null
            }))
        }
    })

    const items = useMemo(() => Object
        .keys(cheatSheet)
        .filter((categoryKey: string) => typeof cheatSheet[categoryKey] !== "undefined")
        .map((categoryKey: string) => <Category
            key={categoryKey}
            name={categoryKey}
            commands={cheatSheet[categoryKey]! as { [key: string]: string | number }}
        />
    ), [cheatSheet])

    return <scrollbox focused style={cheatSheetStyle(theme)}>
        <box style={cheatSheetItemWrapperStyle}>{items}</box>
    </scrollbox>
}

export default CheatSheet
