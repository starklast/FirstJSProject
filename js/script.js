"use stcrict";

// let numberOfFilms;

let numberOfFilms = prompt("How many films you already watched?","");

let personalMovieDB = {count:numberOfFilms, movies:{}, actors:{},
                         genres:{}, privat:false};
for(let i=0; i<2; i++){
    let nameOfFilm = prompt("What is the name of last film?","");
    let markOfFilm = prompt("Whot is the mark this film?","");
    personalMovieDB.movies[nameOfFilm]=markOfFilm;
}                         
console.log(personalMovieDB);

// Buffer.alloc()
// let myName = 'Alex';
// console.log(`2 ${myName}`);
// for(let i=1; i<10; i++){
//     console.log(i);
// }
