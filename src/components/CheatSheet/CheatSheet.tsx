import { useMemo } from 'react';
import { useKeyboard } from '@opentui/react';
import { useCheatSheets, type CheatSheetData } from 'Store/cheatSheetsContext';
import { useTheme } from 'Store/themeContext'
import { Category } from 'components/Category';
import type { KeyEvent } from '@opentui/core';
import EmptyCheatSheet from 'components/EmptyCheatSheet';

interface CheatSheetProps {
    cheatSheet: CheatSheetData
    focus: boolean
}

const CheatSheet = (props: CheatSheetProps) => {
    const { cheatSheet, focus } = props;
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

    if (!items.length) {
        return <EmptyCheatSheet/>
    }

    return <scrollbox
        focused={focus}
        style={{
            scrollbarOptions: {
                showArrows: false,
                trackOptions: {
                    foregroundColor: theme.mauve,
                    backgroundColor: "#00000000",
                },
                arrowOptions: {
                    foregroundColor: theme.mauve
                }
            }
        }}
    >
        {items}
    </scrollbox>
}

export default CheatSheet
