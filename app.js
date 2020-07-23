
// ----chp 1 to 20-----
// // *****alerts*****

// // task 1
alert("Hello Visitors")

// // task 2
alert("Error! Please enter a valid password")

// // task 3
alert("Helcome to Js land.. \nHappy coding!")

// // task 4
alert("Welcome to JS Land..")

// // task 5
alert("Happy Coding\nPrevent this page from creating additional dilogs")

// *****variables*****

// // task1
var username

// // task 2
var myName = "awais"

// // task 3
var message = "Hello World!"
alert(message)

// // task 4
var bio = ["John Doe","15 years old","Certified Mobile Application Development"]
for(i=0; i <= 2; i++)
{
    alert(bio[i])
} 

// // task 5
var j = 4;
var p = "pizza";
for(var i = 0; i <= 4; i++)
{
    alert(p);
    p = p.slice(0, j);
    j--;
}

// // task 6
var email = "awaishanif085@gmail.com"
alert("my email address is " + email)

// // task 7
var book =  "A smarter way to learn JavaScript"
alert("I'm trying to learn from the book " + book)

// // task 8
// document.write("Yah! i can write HTML content through javascript")

// // task 9
alert(" ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ");

// ******variables for numbers*******

// // task 1
var age = 22;
alert("I am " + age + " years old")

// // task 2
// var c = document.cookie("username = awais; expires=Thu, 5 Jun 2020 12:00:00 UTC; ")
// alert(c)

// // task 3
// var birthYear = 1998
// document.write("My birth year is " + String(birthYear) + " <br/> Data type of my declared variable is " + typeof birthYear)

// // task 4
var name, prod, quant;
name = prompt("Enter your name")
prod = prompt("What product do you want to buy?")
quant = prompt("Type in product quantity")

var a = name.charAt(0).toUpperCase()
var b = name.slice(1, name.length + 1)
name = a + b
    
document.write( "<br/><br/>" + name + " ordered " + quant + " " + prod + "(s) on XYZ Clothing Store" )

// ***** var names legal/illegal *****

// // task 1
// var var1, var2, var3;

// // task 2
// var Ali, Paki$tan, bookName, hello_brother, abc123;
// var alert, "Pakistan" , book Name, hello-brother, 123abc;

// // task 3
document.write("<br> <h1> Rules for naming JS variables </h1><br> Variable names can only contain numbers, $, alphabets, and underscores. For example: $my_1stVariable <br> Variables must begin with a letter, $, or underscore.  For example $name, _name or name <br> Variable names are case sensitive. <br> Variable names should not be JS keywords")

// // ***** maths expression *****

// // task 1
var a, b
a = +prompt("Enter 1st number to add")
b = +prompt("Enter 2nd number to add")
c = a + b
document.write("<br>The sum of " + a + " and " + b + " is " + c )

// // task 2

d = a - b
document.write("<br>The difference of " + a + " and " + b + " is " + d )


e = a * b
document.write("<br>The product of " + a + " and " + b + " is " + e )


f = a / b
document.write("<br>The quotient of " + a + " and " + b + " is " + f )


g = a % b
document.write("<br>The remainder of " + a + " and " + b + " is " + g )


// task 3

var m 
document.write(" <br> Value after variable declaration is: " + m)

m = 349
document.write("<br>Initial value: " + m)

m++
document.write("<br>Value after increment is: " + m)

m += 7
document.write("<br>Value after addition is: " + m)

m--
document.write("<br>Value after decrement is: " + m)

m = m % 3
document.write("<br>The remainder is : " + m)

// // task 4

var cost = 600
tickets = +prompt("How many tickets do you wanna buy?")
total = cost * tickets
document.write("<br> Total cost to buy " + tickets + " tickets to a movie is " + total + " PKR")

// // task 5
var a, i, m
a = 9
for(i = 1; i <= 10; i++){
    m = a * i 
    document.write("<br>" + a + " x " + i + " = " + m)
}

// // task 6

var c, f
c = 40
f = ((c * (9/5)) + 32)
document.write("<br>" + c + "C is " + f + "F")

var a,b
a = 97
b = ((a - 32) * (5/9))
document.write("<br>" + a + "F is " + b + "C")

// // task 7

document.write("<br> <h1> Shopping Cart </h1>")
var item1 = 650, item2 = 100, qItem1 = 3, qItem2 = 7, sCharges = 100, total 
total = ((item1*qItem1) + (item2*qItem2) + sCharges)

document.write("<br>  Price of item 1 is " + item1)
document.write("<br>  Quantity of item 1 is " + qItem1)
document.write("<br>  Price of item 2 is " + item2)
document.write("<br>  Quantity of item 2 is " + qItem2)
document.write("<br>   Shipping charges " + sCharges)
document.write("<br><br> Total cost of your order is " + total)

// // task 8
document.write("<h1> <br> Marks Sheet </h1>")
var total, obt, perc
total = 980
obt = 804
perc = ((obt/total) * 100)

document.write("<br> Total Marks: " + total)
document.write("<br> Obtained Marks: " + obt)
document.write("<br> Percentage: " + perc + " %")

// // task 9

var usd = 10
var usdToPkr = 104.80 * usd

var r = 25
var rToPkr = 28 * r

var total = usdToPkr + rToPkr

document.write("<br> Total Currency in PKR " + total)

// task 10

var x = 2
x = (((x + 5) * 10) / 2)
document.write("<br>" + x)

// // task 11

