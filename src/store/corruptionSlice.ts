import { createSlice } from "@reduxjs/toolkit";
import { Corruption } from "../shared/types";
import { CORRUPTION_CRITICAL_VALUE, CORRUPTION_MAX_VALUE, CORRUPTION_STABLE_VALUE, CORRUPTION_UNSTABLE_VALUE, NO_CORRUPTION_VALUE } from "../shared/consts";
import { CorruptionStage } from "../shared/enums/corruptionStage";


const getCorruptionStage = (corruptionValue: number): CorruptionStage => {
    return corruptionValue < CORRUPTION_STABLE_VALUE ? CorruptionStage.Stable :
        corruptionValue < CORRUPTION_UNSTABLE_VALUE ? CorruptionStage.Unstable :
        corruptionValue < CORRUPTION_CRITICAL_VALUE ? CorruptionStage.Critical :
        CorruptionStage.Collapse;
}

const corruptionSlice = createSlice({
    name: 'corruption',
    initialState: {
        value: NO_CORRUPTION_VALUE,
        stage: CorruptionStage.Stable
    },
    reducers: {
        increase: (state, action) => {
            state.value = Math.min(state.value + action.payload, CORRUPTION_MAX_VALUE)
            state.stage = getCorruptionStage(state.value)
        },
        reset: (state) => {
            state.value = NO_CORRUPTION_VALUE;
            state.stage = CorruptionStage.Stable;
        }
    }
})


export const { increase, reset } = corruptionSlice.actions;
export default corruptionSlice.reducer;












