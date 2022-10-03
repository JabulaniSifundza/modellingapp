import React from 'react';
import styled from "styled-components";
import {NewModel} from '../components/NewModel';
import {FinancialInfoContextProvider} from '../context/Financialcontext';


export default function CreatedModel() {



	return (
		<FinancialInfoContextProvider>
			<Container>
				<NewModel />
			</Container>
		</FinancialInfoContextProvider>

	)

}

const Container = styled.div``