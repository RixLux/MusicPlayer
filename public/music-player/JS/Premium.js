function loadPremium() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Upgrade to Premium</h2>
        <p>Enjoy ad-free music, offline playback, and exclusive content with our premium subscription.</p>
        <ul>
            <li>🎵 Unlimited skips</li>
            <li>📥 Download music for offline listening</li>
            <li>✨ Exclusive playlists and early releases</li>
        </ul>
        <div class="premium-options">
            <button onclick="selectPlan('monthly')">Monthly Plan - $9.99/month</button>
            <button onclick="selectPlan('yearly')">Yearly Plan - $99.99/year</button>
        </div>
        <div id="confirmation"></div>
    `;
}
function selectPlan(plan) {
    const confirmation = document.getElementById('confirmation');
    if (plan === 'monthly') {
        confirmation.innerHTML = `
            <p>You selected the <strong>Monthly Plan</strong> for $9.99/month.</p>
            <button onclick="confirmPremium()">Confirm Purchase</button>
        `;
    } else if (plan === 'yearly') {
        confirmation.innerHTML = `
            <p>You selected the <strong>Yearly Plan</strong> for $99.99/year.</p>
            <button onclick="confirmPremium()">Confirm Purchase</button>
        `;
    }
}
function confirmPremium() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>Thank You!</h2>
        <p>Your premium subscription has been activated. Enjoy the music!</p>
    `;
}
