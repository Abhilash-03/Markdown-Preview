import './App.css';
import Footer from './components/Footer';
import Mardown from './components/Mardown';

function App() {
  return (
    <div className="App">
      <h2 className="main-heading">Mardown Preview</h2>
      <Mardown mark={"# Hello-markdown\n### See preview here..."} />
      <Footer/>
    </div>
  );
}

export default App;
