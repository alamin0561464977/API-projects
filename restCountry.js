const lodeCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
};
lodeCountry();
const displayCountry = (countrys) => {
    const countrySection = document.getElementById('countrySection');
    countrys.map(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col');
        countryDiv.innerHTML = `
        <div class="card">
            <img src="${country.flags?.svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name?.common}</h5>
                <p class="card-text">official Name: ${country.name?.official}</p>
                <p class="card-text">Capital: ${country?.capital}</p>
                <button class="btn btn-primary" onclick="countryDetail('${country.cca2}')">Country Detail</button>
            </div>
      </div>
        `;
        countrySection.appendChild(countryDiv);
    })
};
const countryDetail = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayDetail(data[0]))
};

const displayDetail = (country) => {
    const countryDetail = document.getElementById('countryDetail')
    countryDetail.innerHTML = "";
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('col');
    countryDiv.innerHTML = `
        <div class="card">
            <img src="${country.flags?.svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name?.common}</h5>
                <p class="card-text">official Name: ${country.name?.official}</p>
                <p class="card-text">Capital: ${country?.capital}</p>
                
            </div>
      </div>
        `;
    countryDetail.appendChild(countryDiv)
}
