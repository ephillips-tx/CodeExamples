// START Escape example
// basic quote example using backslash to escape
quoteExample();

function quoteExample(){
    let aQuote = 'This string is using a backslash to display an apostrophe ova\' here.';

    attachElement('div',aQuote,'quoteDiv');
}

// END Escape example 

// START search & destroy Example
searchAndDestroy();

function searchAndDestroy(){
    // add section header to column
    addSecHead("Search & Destroy","col1","sdHeader");

    // this example is about indexOf() & lastIndexOf():
    // it takes a value to search for in an array and returns
    // the position of the first element that matches the value.
    // If the value is not represented , both return -1
    let someNumbers = [1,2,3,45,63,87,93,2,111];
    let someColors = ["red","blue","pink","green"];

    let indexOfTwo = someNumbers.indexOf(2);
    let indexOfOneEleven = someNumbers.indexOf(111);
    let indexOfRed = someColors.indexOf("red");
    let indexOfPurple = someColors.indexOf("purple");
    if (indexOfPurple == -1) indexOfPurple += ` i.e. not found.`
    
    let content = `The full array of numbers is: [${someNumbers}]<br>
                   The full array of colors is: [${someColors}]<br>
                   The position of '2' is ${indexOfTwo} while the position
                   of 111 is ${indexOfOneEleven}.<br>
                   The position of the color 'red' is ${indexOfRed} while 
                   the position of the color 'purple' is ${indexOfPurple}`;

    attachElement('div',null,'col1','sdContent');
    attachElement('p',content,'sdContent');
}
// END search & destroy Example

// START Array Example
// print whole array to the page: includes a nested array
arrayExample();

function arrayExample(){
    let nestedArray = ['I\'m in a nested array!', 1111, "alternate quotes"];
    let myArray = ["value1", "value2", 11,nestedArray];
    
    attachElement('div',`[${displayArray(myArray)}]`,'arrayArea','firstArrayExample');
    
    function displayArray(anArray){
        for(let i = 0; i < anArray.length; i++){
            if(Array.isArray(anArray[i]))
                anArray[i] = ` <em>[${anArray[i]}]</em>`;
        }
        return anArray;
    }
}
// END Array Example 

// START using forEach()
forEachExample();

function forEachExample(){
    let newCustomers = "";

    function todaysCustomers(name){
        newCustomers = newCustomers + name + "<br>";
    }

    let enteredNames = ["Johnny", "DeMarcus", "Yugi", "Ob Nixilis"];
    enteredNames.forEach(todaysCustomers);

    attachElement('div',newCustomers, 'forEachArea', 'forEachExample');
}
// END using forEach()

// START using arrays and objects example
arrAndObjExample();

function arrAndObjExample(){
    let drinkers = [], voters = [];
    let voterString = '', drinkerString = '', familyString = '';
    let grandpa = {name: 'Grandpa', age: 65}, 
        grandma = {name: 'Grandma', age: 60},
        mama    = {name: 'Mama', age: 43},
        daddy   = {name: 'Daddy', age: 40},
        sister  = {name: 'Sister', age: 18},
        brother = {name: 'Brother', age: 22},
        you     = {name: 'You', age: 20},
        cousin  = {name: 'Cousin' , age: 7};
    let familyParty = [grandpa, grandma, mama, daddy, 
                       sister, brother, you, cousin];
    let numParty = familyParty.length;
    
    // look through familyParty and build 2 new arrays
    for(let i=0;i<numParty;i++){
        canDrinkUSA(familyParty[i]);
        canVoteUSA(familyParty[i]);
    }

    // build strings for output based on 3 arrays
    voterString = buildString(voters);
    drinkerString = buildString(drinkers);
    familyString = buildString(familyParty);

    function canDrinkUSA(member){
        return (member.age >= 21 ? drinkers.push(member) : null)
    }
    function canVoteUSA(member){
        return (member.age >= 18 ? voters.push(member) : null)
    }

    // take the array list, add puncuation
    function buildString(anArray){
        let sArray = anArray;
        let len = sArray.length;
        let str = '';
        for(let i = 0; i < len; i++){
            if (i < len - 1 ){
                str += `${sArray[i].name}, `;
                if (i == len - 2){
                    str += `& `;
                }
            } else {
                str += `${sArray[i].name}`
            }   
        }
        return str;
    }
    
    // display strings to page
    function displayMembers(){
        let s1 = `<p>You have a party of ${numParty}. The party includes ${familyString}.
        It appears that ${voterString} can vote and that ${drinkerString} can drink.</p>`;

        return s1;
    }

    attachElement('div',displayMembers(),'arrAndObjExample');
}
// END using arrays and objects example

// START filter example
filterExample();

function filterExample(){
    let familyAges = [65, 54, 33, 20, 79];
    let retirees = familyAges.filter(canClaimSS); //retirees = [65, 79]


    function canClaimSS(age){
        return age >= 62;
    }

    function displayExample(){
        let returnString = 
        `There are ${familyAges.length} people in your family. 
        Of those, there are ${retirees.length} members of your family that can claim retirement benefits.`

        return returnString;
    }

    attachElement('div',displayExample(),'filterArea');
}
// END filter example

/* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-
    ADD NEW ELEMENTS TO DOM
*/
// Attach new element to page 
// Takes in element type, content and id of html tag
function attachElement(element, content, area, newId){
    let elem = document.createElement(element);
    let thisArea = document.getElementById(area);

    elem.innerHTML = content;
    if (newId) elem.id = newId;
    thisArea.appendChild(elem);
}

function addSecHead(secTitle, area, secId){
    // add header to page
    let sectionHeader = secTitle, sectionId;
    if (secId) sectionId = secId;
    let loc = area;
    attachElement('h2',sectionHeader,loc,sectionId);
    // add bootstrap class to header
    document.getElementById(sectionId).classList.add('pt-3');
    // add horizontal row
    attachElement('hr',null,loc);
}