let dateBox = document.getElementsByClassName(".grid-item")
let checkMark = document.querySelectorAll(".check-mark")
console.log(dateBox)
console.log(checkMark)

for (let i = 0; i < dateBox.length; i++) {
    dateBox[i].addEventListener("click", (event) => {
        console.log("I've been clicked!")
        event.target.closest().style.visibility = "visible"
    });
}

