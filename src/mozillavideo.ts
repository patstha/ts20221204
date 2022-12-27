import './mozillavideo.css';

const supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
    const videoContainer = document.getElementById('videoContainer') as HTMLElement;
    const video = document.getElementById('video') as HTMLVideoElement;
    const videoControls = document.getElementById('video-controls') as HTMLUListElement;
    // Hide the default controls
    video.controls = false;

    // Display the user defined video controls
    videoControls.style.display = 'block';

    const playpause = document.getElementById('playpause') as HTMLButtonElement;
    const stop = document.getElementById('stop') as HTMLButtonElement;
    const mute = document.getElementById('mute') as HTMLButtonElement;
    const volinc = document.getElementById('volinc') as HTMLButtonElement;
    const voldec = document.getElementById('voldec') as HTMLButtonElement;
    const progress = document.getElementById('progress') as HTMLProgressElement;
    const progressBar = document.getElementById('progress-bar') as HTMLButtonElement;
    const fullscreen = document.getElementById('fs') as HTMLButtonElement;

    playpause.addEventListener('click', (e: Event) => {
        console.info({ e });
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    });

    stop.addEventListener('click', (e: Event) => {
        console.info({ e });
        video.pause();
        video.currentTime = 0;
        progress.value = 0;
    });

    mute.addEventListener('click', (e: Event) => {
        console.info({ e });
        video.muted = !video.muted;
    });

    volinc.addEventListener('click', (e: Event) => {
        console.info({ e });
        alterVolume('+');
    });
    voldec.addEventListener('click', (e: Event) => {
        console.info({ e });
        alterVolume('-');
    });

    function alterVolume(dir: string) {
        const currentVolume = Math.floor(video.volume * 10) / 10;
        if (dir === '+' && currentVolume < 1) {
            video.volume += 0.1;
        } else if (dir === '-' && currentVolume > 0) {
            video.volume -= 0.1;
        }
    }

    video.addEventListener('loadedmetadata', () => {
        progress.setAttribute('max', video.duration.toString());
    });

    video.addEventListener('timeupdate', () => {
        if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration.toString());
        progress.value = video.currentTime;
        progressBar.style.width = `${Math.floor(video.currentTime * 100 / video.duration)}%`;
    });

    progress.addEventListener('click', (e) => {
        const rect = progress.getBoundingClientRect();
        const pos = (e.pageX - rect.left) / progress.offsetWidth;
        video.currentTime = pos * video.duration;
    });

    if (!document?.fullscreenEnabled) {
        fullscreen.style.display = 'none';
    }

    fullscreen.addEventListener('click', (e) => {
        handleFullscreen();
    });


    function handleFullscreen() {
        if (document.fullscreenElement !== null) {
            // The document is in fullscreen mode
            document.exitFullscreen();
            setFullscreenData(false);
        } else {
            // The document is not in fullscreen mode
            videoContainer.requestFullscreen();
            setFullscreenData(true);
        }
    }

    function setFullscreenData(state: unknown) {
        videoContainer.setAttribute('data-fullscreen', (!!state).toString());
    }

    document.addEventListener('fullscreenchange', (e) => {
        setFullscreenData(!!document.fullscreenElement);
    });


}
