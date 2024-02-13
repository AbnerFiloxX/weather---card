const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', ()=>{
    if(inputCity.ariaValueMax.trim().length>0){
        console.log('@@ input value =>', inputCity.value)
        buscarCiudad(inputCity.value)
    }
})

const buscarCiudad = async (ciudad) => {
    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8446a1161msh0315b31dec10970p1ba709jsn8d61d748d55c',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}