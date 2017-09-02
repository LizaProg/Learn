function Check(str) {
    var r = str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i);
    if (r) {
        return (r[1]);
    } else {
        throw new Error("Неверный e-mail адрес")
    }
}
try {
    var s = "vasya1996@@mail.ru";
    console.log(Check(s));
} catch(e) {
    console.log(e.message);
}
