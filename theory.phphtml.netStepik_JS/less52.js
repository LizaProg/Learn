/*
function setSettings() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        try {
            var favcolor = document.getElementById('favcolor').value;
            var fontwt = document.getElementById('fontwt').value;
            localStorage.setItem('bgcolor', favcolor);
            localStorage.fontweight = fontwt;
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.log('Переполнение хранилища!');
            }
        }
    } else {
        console.log('Данные не сохранятся, ваш браузер не поддерживает Localstorage');
    }
}

function applySetting() {
    if (localStorage.length != 0) {
        document.body.style.backgroundColor = localStorage.getItem('bgcolor');
        document.body.style.fontSize = localStorage.fontweight + 'px';
        document.getElementById('favcolor').value = localStorage.bgcolor;
        document.getElementById('fontwt').value = localStorage.fontweight;
    } else {
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.fontSize = '14px'
        document.getElementById('favcolor').value = '#FFFFFF';
        document.getElementById('fontwt').value = '14';
    }
}

function clearSettings() {
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("fontweight");
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.fontSize = '14px'
    document.getElementById('favcolor').value = '#FFFFFF';
    document.getElementById('fontwt').value = '14';
}*/


$(function () {
    function checkLocalStorageFunc() {
        var text = localStorage.getItem('text');
        if (text != null || text != '') {
            $('textarea').val(text);
        }
    }
    checkLocalStorageFunc();
    $('textarea').on('blur', saveLocalStorageFunc);
    function saveLocalStorageFunc() {
        var val = $(this).val();
        localStorage.setItem('text', val);
    }
});
