import { compose } from '@reduxjs/toolkit'
import { FC } from 'react'
import { withStore } from './withStore'
import { withTanStackQuery } from './withTanStackQuery'

export const withProviders = compose<FC>(withTanStackQuery, withStore)
