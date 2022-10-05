import './App.css';
import {Route, Routes} from 'react-router-dom';
import CreatedModel from './pages/CreatedModel';
import CreateYourOwnModel from './pages/CreateYourOwnModel';
import MainPage from './pages/MainPage';

import styled from "styled-components";



function App() {
  return (
	<Container>
		<Routes>
			<Route exact path="/createdModel" element={<CreatedModel />}/>
			<Route exact path="/createFinancialStatement" element={<CreateYourOwnModel/>} />
			<Route exact path="/" element={<MainPage />} />
		</Routes>
	</Container>
		
  );
}

const Container = styled.div``
export default App;
