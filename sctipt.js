// 1.⁠ ⁠მარტივი გამრავლება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და დააბრუნოს მათი ნამრავლი. მაგალითად, თუ არგუმენტები არიან 3 და 4, ფუნქციამ უნდა დააბრუნოს 12.


function multiplication (num1 , num2 ,  op) {
    if(op = "*"){
        console.log(`${num1} * ${num2} =`,  num1 * num2);
    }
    
}

multiplication(3 , 4 , "*")





//  
// 2.⁠ ⁠ასაკის შემოწმება
// ფუნქციამ უნდა მიიღოს ასაკი და დააბრუნოს "შენ ხარ სრულწლოვანი", თუ ასაკი 18-ზე მეტია ან ტოლია, წინააღმდეგ შემთხვევაში
//  უნდა დააბრუნოს "შენ ხარ არასრულწლოვანი".

function checkAge (age) {
    if(age <= 18){
        console.log(`შენ ხარ არასრულწლოვანი -- ${age}`)
    }else{
        console.log(`შენ ხარ სრულწლოვანი -- ${age}`)
    }
}

checkAge(22)

//  3.⁠ ⁠რიცხვი ლუწია თუ კენტი
// ფუნქციამ უნდა მიიღოს რიცხვი და გამოითვალოს, თუ ის ლუწია ან კენტი და დააბრუნოს შესაბამისი ტექსტი.

function isEvenOrOdd(num) {

}

function isEvenOrOdd(number) {
    if ( number % 2 === 0) {
        console.log(`${number} -- ლუწია `)
    }else{
        console.log(`${ number} -- კენტია`)
    }

}
isEvenOrOdd(245)


//  4.⁠ ⁠switch case – დღეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 7-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი დღის სახელი (მაგ. 1 - ორშაბათი, 2 - სამშაბათი და ა.შ.).

 function getDayName(dayNumber) {
    switch (dayNumber) {
        case "1":
            console.log("Monday")
            break;
        case "2":
            console.log("Tuesday")
            break; 

        case "3":
            console.log("Wednesday")
            break;
        case "4":
            console.log("Thursday")
            break;
        case "5":
            console.log("Friday")
            break;
        case "6":
            console.log("Saturday ")
            break;
        case "7":
            console.log("Sunday")
            break;
                   
        default:
            console.log("not found")
            break;
    }
 }

 getDayName("1")

//  5.⁠ ⁠ორი რიცხვის შედარება
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და დააბრუნოს "პირველი რიცხვი უფრო დიდია", "მეორე რიცხვი უფრო დიდია" ან "ორივე რიცხვი ტოლია".

function compareNumbers(a, b) {
    if(a > b){
        console.log("პირველი რიცხვი უფრო დიდია")
    }else if(b > a){
        console.log("მეორე რიცხვი უფრო დიდია")
    }else{
        console.log("ორივე რიცხვი ტოლია")
    }
 }


compareNumbers(11 , 10)

//  6.⁠ ⁠ოთხი მოქმედების კალკულატორი
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და შესაბამისი ოპერატორის მიხედვით გამოითვალოს შედეგი.


function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            console.log(`${a} + ${b} = `, a + b)
            break;
        case "-":
            console.log(`${a} - ${b} = `, a - b)
            break;
        case "*":
            console.log(`${a} * ${b} = `, a * b)
            break;
        case "/":
            console.log(`${a} / ${b} = `, a / b)
            break;
    
        default:
            console.log("not found")
            break;
    }
}

calculator(2 , 3 , "/")



//  7.⁠ ⁠ტემპერატურის კონვერტორი
// ფუნქცია უნდა მიიღოს ტემპერატურა ცელსიუსში და დააბრუნოს ფარენჰეიტში კონვერტირებული მნიშვნელობა. ფორმულა: 
// F=C×9/5+32.

function celsiusToFahrenheit(celsius) {
    if(celsius = celsius ){
        console.log(`${celsius} * 9 / 5 + 32 =`,celsius * 9 / 5 + 32)
    }
}
celsiusToFahrenheit(100)


//  8.⁠ ⁠მაქსიმალური რიცხვის პოვნა
// ფუნქცია უნდა მიიღოს სამი რიცხვი და დააბრუნოს მათ შორის მაქსიმალური მნიშვნელობა.

function findMax(a, b, c) {
     if (a > b , a > c) {
        console.log(`${a} - მაქსიმალური მნიშვნელობა`)
     }else if(b > a , b > c){
        console.log(`${b} - მაქსიმალური მნიშვნელობა`)
     }else{
        console.log(`${c} - მაქსიმალური მნიშვნელობა`)
     }
}
findMax(10 , 15 , 20)


