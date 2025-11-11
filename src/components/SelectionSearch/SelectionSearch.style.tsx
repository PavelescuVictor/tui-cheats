import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import type { Theme } from 'Store/themeContext';

export const componentStyle = (theme: Theme, focus: boolean) => ({
    height: 3,
    width: "100%",
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 1,
    border: true,
    borderStyle: "heavy",
    borderColor: focus ? theme.peach : theme.mauve,
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const inputStyle = (theme: Theme) => ({
    textColor: theme.peach,
    cursorColor: theme.peach,
    selectedTextColor: theme.peach,
    placeholderColor: theme.surface2,
    focusedTextColor: theme.mauve,
    focusedBackgroundColor: "#00000000",
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
