import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import type { Theme } from 'Store/themeContext'

export const emptyCheatSheetStyle = (theme: Theme) => ({
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: '100%'
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
