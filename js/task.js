
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

let numberOfFilms = start();
let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let histor = historyFilm();
showMyDB();
writeYourGenres();
    
function writeYourGenres() {
    
    for (let i=1; i<=3;i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function start () {
    let numberOfFilms;
    while (numberOfFilms == 0 || numberOfFilms == undefined  || isNaN(numberOfFilms)  || numberOfFilms == null) 
    {
        return numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','')
        ;
    } 

}



function historyFilm() {
    if (personalMovieDB.count<10) {
    alert ("Просмотрено довольно мало фильмов");

    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
    alert ("Вы классический зритель");
    } else if (personalMovieDB.count>=30){
    alert ("Вы киноман");
    } else {
    alert ("Произошла ошибка");
 }
}




