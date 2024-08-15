let dateBox = document.getElementsByClassName("date-box");
let dates = document.getElementsByClassName("date");
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Allocating dates in each month ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

//console.log(currentDate);
let monthEl = document.getElementById("month");
monthEl.innerHTML = months[currentDate.getMonth()];

//Determining which day the first day of the month falls on
let firstDate = new Date((months[currentDate.getMonth()]) + " 1, " + currentYear);
let firstDay = days[firstDate.getDay()]; 
//console.log(firstDay);

//Determining the number of days in a month
daysInMonth = new Date(currentYear, currentDate.getMonth(), 0).getDate();
//console.log(daysInMonth);

let numStart = firstDate.getDay();
for (let x = 1; x <= daysInMonth; x++) {
  dates[numStart].textContent = x;
  numStart++;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

//Function to toggle appearance of check mark within the date boxes
function toggleHideShow(event) {
  console.log(event);
  console.log(event.target.childNodes[3]);
  if (event.target.classList.contains("date-box")) {
    event.target.childNodes[3].style.visibility =
      event.target.childNodes[3].style.visibility === "visible"
        ? "hidden"
        : "visible";
  } else {
    event.target.style.visibility =
      event.target.style.visibility === "visible" ? "hidden" : "visible";
  }
}

for (let i = 0; i < dateBox.length; i++) {
  dateBox[i].addEventListener("click", toggleHideShow);
}

/*
   

      
  /*function toggleHideShowCheck(event) {
    console.log(event);
    console.log("I've been clicked!");
    //console.log(event.target.childNodes[1]);
    if (event.target.style.visibility == "hidden") {
      event.target.style.visibility = "visible";
    } else {
      event.target.style.visibility = "hidden";
    }
  }*/

/*if (event.target.childElementsCount == 1) {
      if (event.target.childNodes[1].style.visibility == "hidden") {
        event.target.childNodes[1].style.visibility = "visible";
      } else {
        event.target.childNodes[1].style.visibility = "hidden";
      }
    } else {
      if (event.target.style.visibility == "hidden") {
        event.target.style.visibility = "visible";
      } else {
        event.target.style.visibility = "hidden";
      }
    }*/

//console.log("event.target.style.visibility : " + (event.target.style.visibility));
//console.log("event.target.childNodes[1].style.visibility : " + (event.target.childNodes[1].style.visibility));
//console.log("checkMarkStyle: " + (checkMarkStyle.visibility));

/*if (event.target.classList.contains('grid-item')) {
      event.target.childNodes[1].classList.toggle("check-mark")
    } else {
      event.target.style.classList.toggle("check-mark")
    }*/

/*for  (let i = 0; i < checkMark.length; i++) {
    checkMarkStyle = window.getComputedStyle(checkMark[i]);
  }*/
