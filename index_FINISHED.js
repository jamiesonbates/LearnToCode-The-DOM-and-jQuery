// Select all keys
const $keys = $('.key');

$(window).on('keydown', (event) => {
  console.log(event);
  const $key = event.keyCode;
  console.log($key);
  // $(event.target).attr('data-key');
  const $audio = $(`audio[data-key=${$key}]`)[0];

  $audio.currentTime = 0;

  $audio.play();
});
