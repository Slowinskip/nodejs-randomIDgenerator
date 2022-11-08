const fs = require('fs');

const genders = ['Male', 'Female']
const maleNames = ['Patryk', 'Marek', 'Damian', 'Kamil', 'Wiktor', 'Przemek', 'Daniel']
const femaleNames = ['Karolina', 'Wiktoria', 'Natalia', 'Martyna', 'Dominika', 'Marta', 'Klaudia', 'Anastazja'] 
const lastNames = ['Nowak', 'Norek', 'Wojcieszek', 'Kowal', 'Duda', 'Bazak', 'Słowiński']
const people = []
function randChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

for (i = 0; i < 20; i++) {
    let obj = {
        gender: '',
        name: '',
        LastName: '',
        age: '',
        email: '',
        telNumber: '',
    }

    const renderGender = randChoice(genders);

    if(renderGender == 'Male'){
        obj.gender = renderGender;
        const renderName = randChoice(maleNames)
        obj.name = renderName;
    }if(renderGender == 'Female'){
        obj.gender = renderGender;
        const renderName = randChoice(femaleNames)
        obj.name = renderName;
    }
    
    obj.LastName = randChoice(lastNames);
    obj.age = Math.floor(Math.random() * (78 - 18 + 1) + 18)

    obj.email = obj.name.toLowerCase() + '.' + obj.LastName.toLowerCase() + '@gmail.com'
    obj.telNumber = Math.random().toString().slice(2,11);

    people.push(obj)

}
console.log(people);

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });