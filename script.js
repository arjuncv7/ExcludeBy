function excludeBy(arr1, arr2, field) {
    const excludedValues = new Set(arr2.map(obj => obj[field]));
    return arr1.filter(obj => !excludedValues.has(obj[field]));
  }


  const users = [
    {
      name: "Ivan",
      surname: "Ivanov",
      gender: "male",
      age: 30
    },
    {
      name: "Anna",
      surname: "Ivanova",
      gender: "female",
      age: 22
    },
    {
      name: "James",
      surname: "Bond",
      gender: "MALE",
      age: 36
    },

  ];
  
  const excluded = [
    {
      name: "Ivan",
      surname: "Petrov",
      gender: "male",
      age: 40
    },
    {
      name: "Elena",
      surname: "Sidorova",
      gender: "female",
      age: 25
    },
    {
        name: "Arjun",
        surname: "C",
        gender: "male",
        age: 22
      }
  ];
  
  const filteredUsers = excludeBy(users, excluded, 'name');
  console.log(filteredUsers); 