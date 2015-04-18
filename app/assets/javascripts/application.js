// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require refile
//= require vendor/underscore-min
//= require vendor/backbone-min
//= require path/router
//= require_directory ./path/models
//= require_directory ./path/collections
//= require_directory ./path/views
//= require_tree .


$(document).ready(function(){
  console.log(isSignedIn);
  $(window).on('scroll', function(){
    var isSignedIn = $('body').hasClass('signed-in');
    if(!isSignedIn){
      scrollCheck();
    }
  });
});

function scrollCheck(){
  var distance = $(window).scrollTop();
  if (distance != 0){
    $('body').addClass('black-topnav');
  } else {
    $('body').removeClass('black-topnav');
  }
}
