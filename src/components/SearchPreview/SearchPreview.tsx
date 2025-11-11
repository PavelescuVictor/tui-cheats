import type { BoxOptions } from '@opentui/core';
import { useRenderer } from '@opentui/react';
import { useCheatSheets } from 'Store/cheatSheetsContext';
import { useTheme } from 'Store/themeContext'
import { BorderBox, CheatSheet, EmptyCheatSheet, SectionTitle, VerticalSplitLayout } from 'components';

interface SearchPreviewProps {
    focus: boolean
    selectedSearchItem: unknown
    setNavigationIndex: (...args: any[]) => void
    style?: BoxOptions
}

const SearchPreview = (props: SearchPreviewProps) => {
    const { style = {}, focus, selectedSearchItem } = props;
    const { theme } = useTheme();
    const { state } = useCheatSheets();

    const cheatSheet = state.cheatSheets.find(cheatsheet => cheatsheet.name === selectedSearchItem);
    const emptyCheahSheet = !cheatSheet || !cheatSheet.hasValues;

    return <BorderBox style={{ ...style, borderColor: focus ? theme.peach : theme.mauve }}>
        <VerticalSplitLayout style={{ height: "100%" }}>
            <SectionTitle text={"[ Preview ]"} style={{ bg: focus ? theme.peach : theme.mauve, fg: theme.base, top: -1, alignSelf: "flex-end" }}/>
            { emptyCheahSheet ? <EmptyCheatSheet/> : <CheatSheet focus={focus} cheatSheet={cheatSheet.data}/> }
        </VerticalSplitLayout>
    </BorderBox>
}

export default SearchPreview;
