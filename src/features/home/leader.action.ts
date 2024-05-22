import type { SupabaseClient } from '@supabase/supabase-js'

import type { AppThunk } from '../../store'

import { setLeaders } from './leader.slice'
import type { ILeader } from './entity/Leader'

/**
 * Fetch all posts.
 *
 * @param supabase - The supabase client.
 * @returns void
 */
export const fetchLeaders =
    (supabase: SupabaseClient): AppThunk =>
    async (dispatch) => {
        const { data } = await supabase.from('leaders').select('*')
        if (data) {
            const leaders: ILeader[] = data
                ?.toSorted((a, b) => b?.target_percentage - a.target_percentage)
                ?.map((leader: Omit<ILeader, 'target_percentage'>) => {
                    return {
                        ...leader,
                        target_percentage: (leader.achieved_target / leader.expected_target) * 100,
                    }
                })
            dispatch(setLeaders(leaders))
        }
    }
