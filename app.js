console.log("Run type script code");
function add(n1, n2, showResult) {
    if (showResult) {
        throw new Error("testing enum");
    }
    else {
        return n1 + n2;
    }
}
function addAny(value1, value2, resultConversion) {
    var result;
    if (typeof value1 === 'number' && typeof value2 === 'number' && resultConversion === 'asNumber') {
        result = value1 + value2;
    }
    else {
        result = +value1 + +value2;
    }
    console.log(result);
}
addAny(89, 92, 'asNumber');
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["auther"] = "auth";
    Role["sevant"] = "serv";
})(Role || (Role = {}));
;
var person = {
    name: "Shirshendu",
    age: 30,
    hobbies: ["Sports", "coocking"],
    role: Role.admin
};
var activities;
activities = ["sports", 8];
var number1;
number1 = 5;
var number2 = 2.5;
var printResult = false;
var result = add(number1, number2, printResult);
var fixPerson;
fixPerson = ["test1", "test2"];
console.log(result);
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hb = _a[_i];
    console.log(hb);
}
