function insert(num){
    document.form.visor.value = document.form.visor.value + num;
}
function equal(){
    exp = document.form.visor.value;
    if(exp){
       document.form.visor.value = eval(exp);
	}

}
function c(){
    document.form.visor.value = "";
}
function back(){
    var exp = document.form.visor.value;
    document.form.visor.value = exp.substring(0, exp.length-1);
}
