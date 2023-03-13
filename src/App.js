import logo from './logo.svg';
import './App.css';
import MyPara from './components/MyPara';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'green'}}>Hi from React</h1>
      <MyPara text={'Basic HTML and CSS'} />
      <MyPara text={'Smell the React'} />
      <MyPara text={'JSX'} />
      <MyPara text={'ES6/ ES7'} />
      <MyPara text={'Babel'} />
      <MyPara text={'Webpack'} />
      <MyPara text={'React file system'} />
      <MyPara text={'package.js'} />
    </div>
  );
}

export default App;
