import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import { type Theme } from 'Store/themeContext'

export const componentStyle = (theme: Theme) => ({
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.base,
    flexDirection: "column",
    alignItems: "center",
    borderColor: theme.mauve,
    border: true,
    borderStyle: "heavy"
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const titleWrapperStyle = (theme: Theme) => ({
    width: "100%",
    height: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 2,
    backgroundColor: theme.base,
    alignItems: "flex-start",
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const titleStyle = (theme: Theme) => ({
    fg: theme.mauve,
    bg: theme.base
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const selectStyle = (theme: Theme) => ({
    flexGrow: 1,
    backgroundColor: theme.base,
    textColor: theme.mauve,
    selectedBackgroundColor: theme.mauve,
    selectedTextColor: theme.base,
    focusedBackgroundColor: theme.base,
    focusedTextColor: theme.mauve,
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const selectWrapperStyle = (theme: Theme) => ({
    width: "100%",
    flexGrow: 1,
    backgroundColor: theme.base,
    showDescription: true,
    showScrollIndicator: true,
    padding: 1
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