var year = 2020
var bYear = 1998
var age = year - bYear

document.write("<br>" + age)

// // task 12

var rad, circ, area
rad = 20
circ = (2 * 3.142 * rad)
area = 3.142 * Math.pow(rad, 2) 

document.write("<br><h1> Geometrizer </h1> <br> ")
document.write("<br> Radius of a circle is " + rad)
document.write("<br> Tbe circumference is: " + circ)
document.write("<br> The area is: " + area)

// // task 13

var snk = "tringo"
var age = 22
var maxAge = 23
var amnt = 2
var x = (maxAge - age) * 365
var y = x * amnt

document.write("<br> <h1> Lifetime supply calculator </h1>")
document.write("<br> Favourite snack: " + snk)
document.write("<br> Current age: " + age)
document.write("<br> Estimated maximum age: " + maxAge)
document.write("<br> Amount of snacks per day: " + amnt)
document.write("<br> You will need  " + y + " " + snk + " to last you until the ripe old age of " + maxAge)

// ***** maths exp *******

// // task 1

var a
a = prompt("Enter a number")

document.write("<br> Result: ")
document.write("<br> The value of a is: " + a)
document.write("<br> .................................. ")
++a
document.write("<br><br> The value of ++a is: " + a)
document.write("<br> Now the value of a is: " + a)

document.write("<br><br> The value of a++ is: " + a++)
document.write("<br> Now the value of a is: " + a)
--a
document.write("<br><br> The value of --a is: " + a)
document.write("<br> Now the value of a is: " + a)

document.write("<br><br> The value of a-- is: " + a--)
document.write("<br> Now the value of a is: " + a)

// // task 2

// var a = 2, b = 1
// var result = --a - --b + ++b + b--

// document.write("<br> a is " + a)
// document.write("<br> b is " + b)
// document.write("<br> result is " + result)

// // ****** output *****

// --a;                    1
// --a - --b;              1 - 0 = 1
// --a - --b + ++b;        1 + 1 = 2
// --a - --b + ++b + b--;  2 + 1 =  3

// // task 3
var name = prompt("Enter your username")
alert("Hello " + name + " Have a good day")

// // task 5

var num = prompt("Enter a number", 5)
if(num != null)
{
    for(i=1; i <= 10; i++)
    {
        ans = num * i
        document.write("<br>" + num + " X " + i + " = " + ans)
    }
}
else{
    for(i=1; i <= 10; i++)
    {
        ans = num * i
        document.write("<br>" + num + " X " + i + " = " + ans)
    }
    
}

// // task 6

var a = prompt("Enter 1st subject name")
var b = prompt("Enter 2nd subject name")
var c = prompt("Enter 3rd subject name")
var eachMarks = 100
var t = eachMarks * 3
var obt1 = +prompt("Enter 1st subject obtained marks")
var obt2 = +prompt("Enter 2nd subject obtained marks")
var obt3 = +prompt("Enter 3rd subject obtained marks")
var tObt = obt1 + obt2 + obt3
var per1 = (obt1/eachMarks) * 100, per2 = (obt2/eachMarks) * 100, per3 = (obt3/eachMarks) * 100
var per = (tObt/t) * 100


document.write("<br><table>")
document.write("<tr>")

document.write("<th>Subject</th>")
document.write("<th>Total Marks</th>")
document.write("<th>Obtained Marks</th>")
document.write("<th>Percentage</th>")

document.write("</tr>")

document.write("<tr>")

document.write("<td>" + a + "</td>")
document.write("<td>" + eachMarks + "</td>")
document.write("<td>" + obt1 + "</td>")
document.write("<td>" + per1 + "</td>")

document.write("</tr>")

document.write("<tr>")

document.write("<td>" + b + "</td>")
document.write("<td>" + eachMarks + "</td>")
document.write("<td>" + obt2 + "</td>")
document.write("<td>" + per2 + "</td>")

document.write("</tr>")

document.write("<tr>")

document.write("<td>" + c + "</td>")
document.write("<td>" + eachMarks + "</td>")
document.write("<td>" + obt3 + "</td>")
document.write("<td>" + per3 + "</td>")

document.write("</tr>")

document.write("<tr>")

document.write("<th></th>")
document.write("<th>" + t + "</th>")
document.write("<th>" + tObt + "</th>")
document.write("<th>" + per + "%</th>")

document.write("</tr>")

document.write("<br></table>")


// // ***** user input & conditional statement *****

// // task 1

var city = prompt("Enter city name ")
if(city === "Karachi" || city === "karachi")
{
    alert("Welcome to City of Lights")
}

// // task 2

var gender = prompt("What's your gender? ")
if(gender === "male")
{
    document.write("<br> Good Morning Sir")
}
else if(gender === "female")
{
    document.write("<br> Good Morning Ma'am")
}

// // task 3

var color = prompt("Enter traffic signal color")
if(color === "red")
{
    document.write("<br> Must Stop")
}
else if(color === "yellow")
{
    document.write("<br> Ready to move")
}
else if(color === "green")
{
    document.write("<br> Move now")
}

// // task 4

var fuel = prompt("Your remaining fuel?")
if(fuel < 0.25)
{
    document.write("<br> Please refill the fuel in your car")

}
else{
    document.write("<br> You have enough fuel")
}

// // task 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// true

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
 } 

//  false

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// 2, 4 true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// true

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

//    true 

if("car" < "cat"){
    alert("car is smaller than cat");
    }

    // true

// // task 6
    
