/* ============================================================
   BLU CAT DEV — Main JavaScript
   Single-page navigation, tabs, forms, mobile menu
   ============================================================ */

'use strict';

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTabs();
  initForms();
  initMobileMenu();
});

// ── Navigation ────────────────────────────────────────────────

// SPA navigation removed. Site uses normal links and separate pages.

function initNav() {
  // nothing special needed for nav — mobile menu handled elsewhere
}

// ── Mobile menu ───────────────────────────────────────────────

function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.classList.toggle('is-open', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.classList.remove('is-open');
}

// ── Tabs ──────────────────────────────────────────────────────

function initTabs() {
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const groupId = group.dataset.tabGroup;
    const buttons = group.querySelectorAll('[data-tab]');
    const panels  = document.querySelectorAll(`[data-tab-panel="${groupId}"]`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        // Update button active states
        buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === target));

        // Show/hide panels
        panels.forEach(panel => {
          panel.classList.toggle('hidden', panel.dataset.tabTarget !== target);
        });
      });
    });

    // Activate first tab by default
    if (buttons.length) buttons[0].click();
  });
}

// ── Forms ─────────────────────────────────────────────────────

function initForms() {
  // Newsletter forms (hero inline + section)
  document.querySelectorAll('[data-newsletter-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn   = form.querySelector('button[type="submit"]');
      if (!input || !btn) return;

      const email = input.value.trim();
      if (!isValidEmail(email)) {
        showFormError(form, 'Please enter a valid email address.');
        return;
      }

      // Placeholder — wire up to your mailing list service (e.g. Mailchimp, ConvertKit)
      btn.textContent = 'Subscribed ✓';
      btn.disabled = true;
      btn.style.color = 'var(--cyan)';
      input.value = '';
      clearFormError(form);

      // Reset after 4 seconds
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.disabled = false;
        btn.style.color = '';
      }, 4000);
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormError(form, msg) {
  clearFormError(form);
  const err = document.createElement('p');
  err.className = 'form-error';
  err.style.cssText = 'font-size:0.72rem;color:var(--error);margin-top:0.35rem;font-family:var(--font-mono);';
  err.textContent = msg;
  form.appendChild(err);
}

function clearFormError(form) {
  const existing = form.querySelector('.form-error');
  if (existing) existing.remove();
}

// Expose no-op navigateTo to avoid errors from legacy inline onclick attributes
window.navigateTo = function (page) {
  // do a normal navigation to the named route
  if (!page) return;
  const mapping = {
    home: '/',
    games: '/games/',
    writing: '/writing/',
    about: '/about/',
    press: '/press/'
  };
  const url = mapping[page] || '/';
  window.location.href = url;
};
