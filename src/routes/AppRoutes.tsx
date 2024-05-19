import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { BaseLayout } from '../layouts'

/**
 * The application routes.
 *
 * @returns JSX.
 */
export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />} />
        </Routes>
    )
}
