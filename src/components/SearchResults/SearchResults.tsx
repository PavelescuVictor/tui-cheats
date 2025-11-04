import { useMemo, useRef } from 'react';
import { useTheme } from 'Store/themeContext';
import { useKeyboard } from '@opentui/react';
import { type KeyEvent, type SelectOption } from "@opentui/core"
import { titleWrapperStyle, titleStyle, selectWrapperStyle, selectStyle, componentStyle } from './SearchResults.style'
import type { CheatSheet } from 'Store/cheatSheetsContext';

interface SearchResultsProps {
    focus: boolean,
    results: CheatSheet[]
    onSelect: (...args: any[]) => void
    setSelectionPageIndex: (...args: any[]) => void
}

const SearchResults = (props: SearchResultsProps) => {
    const { focus, results, onSelect, setSelectionPageIndex } = props;
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
                    setSelectionPageIndex(0);
                    return;
                }
                verticalIndexRef.current = verticalIndexRef.current - 1;
                break;
            case 'down':
                if (verticalIndexRef.current + 1 <= results.length) {
                    verticalIndexRef.current = Math.min(results.length, verticalIndexRef.current + 1);
                }
                break;
            default:
                break;
        }
    })

    return <box style={componentStyle(theme)}>
        <box style={titleWrapperStyle(theme)}>
            <text style={titleStyle(theme)}>
                [ Please select a value... ]
            </text>
        </box>
        <box style={selectWrapperStyle(theme)}>
            <select
                style={selectStyle(theme)}
                options={options}
                focused={focus}
                onSelect={onSelect}
            />
        </box>
    </box>
}

export default SearchResults;
