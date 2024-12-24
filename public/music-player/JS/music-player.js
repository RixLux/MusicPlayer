// Placeholder interactivity for music player controls
document.getElementById('play-pause-btn').addEventListener('click', () => {
  const btn = document.getElementById('play-pause-btn');
  btn.textContent = btn.textContent === '▶' ? '⏸' : '▶';
});

document.querySelector('.expand-btn').addEventListener('click', function() {
  const playlist = document.querySelector('.playlist');
  playlist.style.display = playlist.style.display === 'none' ? 'block' : 'none';
});

// Sample playlist data
    const playlists = {
      favorite: ['Song 1 - Artist A', 'Song 2 - Artist B', 'Song 3 - Artist C'],
      chill: ['Chill Song 1 - Artist D', 'Chill Song 2 - Artist E'],
      workout: ['Workout Song 1 - Artist F', 'Workout Song 2 - Artist G'],
      study: ['Study Song 1 - Artist H', 'Study Song 2 - Artist I']
    };

    // Function to display songs in the main content area
    function showPlaylist(playlistName) {
      const mainContent = document.getElementById('main-content');
      mainContent.innerHTML = `<h2>${capitalizeFirstLetter(playlistName)} Playlist</h2>`;

      // Generate the list of songs for the selected playlist
      const songList = playlists[playlistName];
      const songListHtml = songList.map(song => `<p>${song}</p>`).join('');
      mainContent.innerHTML += songListHtml;
    }

    // Helper function to capitalize the first letter of a string
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    /*profile customization*/
    function loadProfile() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Edit Profile</h2>
        <form id="profile-form">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value="CurrentUser" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="user@example.com" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter new password">
            </div>
            <button type="button" onclick="saveProfile()">Save</button>
        </form>
    `;
}

function saveProfile() {
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving the data (you can later replace this with a server request)
    console.log("Profile saved:", { username, email, password });

    // Display success message
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Profile Updated</h2>
        <p>Your changes have been saved successfully!</p>
    `;
}

// Selecting elements
const sidebar = document.querySelector('.sidebar');
const expandBtn = document.querySelector('.expand-btn');

// Toggle visibility
expandBtn.addEventListener('click', () => {
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
});

// Make sidebar draggable
let isDragging = false;
let startX, startY;

sidebar.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - sidebar.offsetLeft;
  startY = e.clientY - sidebar.offsetTop;
  sidebar.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    sidebar.style.left = `${e.clientX - startX}px`;
    sidebar.style.top = `${e.clientY - startY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  sidebar.classList.remove('dragging');
});
