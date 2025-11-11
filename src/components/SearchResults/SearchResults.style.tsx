import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import { type Theme } from 'Store/themeContext'

export const selectStyle = (theme: Theme, focus: boolean) => ({
    height: "100%",
    textColor: theme.mauve,
    backgroundColor: "#00000000",
    focusedTextColor: focus ? theme.peach : theme.mauve,
    focusedBackgroundColor: "#00000000",
    selectedTextColor: focus ? theme.base : theme.mauve,
    selectedBackgroundColor: focus ? theme.peach : "#00000000",
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
