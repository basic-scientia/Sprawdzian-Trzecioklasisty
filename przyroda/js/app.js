function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'screen-categories') {
    renderCategories();
  }
}

function renderCategories() {
  const container = document.getElementById('categories-list');
  container.innerHTML = '';

  // Random (all categories) card
  const randomCard = document.createElement('div');
  randomCard.className = 'category-card random';
  const totalQ = CATEGORIES.reduce((sum, c) => sum + c.questions.length, 0);
  randomCard.innerHTML = `
    <span class="cat-icon">🎲</span>
    <div class="cat-name">Wszystkie kategorie</div>
    <div class="cat-count">Losowe ${Math.min(10, totalQ)} pytań</div>
  `;
  randomCard.addEventListener('click', () => Quiz.start('random'));
  container.appendChild(randomCard);

  CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-count">${cat.questions.length} pytań</div>
    `;
    card.addEventListener('click', () => Quiz.start(cat.id));
    container.appendChild(card);
  });
}

function nextQuestion() {
  closeNotepad();
  Quiz.nextQuestion();
}

function toggleNotepad() {
  const container = document.getElementById('notepad-container');
  const btn = document.getElementById('btn-notepad');
  container.classList.toggle('hidden');
  btn.classList.toggle('active');
  if (!container.classList.contains('hidden')) {
    document.getElementById('notepad-text').focus();
  }
}

function closeNotepad() {
  const container = document.getElementById('notepad-container');
  const btn = document.getElementById('btn-notepad');
  container.classList.add('hidden');
  btn.classList.remove('active');
}

function quitQuiz() {
  if (confirm('Czy na pewno chcesz opuścić quiz? Postęp zostanie utracony.')) {
    Quiz.reset();
    showScreen('screen-categories');
  }
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// Start screen by default
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-start');
});
