// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 13.1; 
    It is a SyntaxError if any Identifier value occurs more than once within a FormalParameterList of a strict mode
    FunctionDeclaration or FunctionExpression.
es5id: 13.1-5-s
description: >
    Strict Mode - SyntaxError is thrown if a function is declared in
    'strict mode' using a FunctionDeclaration and the function has two
    identical parameters
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        "use strict";

        try {
            eval("function _13_1_5_fun(param, param) { }");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
