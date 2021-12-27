import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const saveCurrentTime = ({ seconds }) => localStorage.setItem(TIME_KEY, `${seconds}`);
const throttledTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttledTime);

const currentTime = localStorage.getItem(TIME_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    seconds = currentTime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
