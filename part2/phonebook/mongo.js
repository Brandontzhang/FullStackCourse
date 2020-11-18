const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(`Please provide a password: node mongo.js <password>`);
  process.exit(1);
}

const password = process.argv[2];


const url = `mongodb+srv://Brandon:${password}@cluster0.ynusz.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true, useUnifiedTopology: true,
  useFindAndModify: false, useCreateIndex: true,
});

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phone = mongoose.model('Phone', phoneSchema);

const saveNewNumber = (newName, newNumber) => {
  const newPhone = new Phone({
    name: newName,
    number: newNumber,
  });

  newPhone.save().then((res) => {
    console.log(`added ${newName} number ${newNumber} to phonebook`);
    mongoose.connection.close();
  });
};


const viewEntries = () => {
  Phone.find().then((result) => {
    result.forEach((phone) => {
      console.log(phone);
    });
    mongoose.connection.close();
  });
};

if (process.argv.length == 5) {
  const name = process.argv[3];
  const number = process.argv[4];
  saveNewNumber(name, number);
} else if (process.argv.length == 3) {
  viewEntries();
} else {
  console.log(`Please provide a 3 or 5 inputs`);
  process.exit(1);
}

// creating new entry
// phone.save().then(result => {
//     console.log(`Number saved`)
//     mongoose.connection.close()
// })

// Phone.find().then(result => {
//     result.forEach(phone => {
//         console.log(phone)
//     })
//     mongoose.connection.close()
// })
