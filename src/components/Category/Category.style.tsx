import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import type { Theme } from 'Store/themeContext';

export const categoryWrapperStyle = (theme: Theme) => ({
    alignItems: "flex-start",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    flexGrow: 1,
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

