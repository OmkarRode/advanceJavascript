var obj={num:10}

var addnum=function(a,b,c)
{
    return this.num+a+b+c;
}
// console.log(addnum.call(obj,3));
var arr=[1,3,4];
console.log(addnum.apply(obj,arr));
