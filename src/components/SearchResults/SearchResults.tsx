import { useMemo, useRef } from 'react';
import { useTheme } from 'Store/themeContext';
import { useKeyboard } from '@opentui/react';
import { type BoxOptions, type KeyEvent, type SelectOption } from "@opentui/core"
import { selectStyle } from './SearchResults.style'
import type { CheatSheet } from 'Store/cheatSheetsContext';
import VerticalSplitLayout from 'components/VerticalSplitLayout';
import SectionTitle from 'components/SectionTitle';
import BorderBox from 'components/BorderBox';

interface SearchResultsProps {
    focus: boolean,
    results: CheatSheet[]
    onSelect: (...args: any[]) => void
    onChange: (...args: any[]) => void
    setNavigationIndex: (...args: any[]) => void
    style?: BoxOptions
}

const SearchResults = (props: SearchResultsProps) => {
    const { focus, results, onSelect, onChange, setNavigationIndex, style = {} } = props;
    const { theme } = useTheme();
    const verticalIndexRef = useRef(0);

    const options = useMemo<SelectOption[]>(() => results.map(cheatSheet => ({
        name: cheatSheet.name,
        value: cheatSheet.name,
        description: "",
    })), [results])

    useKeyboard((key: KeyEvent) => {
        if (!focus) {
            return;
        }
        if (typeof key.name !== "string") {
            return;
        }

        switch (key.name){
            case 'up':
                if (verticalIndexRef.current === 0) {
                    setNavigationIndex({
                        horizontal: 0,
                        vertical: 0
                    });
                    return;
                }
                verticalIndexRef.current = verticalIndexRef.current - 1;
                break;
            case 'down':
                if (verticalIndexRef.current + 1 < results.length) {
                    verticalIndexRef.current = Math.min(results.length, verticalIndexRef.current + 1);
                }
                break;
            default:
                break;
        }
    })

    return <BorderBox style={{ borderColor: focus ? theme.peach : theme.mauve, ...style }}>
        <VerticalSplitLayout>
            <SectionTitle text={"[ File Select ]"} style={{ bg: focus ? theme.peach : theme.mauve, fg: theme.base, top: -1, left: 1 }}/>
            <select
                style={selectStyle(theme, focus)}
                options={options}
                focused={focus}
                onSelect={onSelect}
                showDescription={false}
                showScrollIndicator={true}
                onChange={onChange}
            />
        </VerticalSplitLayout>
    </BorderBox>
}

export default SearchResults;
