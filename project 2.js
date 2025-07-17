function reverse(c){ // reverser une chaine
r="";

for (let i = 0; i < c.length; i++) {
    r=c[i]+r
    
}
    return r
}
//

by



function countt(c){
var s=0 //nombre de caracteres d'une chaine

for (let i = 0; i < c.length; i++) {
    s++;
    
}

    return s
}// on peut faire juste return c.length
//////////////////////////////////////////
function capitalize(p){
let l=p.split(" ");
var c,s="";
for(let i=0;i<l.length;i++){
c=l[i][0].toUpperCase()+l[i].substring(1,l[i].length)
  s+=c+" ";
}
return s;
}

///////////////////////////////
function minMax(l){
var mn=l[0]; //variable de minimumu
var mx=l[0]; // le maximum
for (let i = 1; i < l.length; i++) {
    if (l[i]>mx) mx=l[i];
    if (l[i]<mn) mn=l[i];
}
return [mn,mx];
}
////////////////////////////////////
function sumofcube(l){
var s=0;
for (let i = 0; i < l.length; i++) {
    s+=l[i]**3
    
}
}
//////////////////////
function sumarray(l){
var s=0;
for (let i = 0; i < l.length; i++) {
    s+=l[i];
    
}

return s

}
////////////////////////////////////////////
function filterArray(l){
 let lf=[];
for (let i = 0; i < l.length; i++) {
    if(typeof l[i] === "number"){
        lf.push(l[i]);
    }
    
}
    return lf;
}


//////////////////////////////:
function fact(n){
var f=1;
while(n!=0){
    f*=n
    n-=1
}
    return f
}
///////////////////////////
function prime(n) {

	if (n <= 1 || n%2===0) return false;
	
    for (let i = 2; i <= Math.sqrt(n/2); i++) {
        if (n % i === 0) return false;
    }
    return true;

}

/////////////////////////////
function fibonacci(n) {
    seq = [];
    if (n >= 1){

     seq.push(0);}
    if (n >= 2){
        seq.push(1);
    }
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }

    return seq;
}