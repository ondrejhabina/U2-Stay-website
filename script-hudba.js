const koncerty = [
    {
        datum: '13.01.2023',
        verejnost: 'veřejná akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '15.01.2023',
        verejnost: 'soukromá akce',
        misto: 'U kominíka, Vyškov'
    },
    {
        datum: '13.01.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '13.01.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '13.01.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '13.01.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '19.06.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '13.01.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    {
        datum: '13.07.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    /*
    {
        datum: '13.01.2023',
        verejnost: 'soukromá akce',
        misto: 'Melodka, Brno'
    },
    */

]


function filterConcerts(koncerty) {
    const now = new Date();
    return koncerty.filter(koncert => {
        const datum = new Date(koncert.datum.split('.').reverse().join('-'));
        return datum >= now;
    })
}

console.log(filterConcerts(koncerty));

const filteredConcerts = filterConcerts(koncerty);

//Funkce pro dynamické zobrazení koncertů
const concertsEl = document.getElementById('concerts-container');

document.addEventListener('DOMContentLoaded', () => {
    filteredConcerts.forEach(koncert => {
        let eachConcert = document.createElement('p');
        eachConcert.innerHTML = `${koncert.datum}, ${koncert.verejnost}, ${koncert.misto}`;
        concertsEl.appendChild(eachConcert);
    })
    
})