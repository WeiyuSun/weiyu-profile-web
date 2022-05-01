const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
    console.log(`text number ${i + 1} length is ${text[i].getTotalLength()}`)
}

const lastword = document.querySelector("#twenty-fourth");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => { animation.style = "transition: all 1s ease; opacity: 0; pointer-events; z-index:-2;" })