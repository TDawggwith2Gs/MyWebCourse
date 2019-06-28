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

let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");
}