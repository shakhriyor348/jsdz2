var age1 = +prompt('Введите свой возраст')


if(age1 > 0 && age1 <= 18){
    alert('Вы еще молоды. Вам нужно учится')
}else if(age1 > 18 && age1 <= 50){
    alert('Вам нужно работать')
}else if(age1 > 50 && age1 <= 59){
    alert('Вам пора на пенсию')
}else if (age1 > 59 && age1 <= 150){
    alert('Вы пенсионер')
}else{
    alert('Что то пошло не так')
}
