import Stack from "./Stack";

const precedenceOrder = new Map<string, number>();
precedenceOrder.set("^", 3);
precedenceOrder.set("*", 2);
precedenceOrder.set("/", 2);
precedenceOrder.set("+", 1);
precedenceOrder.set("-", 1);

class InfixExperssion {
    static toPostfix = (expression: string): string => {
        const exp = new Stack<string>();
        let postfixExpression: string = "";

        for (const char of expression) {
            if (char === "(") {
                exp.push(char);
            } else if (char === ")") {
                while (exp.peek() !== "(") {
                    postfixExpression += exp.pop();
                }
                exp.pop();
            } else if (precedenceOrder.has(char)) {
                while (
                    !exp.isEmpty() &&
                    precedenceOrder.get(char)! <=
                        precedenceOrder.get(exp.peek())!
                ) {
                    postfixExpression += exp.pop();
                }
                exp.push(char);
            } else {
                postfixExpression += char;
            }
        }

        while (!exp.isEmpty()) {
            postfixExpression += exp.pop();
        }

        return postfixExpression;
    };

    static toPrefix = (expression: string): string => {
        expression = expression.replaceAll("(", "@");
        expression = expression.replaceAll(")", "(");
        expression = expression.replaceAll("@", ")");

        let reverseExpression = this.reverseString(expression);

        const exp = new Stack<string>();
        let postfixExpression: string = "";

        for (const char of reverseExpression) {
            if (char === "(") {
                exp.push(char);
            } else if (char === ")") {
                while (exp.peek() !== "(") {
                    postfixExpression += exp.pop();
                }
                exp.pop();
            } else if (precedenceOrder.has(char)) {
                while (
                    !exp.isEmpty() &&
                    precedenceOrder.get(char)! <
                        precedenceOrder.get(exp.peek())!
                ) {
                    postfixExpression += exp.pop();
                }
                exp.push(char);
            } else {
                postfixExpression += char;
            }
        }

        while (!exp.isEmpty()) {
            postfixExpression += exp.pop();
        }

        let prefixExpression = this.reverseString(postfixExpression);

        return prefixExpression;
    };

    static toInfix = (expression: string): string => {
        return expression;
    };

    private static reverseString = (str: string): string => {
        let strArray = str.split("");
        strArray = strArray.reverse();
        return strArray.join("");
    };
}

export default InfixExperssion;
