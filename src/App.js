import './App.css';
import CompanyContainer from './components/CompanyContainer';
import FormContainer from './components/Form/FormContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompanyContainer/>
        <FormContainer/>
      </header>
    </div>
  );
}

export default App;
