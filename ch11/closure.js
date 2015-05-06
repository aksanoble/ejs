/* In the definition of fun the function gets evaluated with localEnv i.e. in the context in
which it was created. 
*/

run("do(define(f, fun(a, fun(b, +(a, b)))),",
    "   print(f(4)(5)))");
// → 9
