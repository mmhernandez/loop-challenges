// Print odd numbers 1-20
for(var i=1; i<=20; i++) {
    if(i % 2 == 1) {
        console.log(i)
    };
}

// Decrease numbers 100 down to 0, in multiples of 3 from 100 down to 0
for(var i=100; i>=0; i-=3) {
    console.log(i);
}

// Print values (in this sequence: 4, 2.5, 1, -0.5, -2, -3.5) using a loop
var num = 4;
while(num >= -3.5) {
    console.log(num);
    num -= 1.5;
}

// Add all values 1-100 to a variable and log the result (5050)
var sum = 0;
for(var i=1; i<=100; i++) {
    sum += i;
}
console.log(sum);

// Factorials! Multiply all of the values 1-12 to a variable and log the result (479001600)
var result = 1;
for(var i=1; i<=12; i++) {
    result *= i;
}
console.log(result);