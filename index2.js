document.getElementById('flashcard1').addEventListener("click", displayAnswer);

const flashcard = document.getElementById("flashcard1")

function displayAnswer() {
    flashcard.childNodes[1].textContent = 'Document Object Model'
}

