// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function -
// const elements = ['Fire', 'Air', 'Water'];

// Expected output: "Fire,Air,Water"

// Expected output: "FireAirWater"

// Expected output: "Fire-Air-Water"

function ArrayJoin(input) {
    let hello = ""
    for (i = 0; i < input.length; i++) {
        if (i==input.length-1)
            {hello +=input[i]} 
        else { 
             hello += input[i] + " "
        }
    }
    console.log(hello)
}
// ArrayJoin(['Fire', 'Air', 'Water'])

// Problem2 : Write a custom function that has the same behavior of inbuilt Array Last Index Of Function-

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
function Arrayindex(input,K){
for(i=0;i<input.length;i++){
 if (input[i]==K)
    {
        console.log(i)
    }
}

}
Arrayindex(['Dodo', 'Tiger', 'Penguin', 'Dodo'],'Tiger')