
// Basic search over sidebar links and sections
const q = document.querySelector('#q');
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('.section')];

q?.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase().trim();
  navLinks.forEach(link => {
    const hit = link.textContent.toLowerCase().includes(term);
    link.style.display = hit ? '' : 'none';
  });
  sections.forEach(sec => {
    const hit = sec.textContent.toLowerCase().includes(term);
    sec.style.opacity = hit || term==='' ? 1 : 0.25;
  });
});

// Back to top when header brand clicked
document.querySelector('.brand')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Smooth scroll for nav
document.querySelector('.nav')?.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior: 'smooth', block: 'start'});
});

// Update year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Helper: replace Instagram link easily via data attribute
const igEl = document.querySelector('[data-ig]');
if (igEl) {
  // Change this to your Instagram handle or full URL:
  const INSTAGRAM_LINK = "https://instagram.com/your_username_here";
  igEl.setAttribute('href', INSTAGRAM_LINK);
  igEl.setAttribute('title', 'Instagram');
}
