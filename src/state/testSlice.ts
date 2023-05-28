import { createSlice } from "@reduxjs/toolkit";
import generateText from "../utils/generateText";
import { RootState } from "../main";

const initialState: TestState = {
    text: "",
    isTestActive: false,
    noOfTestTaken: 0,
    duration: 20,
    totalCharacters: 0,
    totalMistakes: 0,
    score: {
        cpm: 0,
        accuracy: 0,
    },
}

export type TestState = {
    text: string,
    isTestActive: boolean,
    noOfTestTaken: number,
    duration: number,
    totalCharacters: number,
    totalMistakes: number,
    score: Score,
}

export type Score = {
    cpm: number,
    accuracy: number
}

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        initTest: (state) => {
            state.text = generateText(5);
        },
        startTest: (state) => {
            state.isTestActive = true;
        },
        endTest: (state) => {
            const { totalCharacters, duration, totalMistakes } = state;
            state.isTestActive = false;
            state.noOfTestTaken = state.noOfTestTaken + 1;
            const cpm: number = totalCharacters * 60 / duration;
            const accuracy = totalCharacters === 0 ? 0 : (totalCharacters - totalMistakes) * 100 / totalCharacters;
            state.totalCharacters = 0;
            state.totalMistakes = 0;
            state.score = { accuracy, cpm }
        },
        setTotalCharacters: (state) => {
            state.totalCharacters = state.totalCharacters + 1;
        },
        setTotalMistakes: (state) => {
            state.totalMistakes = state.totalMistakes + 1;
        },
        setTestDuration: (state, action) => {
            state.duration = action.payload;
        }
    },

})


export default testSlice.reducer;
export const { startTest, initTest, endTest, setTotalMistakes, setTotalCharacters, setTestDuration } = testSlice.actions;
export const selectIsTestActive = (state: RootState) => state.test.isTestActive;
export const selectText = (state: RootState) => state.test.text;
export const selectScore = (state: RootState) => state.test.score;
export const selectTestDuration = (state: RootState) => state.test.duration;
