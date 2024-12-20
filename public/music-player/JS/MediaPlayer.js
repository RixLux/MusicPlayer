function enlargeContent() {
    const mainContent = document.getElementById('main-content');

    // Simulate the currently playing song info
    const currentSong = document.getElementById('current-song').innerText;
    const currentArtist = document.getElementById('current-artist').innerText;

    // Example image or video associated with the current song
    const mediaType = currentSong === "No song playing" ? "none" : "image"; // Example: Toggle between 'image' or 'video'
    const mediaSource = currentSong === "No song playing" 
        ? "" 
        : (mediaType === "image" 
            ? "song-image.jpg" // Replace with dynamic image URLs
            : "song-video.mp4"); // Replace with dynamic video URLs

    if (mediaType === "none") {
        mainContent.innerHTML = `
            <h2>No Media Available</h2>
            <p>Play a song to see its artwork or video.</p>
        `;
    } else if (mediaType === "image") {
        mainContent.innerHTML = `
            <h2>Now Playing: ${currentSong}</h2>
            <p>Artist: ${currentArtist}</p>
            <img src="${mediaSource}" alt="${currentSong}" class="enlarged-media">
        `;
    } else if (mediaType === "video") {
        mainContent.innerHTML = `
            <h2>Now Playing: ${currentSong}</h2>
            <p>Artist: ${currentArtist}</p>
            <video src="${mediaSource}" controls class="enlarged-media"></video>
        `;
    }
}

function playSong(song, artist, mediaType, mediaSource) {
    document.getElementById('current-song').innerText = song;
    document.getElementById('current-artist').innerText = artist;

    // Store media type and source for enlarge function (optional: use global variables)
    // Example: mediaType = "image" or "video", mediaSource = "song-image.jpg" or "song-video.mp4"
}
