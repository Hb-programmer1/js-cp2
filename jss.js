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
  const priceInputs = document.getElementsByClassName('price');
  let t = 0;

  for (let i = 0; i < priceInputs.length; i++) {
    const value = parseFloat(priceInputs[i].value);
    t += value;
  }

  document.getElementById('t').textContent = t.toFixed(2);
}

// Add event listeners to each input with class "price"
const priceInputs = document.getElementsByClassName('price');
for (let i = 0; i < priceInputs.length; i++) {
  priceInputs[i].addEventListener('input', t);
}

// Call once to set initial t