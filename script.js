var today = dayjs();
var buttonListEl = $('.btn');
var description = $('.description');

var now = new Date();
var currentHour = now.getHours();

$('#currentDay').text(today.format('MMM D, YYYY')); // sets time at top to our current date.

// var memos = 9; potentially can use this so getItems from an array.

//Section grabs the localstorage item we set. NOTE: we could use a forEach statement but our object array would look the same  and would be a bit more code.
var stored = localStorage.getItem('memo1')  
var stored2 = localStorage.getItem('memo2')
var stored3 = localStorage.getItem('memo3')
var stored4 = localStorage.getItem('memo4')
var stored5 = localStorage.getItem('memo5')
var stored6 = localStorage.getItem('memo6')
var stored7 = localStorage.getItem('memo7')
var stored8 = localStorage.getItem('memo8')
var stored9 = localStorage.getItem('memo9')

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


/*var hours = []; Need to test this for future lessons.
for (var i = 9; i <= 17; i++) {
  hours.push($('#hour-' + i));
}
*/



// assign value of our specific ids here . NOTE: we could use a forEach statement but our object array would look the same and would be a bit more code. Could be usefull in other cases.
nineAm.children('.description').get(0).value = stored;
tenAm.children('.description').get(0).value = stored2;
elevenAm.children('.description').get(0).value = stored3;
twelveAm.children('.description').get(0).value = stored4;
onePm.children('.description').get(0).value = stored5;
twoPm .children('.description').get(0).value = stored6;
threePm.children('.description').get(0).value = stored7;
fourPm.children('.description').get(0).value = stored8;
fivePm.children('.description').get(0).value = stored9;




$(function () { //outside code is run before anything as I want it to load the same time everything else does.
  
  
  var elements = [ // creating an object array to hold our value of what the id is hour wise, and selecting the the element to edit. we still have to assign the hour a value so we can use it in our math.
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
  
  elements.forEach(({ hour, element }) => { //for each hour and the hours element we are running this to check the current value of the hour and math to see if it is past present or future.
    if (currentHour === hour) {
      element.addClass("present");
    } else if (currentHour > hour) {
      element.addClass("past");
    } else {
      element.addClass("future");
    }
  });

  

  buttonListEl.on('click', function (event) { //button listener.
    event.preventDefault();
  
  var buttonDate = $('<button>'); //the object we are in, this will return - we used this for testing but did not need it in the finalized project.
  var parentDetail = $(this).parent(); //grabs id of the button we pressed.
  var parentSave = $(this).parent().attr("id"); //grabs the id, we want to save the memo into this one.
  var memo = parentDetail.children('.description').get(0).value; //grabs the text content of the box we are in.

  console.log(memo); //Console logging what text should be inside memo on button press. This will change depending on the content inside our textbox.
  
  
  switch (parentSave) { //using a switch statement to save memos to a specific slot depending on what parentsave (aka the id value ex.hour-9) instead of multiple if statements.
    case "hour-9":
      localStorage.setItem('memo1', memo);
      break;
    case "hour-10":
      localStorage.setItem('memo2', memo);
      break;
    case "hour-11":
      localStorage.setItem('memo3', memo);
      break;
    case "hour-12":
      localStorage.setItem('memo4', memo);
      break;
      case "hour-13":
      localStorage.setItem('memo5', memo);
      break;
      case "hour-14":
      localStorage.setItem('memo6', memo);
      break;
      case "hour-15":
      localStorage.setItem('memo7', memo);
      break;
      case "hour-16":
      localStorage.setItem('memo8', memo);
      break;
      case "hour-17":
      localStorage.setItem('memo9', memo);
      break;
  }
  
  
   //setting item to local storage.
  
  
  console.log(parentSave); //console log out our current hour box.
  
 //returning stored value.
  
  });
});






