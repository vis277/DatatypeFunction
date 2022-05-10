function datatype(data){
    if(data==null || data==""){
        return("Please enter a valid data")
    }
    else if(Array.isArray(data)==true){
        return("array");
    }
    else{
        return typeof data;
    }
}
let x={name:"vishal"}
let y=[1,2,3]
let z="abc";
let p=112;
let a=true;
console.log( "line 17"+" "+ datatype(x));
console.log( "line 18"+" "+ datatype(y));
console.log( "line 19"+" "+ datatype(z));
console.log("line 20"+" "+ datatype(p));
console.log("line 21"+" "+ datatype(a));
// console.log(y.length);
// console.log(Array.isArray(y));
// let f=undefined;
// console.log(datatype(f));
// console.log(null==undefined);
