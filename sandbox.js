// klausymai testui su 4 atsakymais
let klausymai = [
  {
    klausymas: 'Lietuvos sostine',
    atsakymai: [
      {
        atsakymas: 'Vilnius',
        teisingas: true,
      },
      {
        atsakymas: 'Kaunas',
        teisingas: false,
      },
      {
        atsakymas: 'Klaipeda',
        teisingas: false,
      },
      {
        atsakymas: 'Siauliai',
        teisingas: false,
      },
    ],
  },
];

klausymai[0].atsakymai.forEach((ats) => {
  let tekstas = document.createElement('button');
  tekstas.textContent = ats.atsakymas;

  if (tekstas.teisingas) {
    tekstas.addEventListener('click', () => {
      // funkcjonalumas kai paspaudziam teisinga atsakyma
    });
  } else {
    tekstas.addEventListener('click', () => {
      // funkcjonalumas kai paspaudziam neteisinga atsakyma
    });
  }
});
