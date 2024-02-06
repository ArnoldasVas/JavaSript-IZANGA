let calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
  //   console.log('clicked');
  let employeesCount = parseInt(
    document.getElementById('employees-count').value
  );
  let employeeMakesPerDay = parseInt(
    document.getElementById('employee-makes-per-day').value
  );
  let dayReservations = parseInt(
    document.getElementById('day-reservations').value
  );

  let bakeryTotal = employeesCount * employeeMakesPerDay;
  let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

  //   let logInfo = {
  //     bakeryTotal,
  //     isBakeryGonnaMakeIt,
  //   };
  //   console.log(logInfo);

  let resultsDiv = document.getElementById('results');
  //   console.log(resultsDiv);
  resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes iskepti: </strong>${bakeryTotal} kepalu.</p>`;
  resultsDiv.innerHTML += `<p> <strong>Jai reikia speti pagaminti:</strong> ${dayReservations} kepalu.</p>`;
  resultsDiv.innerHTML += `<p> <strong>Ar spes pagaminti?</strong> ${
    isBakeryGonnaMakeIt ? 'taip' : 'ne'
  }</p>`;
});
//DARBUOTOJU SKAICIUS JEI NEIGIAMAS - ERROR
document
  .getElementById('employees-count')
  .addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
      // console.log(event.target);
      event.target.classList.add('error');
      event.target.nextElementSibling.classList.add('show');
    } else {
      event.target.classList.remove('error');
      event.target.nextElementSibling.classList.remove('show');
    }
  });
//KEPALU PER DIENA JEIGU NEIGIAMAS - ERROR
document
  .getElementById('employee-makes-per-day')
  .addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
      // console.log(event.target);
      event.target.classList.add('error');
      event.target.nextElementSibling.classList.add('show');
    } else {
      event.target.classList.remove('error');
      event.target.nextElementSibling.classList.remove('show');
    }
  });

// UZSAKYMU KIEKIS JEIGU NEIGIAMAS - ERROR
document
  .getElementById('day-reservations')
  .addEventListener('keyup', function (event) {
    // console.log('reiksme pasikeite');
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
      // console.log(event.target);
      event.target.classList.add('error');
      event.target.nextElementSibling.classList.add('show');
    } else {
      event.target.classList.remove('error');
      event.target.nextElementSibling.classList.remove('show');
    }
  });

document.getElementById('reset').addEventListener('click', function () {
  // console.log('clicked');
  document.getElementById('employees-count').value = 0;
  document.getElementById('employee-makes-per-day').value = 0;
  document.getElementById('day-reservations').value = 0;
  document.getElementById('results').innerHTML = '<p>Kol kas nieko nera</p>';
});
