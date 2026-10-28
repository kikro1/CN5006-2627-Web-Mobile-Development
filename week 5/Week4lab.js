const mongoose = require('mongoose');

// The connection itself is opened in index.js (mongoose.connect)

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number
});

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);

// Function to insert one document using the input from the form.
async function insertOne(name, age, gender, salary) {

    const doc1 = new Person({
        name: name,
        age: age,
        gender: gender,
        salary: salary
    });

    const savedDoc = await doc1.save();

    console.log('One document inserted');

    return savedDoc;
}

// Function to insert many documents
// If no list is passed, the default four persons from the Week 4 lab are inserted
async function insertMany(manypersons) {

    if (!manypersons || manypersons.length === 0) {
        manypersons = [
            { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
            { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
            { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
            { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
        ];
    }

    const result = await Person.insertMany(manypersons);

    console.log('Many documents inserted');
    console.log(result);
    return result;   // <-- Important
}

// Find all documents
async function findAll() {
    console.log("Before query");

    const docs = await Person.find({})
        .sort({ salary: 1 })      // sort by salary ascending
        .select('name salary age gender')
        .limit(100);
    console.log("After query");

    console.log("Showing multiple documents");

    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });
    return docs;   // <-- Important
}

// Find females with age >= 30
async function findFemalesOver30() {

    const givenAge = 30;

    const docs = await Person.find({
        gender: 'Female',
        age: { $gte: givenAge }
    })
    .sort({ salary: 1 })
    .select('name salary age gender')
    .limit(10);

    console.log(`Females aged ${givenAge} or above:`);

    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });
    return docs;   // <-- Important
}

// Count all documents
async function countDocuments() {

    const count = await Person.countDocuments();

    console.log("Total Documents Count:", count);
    return count;   // <-- Important
}

// Delete all documents where age >= minAge (45 by default)
async function deleteManyPersons(minAge = 45) {

    const result = await Person.deleteMany({
        age: { $gte: minAge }
    });

    console.log("Deleted documents:", result);
    return result;   // <-- Important
}

// Update the salary of everyone with the given gender (all females -> 5555 by default)
async function updateManyPersons(gender = "Female", salary = 5555) {

    const result = await Person.updateMany(
        { gender: gender },
        { salary: salary }
    );

    console.log("Update successful");
    console.log(result);
    return result;
}

// Export functions
module.exports = {
    insertOne,
    insertMany,
    findAll,
    findFemalesOver30,
    countDocuments,
    deleteManyPersons,
    updateManyPersons
};
