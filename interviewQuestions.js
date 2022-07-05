// "use strict";

// Q1: Diffrenet data types of javascript  ****

/*  1).Primitive  // used to store single values 
        > String
        > Number
        > Boolean
        > null
        > undefined 
        > BigInt  // let x = 1324567891235496879
        > Symbol (ES6) // eg symbol = Symbol('symbol'); :-> it is used to store anynomys and unique data type 

    2). Non Primitive Data type  // used to store complex and multiple values
        > functions (Object)
        > Objects (Object)
        > Arrays (Object)
    */

/* 2.) Hoisting   //  it take all the declerations (vaiable or function) at the top of the block or of function or globally

        hoistedFunction(); // Outputs " Hello world! " even when the function is declared after calling

        function hoistedFunction() {
        console.log(" Hello world! ");
        }

        hoistedVariable = 3;
        console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
        var hoistedVariable;


NOTE:=  Variable initializations are not hoisted, only variable declarations are hoisted:
        eg :- var x;
            console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
            x = 23;

NOTE:= TO AVOIDE HOsTING WE CAN USE "use strict" AT THE TOP
        "use strict";
        x = 23; // Gives an error since 'x' is not declared
        var x;
*/

/*3). cohersion  
         
        > equality "=="
            convets into same data type and then compares  (compares valus not types )
        > "===" 
            compares values and its types 
        > "+" 
            converts operators into strigs 
        >"-" 
            converts into number and gives us result in number
*/

// 4.) Is javasript a dynamically typed langusge

// > Javascript is dynamically typed language becus type of variable is checked at run timme not at compiled time
