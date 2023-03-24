// UI Logic
function userInput(e) {
    e.preventDefault();
    const veg = document.querySelector("input[name='veg']:checked").value;
    const hat = document.querySelector("input[name='hat']:checked").value;
    const bug = document.querySelector("input[name='bug']:checked").value;
    document.querySelector("#results").removeAttribute("class")
    langPicker(veg, hat, bug);
}

function langInfo(lang) {
    const resultLang = document.querySelector("#lang");
    const resultLinks = document.querySelector("#links");
    const links = document.createElement("a");
    links.setAttribute("id", "info")

    if (lang === "C#") {
        resultLang.innerText = "C#";
        links.setAttribute("href", "https://exercism.org/tracks/csharp");
        links.innerText = "Exercism.org";
        resultLinks.append(links);
    } else if (lang === "Python") {
        resultLang.innerText = "Python";
        links.setAttribute("href", "https://cs50.harvard.edu/python/2022/weeks/0/");
        links.innerText = "CS50's Introduction to Programming with Python";
        resultLinks.append(links);
    } else if (lang === "Ruby") {
        resultLang.innerText = "Ruby";
        links.setAttribute("href", "https://www.theodinproject.com/paths/full-stack-ruby-on-rails");
        links.innerText = "The Odin Projects' Ruby on Rails course";
        resultLinks.append(links);
    } else { resultLang.innerText = "Hmmm...maybe try again" }
}

function resultReset() {
    document.querySelector("#results").setAttribute("class", "hidden")
    document.querySelector("#lang").innerText = ''
    document.querySelector("#links").innerText = ''
    const link = document.querySelector("#info");
    if (link) {
        link.remove()
    }
}

// Business Logic
function langPicker(veg, hat, bug) {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if ((veg === "corn" && hat === "fedora" && bug === "beetle") 
        || (veg === "carrot" && hat === "cap" && bug === "bee") 
        || (veg === "lettuce" && hat === "cap" && bug === "beetle")) {
            langInfo("C#");
    } else if ((veg === "carrot" && hat === "cap" && bug === "cricket") 
        || (veg === "carrot" && hat === "straw-hat" && bug === "bee") 
        || (veg === "lettuce" && hat === "straw-hat" && bug === "bee")) {
            langInfo("Python");
    } else if ((veg === "corn" && hat === "cap" && bug === "cricket") 
        || (veg === "corn" && hat === "straw-hat" && bug === "bee") 
        || (veg === "lettuce" && hat === "fedora" && bug === "bee")) {
            langInfo("Ruby");
    } else {
        if (randomNum === 1) {
            langInfo("C#");
        } else if (randomNum === 2) {
            langInfo("Python");
        } else { langInfo("Ruby"); }
    };
}

window.addEventListener("load", () => {
    document.querySelector("form").addEventListener("submit", userInput);
    document.querySelector("#exit").addEventListener("click", resultReset)
});