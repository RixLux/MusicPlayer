
  function resetPage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <h2>Welcome to Your MusicPlayer</h2>
      <p>Start playing your favorite tunes or explore new ones!</p>
      
      <!-- New Additions -->
      <section class="featured-playlist">
        <h3>Featured Playlist</h3>
        <div class="playlist-card">
          <img src="featured-playlist.jpg" alt="Featured Playlist">
          <div class="playlist-info">
            <h4>Summer Vibes</h4>
            <p>Perfect playlist to relax and unwind.</p>
          </div>
        </div>
      </section>
      
      <section class="song-recommendations">
        <h3>Recommended for You</h3>
        <ul>
          <li>Song 1 - Artist</li>
          <li>Song 2 - Artist</li>
          <li>Song 3 - Artist</li>
        </ul>
      </section>
      
      <section class="trending-now">
        <h3>Trending Now</h3>
        <ul>
          <li>Hit Song 1</li>
          <li>Hit Song 2</li>
          <li>Hit Song 3</li>
        </ul>
      </section>
    `;
  }