var obt1, obt2, obt3, total, perc, grade, obt, remarks
obt1 = 40
obt2 = 40
obt3 = 84
obt = obt1 + obt2 + obt3
total = 300
perc = (obt/total) * 100
if(perc >= 80){
    grade = "A-one"
    remarks = "Excellent"
}
else if(perc >= 70){
    grade = "A"
    remarks = "Good"
}
else if(perc >= 60){
    grade = "B"
    remarks = "You need to improve"
}
else if(perc < 60){
    grade = "Fail"
    remarks = "Sorry"
}
document.write("<br> <h1> Marks Sheet </h1>")
document.write("<br> Total Marks: " + total)
document.write("<br> Marks obtained: " + obt)
document.write("<br> Percentage: " + perc)
document.write("<br> Grade: " + grade)
document.write("<br> Remarks: " + remarks)

// // task 7

var num, a
num = 7
a = +prompt("Guess the secret number ")
if(num === a)
{
    document.write("bingo")
}
else if(num === a+1 || num === a-1)
{
    document.write("Close enough to the correct answer")
}
else{
    document.write("try again")   
}

// // task 8

var a, b
a = prompt("enter number")
if(a % 3 == 0)
{
    document.write("<br>" + a + " is divisible by 3 ")
}
else{
    document.write("<br>" + a + " is not divisible by 3 ")   
}

// // task 9

var a
a = prompt("enter number")
if(a % 2 == 0)
{
    document.write("<br> Even number")
}
else{
    document.write("<br> Odd number")
}

// // task 10

var t
t = prompt("enter temperature ")
if(t > 40)
{
    document.write("<br> It is too hot outside ")
}
else if(t > 30)
{
    document.write("<br> The Weather today is Normal ")   
}
else if(t > 20)
{
    document.write("<br> Today’s Weather is cool ")      
}
else if(t > 10)
{
    document.write("<br> OMG! Today’s weather is so Cool ")   
}

// task 11

var a, b , c
a = +prompt("Enter 1st number")
b = +prompt("Enter 2nd number")
c = prompt("Enter operator")
if(c === "+")
{
    ans = a + b
    document.write("<br> " + ans)
}
if(c === "-")
{
    ans = a - b
    document.write("<br> " + ans)
}
if(c === "*")
{
    ans = a * b
    document.write("<br> " + ans)
}
if(c === "/")
{
    ans = a / b
    document.write("<br> " + ans)
}
if(c === "%")
{
    ans = a % b
    document.write("<br> " + ans)
}

// // chap 12-13

// // task 1

var ch,code, i
ch = prompt("enter something ")
code = ch.charCodeAt(0)
document.write("<br>ASCII Code is " + code)
for(i = 65; i <= 90; i++)
{
    if(Number(code) == Number(i))
   { document.write("<br> Character is uppercase " )}
   
}
for(i = 97; i <= 122; i++)
{
    if(Number(code) == Number(i))
    {document.write("<br> Character is lowercase " )}
    
}

// task 2

var a,b
a = +prompt("Enter 1st number ")
b = +prompt("Enter 2nd number ")

if(a > b)
{
    document.write("<br>" + a + " is larger")
}

else if(a < b)
{
    document.write("<br>" + b + " is larger")
}

else if(a = b)
{
    document.write("<br>" + a + " and " + b + " are equal")
}

// // task 3

var a
a = +prompt("enter number ")

if(a < 0)
{
    document.write("<br>" + a + " is negative")
}

else if(a > 0)
{
    document.write("<br>" + a + " is positive")
}

if(a == 0)
{
    document.write("<br>" + a + " is zero")
}

// // task 4

var v = prompt("enter an alphabet ")
if(v === 'a')
{
    document.write("<br> it is a vowel")
}
else if(v === 'e')
{
    document.write("<br> it is a vowel")
}
else if(v === 'i')
{
    document.write("<br> it is a vowel")
}
else if(v === 'o')
{
    document.write("<br> it is a vowel")
}
else if(v === 'u')
{
    document.write("<br> it is a vowel")
}
else
{
    document.write("<br> it's not a vowel")
}

// // task 5

var a, b
b = "789HelloDear$99"
a = prompt("enter password ",)
if(a === b)
{
    document.write("<br> correct password")
}
else if(a !== b && a !== "")
{
    document.write("<br> wrong password")
}

else if(a === "")
{
    document.write("<br> please enter password")
}

// // task 6

var greetingDay = 'Good Day', greetingEve = 'Good Evening'
var hour = 19;
if (hour < 18) 
{
    document.write("<br>" + greetingDay)
}
else
{
    document.write("<br>" + greetingEve)
}

// // task 7

var t
t = prompt("enter time ")
if(t >= 0000 && t < 1200)
{
    document.write("<br>Good Morning " )
}
else if(t >= 1200 && t < 1700)
{
    document.write("<br>Good Afternoon " )
}
else if(t >= 1700 && t < 2100)
{
    document.write("<br>Good Evening " )
}
else if(t >= 2100 && t <= 2359)
{
    document.write("<br>Good Night " )
}

// // chap 14-16

// // task 1

var arr = []

// task 2

var arr = {}

// // task 3

var words = ["hello", "knowledge", "bug bounty", "bitcoin"]

// // task 4

var numb = [786, 555, 007, 2020]

// // task 5

var bool = [true, false]

// // task 6

var mixx = ["bond", 007, true, 'access granted']

// // task 7

