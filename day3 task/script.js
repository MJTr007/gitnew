var resume = [{
    "Name" : "Manoj", 
    "email"   : "Manojram****4@gmail.com)",
    "degree" : "BE.Mechanical",
    "location": {
        "address": "123/321 Kings road Salem",
        "zipcode": 600021,
        "city": "salem",
        "state": "TamilNadu",
        "country": "India",
    },

    "skills" : 
        {
            "skill1" : "Frontend developer",
            "skill2" : "Backend developer",
            "skill3" : "Python",
        }, 
    "languages"   : "Tamil,English",
    "intrests" : "speaking,boxing",
    
},];
//for loop
// for(var i = 0; i < resume.length; i++) {
//     var obj = resume[i];

//     console.log(obj.Name);
//     console.log(obj.email);
//     console.log(obj.degree);
//     console.log(obj.location);
//     console.log(obj.skills);
//     console.log(obj.languages);
//     console.log(obj.intrests);

// }
// for in loop

for (var display in resume){
    console.log(display,resume[display]);
}