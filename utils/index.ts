export async function getOffenders() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23c3d9b9c1msh3fa6092fb9ba274p19c128jsn41b9e780d625',
            'X-RapidAPI-Host': 'sex-offenders.p.rapidapi.com'
        }

    }
    const url = 'https://sex-offenders.p.rapidapi.com/sexoffender?city=California';

    const response = await fetch(url, options);
    const results = await response.json();

    console.log("RESULTS: " + results);

    return results;
}