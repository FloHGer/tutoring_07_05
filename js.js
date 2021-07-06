// **Use NESTED LOOPS in each of your solutions**

// 1 Construct the following pattern.  
// *
// * *  
// * * *  
// * * * *  
console.log('\n1)');


for(let i=0; i<4; i++){
    let out = '';
    for(let j=0; j<=i; j++){
        out += '*';
    }
    console.log(out);
}


// 2 Given the following array: 
// ```
// const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// ```
// Create the following output: 
// row 0 
//  1 
//  2 
//  1
//  24
// row 1
//  8 
//  11 
//  9
//  4
// row 2
//  ...
// (and so on)
console.log('\n2)');


const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let subARR of ARR){
    console.log('row', ARR.indexOf(subARR));
    for(let elem of subARR){
        console.log('', elem);
    }
}


// 3 Output the following: 
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
console.log('\n3)');


let out1 = '';
    out2 = '';

for(let i=1; i<5; i++){
    for(let j=0; j<3; j++){
        out1 += `${i} `;
    }
    if(i==1)continue;
    for(let k=0; k<=4; k++){
        out2 += `${k} `;
    }
}
console.log(`${out1}\n${out2}`);
