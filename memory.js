// memory.js

export function initTheme() {
  const theme = localStorage.getItem('mindoai_theme') || 'light';
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

export function switch_theme() {
  let theme = localStorage.getItem('mindoai_theme') || 'light';
  if (theme === 'dark') {
    document.body.classList.remove('dark-mode');
    theme = 'light';
  } else {
    document.body.classList.add('dark-mode');
    theme = 'dark';
  }
  localStorage.setItem('mindoai_theme', theme);
}