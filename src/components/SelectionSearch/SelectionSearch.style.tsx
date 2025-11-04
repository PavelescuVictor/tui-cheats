import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import type { Theme } from 'Store/themeContext';

export const componentStyle = (theme: Theme) => ({
    height: 3,
    width: "100%",
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 1,
    backgroundColor: theme.base,
    borderColor: theme.mauve,
    border: true,
    borderStyle: "heavy"
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const inputStyle = (theme: Theme) => ({
    textColor: theme.mauve,
    cursorColor: theme.mauve,
    placeholderColor: theme.surface2,
    backgroundColor: theme.base,
    focusedTextColor: theme.mauve,
    focusedBackgroundColor: theme.base
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
