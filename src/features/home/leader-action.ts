import { useContext } from 'react'

import type { AppThunk } from '../../store'
import { SupabaseContext } from '../../Provider/SupabaseContext'

/**
 * Fetch all posts.
 *
 * @returns void
 */
export const fetchPosts = (): AppThunk => async () => {
    const supabase = useContext(SupabaseContext)
    if (supabase) {
        await supabase.from('leaders').select('*')
    }
}
