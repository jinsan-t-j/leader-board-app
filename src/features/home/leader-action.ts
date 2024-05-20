import { size } from 'lodash'
import { useContext } from 'react'

import type { AppThunk } from '../../store'
import { SupabaseContext } from '../../Provider/SupabaseContext'

import { setLeaders } from './leader-slice'
import type { ILeader } from './entity/Leader'

/**
 * Fetch all posts.
 *
 * @returns void
 */
// export const fetchPosts = (): AppThunk => async (dispatch) => {
//     const supabase = useContext(SupabaseContext)
//     if (supabase) {
//         const { data: leaders, error } = await supabase.from('leaders').select('*')
//         if (leaders) {
//             const posts = dispatch<ILeader[]>(leaders)
//         }
//         if (size(posts)) {
//             await dispatch(setLeaders(posts))
//         }
//     }
// }
