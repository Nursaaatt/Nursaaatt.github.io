const person = { firstName: 'Jim Carrey', born: 'January 17 , 1962', from: 'Canadaian' };
const films = { firtFilm: ' 1.Living Color', secondFilm: '2.Dumb and Dumber', thirdFilm: '3.Liar ' };

function film() {
  document.getElementById('1films').innerHTML = films.firtFilm;
  document.getElementById('2films').innerHTML = films.secondFilm;
  document.getElementById('3films').innerHTML = films.thirdFilm;
}

function persons() {
  document.getElementById('name').innerHTML = person.firstName;
  document.getElementById('born').innerHTML = person.born;
  document.getElementById('from').innerHTML = person.from;
}

function counter(){
  for (let i = 0; i < 10; i++) {
    alert(i);
}
}