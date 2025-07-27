// ==========================================
// NAVIGATION SYSTEM
// ==========================================

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Section navigation
function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Close mobile menu
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Handle nav link clicks
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                navigateToSection(sectionId);
            }
        });
    });
});

// ==========================================
// GRAMMAR TOPICS DATA & SYSTEM
// ==========================================

const grammarTopics = {
    'present-simple': {
        title: 'Present Simple',
        icon: 'fas fa-clock',
        description: 'Aprenda a usar o presente simples para hábitos, fatos e rotinas.',
        content: {
            explanation: `
                <h3>🔍 O que é o Present Simple?</h3>
                <p>O <strong>Present Simple</strong> é usado para falar sobre:</p>
                <ul>
                    <li><strong>Hábitos e rotinas:</strong> I wake up at 7 AM every day.</li>
                    <li><strong>Fatos gerais:</strong> The sun rises in the east.</li>
                    <li><strong>Estados permanentes:</strong> She lives in São Paulo.</li>
                    <li><strong>Horários:</strong> The train leaves at 8:30.</li>
                </ul>
            `,
            rules: `
                <h3>📋 Regras de Formação</h3>
                <div class="grammar-rule">
                    <h4>Forma Afirmativa</h4>
                    <p><strong>Estrutura:</strong> Sujeito + Verbo (base) + Complemento</p>
                    <div class="examples">
                        <p><span class="example">✅ I work at a bank.</span></p>
                        <p><span class="example">✅ She works at a bank.</span> (adiciona -s para he/she/it)</p>
                    </div>
                </div>
                
                <div class="grammar-rule">
                    <h4>Forma Negativa</h4>
                    <p><strong>Estrutura:</strong> Sujeito + don't/doesn't + Verbo (base)</p>
                    <div class="examples">
                        <p><span class="example">✅ I don't like coffee.</span></p>
                        <p><span class="example">✅ She doesn't like coffee.</span></p>
                    </div>
                </div>
                
                <div class="grammar-rule">
                    <h4>Forma Interrogativa</h4>
                    <p><strong>Estrutura:</strong> Do/Does + Sujeito + Verbo (base)?</p>
                    <div class="examples">
                        <p><span class="example">✅ Do you speak English?</span></p>
                        <p><span class="example">✅ Does she speak English?</span></p>
                    </div>
                </div>
            `,
            examples: `
                <h3>💡 Exemplos Práticos</h3>
                <div class="examples-grid">
                    <div class="example-card positive">
                        <h4>Afirmativas</h4>
                        <ul>
                            <li>I study English every day.</li>
                            <li>He watches TV in the evening.</li>
                            <li>We live in Brazil.</li>
                            <li>The store opens at 9 AM.</li>
                        </ul>
                    </div>
                    <div class="example-card negative">
                        <h4>Negativas</h4>
                        <ul>
                            <li>I don't smoke.</li>
                            <li>She doesn't eat meat.</li>
                            <li>They don't work on Sundays.</li>
                            <li>It doesn't rain much here.</li>
                        </ul>
                    </div>
                    <div class="example-card question">
                        <h4>Perguntas</h4>
                        <ul>
                            <li>Do you like pizza?</li>
                            <li>Does he play soccer?</li>
                            <li>Do they speak Portuguese?</li>
                            <li>Does it work well?</li>
                        </ul>
                    </div>
                </div>
            `
        },
        quiz: [
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
        ]
    },
    'present-continuous': {
        title: 'Present Continuous',
        icon: 'fas fa-play',
        description: 'Aprenda a usar o presente contínuo para ações em progresso.',
        content: {
            explanation: `
                <h3>🔍 O que é o Present Continuous?</h3>
                <p>O <strong>Present Continuous</strong> é usado para falar sobre:</p>
                <ul>
                    <li><strong>Ações acontecendo agora:</strong> I am studying right now.</li>
                    <li><strong>Ações temporárias:</strong> She is working in London this month.</li>
                    <li><strong>Planos futuros:</strong> We are meeting tomorrow.</li>
                    <li><strong>Mudanças em progresso:</strong> The weather is getting colder.</li>
                </ul>
            `,
            rules: `
                <h3>📋 Regras de Formação</h3>
                <div class="grammar-rule">
                    <h4>Forma Afirmativa</h4>
                    <p><strong>Estrutura:</strong> Sujeito + am/is/are + Verbo(-ing)</p>
                    <div class="examples">
                        <p><span class="example">✅ I am working.</span></p>
                        <p><span class="example">✅ She is reading a book.</span></p>
                        <p><span class="example">✅ They are playing soccer.</span></p>
                    </div>
                </div>
                
                <div class="grammar-rule">
                    <h4>Forma Negativa</h4>
                    <p><strong>Estrutura:</strong> Sujeito + am/is/are + not + Verbo(-ing)</p>
                    <div class="examples">
                        <p><span class="example">✅ I am not working.</span></p>
                        <p><span class="example">✅ She isn't reading.</span></p>
                        <p><span class="example">✅ They aren't playing.</span></p>
                    </div>
                </div>
                
                <div class="grammar-rule">
                    <h4>Forma Interrogativa</h4>
                    <p><strong>Estrutura:</strong> Am/Is/Are + Sujeito + Verbo(-ing)?</p>
                    <div class="examples">
                        <p><span class="example">✅ Are you working?</span></p>
                        <p><span class="example">✅ Is she reading?</span></p>
                    </div>
                </div>
            `,
            examples: `
                <h3>💡 Exemplos Práticos</h3>
                <div class="examples-grid">
                    <div class="example-card positive">
                        <h4>Agora</h4>
                        <ul>
                            <li>I am typing on my computer.</li>
                            <li>She is cooking dinner.</li>
                            <li>It is raining outside.</li>
                        </ul>
                    </div>
                    <div class="example-card negative">
                        <h4>Temporário</h4>
                        <ul>
                            <li>He is living with friends this year.</li>
                            <li>I am learning Portuguese.</li>
                            <li>She is working part-time.</li>
                        </ul>
                    </div>
                    <div class="example-card question">
                        <h4>Futuro Planejado</h4>
                        <ul>
                            <li>We are meeting at 3 PM.</li>
                            <li>I am flying to Rio tomorrow.</li>
                            <li>They are having a party tonight.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        quiz: [
            {
                question: "Qual é a estrutura correta do Present Continuous?",
                options: ["Sujeito + verbo(-ing)", "Sujeito + am/is/are + verbo(-ing)", "Sujeito + do/does + verbo(-ing)", "Sujeito + verbo + ing"],
                correct: "Sujeito + am/is/are + verbo(-ing)",
                explanation: "O Present Continuous sempre usa am/is/are + verbo com -ing."
            },
            {
                question: "Escolha a frase correta:",
                options: ["She working now", "She is working now", "She does working now", "She work now"],
                correct: "She is working now",
                explanation: "Precisamos do verbo 'is' antes de 'working' no Present Continuous."
            },
            {
                question: "Quando usamos o Present Continuous?",
                options: ["Para hábitos", "Para ações acontecendo agora", "Para fatos gerais", "Para ações passadas"],
                correct: "Para ações acontecendo agora",
                explanation: "O Present Continuous é usado principalmente para ações em progresso no momento da fala."
            },
            {
                question: "Qual é a forma negativa correta?",
                options: ["I am not working", "I not working", "I don't working", "I am not work"],
                correct: "I am not working",
                explanation: "A negativa do Present Continuous usa am/is/are + not + verbo(-ing)."
            },
            {
                question: "Complete: 'They ___ dinner right now.'",
                options: ["are eating", "eat", "eating", "is eating"],
                correct: "are eating",
                explanation: "Para 'they' usamos 'are' + verbo com -ing."
            }
        ]
    },
    'past-simple': {
        title: 'Past Simple',
        icon: 'fas fa-history',
        description: 'Aprenda a falar sobre ações concluídas no passado.',
        content: {
            explanation: `
                <h3>🔍 O que é o Past Simple?</h3>
                <p>O <strong>Past Simple</strong> é usado para falar sobre:</p>
                <ul>
                    <li><strong>Ações concluídas no passado:</strong> I went to the movies yesterday.</li>
                    <li><strong>Hábitos passados:</strong> When I was young, I played soccer every day.</li>
                    <li><strong>Sequência de eventos:</strong> I woke up, had breakfast, and went to work.</li>
                </ul>
            `,
            rules: `
                <h3>📋 Regras de Formação</h3>
                <div class="grammar-rule">
                    <h4>Verbos Regulares</h4>
                    <p><strong>Forma Afirmativa:</strong> Verbo + -ed</p>
                    <div class="examples">
                        <p><span class="example">✅ I walked to school.</span></p>
                        <p><span class="example">✅ She studied all night.</span></p>
                    </div>
                </div>
                
                <div class="grammar-rule">
                    <h4>Verbos Irregulares</h4>
                    <p>Têm formas especiais no passado</p>
                    <div class="examples">
                        <p><span class="example">✅ I went (go → went)</span></p>
                        <p><span class="example">✅ She ate (eat → ate)</span></p>
                        <p><span class="example">✅ They came (come → came)</span></p>
                    </div>
                </div>
                
                <div class="grammar-rule">
                    <h4>Negativa e Interrogativa</h4>
                    <p>Usamos <strong>did/didn't</strong> + verbo base</p>
                    <div class="examples">
                        <p><span class="example">✅ I didn't go to the party.</span></p>
                        <p><span class="example">✅ Did you see the movie?</span></p>
                    </div>
                </div>
            `
        }
    },
    'future-forms': {
        title: 'Future Forms',
        icon: 'fas fa-forward',
        description: 'Aprenda as diferentes formas de expressar o futuro em inglês.',
        content: {
            explanation: `
                <h3>🔍 Formas de Futuro em Inglês</h3>
                <p>Existem várias formas de expressar o futuro:</p>
                <ul>
                    <li><strong>Will:</strong> Decisões espontâneas, previsões</li>
                    <li><strong>Going to:</strong> Planos, intenções, previsões com evidência</li>
                    <li><strong>Present Continuous:</strong> Planos definidos</li>
                </ul>
            `
        }
    }
};

// ==========================================
// VOCABULARY DATA
// ==========================================

const vocabularyData = {
    family: {
        title: 'Família',
        icon: 'fas fa-users',
        words: [
            { english: 'Mother', portuguese: 'Mãe', example: 'My mother is a teacher.' },
            { english: 'Father', portuguese: 'Pai', example: 'My father works in a bank.' },
            { english: 'Sister', portuguese: 'Irmã', example: 'I have one sister.' },
            { english: 'Brother', portuguese: 'Irmão', example: 'My brother is older than me.' },
            { english: 'Grandmother', portuguese: 'Avó', example: 'My grandmother makes great cookies.' },
            { english: 'Grandfather', portuguese: 'Avô', example: 'My grandfather loves fishing.' },
            { english: 'Aunt', portuguese: 'Tia', example: 'My aunt lives in Rio.' },
            { english: 'Uncle', portuguese: 'Tio', example: 'My uncle is very funny.' },
            { english: 'Cousin', portuguese: 'Primo/Prima', example: 'My cousin is my best friend.' },
            { english: 'Daughter', portuguese: 'Filha', example: 'She has two daughters.' },
            { english: 'Son', portuguese: 'Filho', example: 'Their son is very smart.' },
            { english: 'Wife', portuguese: 'Esposa', example: 'His wife is a doctor.' },
            { english: 'Husband', portuguese: 'Marido', example: 'Her husband cooks very well.' },
            { english: 'Parents', portuguese: 'Pais', example: 'My parents are from Brazil.' },
            { english: 'Children', portuguese: 'Filhos', example: 'They have three children.' }
        ]
    },
    professions: {
        title: 'Profissões',
        icon: 'fas fa-briefcase',
        words: [
            { english: 'Teacher', portuguese: 'Professor(a)', example: 'She is a teacher at the local school.' },
            { english: 'Doctor', portuguese: 'Médico(a)', example: 'The doctor examined the patient.' },
            { english: 'Engineer', portuguese: 'Engenheiro(a)', example: 'He works as a software engineer.' },
            { english: 'Lawyer', portuguese: 'Advogado(a)', example: 'The lawyer defended his client.' },
            { english: 'Nurse', portuguese: 'Enfermeiro(a)', example: 'The nurse took care of the patients.' },
            { english: 'Police Officer', portuguese: 'Policial', example: 'The police officer helped the tourists.' },
            { english: 'Chef', portuguese: 'Chef/Cozinheiro', example: 'The chef prepared a delicious meal.' },
            { english: 'Artist', portuguese: 'Artista', example: 'She is a talented artist.' }
        ]
    },
    food: {
        title: 'Comida',
        icon: 'fas fa-utensils',
        words: [
            { english: 'Apple', portuguese: 'Maçã', example: 'I eat an apple every day.' },
            { english: 'Banana', portuguese: 'Banana', example: 'Bananas are rich in potassium.' },
            { english: 'Bread', portuguese: 'Pão', example: 'I buy fresh bread in the morning.' },
            { english: 'Rice', portuguese: 'Arroz', example: 'Rice is a staple food in Brazil.' },
            { english: 'Chicken', portuguese: 'Frango', example: 'We had grilled chicken for dinner.' },
            { english: 'Fish', portuguese: 'Peixe', example: 'Fish is good for your health.' }
        ]
    }
};

// ==========================================
// TOPIC NAVIGATION SYSTEM
// ==========================================

function showTopic(topicId) {
    const topicsGrid = document.querySelector('.topics-grid');
    const topicContent = document.getElementById('topic-content');
    const topicDetails = document.getElementById('topic-details');
    
    if (!grammarTopics[topicId]) {
        console.error('Topic not found:', topicId);
        return;
    }
    
    const topic = grammarTopics[topicId];
    
    // Hide topics grid and show content
    topicsGrid.style.display = 'none';
    topicContent.classList.remove('hidden');
    
    // Generate topic content
    let contentHTML = `
        <div class="topic-header">
            <div class="topic-title">
                <i class="${topic.icon}"></i>
                <h2>${topic.title}</h2>
            </div>
            <p class="topic-description">${topic.description}</p>
        </div>
        
        <div class="topic-tabs">
            <button class="tab-button active" onclick="showTab('explanation')">Explicação</button>
            <button class="tab-button" onclick="showTab('rules')">Regras</button>
            <button class="tab-button" onclick="showTab('examples')">Exemplos</button>
            <button class="tab-button" onclick="showTab('quiz')">Quiz</button>
        </div>
        
        <div class="tab-content">
            <div id="explanation-tab" class="tab-panel active">
                ${topic.content.explanation || '<p>Conteúdo em desenvolvimento...</p>'}
            </div>
            <div id="rules-tab" class="tab-panel">
                ${topic.content.rules || '<p>Regras em desenvolvimento...</p>'}
            </div>
            <div id="examples-tab" class="tab-panel">
                ${topic.content.examples || '<p>Exemplos em desenvolvimento...</p>'}
            </div>
            <div id="quiz-tab" class="tab-panel">
                <div id="topic-quiz-container">
                    ${generateTopicQuiz(topic.quiz)}
                </div>
            </div>
        </div>
    `;
    
    topicDetails.innerHTML = contentHTML;
    
    // Initialize quiz if available
    if (topic.quiz) {
        initializeTopicQuiz(topic.quiz);
    }
}

function showTab(tabName) {
    // Remove active class from all tabs and panels
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding panel
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function showTopicsGrid() {
    const topicsGrid = document.querySelector('.topics-grid');
    const topicContent = document.getElementById('topic-content');
    
    topicsGrid.style.display = 'grid';
    topicContent.classList.add('hidden');
}

function generateTopicQuiz(questions) {
    if (!questions || questions.length === 0) {
        return '<p>Quiz em desenvolvimento...</p>';
    }
    
    return `
        <div class="quiz-container">
            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" id="quiz-progress-fill"></div>
                </div>
                <span id="quiz-progress-text">Pergunta 1 de ${questions.length}</span>
            </div>
            
            <div class="quiz-content">
                <h3 id="quiz-question"></h3>
                <div id="quiz-options" class="quiz-options"></div>
                <div id="quiz-feedback" class="quiz-feedback"></div>
                <button id="quiz-next" class="quiz-next-btn hidden">Próxima Pergunta</button>
            </div>
            
            <div id="quiz-results" class="quiz-results hidden">
                <h3>Parabéns! Quiz Concluído!</h3>
                <div class="results-stats">
                    <div class="stat">
                        <span class="stat-value" id="correct-answers">0</span>
                        <span class="stat-label">Corretas</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value" id="total-questions">0</span>
                        <span class="stat-label">Total</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value" id="score-percentage">0%</span>
                        <span class="stat-label">Pontuação</span>
                    </div>
                </div>
                <button onclick="restartQuiz()" class="restart-quiz-btn">Refazer Quiz</button>
            </div>
        </div>
    `;
}

// ==========================================
// QUIZ SYSTEM
// ==========================================

let currentQuiz = {
    questions: [],
    currentQuestion: 0,
    correctAnswers: 0,
    answered: false
};

function initializeTopicQuiz(questions) {
    currentQuiz = {
        questions: questions,
        currentQuestion: 0,
        correctAnswers: 0,
        answered: false
    };
    
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const feedbackElement = document.getElementById('quiz-feedback');
    const nextButton = document.getElementById('quiz-next');
    const progressFill = document.getElementById('quiz-progress-fill');
    const progressText = document.getElementById('quiz-progress-text');
    
    if (!question) return;
    
    // Update progress
    const progress = ((currentQuiz.currentQuestion + 1) / currentQuiz.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Pergunta ${currentQuiz.currentQuestion + 1} de ${currentQuiz.questions.length}`;
    
    // Load question
    questionElement.textContent = question.question;
    
    // Clear previous state
    optionsElement.innerHTML = '';
    feedbackElement.innerHTML = '';
    feedbackElement.className = 'quiz-feedback';
    nextButton.classList.add('hidden');
    currentQuiz.answered = false;
    
    // Generate options
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => selectQuizAnswer(option, question.correct, question.explanation);
        optionsElement.appendChild(button);
    });
}

