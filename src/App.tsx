import { useContext, useEffect, useRef, useState, type FC } from 'react'

import { BaseLayout } from './layouts'
import { Landing } from './features/home/components/Landing'
import { Board } from './features/home/components/Board'
import { LeaderModal } from './features/home/components/LeaderModal'
import { fetchLeaders } from './features/home/leader.action'
import { useAppDispatch } from './store'
import { SupabaseContext } from './Provider/SupabaseContext'
import { Loader } from './shared/components/ui'

/**
 * App Component.
 *
 * @returns JSX.
 * @throws {Error}
 */
export const App: FC = () => {
    const dispatch = useAppDispatch()
    const isFetching = useRef<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const supabase = useContext(SupabaseContext)

    if (!supabase) {
        throw Error('Supabase not found')
    }
    const initialData = async () => {
        if (!isFetching.current) {
            setIsLoading(true)
            isFetching.current = true
            await dispatch(fetchLeaders(supabase))
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }
    }

    useEffect(() => {
        initialData()
    }, [dispatch, isFetching])

    return (
        <BaseLayout>
            <Loader isLoading={isLoading} />
            {!isLoading && (
                <>
                    <LeaderModal />
                    <Landing />
                    <Board />
                </>
            )}
        </BaseLayout>
    )
}
