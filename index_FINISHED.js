$(window).on('keydown', (event) => {
  const $key = $(`.key[data-key=${event.keyCode}]`);
  const $audio = $(`audio[data-key=${event.keyCode}]`)[0];

  $key.addClass('playing');

  $audio.currentTime = 0;

  $audio.play();
});

$('.key').on('transitionend', (event) => {
  $(event.target).removeClass('playing');
});
