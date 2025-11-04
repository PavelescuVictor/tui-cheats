import { useState } from 'react';
import { useTheme } from 'Store/themeContext';
import { componentStyle, inputStyle, } from './SelectionSearch.style';

interface SelectionSearchProps {
    focus: boolean
    handleFilter: (...args: any[]) => any;
}

const DEFAULT_DEBOUNCE_TIME = 1000 // time in ms
const debounced = (func: (...args: any[]) => {}) => {
    let timeoutId: NodeJS.Timeout | null = null;

    return (...args: any[]) => {
        console.log(args);
        if (timeoutId !== null) {
            clearTimeout();
            timeoutId = null;
        }

        timeoutId = setTimeout(() => {
            func(args);
        }, DEFAULT_DEBOUNCE_TIME);
    }
}

const SelectionSearch = (props: SelectionSearchProps) => {
    const { handleFilter, focus } = props;

    const { theme } = useTheme();

    const [inputValue, setInputValue] = useState<string>("");
    const debouncedHandleFilter = debounced(handleFilter);

    const onInput = (value: string) => {
        setInputValue(value);
        debouncedHandleFilter(value);
    }

    return <box style={componentStyle(theme)}>
        <input
            style={inputStyle(theme)}
            value={inputValue}
            placeholder="⌨ Type to search..."
            focused={focus}
            onInput={onInput}
        />
    </box>
}

export default SelectionSearch;
