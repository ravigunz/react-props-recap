import logo from './logo.svg';
import './App.css';
import MyPara from './components/MyPara';

const courseContent = [
  {
  status:'completed', 
  text: 'Basic HTML and CSS',
},
  {
  status:'completed', 
  text: 'Smell the React',
},
  {
  status:'completed', 
  text: 'JSX',
},
  {
  status:'completed', 
  text: 'ES6/ ES7',
},
  {
  status:'completed', 
  text: 'Babel',
},
  {
  status:'on-going', 
  text: 'Webpack',
},
  {
  status:'not-started', 
  text: 'React file system',
},
  {
  status:'not-started', 
  text: 'package.js',
},
];

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Hi from React</h1>
      {courseContent.map((val, key) => {
        return <MyPara key={key} status={val.status} text={val.text} />
      })}
      
    </div>
  );
}

export default App;
