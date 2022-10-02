import './App.css';
import Searchbar from './components/Searchbar';
import Incomegraphs from './components/Incomegraphs';
import Assetchart from './components/Assetchart';
import Cashchart from './components/Cashchart';
import Assumptions from './components/Assumptions';
import Sidebar from './components/Sidebar';
import {FinancialInfoContextProvider} from './context/Financialcontext';


function App() {
  return (
    <div className="App">
	<FinancialInfoContextProvider>
		<Sidebar/>
		<Searchbar />
		<Incomegraphs />
		<Assetchart />
		<Cashchart />
		<Assumptions />
	  </FinancialInfoContextProvider>
    </div>
  );
}

export default App;
