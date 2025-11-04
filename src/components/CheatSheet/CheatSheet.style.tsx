import { type SelectRenderableOptions } from '@opentui/core'
import { type NonStyledProps } from '@opentui/react'
import type { Theme } from 'Store/themeContext'

export const cheatSheetStyle = (theme: Theme) => ({
    rootOptions: {
        backgroundColor: theme.base,
    },
    wrapperOptions: {
        backgroundColor: theme.base,
    },
    viewportOptions: {
        backgroundColor: theme.base,
    },
    contentOptions: {
        backgroundColor: theme.base,
    },
    scrollbarOptions: {
        showArrows: true,
        trackOptions: {
            foregroundColor: theme.mauve,
            backgroundColor: theme.mantle,
        },
        arrowOptions: {
            foregroundColor: theme.mauve
        }
    },
}) as Partial<Omit<SelectRenderableOptions, NonStyledProps>>

export const cheatSheetItemWrapperStyle = {
    flexDirection: "row",
    flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: "auto",
    padding: 1
} as Partial<Omit<SelectRenderableOptions, NonStyledProps>>
