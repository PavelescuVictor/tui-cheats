import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import { type Theme } from 'Store/themeContext'

export const componentStyle = (theme: Theme) => ({
    width: "100%",
    height: "100%",
    backgroundColor: theme.base,
    alignItems: "center",
    justifyContent: "center"
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const titleStyle = (theme: Theme) => ({
    fg: theme.peach,
    bg: theme.base,
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const contentWrapperStyle = (theme: Theme) => ({
    width: "60%",
    height: "60%",
    backgroundColor: theme.flamingo,
    flexDirection: "column",
    alignItems: "center"
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
