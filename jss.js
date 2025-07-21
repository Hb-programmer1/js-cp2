function plus(v){
    a=parseInt(v.textContent);
    v.textContent=a+1;
}
function minus(v){
    if(v.innerHTML==="0") return false;
    a=parseInt(v.textContent);
    v.textContent=a-1;
}

function del(x){

var p=document.getElementById("pr");

p.removeChild(x);
}
function heart(x){

x.style.color='red';


}
function total() {
  var s = 0;
  var t = document.getElementById('t');
  const l = document.getElementsByClassName('unit-price');
  const q = document.getElementsByClassName('quantity');

  for (let i = 0; i < l.length; i++) {
    
  
    s += parseFloat(l[i].textContent) * parseInt(q[i].textContent);
  }  
  

  t.textContent= s + "$";
}

