import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log('The value of timelineData is', timelineData);
  console.log('We should use timelineData in our project somehow...');

  return (
    <div>
      <header className='App-header'>
        <h1 className='App-title'>Ada LoveLace's Social media feed</h1>
      </header>
      <div className='App-main'>
        <Timeline timelineData = {timelineData}/>
      </div>
    </div>
  );
}

export default App;