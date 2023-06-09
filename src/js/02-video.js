import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((videoInfo) => {
  localStorage.setItem("videoplayer-current-time", videoInfo.seconds);
}, 1000));

const timeValue = localStorage.getItem("videoplayer-current-time");

if (timeValue !== null) {
  player.setCurrentTime(timeValue);
};