function selectQuizAnswer(selected, correct, explanation) {
    if (currentQuiz.answered) return;
    
    currentQuiz.answered = true;
    const isCorrect = selected === correct;
    
    if (isCorrect) {
        currentQuiz.correctAnswers++;
    }
    
    // Update UI
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.disabled = true;
        if (option.textContent === correct) {
            option.classList.add('correct');
        } else if (option.textContent === selected && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Show feedback
    const feedbackElement = document.getElementById('quiz-feedback');
    feedbackElement.innerHTML = `
        <div class="feedback-content ${isCorrect ? 'correct' : 'incorrect'}">
            <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            <span>${isCorrect ? 'Correto!' : 'Incorreto.'}</span>
        </div>
        <p class="explanation">${explanation}</p>
    `;
    
    // Show next button or finish quiz
    setTimeout(() => {
        if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
            document.getElementById('quiz-next').classList.remove('hidden');
        } else {
            finishQuiz();
        }
    }, 1500);
}

function nextQuizQuestion() {
    currentQuiz.currentQuestion++;
    loadQuizQuestion();
}

function finishQuiz() {
    const quizContent = document.querySelector('.quiz-content');
    const quizResults = document.getElementById('quiz-results');
    const correctAnswersElement = document.getElementById('correct-answers');
    const totalQuestionsElement = document.getElementById('total-questions');
    const scorePercentageElement = document.getElementById('score-percentage');
    
    const percentage = Math.round((currentQuiz.correctAnswers / currentQuiz.questions.length) * 100);
    
    correctAnswersElement.textContent = currentQuiz.correctAnswers;
    totalQuestionsElement.textContent = currentQuiz.questions.length;
    scorePercentageElement.textContent = `${percentage}%`;
    
    quizContent.style.display = 'none';
    quizResults.classList.remove('hidden');
    
    // Update progress (mark topic as completed if score >= 70%)
    if (percentage >= 70) {
        updateTopicProgress();
    }
}

