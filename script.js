// let num1 =1000;
// // let num=10 error already defined
// let num2 = 2000;
// let res= num1 + num2;
// console.log(res);
// res= num1 - num2;
// console.log(res);
// res= num1 * num2;
// console.log(res);
// res= num1 / num2;
// console.log(res);

// let name='Krishnan'
// console.log(name + ' is legent '+ name+ ' is great '+ name +' is GOAT')



// // let total123=3
// // let studentname;
// // let balance;
// // let name;
// // let isReady;
// // console.log(total123);
// // const g=9.8;
// // const plank=6.67
// console.log(typeof(NaN)); //interesting
// console.log(5>=100000000000000000000)
// console.log(1>=1)
// console.log(5==='5');

// let mark=90;
// if (mark>=90)
// console.log("Grade A")
// else if (mark>=80)
// console.log("Grade B")
// else if (mark>=70)
// console.log("Grade C")
// else if (mark>=60)
// console.log("Grade D")
// else
// console.log("Grade F")

// let age=20;
// if (age>=65)
// console.log("Senior")
// else if (mark>=18)
// console.log("Adult")
// else if (mark>=13)
// console.log("Teen")
// else
// console.log("child")   
// for(let i=0;i<=3;i++)
//     console.log('stackup')
// for(let i=1;i<=10;i++)
// console.log(i)
// for(let i=10;i>=1;i--)
// console.log(i)

// let sum=0,n=10,even=0,odd=0;
// for(let i=0;i<=n;i++){
//     if(i%2==0){
// sum=sum+i;
// }
// }
// console.log(sum);
// for(i=0;i<100;i++){
//     if(i%2==0)
//         even++;
//     else
//     odd++;
// }
// console.log('Even count='+even)
// console.log('Odd count='+odd)



//divisible
let out1='',out2='',out3='';
console.log('Numbers dividible by 3 and 7 are')
for(let i=0;i<=50;i++){
    if(i%3==0 || i%7==0)
        out1=out1+i+' ';
}
console.log(out1)
//not divisible
console.log('Numbers not dividible by 2 and 3 are')
for(let j=0;j<=50;j++){
    if(j%2!=0 || j%3!=0)
        out2=out2+j+' ';
}
console.log(out2)
//even numbers skipping multiple of 10
console.log('even numbers skipping multiple of 10 are')
for(let k=0;k<=50;k++){
    if(k%2==0 && k%10!=0)
        out3=out3+k+' ';
}
console.log(out3);
console.log(hi);


























