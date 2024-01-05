function number() {
    console.log(a) //由于var会声明提升，
                // 在运行时var会上升到函数内的顶部，
                // 所以第一个打印a的值是空值，因为此时的a并没有被赋值
    var a;
    a = 5;
    console.log(a) //此时的a已经被赋值，所以被打印的值是赋值过后的数值
}
number();
