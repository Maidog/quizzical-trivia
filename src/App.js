import blob1 from './blob1.png';
import blob2 from './blob2.png';
import './App.css';
import Start from './components/Start'

function App() {
  function startQuiz() {
    getQuizData()
  }

  function getQuizData() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <img src={blob1} className="App-blob1"/>
        <Start startQuiz={startQuiz}/>
        <img src={blob2} className="App-blob2"/>
    </div>
  );
}

export default App;
