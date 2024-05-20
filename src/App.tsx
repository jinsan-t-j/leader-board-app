import type { FC } from 'react'

import { SupabaseProvider } from './Provider/SupabaseProvider'
import { Home } from './features/home'
import { BaseLayout } from './layouts'

/**
 * App Component.
 *
 * @returns JSX.
 */
export const App: FC = () => {
    return (
        <SupabaseProvider>
            <BaseLayout>
                <Home />
            </BaseLayout>
        </SupabaseProvider>
    )
}
