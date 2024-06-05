export const switchTheme = document.getElementById('flexSwitch').addEventListener('click',()=>{
  const html = document.documentElement
  const currentTheme = html.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light':'dark'
  html.setAttribute('data-bs-theme',newTheme)
})

moddu