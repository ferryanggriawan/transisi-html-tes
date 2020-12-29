function add() {
  const list = document.getElementById("todo-list")

  const inputId = getRandomStr()
  const text = getRandomText()
  const status = getRandomStatus()

  list.innerHTML += `<li class='list-group-item d-flex justify-content-between align-items-center border-0'><div><input class='form-check-input me-3' type='checkbox' id='${inputId}'/><label for='${inputId}'>${text}</label></div><span class='badge ${status.class} rounded-pill px-3'>${status.text}</span></li>`
}

function getRandomText() {
  const texts = [
    "Lorem ipsum dolor sit amet.",
    "Lorem, ipsum dolor.",
    "Lorem ipsum dolor sit.",
    "Dolor sit amet consectetur adipisicing.",
    "Dolor sit amet consectetur .",
  ]

  var i = Math.floor(5 * Math.random())

  return texts[i]
}

function getRandomStatus() {
  const statuses = [
    { text: "In Progress", class: "bg-info" },
    { text: "Approved", class: "bg-success" },
    { text: "In Review", class: "bg-warning" },
    { text: "Waiting", class: "bg-secondary" },
  ]

  var i = Math.floor(4 * Math.random())

  return statuses[i]
}

function getRandomStr() {
  const n = Math.random()
  return `${n}`
}
