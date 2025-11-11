import { useState } from 'react';
import { type KeyEvent, type SelectOption } from "@opentui/core"
import { useKeyboard } from '@opentui/react';
import { useCheatSheets } from "Store/cheatSheetsContext";
import { useTheme } from 'Store/themeContext';
import {
    HorizontalSplitLayout,
    PageLayout,
    SearchResults,
    SearchPreview,
    SelectionSearch,
    SectionTitle,
    VerticalSplitLayout,
    BorderBox,
} from 'components';

const SelectionPage = () => {
    const { theme } = useTheme();
    const { state: { cheatSheets }, setState } = useCheatSheets();
    const [ filtered, setFiltered ] = useState(cheatSheets);
    const [ navigationIndex, setNavigationIndex ] = useState({
        horizontal: 0,
        vertical: 0
    });
    const [ previewItem, setPreviewItem ] = useState<string | null>(cheatSheets[0]?.name || null);

    useKeyboard((key: KeyEvent) => {
        if (typeof key.name !== "string") {
            return;
        }

        switch (key.name){
            case 'left':
                if (navigationIndex.vertical === 1) {
                    setNavigationIndex(prevState => ({
                        ...prevState,
                        horizontal: 0,
                    }))
                }
                break;
            case 'right':
                if (navigationIndex.vertical === 1) {
                    setNavigationIndex(prevState => ({
                        ...prevState,
                        horizontal: 1,
                    }))
                }
                break;
            case 'up':
                if (navigationIndex.horizontal === 1 && navigationIndex.vertical === 0) {
                    setNavigationIndex({
                        vertical: 0,
                        horizontal: 0,
                    })
                }
                break;
            case 'down':
                if (navigationIndex.vertical === 0) {
                    setNavigationIndex(prevState => ({
                        ...prevState,
                        vertical: 1,
                    }))
                }
                break;
            case 'backspace':
                if (navigationIndex.vertical === 0) {
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

    const onChange = (_: number, option: SelectOption | null) => {
        if (!option) {
            return;
        }
        setPreviewItem(option.name);
    }

    return <PageLayout>
        <VerticalSplitLayout>
            <box style={{ flexDirection: "row" }}>
                <BorderBox style={{ height: 0, width: 18, borderColor: theme.peach }}>
                    <SectionTitle text={"[ Cheat Sheets ]"} style={{ bg: theme.peach, fg: theme.base }}/>
                </BorderBox>
                <BorderBox style={{ height: 0, width: 4, borderColor: theme.mauve }}>
                    <text style={{ width: 8, bg: theme.mauve, fg: theme.base }}> v0.0.1 </text>
                </BorderBox>
                <text style={{ fg: theme.overlay1, marginLeft: "auto", top: 1 }}>[vpavelescu]</text>
            </box>
            <VerticalSplitLayout>
                <SelectionSearch
                    handleFilter={handleFilter}
                    focus={navigationIndex.vertical === 0}
                />
                <HorizontalSplitLayout style={{ height: "100%" }}>
                    <SearchResults
                        focus={navigationIndex.vertical === 1 && navigationIndex.horizontal === 0}
                        onSelect={onSelect}
                        onChange={onChange}
                        results={filtered}
                        setNavigationIndex={setNavigationIndex}
                        style={{ width: "30%" }}
                    />
                    <SearchPreview
                        focus={navigationIndex.vertical === 1 && navigationIndex.horizontal === 1}
                        selectedSearchItem={previewItem}
                        setNavigationIndex={setNavigationIndex}
                        style={{ width: "70%" }}
                    />
                </HorizontalSplitLayout>
            </VerticalSplitLayout>
        </VerticalSplitLayout>
    </PageLayout>
}

export default SelectionPage;
