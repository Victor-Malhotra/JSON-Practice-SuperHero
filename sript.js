// 1. The following JSON string consists of? 4.) An object inside an array

// `[{"name":"Bernard","age":55, "date":${date.now()}}]`

// Is it:
// 1. An Array
// 2. An Object
// 3. An Array inside an object
// 4. An object inside an array : Answer

// ----------------------------------------------------------------------------

// 2. The  JSON string consists of? 1.) An Array with 2 objects

// `[{"name":"Bernard","age":55, "date":${date.now()}},{{"name":"Johnathon","age":60, "date":${date.now()}}}]`

// Is it:
// 1. An Array with 2 objects : Answer
// 2. An Object with 2 objects
// 3. An Array
// 4. An object inside an array

// ------------------------------------------------------------------------------------------------
// 3. The  JSON string consists of? 1.) valid

// `[{"name":"Bernard","age":55, "date":${date.now()}},{{"name":"Johnathon","age":60, "date":${date.now()}}}]`

// Is it:
// 1. valid : Answer
// 2. invalid

// -------------------------------------------------------------------------------------

// Do Not Worry about Lines Below
(function() {
    var old = console.log;
    var logger = document.getElementById('logger');
    console.log = function(message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

// 4. Using Json create an object that stores and array of avenger objects with properties of: name, alias, abilities, and age for the original 15 members.

let avengers = `{
    "heros":[
        {
        "name":"Anthony Edward Tony Stark",
        "alias":"Iron Man",
        "abilities":"Armor Suit",
        "age":48
    },
    {
        "name":"Victor Mancha",
        "alias": "Kid Justice",
        "abilities":"Cyborg, Controls Electricity",
        "age":21
    },
    {
        "name":"Hank Pym Scott Lang",
        "alias":"Ant-Man",
        "abilities":"Can grow small or large",
        "age":49
    },
    {
        "name":"Thor Odinson",
        "alias":"Thor",
        "abilities":"Can summon Lightning, Can summon his hammer",
        "age": 1500
    },
    {
        "name":"Steve Rogers",
        "alias":"Captain America",
        "abilities":"Throw and catch his shield, has super strength",
        "age":90
    },
    {
        "name":"Wanda Maximoff",
        "alias":"Scarlet Witch",
        "abilities":"Reality Warping",
        "age":28
    },
    {
        "name":"Bruce Banner",
        "alias":"Hulk",
        "abilities":"Super strength, ability to grow larger when more angry, ability to turn into a super destroyer when super angry",
        "age":49
    },
    {
        "name":"Carol Danvers",
        "alias":"Captian Marvel",
        "abilities":"Super Everything, Flight",
        "age":53
    },
    {
        "name":"Peter Benjamin Parker",
        "alias":"Spiderman",
        "abilities":"Web Slinging, Spidy Sense(Precognition)",
        "age":16
    },
    {
        "name":"Natalia Natasha Alianovna Romanova",
        "alias":"Black Widow",
        "abilities":"Martial Arts, Weapons",
        "age":88
    },
    {
        "name":"Matthew Michael Murdock",
        "alias":"Daredevil",
        "abilities":"Echolocation, Martial Arts",
        "age":26
    },
    {
        "name":"James Howlett",
        "alias":"Wolverine",
        "abilities":"Regeneration, Slow Aging, Indestructible Bones, Superhuman Senses, Enhanced Everyhting, Unbreakable Retractable Claws",
        "age":200
    },
    {
        "name":"The Vision",
        "alias":"Vision",
        "abilities":"Superhuman intelligence, strength, speed Superhuman senses, Density control (intangibility, invulnerability), Flight, Regeneration, Solar energy projection, Holographic disguise, Technopathy",
        "age":3
    },
    {
        "name":"Clint Barton",
        "alias":"Hawkeye",
        "abilities":"Master Archer, Martial Prowess",
        "age":20
    },
    {
        "name":"Shang-Chi",
        "alias":"The Master of Kung Fu",
        "abilities":"His 10 Rings give him super human everything, ability to control the rings, Martial Arts Master",
        "age":24
    }
    ]
}`

// 5. Use JSON.parse on the code from and make 2 console.log() printing the age, and the date.
avengers = JSON.parse(avengers);
for (let i = 0; i < 15; i++) {
    console.log(avengers.heros[i].alias + ": " + avengers.heros[i].age)
}
let date = new Date();
console.log("\nDate:" + date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear())