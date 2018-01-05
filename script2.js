const myContainer = document.querySelector('#container')
const mySphere = document.querySelector('#protoSphere')
let y = 1.5

mySphere.addEventListener('click', e => addboxes(50))

function addboxes(x) {
  console.log("clicked!")
  for (var i = 0; i < x; i += 1) {
    addbox()
  }
}

function addbox() {
  let x = randBetween()
  let y = randBetween()
  let z = randBetween()
  console.log(x, y, z)
  myContainer.innerHTML += `<a-box color="dodgerblue" depth="0.5" height="0.5" width="0.5" position='${x} ${y} ${z}'></a-box>`
}

function randBetween() {
  return (Math.floor(Math.random() * 100 ) - 50)
}
