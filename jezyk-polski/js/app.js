function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'screen-categories') {
    renderCategories();
  } else if (id === 'screen-lektury') {
    renderLektury();
  }
}

function renderCategories() {
  const container = document.getElementById('categories-list');
  container.innerHTML = '';

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

function renderLektury() {
  const container = document.getElementById('lektury-list');
  container.innerHTML = '';

  LEKTURY.forEach(lektura => {
    const card = document.createElement('div');
    card.className = 'lektury-card';
    card.innerHTML = `
      <span class="lc-icon">${lektura.icon}</span>
      <div class="lc-title">${lektura.title}</div>
      <div class="lc-author">${lektura.author}</div>
    `;
    card.addEventListener('click', () => showLekturaDetail(lektura.id));
    container.appendChild(card);
  });
}

function showLekturaDetail(id) {
  const lektura = LEKTURY.find(l => l.id === id);
  if (!lektura) return;

  document.getElementById('lektura-detail-title').textContent = lektura.icon + ' ' + lektura.title;

  let html = `
    <div class="ld-icon">${lektura.icon}</div>
    <div class="ld-title">${lektura.title}</div>
    <div class="ld-author">${lektura.author}</div>
    ${lektura.sections.map(s => `
      <div class="ld-section">
        <div class="ld-section-title">${s.title}</div>
        <div class="ld-section-text">${s.text.replace(/\n/g, '<br>')}</div>
      </div>
    `).join('')}
  `;

  if (lektura.quiz && lektura.quiz.length > 0) {
    html += `<button class="btn btn-primary btn-large" onclick="startBookQuiz('${lektura.id}')" style="margin-top:12px">📝 Quiz o książce (${lektura.quiz.length} pytań)</button>`;
  }

  document.getElementById('lektura-detail-content').innerHTML = html;
  showScreen('screen-lektura-detail');
}

function startBookQuiz(id) {
  const lektura = LEKTURY.find(l => l.id === id);
  if (!lektura || !lektura.quiz) return;
  const questions = [...lektura.quiz];
  Quiz.startWithQuestions(questions, lektura.icon + ' ' + lektura.title);
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

// Register service worker for PWA - zawsze aktualna wersja
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload());
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// Show categories by default
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-categories');
});
