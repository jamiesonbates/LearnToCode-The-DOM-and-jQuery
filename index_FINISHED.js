// Select all keys
const $keys = $('.key');

$(window).on('keydown', (event) => {
  const $key = $(`.key[data-key=${event.keyCode}]`);
  console.log($key);
  const $audio = $(`audio[data-key=${event.keyCode}]`)[0];
  console.log($audio);
  $key.addClass('playing');

  $audio.currentTime = 0;

  $audio.play();
});
