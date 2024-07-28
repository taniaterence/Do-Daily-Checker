$(function () {
  let dateBox = document.getElementsByClassName("grid-item");
  let checkMark = document.getElementsByClassName("check-mark");

  console.log(dateBox[0]);
  console.log(checkMark[0]);


  function toggleHideShowBox(event) {
    console.log(event)
    console.log("I've been clicked!");
      //console.log(event.target.childNodes[1]);
      if(event.target.childNodes[1].style.visibility == "hidden") {
        event.target.childNodes[1].style.visibility = "visible"
      }
      else {
        event.target.childNodes[1].style.visibility = "hidden"
      }
  }

  function toggleHideShowCheck(event) {
    console.log(event)
    console.log("I've been clicked!");
      //console.log(event.target.childNodes[1]);
      if(event.target.style.visibility == "hidden") {
        event.target.style.visibility = "visible"
      }
      else {
        event.target.style.visibility = "hidden"
      }
  }

  for (let i = 0; i < dateBox.length; i++) {
    dateBox[i].addEventListener("click", toggleHideShowBox);
    checkMark[i].addEventListener("click", toggleHideShowCheck);
  }
})
