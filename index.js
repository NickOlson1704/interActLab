let message = document.querySelector("aside")

function addMovie(event) {
    event.preventDefault()
    
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    const deleteBin = document.createElement("button")

    movieTitle.innerHTML = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle);
    deleteBin.innerHTML = "x"
    deleteBin.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBin)
    document.querySelector("ul").appendChild(movie)
    inputField.value = ""
    
}
document.querySelector("form").addEventListener("submit", addMovie)


function deleteMovie(event) {
    message.innerHTML = event.target.parentNode.textContent + "deleted!"
    event.target.preventNode.remove()

    revealMessage()
}
function crossOffMovie(event) {
    event.target.classList.toggle("checked")

    if (event.target.classList.toggle("checked")) {
        message.innerHTML = event.target.innerHTML + "watched!"
    } else {
        message.innerHTML = event.target.innerHTML + "added back"
    }
}


function revealMessage() {
    message.classList.remove("hide")

    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}


