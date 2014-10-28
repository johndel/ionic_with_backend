$(function() {
});

function toggle_navbar(state) {
  if(state) {
    $(".first_state").show();
    $(".logged_state").hide(); 
  } else {
    $(".first_state").hide();
    $(".logged_state").show();
  }
}