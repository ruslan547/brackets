module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (let item of str) {
        for (let conf of bracketsConfig) {
            if (item === conf[0] && conf[0] !== conf[1]) {
                stack.push(item);
            } else if (item === conf[1] && conf[0] !== conf[1]) {
                const lastItem = stack.pop();

                if (lastItem !== conf[0]) {
                    return false;
                }
            } else if (item === conf[0] && conf[0] === conf[1]) {
                if (stack[stack.length - 1] !== conf[0]) {
                    stack.push(item);
                } else {
                    stack.pop();
                }
            }
        }
    }

    return !stack.length;
}

