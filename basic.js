/* global $ */
'use strict';

var global = window.global_var = {}; //get the open window in a browser, get the global variables, set all variables to nothing

global.sample_01 = function() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return "Result: " + sum;
};

global.sample_02 = function() {
  $('.sample-02 .output').css('border', '2px solid blue');
};

global.sample_03 = function() {
  $('.sample-03 .output').html('Click count: <span class="counter-div">0</span>'); //Set the HTML contents of each element in the set of matched elements.
  $('.sample-03 .my-button').on('click', global.increase_counter); //Attach an event handler function for one or more events to the selected elements.
};

global.counter = 0;

global.increase_counter = function() {
  global.counter++;
  $('.sample-03 .output .counter-div').html(global.counter);
};

global.sample_04 = function() {
  $.ajax({
    url: "http://edwardmcenrue.com/",
    dataType: 'text',
    success: function(data) {
      console.log($(data).find('h2')[0].firstChild.textContent);
      $('.sample-04 .output').html("I am a: " + $(data).find('h2')[0].firstChild.textContent.toString());
    }
  });
};


$('.sample-01 .output').html(global.sample_01());
global.sample_02();
global.sample_03();
global.sample_04();


