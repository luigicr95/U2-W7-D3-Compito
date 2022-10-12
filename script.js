let dischiJson = `[{
		"id": 1,
		"titolo": "The Bends",
		"autore": "Radiohead",
		"dataDiUscita": "1995",
		"casaDiscografica": "EMI"
	},
	{
		"id": 2,
		"titolo": "Beggars Banquet",
		"autore": "The Rolling Stones",
		"dataDiUscita": "1968",
		"casaDiscografica": "Decca Records"
	},
	{
		"id": 3,
		"titolo": "Radici",
		"autore": "Francesco Guccini",
		"dataDiUscita": "1972",
		"casaDiscografica": "Columbia Graphophone Company"
	},
	{
		"id": 4,
		"titolo": "The Dark Side of the Moon",
		"autore": "Pink Floyd",
		"dataDiUscita": "1973",
		"casaDiscografica": "Capitol Records"
	},
	{
		"id": 5,
		"titolo": "0",
		"autore": "Low Roar",
		"dataDiUscita": "2014",
		"casaDiscografica": "Tonequake Records"
	},
	{
		"id": 6,
		"titolo": "LORETAPE",
		"autore": "Morgan no Rarity",
		"dataDiUscita": "2021",
		"casaDiscografica": "Indipendente"
	}
]`;

let dischi = JSON.parse(dischiJson);
let container = document.getElementById("container");

window.onload = function () {
  let savedAlbums = window.localStorage.getItem("album-list");
  container.innerHTML = JSON.parse(savedAlbums);
};

function showAlbums() {
  for (let disco of dischi) {
    container.innerHTML += `<li>Titolo: ${disco.titolo} Autore: ${disco.autore}</li>`;
  }
  let dischiString = JSON.stringify(container.innerHTML);
  window.localStorage.setItem("album-list", dischiString);
  console.log(dischiString);
}
