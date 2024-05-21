import type { FC } from 'react'

import { SupabaseProvider } from './Provider/SupabaseProvider'
import { BaseLayout } from './layouts'
import { Landing } from './features/home/components/Landing'
import { Board } from './features/home/components/Board'
import { LeaderModal } from './features/home/components/LeaderModal'

/**
 * App Component.
 *
 * @returns JSX.
 */
export const App: FC = () => {
    return (
        <SupabaseProvider>
            <BaseLayout>
                <Landing />
                <Board />
                <LeaderModal />
            </BaseLayout>
        </SupabaseProvider>
    )
}
