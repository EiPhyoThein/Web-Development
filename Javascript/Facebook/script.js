var user1 = {
    username: "Daw Maw",
    password: "maw2019"
};
var user2 = {
    username: "Daw Ei Phyo Thein",
    password: "ei2019"
};
var user3 = {
    username: "Daw Cho Latt Thin",
    password: "cho2019"
};
var user4 = {
    username: "Daw Myint Myint San",
    password: "myint2019"
};
var user5 = {
    username: "Daw Si Si Sein",
    password: "si2019"
};


var database = [user1,user2,user3,user4,user5];

var newsFeed = [
    {
        username: "Daw Maw",
        timeline: "Everything is Ok. "
    },
    {
        username: "Daw Ei Phyo Thein",
        timeline: "The only job which start on the top is digging.",
    },
    {
        username: "Daw Cho Latt Thin",
        timeline: "An eye for an eye, a tooth for a tooth.",
    },
    {
        username: "Daw Myint Myint San",
        timeline: "Love is grounded on Esteem.",
    },
    {
        username: "Daw Si Si Sein",
        timeline: "If you judge people you have no time to love them. - Mother Teresa",
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (user in database) {
        if (database[user].username === username &&
            database[user].password=== password) {
            return true;
        }    
    }
    return false;
}

function signIn(username, password) {
   
    // console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
        for (profile in newsFeed) {
            if(newsFeed[profile].username==username){
                
                document.write(`<h2 >${newsFeed[profile].username}</h2>`);
                document.write(`<p>${newsFeed[profile].timeline}</p>`);

            }
            
        }
        
        } else {
            // alert("Sorry, wrong username and password!");
            document.write("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);
