//$(document).ready(function(){     

$("#timer").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem + ' ' + timer.day);
setInterval(function() {
  $("#timer").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem + ' ' + timer.day);
}, 1000);

var p = 0;

function moveit() {
  p += 0.02;

  var r = 185;
  var xcenter = 700;
  var ycenter = 400;
  var newLeft = Math.floor(xcenter + (r * Math.cos(p)));
  var newTop = Math.floor(ycenter + (r * Math.sin(p)));
  $('#friends').animate({
    top: newTop,
    left: newLeft,
  }, 10, function() {
    moveit()
  });
  $('#friends2').animate({
    top: newTop,
    left: newLeft,
  }, 17, function() {
    moveit();
  });
  $('#friends3').animate({
    top: newTop,
    left: newLeft,
  }, 13, function() {
    moveit();
  });
  $('#friends4').animate({
    top: newTop,
    left: newLeft,
  }, 80, function() {
    moveit();
  });
}
$(document).ready(function() {
  moveit();

});

function progress(percent, element) {
  var progressBarWidth = percent * element.width() / 100;
  // With labels:
  element.find('div').animate({
    width: progressBarWidth
  }, 500).html(percent + "%&nbsp;");

  // Without labels:
  //element.find('div').animate({ width: progressBarWidth }, 500);
}

$(document).ready(function() {
  $('.progressBar').each(function() {
    //alert('Hello');
    var bar = $(this);
    var max = $(this).attr('id');
    max = max.substring(3);

    progress(max, bar);
  });
});
