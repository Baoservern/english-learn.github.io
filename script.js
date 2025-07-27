const quizData = [
    {
        question: "Qual é a forma correta do verbo 'to play' para 'She' no presente simples?",
        options: ["She play", "She plays", "She playing", "She is play"],
        correct: "She plays",
        explanation: "No presente simples, adiciona-se 's' ao verbo para a terceira pessoa singular (he, she, it)."
    },
    {
        question: "Como se forma uma negativa no presente simples?",
        options: ["Sujeito + verbo + not", "Sujeito + do/does + not + verbo", "Sujeito + not + verbo", "Sujeito + is + not + verbo"],
        correct: "Sujeito + do/does + not + verbo",
        explanation: "A negativa no presente simples usa 'do not' (ou 'does not' para he, she, it) + verbo base."
    },
    {
        question: "Qual é a frase correta?",
        options: ["I doesn't like coffee", "I don't like coffee", "I not like coffee", "I am not like coffee"],
        correct: "I don't like coffee",
        explanation: "Usamos 'don't' para 'I' em frases negativas no presente simples."
    },
    {
        question: "Qual é a forma correta de uma pergunta no presente simples?",
        options: ["Do you likes to read?", "Do you like to read?", "You like to read?", "Does you like to read?"],
        correct: "Do you like to read?",
        explanation: "Perguntas no presente simples usam 'Do' + sujeito + verbo base para 'you'."
    },
    {
        question: "O que 'I study every day' expressa?",
        options: ["Uma ação no passado", "Uma ação futura", "Um hábito", "Uma ação acontecendo agora"],
        correct: "Um hábito",
        explanation: "O presente simples é usado para hábitos e rotinas."
    }
];

let currentQuestion = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const q = quizData[currentQuestion];
    if (selected === q.correct) {
        feedbackElement.textContent = `Correto! ${q.explanation}`;
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = `Errado. ${q.explanation}`;
        feedbackElement.style.color = 'red';
    }
    submitButton.disabled = true;
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            submitButton.disabled = false;
            feedbackElement.textContent = '';
        } else {
            questionElement.textContent = 'Parabéns, você completou o quiz!';
            optionsElement.innerHTML = '';
            submitButton.style.display = 'none';
        }
    }, 2000);
}

submitButton.addEventListener('click', () => {
    feedbackElement.textContent = 'Selecione uma opção antes de enviar!';
});

loadQuestion();