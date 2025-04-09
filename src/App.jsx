function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#2a4365' }}>🥊 MatchmakerPro</h1>
      <p>Welcome to the MVP demo dashboard. You are seeing this because your app is working correctly!</p>
    </div>
  );
}

import FighterProfiles from './components/FighterProfiles';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <FighterProfiles />
    </div>
  );
}

export default App;



