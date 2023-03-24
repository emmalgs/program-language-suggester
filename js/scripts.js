function userInput(e) {
    e.preventDefault();
    const veg = document.querySelector("input[name='veg']:checked").value;
    const hat = document.querySelector("input[name='hat']:checked").value;
    const bug = document.querySelector("input[name='bug']:checked").value;
    console.log(veg)
    langPicker(veg, hat, bug)
}

function langPicker(veg, hat, bug) {
    const resultLang = document.querySelector("#lang")
    const resultLinks = document.querySelector("#links")
    const links = document.createElement("a")

    if ((veg === "corn" && hat === "fedora" && bug === "beetle") ||
        (veg === "carrot" && hat === "cap" && bug === "bee") ||
        (veg === "lettuce" &&)) {
        resultLang.innerText = "C#"
        links.setAttribute("href", "https://exercism.org/tracks/csharp")
        links.innerText = "Exercism.org"
        resultLinks.append(links)
    } else if (veg === "")
}

function langInfo(lang) {
    if (lang === "C#") {
        resultLang.innerText = "C#"
        links.setAttribute("href", "https://exercism.org/tracks/csharp")
        links.innerText = "Exercism.org"
        resultLinks.append(links)
    }
}

window.addEventListener("load", () => {
    document.querySelector("form").addEventListener("submit", userInput)
})