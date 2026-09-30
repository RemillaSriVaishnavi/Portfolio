export function getInitialTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function applyTheme(theme) {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)

  localStorage.setItem('portfolio-theme', theme)
}