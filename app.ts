console.log("Run type script code");
function add(n1: number, n2: number, showResult: boolean):number {
  if (showResult) {
    throw new Error("testing enum");
  } else {
    return n1 + n2;
  }
}

type Combinable = string|number;
function addAny(value1:Combinable,value2:Combinable,resultConversion: 'asNumber'|'asString'){
    let result : number;
    if(typeof value1 === 'number' && typeof value2 === 'number' && resultConversion==='asNumber'){
        result = value1 + value2;
    }else{
        result = +value1 + +value2;
    }
    console.log(result);

}
addAny(89,92,'asNumber');
enum Role{admin='admin',auther='auth',sevant='serv'} ;
const person = {
  name: "Shirshendu",
  age: 30,
  hobbies: ["Sports", "coocking"],
  role: Role.admin
};
let activities: any[];
activities = ["sports", 8];
let number1: number;
number1 = 5;
const number2 = 2.5;
const printResult = false;
const result = add(number1, number2, printResult);
let fixPerson: [string,string];
fixPerson =["test1","test2"];
console.log(result);
console.log(person.name);
console.log(person.role);
for (const hb of person.hobbies) {
  console.log(hb);
}