var qual = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'], a = 1

document.write("<br> <h1> Qualifications: </h1>")
for(i = 0; i < qual.length; i++)
{
    document.write("<br>" + a + ") " + qual[i])   
    a++
}

// // task 8

var std, scr, t, i
std = ['awais', 'Brian', 'Harry']
scr = [320, 230, 480]
t = 500
for(i = 0; i < 3; i++)
{
    document.write("<br>Score of " + std[i] + " is " + scr[i] + ".Percentage: " + (scr[i]/t)*100 + "%")
}

// // task 9

var col, col2, col3
col = ["yellow", "green", "blue"]
document.write("<br>" + col)

col2 = prompt("add color to beginning")
col.unshift(col2)
document.write("<br>" + col)

col3 = prompt("add color to end")
col.push(col3)
document.write("<br>" + col)

col.unshift('orange', 'brown')
document.write("<br>" + col)

col.shift()
document.write("<br>" + col)

col.pop()
document.write("<br>" + col)

col[2] = prompt("enter color to specific index ")
document.write("<br>" + col)

ind = prompt("enter specific index to del color ")
delete col[ind]
document.write("<br>" + col)

// // task 10

var score, 
score = [320, 230, 480, 120]
document.write("<br> Scores of students " + score)
for(i = 0; i < score.length; i++)
{
    for(j = i+1; j < score.length; j++)
    {
        if(score[i] > score[j])
        {
            temp = score[j]
            score[j] = score[i]
            score[i] = temp
        }
    }   
}
document.write("<br> Ordered Scores of students " + score)

// // task 11

var cities, sCit
cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
sCit = cities.slice(2, 4)
document.write("<br> Cities list <br>" + cities)
document.write("<br> Selected cities list <br>" + sCit)

// task 12

var arr
arr = ['This ', ' is ', ' my ', ' cat ']

document.write("<br>array <br>" + arr)
document.write("<br>string <br>" + arr[0] + arr[1] + arr[2] + arr[3])

// // task 13

var d = ['keyboard', 'mouse', 'printer', 'monitor']
document.write("<br>devices: <br>" + d + "<br>")
for(i = 0; i < d.length; i++)
document.write("<br>out: <br>" + d[i])

// // task 14

var d = ['keyboard', 'mouse', 'printer', 'monitor']
document.write("<br>devices: <br>" + d + "<br>")
for(i = (d.length-1); i >= 0; i--)
document.write("<br>out: <br>" + d[i])

// // task 15

var ph
ph = ['Apple', 'Samsung', 'Motorolla', 'Nokia', 'Sony', 'Haier']

document.write('<br> <select name="company"')

for(i = -1; i < ph.length; i++)
{
document.write('<option value="' + ph[i] + '">')
document.write(ph[i]) 
document.write('</option>')
}

document.write('</select>')

// chap 17-20

// // task 1

var arr
arr = [
    [],
    [],
    []
]

// // task 2

var ar
ar = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
for(i = 0; i < 3; i++)
{
    for(j = 0; j <= 3; j++)
    {
        document.write(ar[i][j] + " ")
    }
    document.write('<br>')
}

// // task 3

for(var i = 1; i<=10; i++)
{
    document.write("<br>" + i)
}

// // task 4

var len, num
num = +prompt("enter number of which you want table ")
len = +prompt("enter length of table ")
for(i = 1; i <= len ; i++)
{
    document.write("<br>" + num + " x " + i + " = " + num*i)   
}

// // task 5

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for(i = 0; i < fruits.length; i++)
{
    document.write("<br>" + fruits[i])
}

    document.write("<br>")

for(i = 0; i < fruits.length; i++)
{
    document.write("<br>Element at index " + i + " is " + fruits[i])
}

// // task 6

document.write("<br>Counting: <br><br>")
for(i = 1; i <= 15; i++)
{
    document.write(i + ", ")   
}

document.write("<br><br>Reverse Counting: <br><br>")
for(i = 10; i >= 1; i--)
{
    document.write(i + ", ")   
}

document.write("<br><br>Even: <br><br>")
for(i = 0; i <= 20; i++)
{
    if(i%2==0)
    document.write(i + ", ")   
}

document.write("<br><br>Odd: <br><br>")
for(i = 0; i <= 20; i++)
{
    if(i%2!=0)
    document.write(i + ", ")   
}

document.write("<br><br>Series: <br><br>")
for(i = 2; i <= 20; i++)
{
    if(i%2==0)
    document.write(i + "k, ")   
}

// // task 7

var a,b,i, m = 'no'
a = ["cake", "apple pie", "cookie", "chips", "patties"]
b = prompt("search your item ")
for(i = 0; i < a.length; i++)
{
    if(a[i] == b)
    {
        m = 'yes'
        document.write("<br>" + b + " is available at index " + i + " in our bakery")
        break
    }
    
}
if(m === 'no')
document.write("<br>sorry! " + b + " is not available in our bakery")
        
// // task 8

var A, max, i, j
A = [24, 53, 78, 91, 12]
for(i=0; i<A.length; i++)
{
    for(j = i+1; j < A.length; j++ )
    {
        if(A[i] < A[j] || max < A[j])
        {
            max = A[j]
        }
    }
}    
    document.write("<br>Array items: " + A) 
    document.write("<br>Largest number: " + max)

// // task 9

