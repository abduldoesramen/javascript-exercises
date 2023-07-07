const findTheOldest = function (people) {
    var oldestAge = 0;

    const oldestPerson = people.map((person) => {
        !person.yearOfDeath ? person.yearOfDeath = 2023 : person.yearOfDeath = person.yearOfDeath;
        var age = person.yearOfDeath - person.yearOfBirth;

        /* Find the person with the oldest name */
        if (oldestAge === 0) {
            oldestAge = age;
        } else if (oldestAge < age) {
            oldestAge = age;
        }

        return {
            name: person.name,
            age: age,
        }
    }).filter((person) => {
        return person.age === oldestAge;
    })
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
