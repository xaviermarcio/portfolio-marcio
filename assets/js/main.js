/* main.js — Entry point. Fetches cv.json and renders all sections. */
import {
  renderContact,
  renderExperience,
  renderEduCard,
  renderSkillHighlight,
  renderSkillCategory
} from './render.js';

/* ── Fetch CV data ────────────────────────────────────────── */
async function loadCV() {
  try {
    const res  = await fetch('./data/cv.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    renderAll(data);
  } catch (err) {
    console.error('Erro ao carregar cv.json:', err);
    document.getElementById('app').innerHTML =
      `<p class="text-red-500 text-center mt-20">Não foi possível carregar o currículo.</p>`;
  }
}

/* ── Orchestrate rendering ────────────────────────────────── */
function renderAll(data) {
  renderHero(data.meta);
  renderSection('section-experience',     data.experience,           renderExperience);
  renderSection('section-education',      data.education,            renderEduCard);
  renderSection('section-certifications', data.certifications,       renderEduCard);
  renderSkills(data.skills);
  renderFooter(data.meta);
  initScrollObserver();
  document.getElementById('year').textContent = new Date().getFullYear();
}

/* ── Hero ─────────────────────────────────────────────────── */
function renderHero({ name, role, tagline, available, availableText, bio, contact }) {
  const [first, ...rest] = name.split(' ');
  const last = rest.join(' ');

  const badge = available
    ? `<div class="inline-flex items-center gap-2 bg-blue-50 border border-blue-200
         text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-7">
         <span class="w-2 h-2 rounded-full bg-blue-600 dot-blink"></span>
         ${availableText}
       </div>`
    : '';

  document.getElementById('hero').innerHTML = `
    ${badge}
    <h1 class="text-5xl sm:text-7xl font-black tracking-tighter leading-none mb-4">
      ${first} <span class="text-blue-600">${last}</span>
    </h1>
    <p class="text-sm font-medium text-gray-400 tracking-wide mb-6">${tagline}</p>
    <p class="text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl mb-9 text-justify">${bio}</p>
    <div class="flex flex-wrap gap-3">
      ${contact.map(renderContact).join('')}
    </div>`;
}

/* ── Generic section renderer ─────────────────────────────── */
function renderSection(id, items, renderFn) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(renderFn).join('');
}

/* ── Skills (two-part layout) ─────────────────────────────── */
function renderSkills({ highlight, categories }) {
  const hi   = document.getElementById('skills-highlight');
  const cats = document.getElementById('skills-categories');
  if (hi)   hi.innerHTML   = highlight.map(renderSkillHighlight).join('');
  if (cats) cats.innerHTML = categories.map(renderSkillCategory).join('');
}

/* ── Footer year ──────────────────────────────────────────── */
function renderFooter({ name }) {
  const el = document.getElementById('footer-name');
  if (el) el.textContent = `© ${new Date().getFullYear()} ${name}`;
}

/* ── IntersectionObserver for scroll animations ───────────── */
function initScrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('section-hidden');
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.observe').forEach(el => {
    el.classList.add('section-hidden');
    observer.observe(el);
  });
}

/* ── Bootstrap ────────────────────────────────────────────── */
loadCV();
