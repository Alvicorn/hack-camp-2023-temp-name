import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './News.jsx'
import Player from './Player.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
  const [rightSectionInfo, setRightSectionInfo] = useState({
    title: 'Default Title',
    category: 'Default Category',
    summary: 'Default Summary',
    linkFull: 'Default Link',
  });

  const handleCardClick = ({ title, category, summary, linkFull }) => {
    setRightSectionInfo({ title, category, summary, linkFull });
  };

  return (
    <div className="bg">
      <div className="app-container">
        <div className = "app-header">
          <h1 className="app-header-title">EchoFeed</h1>
          <div className="app-header-right">
            <p className="app-header-right-text">Text size</p>
            <div className = "app-header-text-buttons">
              <button className="app-header-text-button" id="smaller">Aa</button>
              <button className="app-header-text-button" id="bigger">Aa</button>
            </div>
          </div>
        </div>
        <div className="feed-container">
        <News
            title="React"
            category="JavaScript"
            buttonText="Learn More"
            linkFull="Link for React"
            onClick={handleCardClick}
          />
        <News
            title="React"
            category="JavaScript"
            buttonText="Learn More"
            linkFull="Link for React"
            onClick={handleCardClick}
          />
        <News
            title="React"
            category="JavaScript"
            buttonText="Learn More"
            linkFull="Link for React"
            onClick={handleCardClick}
          />
        <News
            title="React"
            category="JavaScript"
            buttonText="Learn More"
            linkFull="Link for React"
            onClick={handleCardClick}
          />
        <News
            title="React"
            category="JavaScript"
            buttonText="Learn More"
            linkFull="Link for React"
            onClick={handleCardClick}
          />
        <News
            title="React"
            category="JavaScript"
            buttonText="Learn More"
            linkFull="Link for React"
            onClick={handleCardClick}
          />
        </div>
      </div>
      <div className="player-container">
        <Player {...rightSectionInfo}
        // implement reader
        />
      </div>
    </div>
  )
}

export default App;
