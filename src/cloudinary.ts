import './cloudinary.css'

const video = document.querySelector('video') as HTMLMediaElement;
const eventLog = document.querySelector('.event-log-contents') as HTMLPreElement;

video.addEventListener('play', (event: Event) => {
    console.log('The Boolean paused property is now false. Either the ' +
        'play() method was called or the autoplay attribute was toggled.');
    console.info({ event });
});

function handleEvent(event: Event) {
    eventLog.innerHTML += `${event.timeStamp} - ${event.type} - ${event.target?.currentSrc}\n`;
    console.info({ event });
}

video.addEventListener('loadstart', handleEvent);
video.addEventListener('progress', handleEvent);
video.addEventListener('canplay', handleEvent);
video.addEventListener('canplaythrough', handleEvent);