const showEl = document.getElementById("show")
const showElTwo = document.getElementById("show-two")
const closeEl = document.getElementById("close")
const description = document.getElementById("description")
const shareLink = document.getElementById("share-link")
const linkTwoEl = document.getElementById("link-two-el")
const showElThree = document.getElementById("show-three")
const triangle = document.getElementById("triangle")
const desktopLink = document.getElementById("desktop-link")

showEl.addEventListener("click", function() {
   shareLink.style.display = "flex"
})

closeEl.addEventListener("click", function() {
    shareLink.style.display = "none"
})

showElTwo.addEventListener("click", function() {
    showElTwo.style.display = 'none'
    showElThree.style.display = 'block'
    triangle.style.display = 'block'
    desktopLink.style.display = 'flex'
})

showElThree.addEventListener("click", function() {
    showElTwo.style.display = 'block'
    showElThree.style.display = 'none'
    triangle.style.display = 'none'
    desktopLink.style.display = 'none'
})