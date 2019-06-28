let hobbieArray = ['SCUBA', 'Motorcycles', 'Binge Drinking'];

function printHobbies(passedArray) {
    console.log(`I like ${passedArray.length}`);
    for (let i=0; i < passedArray.length; i++) {
        let hobby = passedArray[i];
        console.log(`I like ` + hobby);
    }
}

printHobbies(hobbieArray);