const flashcardsData = [
  { question: "What keyword declares a block-scoped variable that can be reassigned?", answer: "let" },
  { question: "What does '===' check that '==' does not?", answer: "It checks type as well as value." },
  { question: "What is the capital city of Australia?", answer: "Canberra" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "The hardest substance on the Earth?", answer: "Diamond" },
  
  { question: "How many teeth does an adult human normally have?", answer: "32 teeth" },
  { question: "What is the smallest country in the world?", answer: "Vantican" },
  { question: "Which ocean is the largest ocean on Earth?", answer: "The Pacific Ocean" },
  { question: "What gas do plants absorb from the atmosphere for photosynthesis?", answer: "CO2" },
  { question: "In which year did the Titanic sink??", answer: "1912." },
];

const state = {
  cards: flashcardsData,
  currentIndex: 0,
  isFlipped: false,
};

const cardEl = document.getElementById("card");
const questionEl = document.getElementById("question-text");
const answerEl = document.getElementById("answer-text");
const progressFillEl = document.getElementById("progress-fill");
const progressLabelEl = document.getElementById("progress-label");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");

function renderCard() {
  const card = state.cards[state.currentIndex];
  questionEl.textContent = card.question;
  answerEl.textContent = card.answer;
  cardEl.classList.toggle("is-flipped", state.isFlipped);
}

function renderProgress() {
  const total = state.cards.length;
  const position = state.currentIndex + 1;
  progressFillEl.style.width = `${(position / total) * 100}%`;
  progressLabelEl.textContent = `${position} / ${total}`;
}

function renderControls() {
  prevBtn.disabled = state.currentIndex === 0;
}

function render() {
  renderCard();
  renderProgress();
  renderControls();
}

function flipCard() {
  state.isFlipped = !state.isFlipped;
  render();
}

function goToNextCard() {
  const isLastCard = state.currentIndex === state.cards.length - 1;
  state.currentIndex = isLastCard ? 0 : state.currentIndex + 1;
  state.isFlipped = false;
  render();
}

function goToPrevCard() {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  state.isFlipped = false;
  render();
}

cardEl.addEventListener("click", flipCard);
nextBtn.addEventListener("click", goToNextCard);
prevBtn.addEventListener("click", goToPrevCard);

render(); // draw the initial screen