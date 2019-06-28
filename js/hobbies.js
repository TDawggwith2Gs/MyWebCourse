const hobbiesArray = [
    { name: 'SCUBA', lengthInYearsAtHobby: 11 },
    { name: 'Motorcycling', lengthInYearsAtHobby: 40 },
    { name: 'Binge Drinking', lengthInYearsAtHobby: 43 }
];

function printHobbyInfo(hobby) {
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} years`)
}

for (let hobby of hobbiesArray) {
    printHobbyInfo(hobby);
}