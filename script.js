let textArea = document.getElementById("text_area");

function saveInLocalStorage() {
    localStorage.setItem("text", textArea.value);
}


if (localStorage.getItem("text")) {
    textArea.value = localStorage.getItem("text");
}


textArea.addEventListener("input", saveInLocalStorage);