function restartQuiz() {
    const quizContent = document.querySelector('.quiz-content');
    const quizResults = document.getElementById('quiz-results');
    
    currentQuiz.currentQuestion = 0;
    currentQuiz.correctAnswers = 0;
    
    quizContent.style.display = 'block';
    quizResults.classList.add('hidden');
    
    loadQuizQuestion();
}

// Add event listener for next button
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'quiz-next') {
        nextQuizQuestion();
    }
});

function updateTopicProgress() {
    // This would typically save to localStorage or a database
    console.log('Topic completed! Updating progress...');
}

// ==========================================
// VOCABULARY SYSTEM
// ==========================================

function showVocabularyCategory(categoryId) {
    if (!vocabularyData[categoryId]) {
        console.error('Category not found:', categoryId);
        return;
    }
    
    const category = vocabularyData[categoryId];
    const modal = createVocabularyModal(category);
    document.body.appendChild(modal);
}

function createVocabularyModal(category) {
    const modal = document.createElement('div');
    modal.className = 'vocab-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="${category.icon}"></i> ${category.title}</h2>
                <button class="close-modal" onclick="closeVocabModal()">&times;</button>
            </div>
            <div class="vocab-words">
                ${category.words.map(word => `
                    <div class="vocab-word-card">
                        <div class="word-info">
                            <h3>${word.english}</h3>
                            <p class="translation">${word.portuguese}</p>
                            <p class="example">"${word.example}"</p>
                        </div>
                        <button class="practice-btn" onclick="practiceWord('${word.english}', '${word.portuguese}')">
                            <i class="fas fa-dumbbell"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return modal;
}

function closeVocabModal() {
    const modal = document.querySelector('.vocab-modal');
    if (modal) {
        modal.remove();
    }
}

function practiceWord(english, portuguese) {
    console.log(`Practicing: ${english} - ${portuguese}`);
    // Here you could implement flashcard practice, spelling tests, etc.
}

// ==========================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize topic cards click handlers
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => {
            const topicId = card.getAttribute('data-topic');
            if (topicId) {
                showTopic(topicId);
            }
        });
    });
    
    // Initialize vocabulary cards click handlers
    document.querySelectorAll('.vocab-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.getAttribute('data-category');
            if (categoryId) {
                showVocabularyCategory(categoryId);
            }
        });
    });
    
    // Initialize activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        const button = card.querySelector('.activity-button');
        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const activity = card.getAttribute('data-activity');
                startActivity(activity);
            });
        }
    });
});

function startActivity(activityType) {
    switch(activityType) {
        case 'quiz':
            navigateToSection('gramatica');
            setTimeout(() => {
                showTopic('present-simple');
                setTimeout(() => showTab('quiz'), 500);
            }, 500);
            break;
        case 'matching':
            alert('Jogo da Memória em desenvolvimento! 🎮');
            break;
        case 'flashcards':
            alert('Flashcards em desenvolvimento! 📚');
            break;
        case 'fill-blanks':
            alert('Complete a Frase em desenvolvimento! ✏️');
            break;
        default:
            console.log('Activity not implemented:', activityType);
    }
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update progress bars animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressFills = entry.target.querySelectorAll('.progress-fill');
            progressFills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe progress elements
document.querySelectorAll('.feature-card, .vocab-card').forEach(card => {
    progressObserver.observe(card);
});