var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');

if((a < b && a > c) || (a > b && a < c)){
    alert(a);
}
if((b < c && b > a) || (b > c && b < a)){
    alert(b);
}
if((c < b && c > a) || (c > b && c < a)){
    alert(c);
}