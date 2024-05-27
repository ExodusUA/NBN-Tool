const questions = [
    {
        id: 1,
        question: "What is the nbn network’s busiest data day of the year?",
        type: "choose",
        answers: [
            { text: "Christmas day", correct: false },
            { text: "AFL Grand Final", correct: false },
            { text: "Fortnite Update", correct: true },
            { text: "Australian Open Final Match", correct: false }
        ],
        hints: [
            {
                correct: {
                    title: 'Correct!',
                    text: 'Fortnite updates see 3,400,444Tb transferred within 24 hours'
                },
                incorrect: {
                    title: 'Incorrect!',
                    text: 'Fortnite updates see 3,400,444Tb transferred within 24 hours'
                },
            }
        ]
    },

    {
        id: 2,
        question: "How many devices are connected to the average household WI-FI ? ",
        type: "range",
        answers: [

            { text: "6 devices", correct: false },
            { text: "12 devices", correct: false },
            { text: "16 devices", correct: false },
            { text: "22 devices", correct: true }
        ],
        hints: [
            {
                correct: {
                    title: 'Correct!',
                    text: 'Average Aussie household: 22 Wi–Fi squatters!'
                },
                incorrect: {
                    title: 'Incorrect!',
                    text: 'Average Aussie household: 22 Wi–Fi squatters!'
                },
            }
        ]
    },

    {
        id: 3,
        question: "What is the average Fixed Line broadband download speed in Australian homes?",
        type: "range",
        answers: [
            { text: "No idea", correct: false },
            { text: "34Mbps", correct: false },
            { text: "54Mbps", correct: false },
            { text: "64Mbps", correct: false },
            { text: "84Mbps", correct: true }
        ],
        hints: [
            {
                correct: {
                    title: 'Correct!',
                    text: 'Aussie homes: zooming at 84 Mbps!'
                },
                incorrect: {
                    title: 'Incorrect!',
                    text: 'Aussie homes: zooming at 84 Mbps!'
                },
            }
        ]
    },

    {
        id: 4,
        question: "With 1.4M businesses connected to nbn, how many are on a residential plan?",
        type: "range",
        answers: [
            { text: "No idea", correct: false },
            { text: ".5 million", correct: false },
            { text: "1 million", correct: true },
            { text: "1.2 million", correct: false },
            { text: "1.3 million", correct: false }
        ],
        hints: [
            {
                correct: {
                    title: 'Correct!',
                    text: '1.3 million businesses living life in the slow lane'
                },
                incorrect: {
                    title: 'Incorrect!',
                    text: '1.3 million businesses living life in the slow lane'
                },
            }
        ]
    },

    {
        id: 5,
        question: "What is the top download speed available at your workplace?",

        type: "range",
        answers: [
            { text: "Not sure", correct: false },
            { text: "Below 100Mbps", correct: true },
            { text: "Above 100Mbps", correct: true },
            { text: "Above 500Mbps", correct: true },
            { text: "Above 1Gbps", correct: true }
        ],
        hints: [
            {
                correct: {
                    title: 'Thanks for your response',
                    text: 'Talk to the nbn team about what speeds are possible in your area'
                },
                incorrect: {
                    title: 'Thanks for your response',
                    text: 'Talk to the nbn team about what speeds are possible in your area'
                },
            }
        ]
    },

    {
        id: 6,
        question: "What upload speed is available via your nbn powered plan at your workplace?",
        type: "range",
        answers: [
            { text: "Not sure", correct: false },
            { text: "Below 50Mbps", correct: true },
            { text: "Above 50Mbps", correct: true },
            { text: "Above 100Mbps", correct: true },
            { text: "Above 500Mbps", correct: true }
        ],
        hints: [
            {
                correct: {
                    title: 'Thanks for your response',
                    text: 'Talk to the nbn team about what speeds are possible in your area'
                },
                incorrect: {
                    title: 'Thanks for your response',
                    text: 'Talk to the nbn team about what speeds are possible in your area'
                },
            }
        ]
    },
]

export default questions;