console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function PrintOdds(count) {
    if (count < 0) {
        console.log("Invalid negative number");
        return;
    }
    for (x = 0; x < count; x++) {
        if (x % 2 != 0) {
            console.log(x);
        }
    }
}

PrintOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = "Guest", age) 
{
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age === undefined) {
        console.log("Age not provided.");
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}


checkAge("Alice", 18);
checkAge("Bob", 15);
checkAge();
checkAge("Charlie");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function findQuadrant(x, y)
{
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}


findQuadrant(0, 2);
findQuadrant(1, 2);
findQuadrant(-6, 18);
findQuadrant(0, 0);
findQuadrant(5, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a, b, c) 
{
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";
    }


    if (a === b && b === c) {
        return "Equilateral triangle";
    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}


console.log(triangleType(1, 2, 2));
console.log(triangleType(1, 1, 2));
console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 4, 5));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage) {
    let daysInPeriod = 30;
    let daysLeft = daysInPeriod - day;
    let avgUse = planLimit / daysInPeriod;
    let currentUse = usage / day;
    let dataLeft = planLimit - usage;
    let suggestedUse = dataLeft / daysLeft;

    console.log(`${day} days used, ${daysLeft} left`);
    console.log(`Avg daily use: ${avgUse} GB/day`);

    if (currentUse > avgUse) {
        console.log(`Over limit: ${currentUse} GB/day.`);
        console.log(`Reduce to ${suggestedUse} GB/day to stay within plan.`);
    } else if (currentUse < avgUse) {
        console.log(`Under limit: ${currentUse} GB/day.`);
        console.log(`Can use up to ${suggestedUse} GB/day.`);
    } else {
        console.log("On track with daily usage.");
    }

    if (dataLeft <= 0) {
        console.log("Data limit reached.");
    }
}

dataPlanStatus(100, 15, 56);


