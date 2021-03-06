var inputString = ["Агафья","Агриппина","Акулина","Алевтина","Александра","Алина","Алла","Анастасия","Ангелина","Анжела","Анжелика","Анна","Антонина","Валентина","Валерия","Варвара","Василиса","Вера","Вероника","Виктория","Галина","Глафира","Дана","Дарья","Евгения","Евдокия","Евпраксия","Евфросиния","Екатерина","Елена","Елизавета","Жанна","Зинаида","Злата","Зоя","Иванна","Инга","Инесса","Ираида","Ирина","Ия","Карина","Каролина","Кира","Клавдия","Ксения","Лада","Лариса","Лидия","Лилия","Любовь","Людмила","Майя","Маргарита","Марина","Мария","Марфа","Матрёна","Мирослава","Надежда","Наина","Наталья","Нина","Нонна","Оксана","Октябрина","Ольга","Пелагея","Полина","Прасковья","Раиса","Регина","Светлана","Серафима","Снежана","София","Таисия","Тамара","Татьяна","Ульяна","Фаина","Феврония","Фёкла","Феодора","Целестина","Юлия","Яна","Ярослава"];

createList(inputString);

var spans = document.querySelectorAll('.list_wrap .list span');
var headers = document.querySelector('.list_wrap .headers_wrap .headers');
var spanHeight = spans[0].offsetHeight;
var spanCurrent = 1;

console.log(spanHeight);

document.querySelector('.list').onscroll = function(elem) {
    var scrolled = elem.target.scrollTop;

    if (scrolled > spans[spanCurrent].offsetTop - spanHeight) {
        if (scrolled > spans[spanCurrent].offsetTop) {
            spanCurrent++;
            headers.style.marginTop = '-' + spanHeight * (spanCurrent - 1) + 'px';
            return;
        }
        headers.style.marginTop = (spans[spanCurrent].offsetTop - scrolled - spanHeight - (spanHeight * (spanCurrent - 1))) + 'px';
    }

    if (scrolled < spans[spanCurrent - 1].offsetTop) {
        spanCurrent--;
    }

    if (scrolled < spans[spanCurrent].offsetTop - spanHeight) {
        headers.style.marginTop = '-' + spanHeight * (spanCurrent - 1) + 'px';
    }
};

function createList(arr) {
    if (!arr || arr.length === 0) return;

    var list = document.querySelector('.list');
    var headersList = document.querySelector('.headers_wrap .headers');
    var firstLetter = 'Null';
    var arrElem;

    for (var ii = 0; ii < arr.length; ii++) {
        arrElem = arr[ii];

        if (firstLetter !== arrElem.charAt(0)) {
            firstLetter = arrElem.charAt(0);
            createCategory(firstLetter);
        }

        addElement(arrElem);
    }

    function createCategory(ltr, className) {
        var span = document.createElement('span');
        var ul = document.createElement('ul');

        if (className) span.className = className;
        span.innerHTML = ltr;
        list.appendChild(span);
        list.appendChild(ul);
        headersList.appendChild(span.cloneNode(true));
    }

    function addElement(str) {
        var lastUL = list.lastElementChild;
        var li = document.createElement('li');

        li.innerHTML = str;
        lastUL.appendChild(li);
    }
}