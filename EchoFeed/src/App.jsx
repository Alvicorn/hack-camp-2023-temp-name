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
    title: '',
    category: '',
    summary: '',
    linkFull: '',
  });

  const handleCardClick = ({ title, category, summary, linkFull }) => {
     setRightSectionInfo({
      ...rightSectionInfo,
      title: title, 
      category: category, 
      summary: summary, 
      linkFull: linkFull 
    });
  };

  return (
    <div className="bg">
      <div className="app-container">
        <div className = "app-header">
          <h1 className="app-header-title">Today's Headlines</h1>
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
            title="WeWork has failed. Like a lot of other tech startups, it left damage in its wake"
            category="Business"
            summary="The worksharing giant WeWork was supposed to fundamentally alter the future of the office. It raised billions of dollars, signed leases in office towers across North America but filed for bankruptcy protection last week."
            linkFull="https://www.cbc.ca/news/business/armstrong-start-ups-wework-uber-1.7032264"
            onClick={handleCardClick}
          />
        <News
            title="Kyutai is a French AI research lab with a $330 million budget that will make everything open source"
            category="Tech"
            summary="This new lab, called Kyutai, will be a privately funded nonprofit working on artificial general intelligence. It will work with PhD students, postdocs and researchers on research papers and open source projects"
            linkFull="https://techcrunch.com/2023/11/17/kyutai-is-an-french-ai-research-lab-with-a-330-million-budget-that-will-make-everything-open-source/?guccounter=1"
            onClick={handleCardClick}
          />
        <News
            title="‘It’s a Small World’ sees big fracas as streaker strips down at Disneyland"
            category="Trending"
            summary="Disneyland‘s “It’s a Small World” attraction was the site of a big disturbance over the weekend when a man decided to strip down mid-ride and crawl around the exhibit, to the shock of his fellow passengers."
            linkFull="https://globalnews.ca/news/10117385/naked-man-small-world-ride-disneyland/"
            onClick={handleCardClick}
          />
        <News
            title="‘Too much mayonnaise’: Subway worker shot to death after sandwich argument"
            category="World"
            summary="A fight over how much mayonnaise is too much has ended in the death of a Subway worker in Atlanta, police have confirmed. According to WBRZ in Atlanta, a customer shot two Subway workers after a complaint about his sandwich on Sunday evening."
            linkFull="https://globalnews.ca/news/8951284/mayonnaise-shooting-atlanta-subway/"
            onClick={handleCardClick}
          />
        <News
            title="ICYMI: the week's 7 biggest tech stories"
            category="Tech"
            summary="If you hadn't noticed already, the starting gun has now fired on the Black Friday sales. And while that means most tech fans are compiling wishlists and finalizing their Christmas shopping battleplans, it doesn't mean the tech news has ground to a halt."
            linkFull="https://www.techradar.com/tech/icymi-the-weeks-7-biggest-tech-stories-from-imessage-shocks-to-black-friday-deals"
            onClick={handleCardClick}
          />
        <News
            title="Soome NewChatGPT CEO fired, Amazon job cuts, some UPI IDs to be deactivated and more top tech news of the week"
            category="Tech"
            summary="ChatGPT board has sacked the company’s CEO Sam Altman. Amazon is cutting more jobs in its Alexa division. NPCI has asked Paytm, Google Pay, PhonePe and other payment apps to deactivate UPI IDs that have been inactive for more than a year."
            linkFull="https://www.gadgetsnow.com/slideshows/chatgpt-ceo-fired-amazon-job-cuts-some-upi-ids-to-be-deactivated-and-more-top-tech-news-of-the-week/photolist/105320118.cms"
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
