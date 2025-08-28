function addStudent(name, age) {
    const student = {
        name: name,
        age: age
    };
    students.push(student);
    console.log(`Student ${name} added.`);
}