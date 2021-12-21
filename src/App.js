import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Features1 from './components/Features1';
import Services from './components/Services';
import Subscribe from './components/Subscribe';

const timelineData = [
  {
      text1: '• Fundraising',
      text2: '• IDO',
      date: 'Q1-2022',
      
  },
  {
    text1: '• Beta Testing',
    text2: '• Marketing',
    date: 'Q2-2022',
      
  },
  {
    text1: '• Gameplay update',
    text2: '• Events and Pre-Sales',
    date: 'Q3-2022',
      
  },
  {
    text1: '• DAO Platform',
    text2: '• Land Selling',
    date: 'Q4-2022',
      
  },
      
  
]

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
      <div className="timeline-item-content">
          
          <time>{data.date}</time>
          <p>{data.text1}</p>
          <p>{data.text2}</p>
          <span className="circle" />
          
      </div>
  </div>
);
const divStyle = {
  padding: 30,
};

const Timeline = () =>
  timelineData.length > 0 && (
      <div className="timeline-container" id="timeline" style={divStyle}>
          {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
          ))}
      </div>
  );

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='f-heading'></div>
      
      <Features/>
      <Timeline/>
      <Features1/>
      <Services/>
      
      <Subscribe/>
      
    </div>
  );
}

export default App;
