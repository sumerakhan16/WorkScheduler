//The ready() method is used to make a function available after the html document is loaded. code that is written between this fuction will run once the page DOM is ready to execute JavaScript code.
$(document).ready(function() {

//This function is created to turn the screen to dark mode. This is the special feature added. 
  function myFunction() {

//This is just explaining that we are grabbing the element from document.body in the html file and switching it to dark mode.
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  //the .on attaches one or more event handlers for the selected elements and child elements. this saves the information user wrote, once the save button is clicked.
  $(".saveBtn").on("click", function() {

    // get nearby values
    // wrap in a jquery function $() to select it 
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

  // save in localStorage
    localStorage.setItem(time, value);
  });

  // this function gets the current number of hours
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    
    
    // loop over time blocks
    // the parseInt function parses a string and returns an integer. 
    // the split method splits a string into an array of substrings, and returns the new array
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time.  
      // the addclass method adds one or more class names to the selected elements, 
      // This method does not remove existing class attributes, it only adds one or more class names to the class attribute. 
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      // using a strict equality comparison to compare both value and data type, if false it will remove class from past and add it to present
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      // setting restrictions so if it returns false for all the mentioned it will addclass 'future'
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

      }

    });
  }
// calling out the fuction hourUpdater to run it on the page. Without doing so, function will not run.
  hourUpdater();

  // This is an interval to check if current time needs to be updated on the page. Check time every 15 seconds (15000 milleseconds). 
  var interval = setInterval(hourUpdater, 15000);

  // #hour-"number" has it so that we can refer to the id from the html documnent. .val is a jQiery syntax to return the value atrribute. the local stoage.getitem is a function that will retrieve data the user entered. the data is stored in local storage as it is specific to the user's workday schedule.load. This information will not be deleted unless done so by the user themselves.
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));


  // .text Renders the current date on the top of page. moment.format is used to describe time. it is generated from the moment.js library . This allows it so that the page resets everyday to match correct day.
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

});
