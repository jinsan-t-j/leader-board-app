import type { FC, ReactNode } from 'react'
import { createClient } from '@supabase/supabase-js'

import { SupabaseContext } from './SupabaseContext'

interface ISupabaseProvider {
    children?: ReactNode
}

/**
 * The supabase client.
 */
const supabaseClient = createClient(
    import.meta.env.VITE_SUPABASE_PROJECT_URL,
    import.meta.env.VITE_SUPABASE_API_KEY,
)

/**
 * The supabase provider for the application.
 *
 * @returns The Supabase context provider.
 */
export const SupabaseProvider: FC<ISupabaseProvider> = ({ children }) => {
    return <SupabaseContext.Provider value={supabaseClient}> {children} </SupabaseContext.Provider>
}
