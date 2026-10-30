/* ==========================================================
   Brian Cruz Portfolio - script.js
   Light/dark theme button.
   - Dark is the default (set on <html> in index.html).
   - The choice is saved in the browser for the next visit.
   ========================================================== */

const root = document.documentElement;
const themeButton = document.getElementById('theme-toggle');
const STORAGE_KEY = 'theme';

/* Apply a theme and update the button text */
function setTheme(theme) {
  root.setAttribute('data-theme', theme);

  /* The button says what will happen when you press it */
  if (theme === 'dark') {
    themeButton.textContent = 'Light mode';
    themeButton.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeButton.textContent = 'Dark mode';
    themeButton.setAttribute('aria-label', 'Switch to dark mode');
  }
}

/* Read the saved theme. Returns null if nothing is saved
   or if the browser blocks storage (private mode, etc.) */
function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

/* Save the theme. Fails quietly if storage is blocked */
function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    /* Nothing to do: the theme still works for this visit */
  }
}

/* On page load: use the saved theme, or stay dark */
const savedTheme = getSavedTheme();

if (savedTheme === 'light' || savedTheme === 'dark') {
  setTheme(savedTheme);
} else {
  setTheme('dark');
}

/* On click (or Enter/Space, since it's a real button): switch themes */
themeButton.addEventListener('click', function () {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  setTheme(newTheme);
  saveTheme(newTheme);
});
