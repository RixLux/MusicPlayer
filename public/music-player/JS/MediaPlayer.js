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

// Array to hold the playlist of songs
var playlist = ['bgm23.ogg', 'bgm24.ogg', 'bgm25.ogg', 'bgm29.ogg', 'bgm30.ogg', 'bgm31.ogg']; 
var currentSongIndex = 0;  // Keep track of the current song

function playSong(songFile) {
  var audio = document.getElementById('audio');
  var audioSource = document.getElementById('audio-source');
  var currentSong = document.getElementById('current-song');
  var currentArtist = document.getElementById('current-artist');

  // Update audio source and start playing
  audioSource.src = 'Music/' + songFile;
  audio.load();
  audio.play();

  // Update current song info
  currentSong.textContent = songFile.split('.')[0]; // Song name without extension
  currentArtist.textContent = "Artist Name"; // You can update with artist info dynamically

  // Show the audio player
  document.getElementById('audio-player').style.display = 'block';
}

// Handle the end of a song and play the next one
document.getElementById('audio').addEventListener('ended', function () {
  // Increment the song index
  currentSongIndex++;
  
  // If we're at the end of the playlist, start over
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0;
  }

  // Play the next song
  playSong(playlist[currentSongIndex]);
});

// Optionally, you can modify the play/pause button to control the music:
document.getElementById('play-pause-btn').addEventListener('click', function() {
  var audio = document.getElementById('audio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// You can also handle next and previous song buttons if needed:
document.getElementById('next-btn').addEventListener('click', function() {
  currentSongIndex++;
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0; // Loop back to the first song
  }
  playSong(playlist[currentSongIndex]);
});

document.getElementById('prev-btn').addEventListener('click', function() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1; // Loop to the last song
  }
  playSong(playlist[currentSongIndex]);
});