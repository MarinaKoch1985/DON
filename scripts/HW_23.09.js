/*First level: ЗАДАЧА 1
В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета 
(текст взять произвольный)
*/

const btn = document.querySelector('btn');
const container = document.querySelector('container');

btn.addEventListener('click', () => {
    const par = document.createElement('p');
    par.innerText = 'kakoj to text';
    par.style.color = 'green'
    container.append(par);
});

/*Second level: ЗАДАЧА 2
В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px.
 К контейнеру применить свойство grid.
*/ 

btn.addEventListener('click', () => {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
})