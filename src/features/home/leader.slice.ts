import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ILeader } from './entity/Leader'

const initialState: ILeader[] = []

const leaderSlice = createSlice({
    name: 'leaders',
    initialState,
    reducers: {
        setLeaders: (state, action: PayloadAction<ILeader[]>) => {
            state.push(...action.payload)
        },
    },
})

export const { setLeaders } = leaderSlice.actions

export default leaderSlice.reducer
