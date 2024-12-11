main {
    let steps = 0;

    const number = parseInt(prompt("What number do you want to check?"), 10);
    let i = number;

    while (i > 1) {
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = 3 * i + 1;
        }
        steps += 1;
    }

    console.log(`The number: ${number} took ${steps} steps to reach 1.`);
    console.log(`The ratio of this number to steps is ${number / steps} : 1.`);
}