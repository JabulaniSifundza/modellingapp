import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';
import Chart from 'react-apexcharts';


export default function Incomegraphs(){
	const {balance} = useContext(Financialcontext);

	let liabilities = balance.map((sheetData)=>{
		return sheetData.totalLiabilities
	});

	let assets = balance.map((sheetData)=>{
		return sheetData.totalAssets
	});

	let orderedAssets = assets.reverse()
	let orderedLiabilities = liabilities.reverse()



	const series =[{
		name: "Assets",
		data: orderedAssets
	},
	{
		name: "Liabilities",
		data: orderedLiabilities
	}]
	
	const options ={
		chart: {
		height: 500,
		type: "line",
		stacked: false
		},
		dataLabels: {
			enabled: false
		},
		colors: ["#FF1654", "#3772FF"],
		stroke: {
		width: [4, 4]
		},
		plotOptions: {
			bar: {
			  columnWidth: "20%"
			}
		},
		xaxis: {
			categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
			labels: {
				style: {
				  colors: "#FFFFFF"
				}
			  }
		  },
		yaxis:[
			{
				axisTicks: {
					show: true
				},
				axisBorder: {
					show: true,
					color: "#FF1654"
				  },
				  labels: {
					style: {
					  colors: "#FFFFFF"
					}
				  },
				  title: {
					text: "Assets",
					style: {
					  color: "#FF1654"
					}
				  }
				},
				{
				  opposite: true,
				  axisTicks: {
					show: true
				  },
				  axisBorder: {
					show: true,
					color: "#3772FF"
				  },
				  labels: {
					style: {
					  colors: "#3772FF"
					}
				  },
				  title: {
					text: "Liabilities",
					style: {
					  color: "#3772FF"
					}
				  }
				},
			],
		tooltip: {
			shared:  false,
			intersect: true,
		x: {
			format: 'YYYY'
		}
		},
			legend: {
			horizontalAlign: "left",
			offsetX: 40
		}
		  

	}
	




	return <Container>
		<div className="titleCont">
			<h3>Total Assets and Total Liabilities</h3>
		</div>
		<Chart options ={options} series={series} width="70%"/>
	</Container>


}

const Container = styled.div`
margin-left: 190px;
font-family: 'Segoe UI';
.titleCont{
	margin-left: auto;
	margin-right: auto;
	margin-top: 12px;
	margin-bottom: 12px;
	padding-bottom: 8px;
	h3{
		color: #FFFFFF;
		font-size: 26px;
	}
}`