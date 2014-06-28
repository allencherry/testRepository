//4.数据类型

/**
学习要点
1.typeof操作符
2.Undefined类型
3.Null类型
4.Booleanleix
5.Number类型
6.Stringleix
7.Object类型
公六种数据及类型五种简单数据类型一种复杂类型
注意Function也可以用typeof操作符
typeof用来检测变量的数据类型
*/
/**var box = 'allen';
alert(typeof box);
alert(typeof 'allen');

var a;
alert(a);

var box;
*/
//alert(age);
//注意未赋值与未定义typeof的检测结果都为undefined因此定义变量时应赋予对应的值
//alert(typeof a);
//var b;
//alert(typeof b);
/**
Number中知识点

*/
//浮点值的范围
//alert(Number.MIN_VALUE);
//alert(Number.MAX_VALUE);
//Infinity&-Infinity 正无穷&负无穷
//alert(Number.POSITIVE_INFINITY);
//alert(Number.NEGATIVE_INFINITY);
//判断一个值是否超过了规定范围用isFinite(),没超过则为true超过为false
//var n = 100e1000;
//alert(isFinite(n));

//NaN,(Not a Number)一个特殊值
//var not = 0/0;
//alert(not);
//注意NaN加任何数结果还是NaN且NaN并不等于NaN
//alert(NaN ==NaN);
//alert(NaN + 1);

/**
用isNaN()函数可以用来判断是不是NaN，注意isNaN()函数在接到一个值后会事先尝试将值转化为数值

*/
//alert(isNaN('123allen'));

/**
转型所要用到的三个函数Number(),parseInt(),parseFloat(),注意区分三者的使用差别
*/