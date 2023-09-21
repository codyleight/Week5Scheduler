var today = dayjs();
var buttonListEl = $('.btn');
var description = $('.description');

var now = new Date();
var currentHour = now.getHours();

$('#currentDay').text(today.format('MMM D, YYYY')); // sets time at top to our current date.

var memos = 9; //setting amount of Memos we can store. if we want to work the local storage with an index.

//Section grabs the localstorage item we set.
var stored = localStorage.getItem('memo1')  
var stored2 = localStorage.getItem('memo2')

// section for grabbing localstorage ^^^^


// Grabbing our specific id's to overwrite the text based upon localstorage
var nineAm = $('#hour-9');
var tenAm = $('#hour-10');
var elevenAm = $('#hour-11');
var twelveAm = $('#hour-12');
var onePm = $('#hour-13');
var twoPm = $('#hour-14');
var threePm = $('#hour-15');
var fourPm = $('#hour-16');
var fivePm = $('#hour-17');
// Grabbing our specific id's to overwrite the text based upon localstorage ^^^^



// assign value of our specific ids here .
nineAm.children('.description').get(0).value = stored;
tenAm.children('.description').get(0).value = stored2;





$(function () {
  
  var elements = [ // creating an object array to hold our value of what the id is hour wise, and selecting the the element to edit.
    { hour: 9, element: nineAm },
    { hour: 10, element: tenAm },
    { hour: 11, element: elevenAm},
    { hour: 12, element: twelveAm },
    { hour: 13, element: onePm },
    { hour: 14, element: twoPm },
    { hour: 15, element: threePm },
    { hour: 16, element: fourPm },
    { hour: 17, element: fivePm },
    
  ];
  
  elements.forEach(({ hour, element }) => {
    if (currentHour === hour) {
      element.addClass("present");
    } else if (currentHour > hour) {
      element.addClass("past");
    } else {
      element.addClass("future");
    }
  });

  console.log(currentHour);
});

buttonListEl.on('click', function (event) { //button listener.
  event.preventDefault();

var buttonDate = $('<button>'); //the object we are in, this will return 
var parentDetail = $(this).parent(); //grabs id of the button we pressed.
var parentSave = $(this).parent().attr("id"); //grabs the id, we want to save the memo into this one.
var memo = parentDetail.children('.description').get(0).value; //grabs the text content of the box we are in.


if (parentSave === "hour-9"){
  localStorage.setItem('memo1', memo);
}

if (parentSave === "hour-10"){
  localStorage.setItem('memo2', memo);
}


 //setting item to local storage.

console.log(stored);
console.log(parentSave);

return stored;

});




