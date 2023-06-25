const koncerty = [
    {
        datum: '27.06.2023',
        cas: '20:30',
        misto: 'Festival k výročí 100 let Gymnázia na Slovaňáku, Brno'
    },
    {
        datum: '22.07.2023',
        cas: '20:00',
        misto: 'Letní noc, Syrovice'
    },
    {
        datum: '05.08.2023',
        cas: '20:00',
        misto: 'ChlenFest, obec Chleny'
    },
    {
        datum: '26.08.2023',
        cas: '20:00',
        misto: 'soukromá akce'
    },
    {
        datum: '26.08.2023',
        cas: '20:00',
        misto: 'Burčákové slavnosti, Týn nad Vltavou'
    },
    /*
    {
        datum: '13.01.2023',
        cas: '20:00',
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


const filteredConcerts = filterConcerts(koncerty);

//Funkce pro dynamické zobrazení koncertů
const concertsEl = document.getElementById('concerts-container');

document.addEventListener('DOMContentLoaded', () => {
    filteredConcerts.forEach(koncert => {
        let eachConcert = document.createElement('p');
        eachConcert.innerHTML = `${koncert.datum}, ${koncert.cas}, ${koncert.misto}`;
        concertsEl.appendChild(eachConcert);
    })
})