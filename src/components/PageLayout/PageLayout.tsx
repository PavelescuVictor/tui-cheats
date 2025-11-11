import type { BoxOptions } from '@opentui/core';
import { type PropsWithChildren } from 'react';

interface PageLayoutProps {
    style?: BoxOptions
}

const PageLayout = (props: PropsWithChildren<PageLayoutProps>) => {
    const { style = {}, children } = props;

    return <box style={{
        width: "100%",
        height: "100%",
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop: 1,
        paddingBottom: 1,
        ...style
    }}>
        {children}
    </box>
}

export default PageLayout;
