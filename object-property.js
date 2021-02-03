const students = [
    {id: 1, name: 'Sayem Parvez'},
    {id: 7, name: 'Abdul Malek'},
    {id: 10, name: 'Shakil'},
    ]

const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    output.push(element.name)
}
console.log(output);


// const res = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     res.push(element.name)
// }
// console.log(res);


const studentName = students.map( s => s.name );
const bigger = students.filter(s => s.id > 6);
const biggerOne = students.find(s => s.id > 6);
console.log(biggerOne);