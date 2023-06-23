// let country = "United States"
// let continent = "North America"
// let population = 300000000

// console.log(country, continent, population)

// const markWeight = 78
// const markHeight = 1.69
// const johnWeight = 92
// const johnHeight = 1.95

// const markBMI = markWeight/markHeight**2
// const johnBMI = johnWeight/johnHeight**2

// console.log(markBMI, johnBMI)
// const MarkHigherBMI = markBMI > johnBMI
// console.log(MarkHigherBMI)

/* Write your code below. Good luck! 🙂 */
// const scoreDolphins = (96+108+89)/3
// const scoreKoalas = (88+91+110)/3

// if(scoreDolphins>scoreKoalas  && scoreDolphins > 100){
//     console.log("Dolphins win the trophy")
// }
// else if (scoreKoalas>scoreDolphins && scoreKoalas > 100){
//     console.log("Koalas win the trophy")
// }
// else {
//     console.log("No one wins the trophy")
// }

// const bill = 450;

// /* Write your code below. Good luck! 🙂 */


// const tip = bill > 50 && bill < 300 ? bill*.15 : bill*.20

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)

// const calcAverage = (s1, s2, s3)=>(s1+s2+s3)/3

// // const scoreDolphins = function (){
// //     calcAverage
// // }
// console.log(calcAverage(44,23,71))

/* Write your code below. Good luck! 🙂 */
// const calcAverage = (s1, s2, s3)=>(s1+s2+s3)/3

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// const CheckWinner = function (){
//     if (scoreDolphins > scoreKoalas  && scoreDolphins >= (scoreKoalas*2)) {
//         console.log( `Dolphins win with a score of ${scoreDolphins} - ${scoreKoalas}`)
//     } else if (scoreKoalas > scoreDolphins  && scoreKoalas>=(scoreDolphins*2)){
//         console.log(  `Koals win with a score of ${scoreKoalas} - ${scoreDolphins}`)
//     }else {
//         console.log( `No team wins`)
//     }
// }

// console.log(CheckWinner())

// const calcTip = function (bill){
//     if (bill > 50 && bill <300){
//         tip =bill *.15
//         return tip
//     }else {
//         tip = bill *.2
//         return tip
//     }
// }

// const bills =[125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])]
// console.log(tips, total)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function (){
//        this.BMI = this.mass/(this.height*this.height)
//        return this.BMI
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function (){
//         this.BMI = this.mass/(this.height*this.height)
//         return this.BMI
//     }
// }
// if (mark.calcBMI >john.calcBMI){
//     console.log(`${mark.fullName} has a higher BMI (${mark.calcBMI()} than ${john.fullName} (${john.calcBMI()})` )
// }else{
//     console.log(`${john.fullName} has a higher BMI (${john.calcBMI()} than ${mark.fullName} (${mark.calcBMI()})`)
// }
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips =[]
let totals = []

for (let i =0; i<bills.length; i++){
const tip = calcTip(bills[i])
tips.push(tip)
totals.push(bills[i]+tips[i])
}

const calcAverage= function(arr){
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum += arr[i];
    }
        return sum/arr.length
    }

console.log(calcAverage(totals))
console.log(totals)