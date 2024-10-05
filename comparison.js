const date = new Date();
const hour = date.getHours();
console.log(date);

let greeting;
if (hour > 18) {
  greeting = "God Kväll";
} else {
  greeting = "God morgon";
}
