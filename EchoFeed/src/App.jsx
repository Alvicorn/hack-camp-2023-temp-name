import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './News.jsx'
import Player from './Player.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg">
      <div className="app-container">
        <div className = "app-header">
          <h1 className="app-header-title">EchoFeed</h1>
          <div className="app-header-right">
            <p className="app-header-right-text">Text size</p>
            <div className = "app-header-text-buttons">
              <button className="app-header-text-button">About</button>
              <button className="app-header-text-button">Contact</button>
              <button className="app-header-text-button">Login</button>
            </div>
          </div>
        </div>
        <div className="feed-container">
          <News imageSrc={reactLogo} title="React" category="JavaScript" buttonText="Learn More" />
          <News imageSrc={reactLogo} title="React" category="JavaScript" buttonText="Learn More" />
          <News imageSrc={reactLogo} title="React" category="JavaScript" buttonText="Learn More" />
          <News imageSrc={reactLogo} title="React" category="JavaScript" buttonText="Learn More" />
          <News imageSrc={reactLogo} title="React" category="JavaScript" buttonText="Learn More" />
          <News imageSrc={reactLogo} title="React" category="JavaScript" buttonText="Learn More" />
        </div>
      </div>
      <div className="player-container">
        <Player title="What's up world"
        image={reactLogo}
        summary="Some random stuff for now for summmary"
        linknews="https://www.ft.com/content/a83f9ee7-8386-4996-b871-3d6c5a77c324"
        // implement reader
        />
      </div>
    </div>
  )
}

export default App;
