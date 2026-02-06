import React, { useState } from 'react';

export default function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non", "Tu es sûre ?", "Vraiment sûre ?", "Océane s'il te plaît...",
      "Réfléchis encore !", "Dernière chance !", "Tu vas regretter !",
      "Sois gentille...", "C'est ton dernier mot ?", "Tu me brises le cœur 💔"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUv1Ou86z98AAAAi/tkthao219-bubududu.gif" alt="Cœurs" />
          <h1 style={{ color: '#ff4d6d', margin: '20px 0' }}>Tu fais battre mon cœur, Océane... ✨</h1>
          <div style={{ padding: '20px', backgroundColor: 'rgba(255, 240, 243, 0.8)', borderRadius: '20px', border: '1.5px solid #ff4d6d' }}>
            <p style={{ color: '#ff4d6d', fontWeight: 'bold', textTransform: 'uppercase' }}>Au programme de notre escale :</p>
            <p>🌸 <b>Un bouquet de fleurs pour ton sourire</b></p>
            <p>🍣 <b>Une soirée sushis rien que pour nous deux</b></p>
          </div>
        </>
      ) : (
        <>
          <img src="https://media.tenor.com/vH_m365p_6AAAAAi/kiss-can-i-have-a-kiss.gif" alt="Bear asking" />
          <h1 style={{ margin: '20px 0' }}>Océane, veux-tu être ma Valentine ? 🌹</h1>
          <div>
            <button
              style={{ fontSize: `${yesButtonSize}px`, backgroundColor: '#28a745', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}
              onClick={() => setYesPressed(true)}
            >
              Oui
            </button>
            <button
              style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
