const questions = [
    {
        id: 1,
        question: "What is the nbn network’s busiest data day of the year?",
        type: "choose",
        answers: [
            { text: "Christmas", correct: false },
            { text: "AFL Grand Finals", correct: false },
            { text: "Fortnite Update", correct: true },
            { text: "Australian Open Final Match", correct: false }
        ]
    },

    {
        id: 2,
        question: "On average, how many devices are connected to the average household WIFI ?",
        type: "range",
        answers: [
            
            { text: "6 devices", correct: false },
            { text: "12 devices", correct: false },
            { text: "16 devices", correct: false },
            { text: "22 devices", correct: true }
        ]
    },

    {
        id: 3,
        question: "What is the average fixed broadband download speed in Australian homes?",
        type: "range",
        answers: [
            { text: "No idea", correct: false },
            { text: "34mbps", correct: false },
            { text: "54mbps", correct: false },
            { text: "64mbps", correct: false },
            { text: "84mbps", correct: true }
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
        ]
    },

    {
        id: 5,
        question: "What is the DOWNLOAD speed in your workplace:",
        type: "range",
        answers: [
            { text: "Not sure", correct: false },
            { text: "Below 100Mbps", correct: false },
            { text: "Above 100Mbps", correct: true },
            { text: "Above 500Mbps", correct: false },
            { text: "Above 1Gbps", correct: false }
        ]
    },

    {
        id: 5,
        question: "What is the UPLOAD speed in your workplace:",
        type: "range",
        answers: [
            { text: "Not sure", correct: false },
            { text: "Below 50Mbps", correct: false },
            { text: "Above 50Mbps", correct: true },
            { text: "Above 100Mbps", correct: false },
            { text: "Above 500Mbps", correct: false }
        ]
    },
]

export default questions;