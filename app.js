const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nameFormContainer = document.getElementById('name-form-container')
const submitNameButton = document.getElementById('submit-name-btn')
const viewScoreButton = document.getElementById('view-score-btn')
const nameInput = document.getElementById('name')

// Event listener to capture the user's name and start the quiz
submitNameButton.addEventListener('click', () => {
    userName = nameInput.value
    if (userName) {
      nameFormContainer.classList.add('hide') // Hide name input form
      startButton.classList.remove('hide') // Show start button after name is entered
    } else {
      alert("Please enter your name to start the quiz!") // Alert if no name is entered
    }
  })
// Start quiz event listener
startButton.addEventListener('click', startGame)

// Next question event listener
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
// Function to start the quiz
function startGame() {
    score = 0 // Reset score at the start of each game
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }
  
  // Function to set the next question
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  // Function to display the question and its answers
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  
  