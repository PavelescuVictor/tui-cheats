import { type PropsWithChildren, Fragment } from 'react';
import type { BoxOptions } from '@opentui/core';
import BorderBox from 'components/BorderBox';

interface VerticalSplitLayoutProps {
    style?: BoxOptions,
    withBorder?: boolean
}

const VerticalSplitLayout = (props: PropsWithChildren<VerticalSplitLayoutProps>) => {
    const { style = {}, children, withBorder = false } = props;

    if (!children || !Array.isArray(children) || !children.length) {
        return null;
    }

    if (children.length !== 2) {
        return <box style={{ flexDirection: "column", ...style }}>
            {children}
        </box>
    }

    const Wrapper = withBorder ? BorderBox : Fragment;

    return <box style={{ flexDirection: "column", ...style }}>
        <Wrapper>
            {children[0]}
        </Wrapper>
        <Wrapper>
            {children[1]}
        </Wrapper>
    </box>
}

export default VerticalSplitLayout;
