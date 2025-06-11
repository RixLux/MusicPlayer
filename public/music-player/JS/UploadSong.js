
  function loadUploadMusic() {
    const mainContent = document.getElementById('main-content');

    // Simulate user verification
    const isRegistered = confirm("Are you a registered user? Click 'OK' for Yes, 'Cancel' for No."); 

    if (!isRegistered) {
      mainContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <p>It seems you are not registered yet.</p>
          <a href="/MusicPlayer/register.html" style="color: #007BFF; font-weight: bold; text-decoration: underline;">Register Here</a>
        </div>
      `;
    } else {
      mainContent.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px;">Upload Your Music</h2>
        <form id="upload-form" style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; flex-direction: column;">
            <label for="song-name" style="font-weight: bold;">Song Name:</label>
            <input type="text" id="song-name" name="song-name" placeholder="Enter the song name" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="album-name" style="font-weight: bold;">Album Name:</label>
            <input type="text" id="album-name" name="album-name" placeholder="Enter the album name" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <div style="display: flex; align-items: center; gap: 20px;">
            <div style="flex: 1;">
              <label for="album-art" style="font-weight: bold;">Album Art:</label>
              <input type="file" id="album-art" name="album-art" accept="image/*" required style="padding: 10px;">
            </div>
            <div id="preview" style="flex: 1; text-align: center;">
              <p style="margin-bottom: 10px;">Album Art Preview:</p>
              <img src="" alt="Preview" style="max-width: 100%; max-height: 200px; border: 1px solid #ccc; display: none;" id="album-preview">
            </div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="file-upload" style="font-weight: bold;">Music File:</label>
            <input type="file" id="file-upload" name="music-file" accept=".mp3, .wav, .ogg" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
          </div>
          <button type="submit" style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Upload
          </button>
        </form>
      `;

      // Add album art preview functionality
      const albumArtInput = document.getElementById('album-art');
      const previewImage = document.getElementById('album-preview');

      albumArtInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
          };
          reader.readAsDataURL(file);
        } else {
          previewImage.style.display = 'none';
        }
      });

      // Add event listener for the form submission
      const uploadForm = document.getElementById('upload-form');
      uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Music uploaded successfully with the details!');
      });
    }
  }

