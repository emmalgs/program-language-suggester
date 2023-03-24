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
    document.querySelector("#overlay").setAttribute("class", "behind");

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

function picInsert(pic) {
    const vegDisplay = document.querySelector("#img-veggie")

    if (pic === "corn") {
        vegDisplay.setAttribute("src", "../images/corn.png")
    } else if (pic === "carrot") {
        vegDisplay.setAttribute("src", "../images/carrot.png")
    }
}

function resultReset() {
    document.querySelector("#results").setAttribute("class", "hidden")
    document.querySelector("#lang").innerText = ''
    document.querySelector("#links").innerText = ''
    document.querySelector("#overlay").removeAttribute("class")
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

function picPicker() {
    const veg = document.querySelector("input[name='veg']:checked").value;
    const hat = document.querySelector("input[name='hat']:checked").value;
    const bug = document.querySelector("input[name='bug']:checked").value;

    if (veg === "corn") {
        picInsert("corn")
    } else if (veg === "carrot") {
        picInsert("carrot")
    } else if (veg === "lettuce") {
        picInsert("lettuce")
    }

    if (hat === "fedora") {
        picInsert("fedora")
    } else if (hat === "straw-hat") {
        picInsert("straw-hat")
    } else if (hat === "cap") {
        picInsert("cap")
    }

    if (bug === "beetle") {
        picInsert("beetle")
    } else if (bug === "cricket") {
        picInsert("cricket")
    } else if (bug === "bee") {
        picInsert("bee")
    }
}

window.addEventListener("load", () => {
    document.querySelector("form").addEventListener("submit", userInput);
    document.querySelector("#exit").addEventListener("click", resultReset);
    document.querySelector("input").addEventListener("click", picPicker);
});