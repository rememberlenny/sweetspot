$(document).ready(function(){
  $('.alert').each(function(i, item){
    console.log('i: ', i);
    console.log('item: ', item);
    setTimeout(function(){
      $(item).fadeOut();
    }, 3000);
  });
});
