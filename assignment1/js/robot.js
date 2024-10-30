// Chloe Becker

// flags
var flag = true;
var flag_choice_one = false;
var flag_choice_two = false;
var strUserInput = ""
// i keeps going down the line
function robotLanguage(strUserInput) {
    var res = "" //Empty string or copy we're cloning into
    var arrUserInput = strUserInput.split(" ") // Split it
    for (i in arrUserInput ){ // index aka each part of the array
        if (arrUserInput[i].length >= 5){ //as it says
               res += (arrUserInput[i] + "-bonk ") // adding bonk to the end of res. This works as we are 'copying' it to the new string
        }else{
               res += (arrUserInput[i] + "-bink ")
        }
 } return res
}

    do{
        // Main menu
        var choice = prompt("1, 2, 3, or Exit.");
        // Choice 1
        if (choice == 1){
            var strUserInput = prompt("Please write a String");
                if (strUserInput !== "") {
                    flag_choice_one = true;
                }
                else{
                    console.log("You need to enter something");
                    flag_choice_one = false;
                    strUserInput = prompt("Please write a String");
                        if (strUserInput !== "") {
                          flag_choice_one = true;}
                }
        }
            // Choice 2
        else if (choice == 2){
            if (flag_choice_one == false){
                console.log("You need to first enter a String");
                flag_choice_two = false;
            }else if (flag_choice_one == true){
                console.log("String converted");
                flag_choice_two = true;}
            }
            // Choice 3
        else if (choice == 3){
            if (flag_choice_two == false){
                console.log("You need to first convert your String");
                flag_choice_two = false
            }
            else if (flag_choice_two == true){
                //magic
                console.log(robotLanguage(strUserInput));
                flag_choice_two = false
                flag_choice_one = false
                strUserInput = ""
            }
        }//Exit
        else if (choice == "Exit"){
            console.log("Thanks for using the ROBOT Language Converter!")
            flag = false
        }
    } while (flag == true)
