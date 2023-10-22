const people = [
    {"name":"Paula Key", "age":23},
     {"name":"Riya Dickerson" , "age":99},
     {"name":"Layne Colon" , "age":53},
     {"name":"Pranav Giles" , "age":51},
     {"name":"Kamryn Davis" , "age":27},
     {"name":"Taniyah Yu" , "age":17},
     {"name":"Brendon Porter" , "age":23},
     {"name":"Jordin Hancock" , "age":86},
     {"name":"Shawn Vargas" , "age":88},
     {"name":"Sawyer Copeland" , "age":14},
     {"name":"Gustavo Baldwin" , "age":7},
     {"name":"Renee Wilson" , "age":29}
]

// ---------- TASK 1 ---------- //
console.log("Task 1");
function findAboveFifty(array) {
  return array.reduce((total, people) => {
      return people.age >= 50 ? ++total : total;
    }, 0)
}
console.log(findAboveFifty(people));

// ---------- TASK 2 ---------- //
console.log("Task 2");
people.forEach((listElement) => console.log("Hi", (listElement.name)))

// ---------- TASK 3 ---------- //
console.log("Task 3");
const ageUp = people.map(people => ++people.age)
console.log(ageUp);

// ---------- TASK 4 ---------- //
console.log("Task 4");

function filterArray(value) {
  return value < 18;
}
console.log(ageUp.filter(filterArray))

// ---------- TASK 5 ---------- //
console.log("Task 5");
const sum = ageUp.reduce((total, people) => {
  return people + total
}, 0);
console.log(sum);

// ---------- TASK 6 ---------- //
console.log("Task 6");
const mapOutAges = ageUp.map((people) => --people);
console.log(mapOutAges + " age array with original age");

const average = mapOutAges.reduce((resultsSoFar, nextNumber) => resultsSoFar + nextNumber, 0) /mapOutAges.length;
console.log(average + " average");

// ---------- TASK 7 ---------- //
console.log("Task 7");

function minValue(value) {
    const min = value.reduce((acc, val) => {
        return acc < val ? acc : val;
    });
    return min;
}
console.log(minValue(mapOutAges));

function maxValue(value) {
    const max= value.reduce((acc, val) => {
        return acc > val ? acc : val;
    });
    return max;
}
console.log(maxValue(mapOutAges));
