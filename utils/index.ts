export async function getOffenders() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0ef3e8b321msh4a1a64c3048b50ap11e8d3jsn6cbcb87e61dd',
            'X-RapidAPI-Host': 'sex-offenders.p.rapidapi.com'
        }

    }
    const url = 'https://sex-offenders.p.rapidapi.com/sexoffender?city=California';

    const response = await fetch(url, options);
    const results = await response.json();

    console.log("RESULTS: " + results);

    return results;
}