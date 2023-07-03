function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains("light")) {
    //se tiver ligh mode, add imagem light
    img.setAttribute("src", "./assets/light-avatar.png")
  } else {
    //se tiver sem light  mode, manter a imagem
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
