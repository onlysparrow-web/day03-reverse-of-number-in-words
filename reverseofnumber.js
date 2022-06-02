let a;
let i;
a = prompt("Enter the Value of n", ""); //222
console.log(+a);
while (a != 0) {
  reminder = a % 10; //222%10=(2)
  a = a - reminder; //222-2=(220)
  a = a / 10; //220/10=(22)
  switch (reminder) {
    case 0:
      console.log("zero");
      break;

    case 1:
      console.log("one");
      break;

    case 2:
      console.log("two");
      break;

    case 3:
      console.log("three");
      break;

    case 4:
      console.log("four");
      break;

    case 5:
      console.log("five");
      break;

    case 6:
      console.log("six");
      break;

    case 7:
      console.log("seven");
      break;

    case 8:
      console.log("eight");
      break;

    case 9:
      console.log("nine");
      break;
  }
}
