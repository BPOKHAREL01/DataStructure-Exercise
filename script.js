// DATA STRUCTURE EXERCISE

const jedi=[];

jedi.splice["luke"];
// jedi.splice(0, 0, "Luke")

jedi.push("Obi-Wan Kanobi");

jedi.unshift("Yoda");

console.log(jedi[1]);//Yoda

jedi.pop();
console.log(jedi);//Yoda, luke

jedi.shift();
console.log(jedi);//Luke

const sithlords=["Darth Vader", "Darth Sidius", "Darth Maul"];

const imperialOfficers=["Grand Moff Tarkin","Orson Krennic"];

const starWarsVillaims=sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
/*[
    'Darth Vader',
    'Darth Sidious',
    'Darth Maul',
    'Grand Moff Tarkin',
    'Orson Krennic'
  ]
  */

console.log(starWarsVillains.slice(0,2)); // [ "Darth Vader", "Darth Sidius"]

const droids={
    astromech:'R2-D2',
    protocol:'C-3PO',
    assasin:'IG-88'};

console.log(droids['astromech']); // R2-D2

console.log(droids.protocol);//C3-PO

droids['assasin']='IG-11'
console.log(droids);
/*
{ astromech: 'R2-D2', 
protocol: 'C-3PO', 
assassin: 'IG-11' }
*/

//BONUS

console.log(starWarsVillains[0][6]);

console.log(sithLords.slice(-2,-1));
//console.log(starWarsVillains.slice(-4,-3));//Darth Sidious

const starWarsMovies=[
    {
        episodeOne:"The Phantom Menace",
        episodeTwo:"Attack of the Clones",
        episodeThree:"Revenge of the Sith"
    },
    {
        episodeFour:"A New Hope",
        episodeFive:"The Empire Strikes Back",
        episodeSix:"Return of the Jedi"
    },
    {
        episodeSeven:"The force Awakens",
        episodeEight:"The Last Jedi",
        episodeNine:"The Rise of SkyWalker"
    }
];

starWarsMovies.splice(1,0,"Rouge One","Solo")
console.log(starWarsMovies);