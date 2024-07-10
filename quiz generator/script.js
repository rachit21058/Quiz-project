let questions = [
    {
      "topic": "HTML",
      "difficulty": "Easy",
      "text": "What does HTML stand for?",
      "options": ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      "correct_answer": 0
    },
    {
      "topic": "HTML",
      "difficulty": "Medium",
      "text": "Which HTML tag is used to define an internal style sheet?",
      "options": ["<style>", "<script>", "<link>"],
      "correct_answer": 0
    },
    {
      "topic": "HTML",
      "difficulty": "Hard",
      "text": "What is the purpose of the HTML 'article' element?",
      "options": ["To define a footer for a document or section", "To define a piece of self-contained content", "To define a section in a document"],
      "correct_answer": 1
    },
    {
      "topic": "CSS",
      "difficulty": "Easy",
      "text": "What does CSS stand for?",
      "options": ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
      "correct_answer": 1
    },
    {
      "topic": "CSS",
      "difficulty": "Medium",
      "text": "Which CSS property is used to change the text color of an element?",
      "options": ["color", "text-color", "font-color"],
      "correct_answer": 0
    },
    {
      "topic": "CSS",
      "difficulty": "Hard",
      "text": "Which CSS property is used to make text italic?",
      "options": ["font-style", "text-decoration", "font-weight"],
      "correct_answer": 0
    },
    {
      "topic": "JS",
      "difficulty": "Easy",
      "text": "Which JavaScript method is used to add new items to the end of an array?",
      "options": ["push()", "append()", "addToEnd()"],
      "correct_answer": 0
    },
    {
      "topic": "JS",
      "difficulty": "Medium",
      "text": "Which of the following is not a JavaScript data type?",
      "options": ["String", "Number", "Boolean", "Float"],
      "correct_answer": 3
    },
    {
      "topic": "JS",
      "difficulty": "Hard",
      "text": "Which operator is used to concatenate strings in JavaScript?",
      "options": ["+", "&", "%"],
      "correct_answer": 0
    },
    {
        "topic": "JS",
        "difficulty": "Easy",
        "text": "What does JS stand for?",
        "options": ["JAVA SCRIPT", "JASON SCRIPT", "JANGO SCRIPT"],
        "correct_answer": 0
      },
  ];
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = {}; 
let filteredQuestions = []; 

// Function to start the quiz
function startQuiz() {
    const selectedTopic = document.getElementById('topic').value;
    const selectedDifficulty = document.getElementById('difficulty').value;

    // Filter questions based on selected topic and difficulty
    filteredQuestions = questions.filter(question =>
        question.topic === selectedTopic && question.difficulty === selectedDifficulty
    );

    if (filteredQuestions.length === 0) {
        alert('No questions available for the selected topic and difficulty.');
        return;
    }

    // Display quiz container
    document.getElementById('quiz-container').style.display = 'block';

    // Display first question
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = {}; // Reset answered questions
    displayQuestion(filteredQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.text;

    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => evaluateAnswer(index, question.correct_answer);
        optionsElement.appendChild(optionButton);
    });

    // Display the quiz container if it's not already displayed
    document.getElementById('quiz-container').style.display = 'block';
}

function evaluateAnswer(selectedIndex, correctIndex) {
  // Check if the question has already been answered
  if (answeredQuestions[currentQuestionIndex]) {
      return; // Do not increase score if question has already been answered
  }

  if (selectedIndex === correctIndex) {
      score++;
  }
  answeredQuestions[currentQuestionIndex] = true; // Mark question as answered

  // Check if it's the last question and prevent score increment
  if (currentQuestionIndex === filteredQuestions.length - 1) {
      return;
  }

  nextQuestion();
}

function evaluateAnswer(selectedIndex, correctIndex) {
  // Check if the question has already been answered
  if (answeredQuestions[currentQuestionIndex]) {
      return; // Do not increase score if question has already been answered
  }

  if (selectedIndex === correctIndex) {
      score++;
  }
  answeredQuestions[currentQuestionIndex] = true; // Mark question as answered

  if (currentQuestionIndex === filteredQuestions.length - 1) {
      showScore();
      return;
  }

  nextQuestion();
}


function showScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your score: ${score}/${filteredQuestions.length}`;
}