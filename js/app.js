$('#button').on('click', () => {
  $('#farkle').toggleClass('transition-active');
});

$('#button2').on('click', () => {
  $('#pollster').toggleClass('transition-active');
});

$('#button3').click(() => {
  $('.transition').toggleClass('transition-active')
});