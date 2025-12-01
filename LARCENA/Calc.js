function insert(value) {
    const textview = document.form1.textview.value;

    document.form1.textview.value = textview + value;
}
function clearScreen(){
    document.form1.textview.value = '';
}
function equal(){
    let total = document.form1.textview.value;

    if(total){
        total = eval(total)

        document.form1.textview.value = total

    }else {
    document.form1.textview.value = 'error';
    }
}
function backspace(){
    let total = document.form1.textview.value;

    total = total.slice(0, -1);

    document.form1.textview.value = total
}
function sqt(){
    let total = document.form1.textview.value;

    total = Math.sqrt(eval(total));

    document.form1.textview.value = total
}