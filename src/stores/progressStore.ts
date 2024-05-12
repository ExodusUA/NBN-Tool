import { create } from 'zustand'
import questions from '@/data/questions'

type Store = {
    currentQuestion: Question,
    answers: boolean[],
    addAnswer: (answer: boolean) => void,
    nextQuestion: () => void
}

export type Question = {
    id: number,
    question: string,
    type: string,
    answers: { text: string, correct: boolean }[]
}

const progressStore = create<Store>()((set) => ({
    currentQuestion: questions[0],
    answers: [],
    nextQuestion: () => set((state) => ({ currentQuestion: questions[state.currentQuestion.id] })),
    addAnswer: (answer: boolean) => set((state) => ({ answers: [...state.answers, answer] }))

}))
export default progressStore