var A, min, i, j
A = [24, 53, 78, 91, 12]
for(i=0; i<A.length; i++)
{
    for(j = i+1; j < A.length; j++ )
    {
        if(A[i] > A[j] || min > A[j])
        {
            min = A[j]
        }
    }
}   
    document.write("<br>Array items: " + A) 
    document.write("<br>Smallest number: " + min)

// // task 10

var n = 5
for(i = 1; i <= 20; i++)
{
    a = n*i
    document.write(a + ", ")
}

// // chap 21-25

// // task 1

var fName, lName
fName = prompt("enter first name ")
lName = prompt("enter last name ")
var fullName = fName + " " + lName
document.write("<br> Good Day " + fullName)

// task 2

var ph = prompt("enter your favourite mobile phone model ")
document.write("<br> My favourite phone is: " + ph)
document.write("<br> length of string: " + ph.length)

// task 3

var s = "Pakistani"
i = s.indexOf("n")
document.write("<br>string: " + s)
document.write("<br>index of 'n': " + i)

// task 4

var h = 'Hello World'
i = h.lastIndexOf("l")
document.write("<br>string: " + h)
document.write("<br>Last index of 'l': " + i)

// task 5

var s = "Pakistani"
var c = s.charAt(3)
document.write("<br>string: " + s)
document.write("<br>character at index 3: " + c)

// task 6

var fName, lName
fName = prompt("enter first name ")
lName = prompt("enter last name ")
var fullName = fName.concat(" ",lName)
document.write("<br> Good Day " + fullName)

// task 7

var c = "Hyderabad"
var a = c.replace("Hyder", "Islam")
document.write("<br>City: " + c)
document.write("<br>After replacement: " + a)

// task 8

var message = "Ali and Sami are best friends. They play cricket and football together"
var m = message.replace(/and/g,"&")
document.write("<br>" + m)

// task 9

var n = '472'
document.write("<br>value: " + n)
document.write("<br>type: " + typeof n) 
document.write("<br>value: " + Number(n))
document.write("<br>type: " + typeof Number(n))

// task 10

var a = prompt("enter any word")
b = a.toUpperCase()
document.write("<br>user input: " + a)
document.write("<br>upper case: " + b)

// task 11

var a = prompt("enter any word")
var fCh = a.charAt(0)
fCh = fCh.toUpperCase()
var aCh = a.slice(1)
aCh = aCh.toLowerCase()
var w = fCh.concat(aCh) 
document.write("<br>user input: " + a)
document.write("<br>title case: " + w)

// task 12

var num = 35.36
var s = String(num)
for(var i = 0; i <= 4; i++)
{
    if(s[i] === ".")
    {
        s = s.replace(".","")
    }
    
}
document.write("<br>Number: " + num)
document.write("<br>result: " + s)

// task 13
// codes of ! . , @
var f = 'n'
var u = prompt("enter username: ")

