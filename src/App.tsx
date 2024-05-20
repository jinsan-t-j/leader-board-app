import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { SupabaseProvider } from './Provider/SupabaseProvider'

/**
 * App Component.
 *
 * @returns JSX.
 */
export const App: FC = () => {
    return (
        <BrowserRouter>
            <SupabaseProvider>
                <AppRoutes />
            </SupabaseProvider>
        </BrowserRouter>
    )
}
