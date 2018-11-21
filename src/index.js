/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
    const milies = seconds * 1000;
    const promise = new Promise(function(resolve) {
        setTimeout(resolve, milies);
    });

    return promise;
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
    
    const promise = new Promise(function (resolve, reject) {
        fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (cities) {
                
                cities.sort(function (a, b) {
                    if (a.name < b.name) { 
                        return -1; 
                    }
                    if (a.name > b.name) {
                        return 1; 
                    }

                    return 0;
                });

                resolve(cities);                
            })
            .catch(error => reject(error));
    });

    return promise;
}

export {
    delayPromise,
    loadAndSortTowns
};
