import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useContext} from 'react';



export const Companydetails = () =>{
	const [metrics, setMetrics] = useState();
	const [search, setSearch] = useState("");
	


	

	return <Container>
		<div className="summary">
			<div className="metricHolder">
				<h4 className="metricName">Revenue</h4>
				<h3 className="metric">${}</h3>
			</div>
			<div className="metricHolder">
				<h4 className="metricName">Cost of Goods Sold</h4>
				<h3 className="metric">${}</h3>
			</div>
			<div className="metricHolder">
				<h4 className="metricName">EBITA</h4>
				<h3 className="metric">${}</h3>
			</div>
		</div>
	</Container>
}

const Container = styled.div`
background-color: #252525;
width: 600px;
height:250px;
.summary{
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
	.metricHolder{
		width: 100%;
		height: 100%;
		h4{
			font-size: 34px;
		}
		h3{
			font-size: 55.012px;
		}
		.metricName{
			color: #FFFFFF;
		}
		.metric{
			color: #FFFFFF;
		}
	}
}`;