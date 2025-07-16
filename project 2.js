function reverse(c){ // reverser une chaine
r="";

for (let i = 0; i < c.length; i++) {
    r=c[i]+r
    
}
    return r
}
///////////////////

function countt(c){
var s=0 //nombre de caracteres d'une chaine

for (let i = 0; i < c.length; i++) {
    s++;
    
}

    return s
}// on peut faire juste return c.length
//////////////////////////////////////////
function capitalize(p){
    p=p+" "
p=p[0].toUpperCase()+substring(1,p.length)
var t = p.indexOf(" ");
while(t!=-1){
p=substring(0,t+1)+p[t+1].toUpperCase()+substring(t+2,p.length)

}
return p.substring(0,p.length-1)
}
///////////////////////////////
function minmax(l){
var mn=0; //variable de minimumu
var mx=0; // le maximum
for (let i = 0; i < l.length; i++) {
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
function filterarray(l){

var lf; // list filtree
var j // taille de lf
for (let i = 0; i < l.length; i++) {
    if(!( isNaN(l[i]) )){
        lf[j]=l[i];
        j++;
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
function primecheck(n){
f=n%2!=0;
i=3
    while(f && i<=Math.floor(i<n/2) ){
        f=n%i!=0;
        i++
    }
    return f
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