//  9.⁠ ⁠რიცხვის დადებითი თუ უარყოფითი
// ფუნქციამ უნდა მიიღოს რიცხვი და შეამოწმოს, დადებითია თუ უარყოფითი. დააბრუნოს შესაბამისი ტექსტი.

function checkSign(num) {
    if(num > 0){
        console.log(`${num} - დადებითა`)
    }else if (num < 0 ) {
        console.log(`${num} - უარყოფითა`)   
    }else{
        console.log(`${num} - ნულია`)
    }
}
checkSign(1)


// 10.⁠ ⁠switch case – თვეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 12-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი თვის სახელი (მაგ. 1 - იანვარი, 2 - თებერვალი და ა.შ.).

// function getMonthName(monthNumber) {
//     // აქ ჩაწერე შენი კოდი
// }
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case "1":
            console.log("January")
            break;
        case "2":
            console.log("February")
            break; 

        case "3":
            console.log("March")
            break;
        case "4":
            console.log("April")
            break;
        case "5":
            console.log("May")
            break;
        case "6":
            console.log("June ")
            break;
        case "7":
            console.log("July")
            break;
        case "8":
            console.log("August")
            break;
        case "9":
            console.log("September")
            break;
        case "10":
            console.log("October")
            break;
        case "11":
            console.log("November")
            break;
        case "12":
            console.log("December")
            break;
                   
        default:
            console.log("not found")
            break;
    }
 }

 getMonthName("12")

// 11.⁠ ⁠გამრავლების მნიშვნელობა
// ფუნქცია უნდა მიიღოს ერთი რიცხვი და თუ რიცხვი 5-ის ტოლია ან მეტი, დააბრუნოს მისი ნამრავლი 10-ზე.
//  წინააღმდეგ შემთხვევაში დააბრუნოს "რიცხვი მცირეა".

function multiplyIfGreaterThanFive(num) {
     if (num >= 5) {
        console.log("რიცხვი 5-ის ტოლია ან მეტი", num * 10)
     }else{
        console.log("რიცხვი 5-ზე ნაკლებია")
     }
}
multiplyIfGreaterThanFive(91273812)


// 12.⁠ ⁠switch case – სეზონის შემოწმება
// ფუნქციამ უნდა მიიღოს 1-დან 4-მდე რიცხვი და switch case-ებით დააბრუნოს შესაბამისი სეზონი
//  (1 - გაზაფხული, 2 - ზაფხული, 3 - შემოდგომა, 4 - ზამთარი).


 function getSeason(seasonNumber) {
        switch (seasonNumber){
            case "1":
                console.log("Spring")
                break;
            case "2":
                console.log("summer")
                break; 
    
            case "3":
                console.log("Autumn")
                break;
            case "4":
                console.log("winter")
                break;
            default:
                console.log("not found")
                break
 }
}
 getSeason("2")


// 13.⁠ ⁠მარტივი აღრიცხვის ფუნქცია
// ფუნქციამ უნდა მიიღოს ფასის მნიშვნელობა და შეამოწმოს, არის თუ არა იგი 100-ზე მეტი. თუ კი, დააბრუნოს "ფასი მაღალია", 
// წინააღმდეგ შემთხვევაში დააბრუნოს "ფასი ნორმალურია".

 function checkPrice(price) {
    if(price > 100){
        console.log("ფასი მაღალია")
    }else{
        console.log( "ფასი ნორმალურია")
    }
}
checkPrice("150")
// 14.⁠ ⁠switch case – მათემატიკური ოპერატორების შემოწმება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და switch case-ების გამოყენებით დააბრუნოს შესაბამისი მოქმედების შედეგი.


function switchcasecalculator(x, y, operator2) {
    switch (operator2) {
        case "+":
            console.log(`${x} + ${y} = `, x + y)
            break;
        case "-":
            console.log(`${x} - ${y} = `, x - y)
            break;
        case "*":
            console.log(`${x} * ${y} = `, x * y)
            break;
        case "/":
            console.log(`${x} / ${y} = `, x / y)
            break;
    
        default:
            console.log("not found")
            break;
    }
}

switchcasecalculator(31231 , 2 , "*")

// 15.⁠ ⁠რიცხვების დადებითი ჯამი
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და თუ ორივე დადებითია, დააბრუნოს მათი ჯამი. წინააღმდეგ შემთხვევაში დააბრუნოს "მინიმუმ ერთი რიცხვი უარყოფითია".

function positiveSum(a, b) {
    if(a > 0 , b > 0){
        console.log(`${a} + ${b} = `, a + b)
    }else{
        console.log("მინიმუმ ერთი რიცხვი უარყოფითია")
    }
}
positiveSum(1 , -2)