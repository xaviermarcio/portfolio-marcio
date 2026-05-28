/* render.js — Pure functions that build HTML from JSON data */
import { icons } from './icons.js';

/* ── Shared tag pill ──────────────────────────────────────── */
const tag = (text) =>
  `<span class="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200
    px-2.5 py-1 rounded-md hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
    transition-all cursor-default">${text}</span>`;

/* ── Contact button ───────────────────────────────────────── */
export const renderContact = ({ label, href, icon }) =>
  `<a href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}
     class="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg
       text-sm font-medium text-gray-600 bg-white shadow-sm
       hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50
       hover:shadow-[0_0_0_3px_#dbeafe] transition-all duration-150">
     ${icons[icon]} ${label}
   </a>`;

/* ── Experience card ──────────────────────────────────────── */
export const renderExperience = ({ role, company, period, description, tags }) => {
  const paragraphs = description.map(p => `<p>${p}</p>`).join('');
  const tagPills   = tags.length
    ? `<div class="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">${tags.map(tag).join('')}</div>`
    : '';
  return `
    <div class="border border-gray-100 rounded-xl p-6 sm:p-7 bg-white
      hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm transition-all duration-150">
      <div class="flex flex-wrap justify-between items-start gap-3 mb-1">
        <span class="text-base font-bold text-gray-900">${role}</span>
        <span class="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100
          px-3 py-1 rounded-full whitespace-nowrap">${period}</span>
      </div>
      <p class="text-xs font-semibold text-blue-600 mb-4 tracking-wide">${company}</p>
      <div class="text-sm text-gray-500 leading-relaxed space-y-2">${paragraphs}</div>
      ${tagPills}
    </div>`;
};

/* ── Education / Cert card ────────────────────────────────── */
export const renderEduCard = ({ degree, title, school, issuer, year }) =>
  `<div class="bg-gray-50 border border-gray-100 rounded-xl p-5
    hover:border-blue-200 hover:shadow-sm transition-all duration-150">
    <p class="text-sm font-bold text-gray-800 leading-snug mb-1">${degree || title}</p>
    <p class="text-xs text-gray-400 mb-3">${school || issuer}</p>
    <span class="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200
      px-2.5 py-1 rounded-full">${year}</span>
  </div>`;

/* ── Skill highlight card ─────────────────────────────────── */
export const renderSkillHighlight = ({ icon, title, items, badge }) => {
  const badgeHtml = badge
    ? `<span class="mt-3 inline-block text-xs font-bold text-blue-600 bg-white
        border border-blue-200 px-2.5 py-1 rounded-full">${badge}</span>`
    : '';
  return `
    <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-5
      hover:border-blue-400 hover:shadow-md transition-all duration-150">
      <span class="text-2xl mb-3 block">${icon}</span>
      <p class="text-sm font-bold text-blue-700 mb-2">${title}</p>
      <p class="text-xs text-gray-500 leading-relaxed">${items}</p>
      ${badgeHtml}
    </div>`;
};

/* ── Skill category ───────────────────────────────────────── */
export const renderSkillCategory = ({ label, items }) =>
  `<div>
    <p class="text-xs font-bold tracking-widest uppercase text-gray-300 mb-3">${label}</p>
    <div class="flex flex-wrap gap-2">
      ${items.map(i => `<span class="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200
        px-3 py-1.5 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
        transition-all cursor-default">${i}</span>`).join('')}
    </div>
  </div>`;
