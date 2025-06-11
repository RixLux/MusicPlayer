
function resetPage() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
   <!-- Main Content -->

  <h2>Welcome to Your MusicPlayer</h2>
  <p>Start playing your favorite tunes or explore new ones!</p>

  <!-- New Additions -->
  <section class="featured-playlist">
    <h3>Featured Playlist</h3>
    <div class="playlist-card">
      <img src="Image/amatsutsumi.jpg" alt="Featured Playlist">
      <div class="playlist-info">
        <h4>Amatsutsumi</h4>
        <p>Perfect playlist to relax and unwind.</p>
      </div>
    </div>
  </section>

  <section class="song-recommendations">
    <h3>Recommended for You</h3>
    <ul>
      <li onclick="playSong('bgm23.ogg')">Song 1 - Artist</li>
      <li onclick="playSong('bgm24.ogg')">Song 2 - Artist</li>
      <li onclick="playSong('bgm25.ogg')">Song 3 - Artist</li>
    </ul>
  </section>

  <section class="trending-now">
    <h3>Trending Now</h3>
    <ul>
      <li onclick="playSong('bgm29.ogg')">Hit Song 1</li>
      <li onclick="playSong('bgm30.ogg')">Hit Song 2</li>
      <li onclick="playSong('bgm31.ogg')">Hit Song 3</li>
    </ul>
  </section>

  

  `;
}
