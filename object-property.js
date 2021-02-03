const students = [
    {id: 1, name: 'Sayem Parvez'},
    {id: 7, name: 'Abdul Malek'},
    {id: 10, name: 'Shakil'},
    ]
// for (let i = 0; i < students.length; i++) {
//     const element = students.name[i];
//     result = element.students.name;
//     output.push(result)
// }
// const output = [];

const studentName = students.map( s => s.name );
const bigger = students.filter(s => s.id > 6);
const biggerOne = students.find(s => s.id > 6);
console.log(biggerOne);