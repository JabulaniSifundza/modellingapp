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
		colors: ["#FF1654", "#247BA0"],
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
					color: "#247BA0"
				  },
				  labels: {
					style: {
					  colors: "#247BA0"
					}
				  },
				  title: {
					text: "Liabilities",
					style: {
					  color: "#247BA0"
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
	<Chart options ={options} series={series} width="70%"/>
			
	</Container>


}

const Container = styled.div`
margin-left: 190px;
font-family: 'Segoe UI';
`