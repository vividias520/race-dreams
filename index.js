let docTitle = document.title;
window.addEventListener("blur", () =>{document.title = "Aonde você vai??";})
window.addEventListener("focus", () =>{document.title = docTitle;})
