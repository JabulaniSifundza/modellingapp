import './App.css';
import Searchbar from './components/Searchbar';
import Incomegraphs from './components/Incomegraphs';
import Assetchart from './components/Assetchart';
import Cashchart from './components/Cashchart';

import Sidebar from './components/Sidebar';
import {FinancialInfoContextProvider} from './context/Financialcontext';
import {Route, Routes} from 'react-router-dom';
import CreatedModel from './pages/CreatedModel';
import CreateYourOwnModel from './components/CreateYourOwnModel';
import styled from "styled-components";



function App() {
  return (
	<Container>
		<Routes>
			<Route exact path="/createdModel" element={<CreatedModel />}/>
			<Route exact path="/createFinancialStatement" element={<CreateYourOwnModel/>} />
		</Routes>
	<FinancialInfoContextProvider>
			<Sidebar/>
			<Searchbar />
			
			<Incomegraphs />
			<Assetchart />
			<Cashchart />
			
	</FinancialInfoContextProvider>
	</Container>
		
  );
}

const Container = styled.div``
export default App;
