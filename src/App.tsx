import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'

/**
 * App Component.
 *
 * @returns JSX.
 */
export const App: FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}
