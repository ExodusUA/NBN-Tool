import { create } from 'zustand'
import questions from '@/data/questions'

type Store = {
    currentQuestion: Question,
    answers: boolean[],
    nextQuestion: (correct: boolean) => void,
    restart: () => void
}

export type Question = {
    id: number,
    question: string,
    type: string,
    answers: { text: string, correct: boolean }[],
    hints: Hints[]
}

export type Hints = {
    correct: { title: string, text: string },
    incorrect: { title: string, text: string }
}

const progressStore = create<Store>()((set) => ({
    currentQuestion: questions[0],
    answers: [],
    nextQuestion: (correct) => set((state) => ({ currentQuestion: questions[state.currentQuestion.id], answers: [...state.answers, correct] })),
    restart: () => set({ currentQuestion: questions[0], answers: [] })
}))

export default progressStore