function foo(i = 0) {
    console.log(i);
    foo(i + 1);
}
foo();