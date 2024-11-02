for (let i = 1; i < 101; i++) {

    let x = i % 15;
    let y = i % 3;
    let z = i % 5;
    
    if (x==0){
        console.log("FizzBuzz");
    } else if(y==0){
        console.log("Fizz");
    } else if(z==0){
        console.log("Buzz");
    } else {
        console.log(i);
    }    
}