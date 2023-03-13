import logo from './logo.svg';
import './App.css';
import MyPara from './components/MyPara';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Hi from React</h1>
      <MyPara status='completed' text={'Basic HTML and CSS'} />
      <MyPara status='completed' text={'Smell the React'} />
      <MyPara status='completed' text={'JSX'} />
      <MyPara status='completed' text={'ES6/ ES7'} />
      <MyPara status='on-going' text={'Babel'} />
      <MyPara status='not-started' text={'Webpack'} />
      <MyPara status='not-started' text={'React file system'} />
      <MyPara status='not-started' text={'package.js'} />
    </div>
  );
}

export default App;
