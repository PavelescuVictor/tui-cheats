import { useState } from 'react';
import { type KeyEvent, type SelectOption } from "@opentui/core"
import { useKeyboard } from '@opentui/react';
import { useCheatSheets } from "Store/cheatSheetsContext";
import { useTheme } from 'Store/themeContext';
import { SelectionSearch } from 'components';
import { componentStyle, titleStyle, contentWrapperStyle } from './SelectionPage.style';
import SearchResults from 'components/SearchResults';

const SelectionPage = () => {
    const { state: { cheatSheets }, setState } = useCheatSheets();
    const [ filtered, setFiltered ] = useState(cheatSheets);
    const [ verticalIndex, setVerticalIndex ] = useState(0);
    const { theme } = useTheme();

    useKeyboard((key: KeyEvent) => {
        if (typeof key.name !== "string") {
            return;
        }
        switch (key.name){
            case 'down':
                if (verticalIndex === 0) {
                    setVerticalIndex(1);
                }
                break;
            case 'backspace':
                if (verticalIndex === 0) {
                    break;
                }
                process.exit(1);
            default:
                break;
        }
    })

    const handleFilter = (value: string) => {
        setFiltered(cheatSheets.filter(cheatSheet => cheatSheet.name.includes(value)));
    }

    const onSelect = (_: number, option: SelectOption | null) => {
        if (!option) {
            return;
        }
        setState((prevState) => ({
            ...prevState,
            selectedTool: option.value
        }))
    }

    return <box style={componentStyle(theme)}>
        <box style={{ width: "60%", alignItems: "center", paddingBottom: 1 }}>
            <text style={titleStyle(theme)}>[ Cheats Sheets ]</text>
        </box>
        <box style={contentWrapperStyle(theme)}>
            <SelectionSearch
                handleFilter={handleFilter}
                focus={verticalIndex === 0}
            />
            <SearchResults
                focus={verticalIndex === 1}
                onSelect={onSelect}
                results={filtered}
                setSelectionPageIndex={setVerticalIndex}
            />
        </box>
    </box>
}

export default SelectionPage;
