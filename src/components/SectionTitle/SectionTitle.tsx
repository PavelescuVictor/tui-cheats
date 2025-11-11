import { Fragment } from 'react';
import { type TextOptions } from '@opentui/core';
import { BorderBox } from 'components';
import { useTheme } from 'Store/themeContext';

interface SectionTitleProps {
    text: string,
    style?: TextOptions
    withBorder?: boolean
}

const SectionTitle = (props: SectionTitleProps) => {
    const { style = {}, text, withBorder = false } = props;

    const Wrapper = withBorder ? BorderBox : Fragment;

    return <Wrapper>
        <text style={{ ...style }}>{text}</text>
    </Wrapper>
}

export default SectionTitle;
