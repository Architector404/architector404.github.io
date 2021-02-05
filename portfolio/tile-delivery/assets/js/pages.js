var page = 0; //Текущая страница
let limit = 12; //Сколько нужно выводить на странице
var offset = page * limit; //С какой строки выводить
var endset = offset + limit; //По какую строку
let rows = indexRows(); //Сколько строк всего
let cols = 0; //Сколько колонок, если мобильная версия
let lastPage = Math.ceil(rows / limit)-1; //Последняя страница

$(document).ready(function(){
    $("#tb-prev").addClass("disabled");
    if(page === lastPage)
        $("#tb-next").addClass("disabled");

    if($(window).width() > 767){
        $("#table-sm").hide();
        $("#table-lg tr td").hide();

        //console.log("Лимит: "+limit+" Строк: "+rows+" Последняя страница: "+lastPage);
        //console.log("Страница: "+page+" Начало: "+offset+" Конец: "+endset+" Лимит: "+limit);

        loadNextRows();
    }
    else {
        $("#table-lg").hide();
        $("#table-sm tr td").hide();

        limit = 1;
        offset = page * limit;
        endset = offset + limit;
        cols = indexCols();
        lastPage = Math.ceil(cols / limit);

        //console.log("Лимит: "+limit+" Строк: "+rows+" Последняя страница: "+lastPage);
        //console.log("Страница: "+page+" Начало: "+offset+" Конец: "+endset);

        loadNextCols();
    }

    $("#tb-prev").click(function () {
        if(page === 0)
            return;
        if($(window).width() > 767)
            hideRows();
        else
            hideCols();

        page--;

        if(page === 0)
            $("#tb-prev").addClass("disabled");
        if(page < lastPage)
            $("#tb-next").removeClass("disabled");

        offset = page * limit;
        endset = offset + limit;

        if($(window).width() > 767){
            //console.log("Страница: "+page+" Начало: "+offset+" Конец: "+endset);
            loadNextRows();
        }
        else {
            //console.log("Страница: "+page+" Начало: "+offset+" Конец: "+endset);
            loadNextCols();
        }

    });
    $("#tb-next").click(function () {
        if(page === lastPage)
            return;
        if($(window).width() > 767)
            hideRows();
        else
            hideCols();

        page++;

        if(page > 0)
            $("#tb-prev").removeClass("disabled");
        if(page === lastPage)
            $("#tb-next").addClass("disabled");

        offset = page * limit;
        endset = offset + limit;

        if($(window).width() > 767){
            //console.log("Страница: "+page+" Начало: "+offset+" Конец: "+endset);
            loadNextRows();
        }
        else {
            //console.log("Страница: "+page+" Начало: "+offset+" Конец: "+endset);
            loadNextCols();
        }
    });
});

function indexRows() {
    /*
        Для lazy-load ajax-зарос писать здесь
     */

    return $("#table-lg tr").length-1;
}

function loadNextRows() {
    /*
        Для lazy-load ajax-зарос писать здесь
     */

    showRows();
}

function indexCols() {
    /*
        Для lazy-load ajax-зарос писать здесь
     */

    return $("#table-sm tr:eq(0) td").length-1;
}

function loadNextCols() {
    /*
        Для lazy-load ajax-зарос писать здесь
     */

    showCols();
}

function hideRows() {
    for(var i = offset+1; i <= endset; i++)
    {
        if ($("#table-lg tr:eq("+i+") td").length)
            $("#table-lg tr:eq("+i+") td").hide();
    }
}

function showRows() {
    for(var i = offset+1; i <= endset; i++)
    {
        if ($("#table-lg tr:eq("+i+") td").length)
            $("#table-lg tr:eq("+i+") td").show();
    }
}

function hideCols() {
    $("#table-sm tr").find("td:eq("+offset+")").hide();
}

function showCols() {
    $("#table-sm tr").find("td:eq("+offset+")").show();
}