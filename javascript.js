var entry;
var average;
var scores = [];
var total = 0;
var show = "The test scores:\n";

// use a do-while loop to get scores from user
do {
    entry = prompt("Enter test score\n" +
                    "Or enter 999 to end entries", 999);
    entry = parseInt(entry);
    
    
    //add validation of if entry is a number
    if( isNaN(entry)){
        alert("Entry must be a number");
    } else if (entry >= 0 && entry <= 100) {
        scores[scores.length] = entry;
    } else if (entry != 999){
        alert("Entry must by a valid number from 0 through 100\n" +
                "Or enter 999 to end entries");
    } 
}
while (entry != 999); 

if (scores.length != 0) {
    // use a for loop to process the scores
    for (var i = 0; i < scores.length; i++) {
        total = total + scores[i];       // both are numbers so adds
        show = show + scores[i] + "\n";  // strings & number so concatenates
    }

    // calculate the average and display
    average = parseInt(total/scores.length);
    alert(show + "\nAverage score is " + average);          
}
