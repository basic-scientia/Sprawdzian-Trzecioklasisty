const Quiz = {
  questions: [],
  currentIdx: 0,
  score: 0,
  answers: [],
  timerInterval: null,
  seconds: 0,
  isAnswered: false,
  questionsCount: 10,

  start(categoryId) {
    this.reset();

    let pool;
    if (categoryId === 'random') {
      pool = CATEGORIES.flatMap(c => c.questions);
    } else {
      const cat = CATEGORIES.find(c => c.id === categoryId);
      if (!cat) return;
      pool = [...cat.questions];
      document.getElementById('quiz-category-label').textContent = cat.icon + ' ' + cat.name;
    }

    // Shuffle and pick questionsCount
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    this.questions = pool.slice(0, this.questionsCount);
    this.currentIdx = 0;
    this.score = 0;
    this.answers = [];

    document.getElementById('total-questions').textContent = this.questions.length;

    showScreen('screen-quiz');
    this.showQuestion();
    this.startTimer();
  },

  startWithQuestions(questions, label) {
    this.reset();
    this.questions = questions;
    this.currentIdx = 0;
    this.score = 0;
    this.answers = [];

    document.getElementById('quiz-category-label').textContent = label || 'Quiz o książce';
    document.getElementById('total-questions').textContent = this.questions.length;

    showScreen('screen-quiz');
    this.showQuestion();
    this.startTimer();
  },

  reset() {
    this.stopTimer();
    this.questions = [];
    this.currentIdx = 0;
    this.score = 0;
    this.answers = [];
    this.seconds = 0;
    this.isAnswered = false;
  },

  showQuestion() {
    const q = this.questions[this.currentIdx];
    if (!q) { this.end(); return; }

    this.isAnswered = false;
    document.getElementById('current-question').textContent = this.currentIdx + 1;
    document.getElementById('score-display').textContent = this.score;
    document.getElementById('question-text').textContent = q.question;

    const container = document.getElementById('answers-container');
    container.innerHTML = '';
    document.getElementById('explanation-box').classList.add('hidden');

    const letters = ['A', 'B', 'C', 'D'];
    q.answers.forEach((answer, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.innerHTML = `<span class="answer-letter">${letters[i]}</span>${answer}`;
      btn.dataset.index = i;
      btn.addEventListener('click', () => this.selectAnswer(i));
      container.appendChild(btn);
    });
  },

  selectAnswer(index) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.stopTimer();

    const q = this.questions[this.currentIdx];
    const buttons = document.querySelectorAll('.answer-btn');
    const isCorrect = index === q.correct;

    buttons.forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === q.correct) btn.classList.add('correct');
      if (i === index && !isCorrect) btn.classList.add('wrong');
    });

    if (isCorrect) this.score++;

    document.getElementById('score-display').textContent = this.score;

    this.answers.push({
      question: q.question,
      given: index,
      correct: q.correct,
      isCorrect,
      explanation: q.explanation,
      answers: q.answers
    });

    // Show explanation
    const box = document.getElementById('explanation-box');
    box.classList.remove('hidden');
    document.getElementById('explanation-content').innerHTML = `
      <div class="exp-label">${isCorrect ? '✅ Dobrze!' : '❌ Źle'}</div>
      <div class="exp-text">${q.explanation}</div>
    `;
  },

  nextQuestion() {
    this.currentIdx++;
    if (this.currentIdx >= this.questions.length) {
      this.end();
    } else {
      this.showQuestion();
      this.startTimer();
    }
  },

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.seconds++;
      const min = String(Math.floor(this.seconds / 60)).padStart(2, '0');
      const sec = String(this.seconds % 60).padStart(2, '0');
      const display = document.getElementById('timer-display');
      display.textContent = min + ':' + sec;
      if (this.seconds > 120) {
        display.classList.add('timer-warning');
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  end() {
    this.stopTimer();
    const total = this.questions.length;
    const correct = this.score;
    const percent = Math.round((correct / total) * 100);

    let message, icon;
    if (percent === 100) { message = 'Perfekcyjnie! Mistrz matematyki! 🎉'; icon = '🏆'; }
    else if (percent >= 80) { message = 'Świetnie! Bardzo dobry wynik! ⭐'; icon = '🌟'; }
    else if (percent >= 60) { message = 'Dobrze! Jeszcze trochę i będzie perfekcyjnie! 👍'; icon = '📚'; }
    else { message = 'Trenuj dalej! Z każdym razem będzie lepiej! 💪'; icon = '📖'; }

    const min = Math.floor(this.seconds / 60);
    const sec = this.seconds % 60;
    const timeStr = min + ':' + String(sec).padStart(2, '0');

    document.getElementById('results-summary').innerHTML = `
      <div style="font-size:64px;margin-bottom:8px">${icon}</div>
      <div class="score-big">${correct}/${total}</div>
      <div class="score-label">Poprawnych odpowiedzi: ${correct} z ${total}</div>
      <div class="score-label">Czas: ${timeStr}</div>
      <div class="score-message">${message}</div>
    `;

    // Details
    const detailsContainer = document.getElementById('results-details');
    detailsContainer.innerHTML = '';
    this.answers.forEach((a, i) => {
      const letters = ['A', 'B', 'C', 'D'];
      const div = document.createElement('div');
      div.className = 'result-item' + (a.isCorrect ? '' : ' wrong');
      div.innerHTML = `
        <div class="ri-question">${i + 1}. ${a.question}</div>
        <div class="ri-answer">
          ${a.isCorrect
            ? '<span class="correct-text">✅ ' + letters[a.given] + ': ' + a.answers[a.given] + '</span>'
            : 'Twój wybór: <span class="wrong-text">❌ ' + letters[a.given] + ': ' + a.answers[a.given] + '</span> | Poprawna: <span class="correct-text">✅ ' + letters[a.correct] + ': ' + a.answers[a.correct] + '</span>'
          }
        </div>
        <div class="ri-answer" style="margin-top:4px;font-style:italic;color:#888">💡 ${a.explanation}</div>
      `;
      detailsContainer.appendChild(div);
    });

    showScreen('screen-results');
  }
};
