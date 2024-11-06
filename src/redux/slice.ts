import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceData {
    name: string;
    positionSecond: string;
    positionThree: string;
    positionFour: string;
    positionFive: string;
}

const initialState: { sliceData: SliceData } = {
    sliceData: {
        name: "",
        positionSecond: "",
        positionThree: "",
        positionFour: "",
        positionFive: ""
    }
}

const slice = createSlice({
    name: "actual",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.sliceData.name = action.payload;
        },
        setPositionSecond: (state, action: PayloadAction<string>) => {
            state.sliceData.positionSecond = action.payload;
        },
        setPositionThree: (state, action: PayloadAction<string>) => {
            state.sliceData.positionThree = action.payload
        },
        setPositionFour: (state, action: PayloadAction<string>) => {
            state.sliceData.positionFour = action.payload
        },
        setPositionFive: (state, action: PayloadAction<string>) => {
            state.sliceData.positionFive = action.payload
        }
    }
})

export const { setName, setPositionSecond, setPositionThree, setPositionFour, setPositionFive } = slice.actions;
export default slice.reducer;