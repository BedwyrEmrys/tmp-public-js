	function increasePlaybackSpeed() {
    // Get the video player element
    const videoPlayer = document.querySelector('.video-stream');
 
    // Check if the video player element exists
    if (videoPlayer) {
        // Get the current playback speed
        const currentSpeed = videoPlayer.playbackRate;
 
        // Check if the current playback speed is 1 (normal speed)
        if (currentSpeed === 1) {
            // Increase the playback speed to 5x
            videoPlayer.playbackRate = 5;
            console.log('Playback speed increased to 5x');
        } else {
            // Decrease the playback speed back to normal
            videoPlayer.playbackRate = 1;
            console.log('Playback speed decreased to normal');
        }
    } else {
        console.error('Video player element not found');
    }
}
