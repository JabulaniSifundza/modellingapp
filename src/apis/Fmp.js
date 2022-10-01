import axios from 'axios';

const TOKEN = "77ec43934923538ce77f2e36026dc1b8";
export default axios.create({
	baseURL: "https://financialmodelingprep.com/api/v3/",
	params:{
		apikey: TOKEN
	}
})