let a = "1 Write a program that displays current date and time in your browser."
document.write(a, "<br>")

var now = new Date()
document.write(now)
document.write("<br>" ,"<br>")

let b ="2 Write a program that alerts the current month in words. For example December."
document.write(b ,"<br>")

var month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" ,"Nov", "Dec"];
console.log(month);

var todayDate = new Date()
console.log(todayDate);

var curMonth = todayDate.getMonth()
console.log(curMonth);

var curMonthName = month[curMonth]
alert("current month is "+ curMonthName);
document.write("the answer is in alert box")
document.write("<br>" ,"<br>")

let c ="3 Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun."
document.write(c, "<br>")

var days =["sun","mon","tues","wed","thur","fri","sat"];
console.log(days);

var todayDate = new Date()
console.log(todayDate);

var toDay =todayDate.getDay()
console.log(toDay);
var toDay2 =days[toDay]
alert("Today is "+ toDay2)

//the below acttion thats why bcz if the days name in full form so what will be do here
// var today3 =toDay2.slice(0,3)
// alert("Today is "+ today3)
document.write("the answer is in alert box")
document.write("<br>" ,"<br>")

let d= "4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today."
document.write(d,"<br>")

var days =["sun","mon","tues","wed","thur","fri","sat"];
console.log(days);

var toDay =todayDate.getDay()
console.log(toDay);
if(toDay===6 || toDay ===0){
    alert("today is Funday");
}else{
    alert("not Funday");
}
document.write("ans is in alert")
document.write("<br>" ,"<br>")
let e ="5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”."
document.write(e,"<br>")

var now = new Date()
console.log(now)
var curMonth =now.getDate()
console.log(curMonth);

if(curMonth<16){
    alert("first fifteen days of the Month");
}else{
    alert("last days of month");
}
document.write("ans is in alert")
document.write("<br>" ,"<br>")

let f ="Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object."
document.write(f,"<br>")

var now = new Date()
console.log(now)

var miliSec =now.getTime()
console.log(miliSec);

var minutes =Math.floor(miliSec/(1000*60));
document.write(minutes);
document.write("<br>" ,"<br>")

let g ="Write a program that tests whether it's before noon and alert “Its AM” else “its PM”."
document.write(g,"<br>")

var now = new Date()
console.log(now)

var hours =now.getHours()
console.log(hours);

if(hours<12){
    document.write("its AM")
}else{
    document.write("its PM")
}

document.write(minutes);
document.write("<br>" ,"<br>")

let h="Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate."
document.write(h,"<br>")

var laterDate=new Date(2024,11,31)
document.write(laterDate);

document.write(minutes);
document.write("<br>" ,"<br>")

var age = prompt("enter your age")
console.log(age);
// age = parseInt(age)
// console.log(age);
var now = new Date()
console.log(now)
var year =now.getFullYear()
console.log(year);

var birthYear = year-age
document.write("your age is "+ age,"<br>")
document.write("your birth Year is "+ birthYear);