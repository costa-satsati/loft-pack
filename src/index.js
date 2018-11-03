/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {

    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i], i, array));
    }
    
    return result;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let result = initial ? initial : array[0];
    // if initial passed start from element 0
    let initIndex = initial ? 0 : 1;

    for (let i = initIndex; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;

}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let result = [];

    for (let el in obj) {
        if (el) {
            result.push(el.toUpperCase());
        }
    }

    return result;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let result = []; 
    let len = array.length;

    // calculate start index
    let start = from || 0;
    
    if (start < 0) {
        start = len + start;
    }
    start = start < 0 ? 0 : start;  
    
    // calculate end index
    let end = (to !== undefined ) ? to : len;

    end = end <= len ? end : len;
    if (end < 0) {
        end = len + end;
    }

    // generate sliced array
    if (end - start > 0) {
        for (let i = start; i < end; i++) {
            result.push(array[i]);
        }
    }

    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set: function (target, prop, value) {
            target[prop] = Math.pow(value, 2);

            return true;
        }
    });
    
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