for(var i = 0; i < u.length; i++)
{
    if(u.charCodeAt(i) === 33 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
    else if(u.charCodeAt(i) === 44 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
    else if(u.charCodeAt(i) === 46 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
    else if(u.charCodeAt(i) === 64 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
}
if(f == 'n'){
document.write(u)
}

// task 14

var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var b = prompt('search bakery item: ')
b = b.toLowerCase()
var flag = false
for(var i=0; i<a.length; i++)
{
    if(a[i] === b)
    {
        flag = true
        document.write("<br>" + b + " is available at index " + i + " in our bakery ")
    }
}
if(flag === false)
{
    document.write("<br>Sorry! " + b + " is not available in our bakery ")
}

// task 15

var alph = 'no', num = 'no'
var p = prompt("enter password: ")
for(var i = 0; i < p.length; i++)
{
    
    for(var j = 48; j <= 57; j++)
    {
        if(p.charCodeAt(i) === j)
        {

            num = 'yes'
        }
        
    }
}
    
for(var a = 0; a < p.length; a++)
{
    for(k = 97; k <= 122; k++)
    {
        if(p.charCodeAt(a) === k)
        {
            alph = 'yes'
        }
        
    }
}

if(p.length < 6)
    {
        document.write('<br>entered password: ' + p)
        document.write('<br>password cannot be less than 6 characters')
        document.write('<br>please enter a valid password')
    }
else if(alph === 'no')
{
    document.write('<br>entered password: ' + p)
    document.write('<br>password must have alphabets ')
    document.write('<br>please enter a valid password')
    
}
else if(num === 'yes')
{
    document.write('<br>entered password: ' + p)
    document.write('<br>password cannot be started with a number')
    document.write('<br>please enter a valid password')
    
}

// task 16

var university = 'University of Karachi'
var arr = university.split('')
for(i = 0; i < arr.length; i++)
{
document.write("<br>" + arr[i])
}

// task 17

var s = "Pakistan"
document.write("<br>user input: " + s)
document.write("<br>last character of input: " + s[s.length-1])

// task 18

var a =  'The quick brown fox jumps over the lazy dog', c = 0
a = a.toLowerCase()
for(i = 0; i < a.length; i++)
{
    if(a.slice(i,i + 3) === 'the')
    {
        c += 1
    }
}
document.write("<br>text: " + a)
document.write("<br>there are " + c + " occurrences of the word" )

// ch 26-30

// task 1

var n = prompt('enter positive float num ')
var r = Math.round(n)
var f = Math.floor(n)
var c = Math.ceil(n)
document.write("<br>number: " + n)
document.write("<br>round off value : " + r)
document.write("<br>floor value: " + f)
document.write("<br>ceil value: " + c)


// task 2

var n = prompt('enter negative float num ')
var r = Math.round(n)
var f = Math.floor(n)
var c = Math.ceil(n)
document.write("<br>number: " + n)
document.write("<br>round off value : " + r)
document.write("<br>floor value: " + f)
document.write("<br>ceil value: " + c)

// task 3

var n = -5
var a = Math.abs(n)
document.write("<br>absolute value of " + n + " is " + a)

// task 4

var d = Math.random()
var i = (d*6)+1
var n = Math.floor(i)
document.write("<br>" + d)
document.write("<br>" + i)
document.write("<br>random dice value " + n)

// task 5

var a = Math.random()
var b = (a*2)+1
var c = Math.floor(b)
if(c === 1)
{
    document.write("<br>" + c)
    document.write("<br>random coin value: Tails")
}
else if(c === 2)
{
    document.write("<br>" + c)
    document.write("<br>random coin value: Heads")
}

// task 6

var a = Math.random()
var b = (a * 100) + 1
var c = Math.floor(b)
document.write("<br> random number between 1 and 100: " + c)

// task 7

var w = prompt('enter your weight in kilograms ')
for(i = 0; i < w.length; i++)
{
    if(w[i] === 'k' || w[i] === 'K')
    {
        var w2 = w.slice(i, i.length) 
        var w3 = w2.replace(w2,'kilograms')
        w = w.replace(w2,w3)
    }
}
document.write("<br> the weight of user is: " + w)

// task 8

var secret = Math.random()
secret = (secret*10)+1
secret = Math.floor(secret)
var u = +prompt('enter number ')
if(u === secret)
{
    document.write("<br>Congrats ")
}
else
{
    document.write("<br>try again " + secret)
}

// ch 31-34

// task 1

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var d = new Date()

var day = d.getDay()
var m = d.getMonth()
var date = d.getDate()
var y = d.getFullYear()
var hr = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

document.write("<br> " + dayNames[day] + ' ' + months[m] + ' ' + date + ' ' + y + ' ' + hr + ':' + min + ':' + sec + ' GMT + 0500 (PKT)')

// task 2

var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var d = new Date()
var m = d.getMonth()

alert('current month: ' + months[m])

// task 3

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var d = new Date()
var day = d.getDay()

alert('Today is ' + dayNames[day])

// task 4

var d = new Date()
var day = d.getDay()

if(day === 6 || day === 0)
{
    alert("It's Fun Day")
}

// task 5

var d = new Date()
var date = d.getDate()

if(date < 16 )
{
    document.write("First fifteen days of the month")
}
else
{
    document.write("Last fifteen days of the month")
}

// task 6

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var d = new Date()

var day = d.getDay()
var m = d.getMonth()
var date = d.getDate()
var y = d.getFullYear()
var hr = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

var ms = d.getTime()

document.write("<br>Current date: " + dayNames[day] + ' ' + months[m] + ' ' + date + ' ' + y + ' ' + hr + ':' + min + ':' + sec + ' GMT + 0500 (PKT)')
document.write("<br>Elapsed miliseconds since Jan 01, 1970: " + ms)
document.write("<br>Elapsed minutes since Jan 01, 1970: " + ms/(1000*60))

// task 7

var d = new Date()
var hr = d.getHours()

if(hr > 0 && hr < 12)
{
    document.write("<br> It's AM")
}
else{
    document.write("<br> It's PM")
}

// task 8

var laterDate = new Date("December 31, 2020 00:00:00")

document.write("<br>" + laterDate)

// task 9

var Ramzan = new Date("June 18, 2015")
var t = Ramzan.getTime()

var Today = new Date()
var T = Today.getTime()

var diff = T - t
var days = diff/(1000*60*60*24) 
days = Math.floor(days)

document.write("<br>" + days + " days have passed since 1st Ramzan, 2015")

// task 10

var reff = new Date("Dec 05, 2015 22:50:16")
var T = reff.getTime()

var begg = new Date("Jan 01, 2015 00:00:00")
var t = begg.getTime()

var diff = T - t
diff = diff/1000

document.write("<br> On reference date " + reff + ",<br> " + diff + " seconds had passed since beginning of 2015")

// task 11

var today = new Date()
var hr = today.getHours()

var before = new Date()
before.setHours(hr-1)

document.write("<br>Current date: " + today)
document.write("<br>1 hour ago: " + before)

// task 12

var today = new Date()
var yr = today.getFullYear()

var before = new Date()
before.setFullYear(yr-100)

document.write("<br>Current date: " + today)
alert("100 years back: " + before)

// task 13

var age = prompt("what's your age?")
var d = new Date()
var yr = d.getFullYear()
var birth = yr - age

document.write("<br>Your age is: " + age)
document.write("<br>Your birth year is: " + birth)

// task 14

var Customer = "Awais"
var d = new Date()
var m = d.getMonth()
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var units = 200
var perUnit = 16
var late = 350
var net = units*perUnit
var Gross = late+net

document.write("<br><h1>K-Electric Bill </h1> ")
document.write("<br>Customer name: " + Customer )
document.write("<br>Current month: " + months[m] )
document.write("<br>Number of units: " + units )
document.write("<br>Charges per unit: " + perUnit )
document.write("<br><br>Net Amount Payable (within Due Date) " + net)
document.write("<br>Late Payment Surcharge: " + late )
document.write("<br>Gross Amount Payable (after Due Date): " + Gross )

// chap 35-38

// task 1

function showDate()
{
    var d = new Date()
    document.write("<br>" + d)
}

showDate()

// task 2

function greet(f,l)
{
    document.write("<br>Good day " + f + " " + l)   
}

greet('muneeb','raza')

// task 3

function sum(a,b)
{
    c = a + b
    document.write("<br>" + c)      
}

sum(77,23)

// task 4

function calc(a,op,b)
{
    if(op === '+')
    {
        c = a + b
        document.write(c)
    }
    else if(op === '-')
    {
        c = a - b
        document.write(c)
    }
    else if(op === '*')
    {
        c = a * b
        document.write(c)
    }
    else if(op === '/')
    {
        c = a / b
        document.write(c)
    }
    else if(op === '%')
    {
        c = a % b
        document.write("<br>" + c)
    }
}

calc(4,'%',8)

// task 5

function sqr(x)
{
    y = Math.pow(x,2)
    document.write("<br>" + y)
}

sqr(3)

// task 6

function fact(a)
{   
    var b = a
    for(var i = a-1; i > 0; i--)
    {
        var b = b * i
        
    }
    document.write("<br>factorial of " + "<b>" + a + "</b>" + " is " + "<b>" + b + "</b>")
}

fact(7)

// task 7

function count(a,b)
{
    if(a < b){
    for(i = a; i <= b; i++)
    {
        document.write("<br>" + i)
    }}
    else if(a > b){
    for(i = a; i >= b; i--)
    {
        document.write("<br>" + i)
    }}
}

count(2,29)

// task 8

function  calculateHypotenuse(b,p)
{
    function calculateSquare(x)
    {
        y = Math.pow(x,2)
     return y   
    }

    h = calculateSquare(b) + calculateSquare(p)
    h = calculateSquare(h)
    c
}

calculateHypotenuse(2,2)

// task 9

function area(w,h)
{
    a = w*h
    return a
 
}

var A = area(5,5)
document.write("<br>area: " + A)

// task 10

function pal(a)
{
    var b=0
    for(var i = 0; i < a.length; i++ )
    {
        if(a[i] === a[a.length-1-i])
        {
            b++
            var flag = b
        }
    }
    if(flag === a.length)
    {
        document.write("<br> palindrome")
    }
    else{
        document.write("<br>not palindrome")}
}

pal('madam')

// task 11

function upp(a)
{
    var b = a.split(" ")
    var c = []
    for(var i=0; i<b.length; i++)
    {
        c.push(b[i].charAt(0).toUpperCase() + b[i].slice(1) )
        document.write(" " + c[i])
    }
    
    
}

upp("the quick brown fox")

// task 12

function long(text)
{

    var arrOfText = text.split(' ')
    for(var i = 0; i < arrOfText.length; i++)
    {
        for(var j = i+1; j < arrOfText.length; j++)
        {
            if(arrOfText[i].length < arrOfText[j].length)
            {
                var temp = arrOfText[j]
                arrOfText[j] = arrOfText[i]
                arrOfText[i] = temp
            }
        }
        
    }
    var longest = arrOfText[0]
    document.write("<br>longest text is: " + longest)
}

long( "Web Development Tutorial")

// task 13

function numOfOccurences(a,b)
{

    var occ = 0
    a = a.toLowerCase()
    for(i = 0; i < a.length; i++ )
    {
        if(a[i] === b)
        {
            occ += 1
        }
    }
    if(occ === 0)
    {
        document.write("<br>letter not found ")   
    }
    else{
        document.write("<br>number of occurences: " + occ)
    }
}

numOfOccurences('heybrother','e')

// task 14

function calcCircumference(r)
{
    var c = 2*(3.142)*r
    document.write("<br>Circumference is: " + c)
}

calcCircumference(3)

function calcArea(r)
{
    var a = (3.142)*Math.pow(r,2)
    document.write("<br>Area is circle: " + a)
}

calcArea(2)



// // chap 38 t0 44
// // task #1;
var a = prompt('enter your value');
var b = prompt('enter your value');
var power = 1;
for ( i = 1 ; i <= b ; i ++ )
{
    power = power*a;
}
alert(a);
alert(b);
alert(power);

// // -----task #2------
function isLeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("GFG").innerHTML  
        = (year % 100 === 0) ? (year % 400 === 0) 
                             : (year % 4 === 0); 
}

// ------task #3------
// function sides(){
//     var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// }

// function area(){
//     var a =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// alert(a);
// }

// ----task 4----
// function subject(){
//     var urdu = prompt('enter the marks of urdu');
//     var maths = prompt('enter the marks of urdu');
//     var english = prompt('enter the marks of urdu');
// }
// function average(){
//     var sum = (urdu + maths + english);
//     var a = (sum/3);
// }
// function per(){
//  alert ((per=(sum/300)*100));

// }

// ----task 5-----
function myFunction() {
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome");
    document.getElementById("demo").innerHTML = n;
  }

// ----task 6----

  String.prototype.character = function() {
    return this.replace(/[aeiou]+/g, ''); 
  }
  
  function submit() {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = input.character();
  }

//   -----task 7-----

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
alert(vowel_count("The quick brown fox"));

// ----task 8-----
var km,m,feet,inch,cm;
var km=prompt("Enter the distance between two cities(in km) ");
m = km*1000; //since 1km = 1000m
feet= km*3280.84; //since 1km=3280.84feet
inch=km*39370.1; //since 1 km=39370.1inches
cm=km*100000; //since 1km = 100000cm
document.write('<br>'+km); 
document.write('(<br>' +feet);
document.write('<br>'+inch);
document.write('<br>'+cm);

// ----task 9----
// var time , overtime;
// prompt("Enter the Hours for an employee worked above 40 hours :- ");
// i=1;
// while(i<=time)
// {
//  overtime=i*12;
//  i++;
// }
// document.write("Overtime of this employee is Rs. %d",overtime);

// ----task 10 ----
 var amount =prompt("Please input amount for withdraw : ");

//calculations

document.write("<br><br>\n\nRequired notes of Rs. 100  : ", amount / 100);
document.write("<br>\n\nRequired notes of Rs. 50   :  ", (amount % 100) / 50);
document.write("<br>\n\nRequired notes of Rs. 10   :  ", (((amount % 100) % 50) / 10));
document.write("<br>\n\nAmount still remaining Rs. :  ", (((amount % 100) % 50) % 10));

// chap 43 to 48

// ------task 1------

function checkbox() {
 
  var confirmmessage = "Are you sure you want to continue?";
  var go = "https://www.google.com/";
  var message = "Action Was Cancelled By User";
 
  if (confirm(confirmmessage)) {
 
      window.location = go;
 
  } else {
 
       alert(message);
 
  }
 
}


// ---task 3----
function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "james 0";
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}

// ---task 4---
function changeThis(id,src){
  var image = getElementById(id);
  image.src = src
}

// ----task 5 -----
var clicks = 0;
function hello() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

var clicks = 0;
function bye() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
};

// chap 49 to 52
// -------task 1--------
function getVal()
  {
                var txt1 = document.getElementById('fname').value;
                document.getElementById('mytext').innerHTML = txt1;
                var txt1 = document.getElementById('lname').value;
                document.getElementById('mytext1').innerHTML = txt1;
                var txt1 = document.getElementById('age').value;
                document.getElementById('mytext2').innerHTML = txt1;
                var txt1 = document.getElementById('email').value;
                document.getElementById('mytext3').innerHTML = txt1;
                var txt1 = document.getElementById('pwd').value;
                document.getElementById('mytext4').innerHTML = txt1;
  }
// ----task 2-----
function readmore(){
  var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit rerum doloribus,Consequuntur suscipit rerum doloribus,Consequuntur suscipit rerum doloribus,Consequuntur suscipit rerum doloribus,"
  
  var peragrap = document.getElementById('pera')
  peragrap.innerHTML = text;
}

// -------task 3--------
// var rIndex,
// table = document.getElementById("table");

// // check the empty input
// function checkEmptyInput()
// {
// var isEmpty = false,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// if(fname === ""){
//     alert("First Name Connot Be Empty");
//     isEmpty = true;
// }
// else if(lname === ""){
//     alert("Last Name Connot Be Empty");
//     isEmpty = true;
// }
// else if(age === ""){
//     alert("Age Connot Be Empty");
//     isEmpty = true;
// }
// return isEmpty;
// }

// // add Row
// function addHtmlTableRow()
// {
// // get the table by id
// // create a new row and cells
// // get value from input text
// // set the values into row cell's
// if(!checkEmptyInput()){
// var newRow = table.insertRow(table.length),
//     cell1 = newRow.insertCell(0),
//     cell2 = newRow.insertCell(1),
//     cell3 = newRow.insertCell(2),
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// cell1.innerHTML = fname;
// cell2.innerHTML = lname;
// cell3.innerHTML = age;
// // call the function to set the event to the new row
// selectedRowToInput();
// }
// }

// // display selected row data into input text
// function selectedRowToInput()
// {

// for(var i = 1; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function()
//     {
//       // get the seected row index
//       rIndex = this.rowIndex;
//       document.getElementById("fname").value = this.cells[0].innerHTML;
//       document.getElementById("lname").value = this.cells[1].innerHTML;
//       document.getElementById("age").value = this.cells[2].innerHTML;
//     };
// }
// }
// selectedRowToInput();

// function editHtmlTbleSelectedRow()
// {
// var fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;
// if(!checkEmptyInput()){
// table.rows[rIndex].cells[0].innerHTML = fname;
// table.rows[rIndex].cells[1].innerHTML = lname;
// table.rows[rIndex].cells[2].innerHTML = age;
// }
// }

// function removeSelectedRow()
// {
// table.deleteRow(rIndex);
// // clear input text
// document.getElementById("fname").value = "";
// document.getElementById("lname").value = "";
// document.getElementById("age").value = "";
// }

// ------chap 58 to 67------
var maincontent = document.getElementById('main-content');

var childs = document.getElementsByClassName('render').innerHTML +='<ul> <li>$(maincontent)</li> </ul>'

var firstname = document.getElementById('first-name').value = 'Alex'

var lastname = document.getElementById('lastName').value = 'Bank'

var email = document.getElementById('email').value = 'alexbnak@gmail.com'

// -----task 2-----
var form = doNotTrack.getElementById('form-content');
document.write(form.nodeType)

var main = document.getElementById('main-content')
var name = main.getElementById('lastName')
document.write(name.nodeType + name.childNodes[0])

var per = name.createElement('p')
 
var tchild = main.firstChild
var dchild = main.lastChild

var main = document.getElementById('main-content')
var name = main.getElementById('lastName')
var ps = name.previousSibling
var ns = name.nextSibling

var email = form.getElementById('email')
var phone = email.parentNode
var type = email.nodeType
console.log(type)