
function setupForm(){
// first name
    document.getElementById("first_name").onfocus = function() {first_name_focus()};
    document.getElementById("first_name").onblur = function() {q1_hints()};
// last name
    document.getElementById("last_name").onfocus = function() {last_name_focus()};
    document.getElementById("last_name").onblur = function() {q2_hints()};
// phone #
    document.getElementById("phone_number").onfocus = function() {phone_number_focus()};
    document.getElementById("phone_number").onblur = function() {q3_hints()};
// email
    document.getElementById("email").onfocus = function() {email_focus()};
    document.getElementById("email").onblur = function() {q4_hints()};
// website
    document.getElementById("website").onfocus = function() {website_focus()};
    document.getElementById("website").onblur = function() {q5_hints()};
// submit
    document.info_form.addEventListener("submit", processForm, false);
}
 // Validate Data
 function validateData(flag){

    if(flag == 1){
        let first_name = document.getElementById("first_name");
        var first_name_pattern = /^[A-Z]/;
        var first_name_pattern_2 = /[\d\W+]/g;

        if(first_name_pattern.test(first_name.value) == true && first_name_pattern_2.test(first_name.value) == false){
            return true
        } else {
            return false
        }
    }

    if (flag == 2){
        let last_name = document.getElementById("last_name");
        var last_name_pattern = /^[A-Z]/g;
        var last_name_pattern_2 = /[\d\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\:\"\;\<\>\,\.\?\|]/g;

        if(last_name_pattern.test(last_name.value) == true && last_name_pattern_2.test(last_name.value) == false){
            return true
        } else {
            return false
        }
    }

    if (flag == 3){
        let phone_number = document.getElementById("phone_number");
        var phone_number_pattern = /^[0-9]{3}[\s][0-9]{3}[\-][0-9]{4}$/;

        if(phone_number_pattern.test(phone_number.value) == true){
            return true
        } else {
            return false
        }
    }

    if (flag == 4){
        let email = document.getElementById("email");
        var email_pattern = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[c][o][m]+$/;
        var email_pattern_2 = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[e][d][u]+$/;

        if(email_pattern.test(email.value) == true || email_pattern_2.test(email.value) == true){
            return true
        } else {
            return false
        }
    }

    if (flag == 5){
        let website = document.getElementById("website");
        var website_pattern = /^https:\/\/.*~.*\/$/;

        if(website_pattern.test(website.value) == true){
            return true
        } else {
            return false
        }
    }
}
    // Q1 Blur /first name
function q1_hints(q1_flag){
    let form_q1 = document.getElementById("form-q1");
    let q1_text_box = document.getElementById("first_name");
    let q1_p = document.getElementById("q1-p");
    let q1_i = document.getElementById("q1-i");

    while (q1_p.hasChildNodes()) {
        q1_p.removeChild(q1_p.lastChild);
    }

    q1_i.setAttribute("src","./img/blank.jpg")

    flag = 1

    if (validateData(flag) == true){
        q1_i.setAttribute("src","./img/valid.jpg")
        q1_p.setAttribute("class","hint-text-prior")
        q1_p.appendChild(document.createTextNode("."));
    } else {
        q1_i.setAttribute("src","./img/invalid.jpg")
        q1_p.appendChild(document.createTextNode("Try again"));
        q1_p.setAttribute("class","hint-text")
    }
}
    // Q1 Focus /first name
function first_name_focus () {
    let q1 = document.getElementById("q1");
    let q1_p = document.getElementById("q1-p");
    let q1_i = document.getElementById("q1-i");

    while (q1_p.hasChildNodes()) {
        q1_p.removeChild(q1_p.lastChild);
    }
    q1_i.setAttribute("src","./img/blank.jpg")
        q1_p.appendChild(document.createTextNode("Capitalize the first letter. Letters only."));
        q1_p.setAttribute("class","hint-text")
}
    // Q2 blur/ last name
function q2_hints(q2_flag){
    let form_q2 = document.getElementById("form-q2");
    let q2_text_box = document.getElementById("last_name");
    let q2_p = document.getElementById("q2-p");
    let q2_i = document.getElementById("q2-i");


    while (q2_p.hasChildNodes()) {
        q2_p.removeChild(q2_p.lastChild);
    }

    q2_i.setAttribute("src","./img/blank.jpg")
    flag = 2

    if (validateData(flag) == true){
        q2_i.setAttribute("src","./img/valid.jpg");
        q2_p.setAttribute("class","hint-text-prior");
        q2_p.appendChild(document.createTextNode("."));
    } else{
        q2_i.setAttribute("src","./img/invalid.jpg");
        q2_p.appendChild(document.createTextNode("Try again"));
        q2_p.setAttribute("class","hint-text");

    }
}
    // Q2 focus/ last name
function last_name_focus () {
    let q2 = document.getElementById("q2");
    let q2_p = document.getElementById("q2-p");
    let q2_i = document.getElementById("q2-i");

    while (q2_p.hasChildNodes()) {
        q2_p.removeChild(q2_p.lastChild);
    }
    q2_i.setAttribute("src","./img/blank.jpg")

    q2_p.appendChild(document.createTextNode("Capitalize the first letter. Only spaces , ' , and letters"));
    q2_p.setAttribute("class","hint-text")
}
    // Q3 blur/ phone
function q3_hints(){
    let form_q3 = document.getElementById("form-q3");
    let q3_p = document.getElementById("q3-p");
    let q3_i = document.getElementById("q3-i");

    while (q3_p.hasChildNodes()) {
        q3_p.removeChild(q3_p.lastChild);
    }
    q3_i.setAttribute("src","./img/blank.jpg")
    flag = 3

    if (validateData(flag) == true){
        q3_i.setAttribute("src","./img/valid.jpg")
        q3_p.setAttribute("class","hint-text-prior")
        q3_p.appendChild(document.createTextNode("."));

    } else{
        q3_i.setAttribute("src","./img/invalid.jpg")
        q3_p.appendChild(document.createTextNode("Try again"));
        q3_p.setAttribute("class","hint-text")
    }

}
    // Q3 focus/ phone
function phone_number_focus(){
    let q3 = document.getElementById("q3");
    let q3_p = document.getElementById("q3-p");
    let q3_i = document.getElementById("q3-i");

    while (q3_p.hasChildNodes()) {
        q3_p.removeChild(q3_p.lastChild);
    }
    q3_i.setAttribute("src","./img/blank.jpg")
        q3_p.appendChild(document.createTextNode("Only Numbers. Format: XXX XXX-XXXX"));
        q3_p.setAttribute("class","hint-text")
}
    // Q4 blur/ email
function q4_hints(){
    let form_q4 = document.getElementById("form-q4");
    let q4_p = document.getElementById("q4-p");
    let q4_i = document.getElementById("q4-i");

    while (q4_p.hasChildNodes()) {
        q4_p.removeChild(q4_p.lastChild);
    }
    q4_i.setAttribute("src","./img/blank.jpg")
    flag = 4

    if (validateData(flag) == true){
        q4_i.setAttribute("src","./img/valid.jpg")
        q4_p.setAttribute("class","hint-text-prior")
        q4_p.appendChild(document.createTextNode("."));

    } else{
        q4_i.setAttribute("src","./img/invalid.jpg")
        q4_p.appendChild(document.createTextNode("Try again"));
        q4_p.setAttribute("class","hint-text")
    }

}
    // Q4 focus/ email
function email_focus(){
    let q4 = document.getElementById("q4");
    let q4_p = document.getElementById("q4-p");
    let q4_i = document.getElementById("q4-i");

    while (q4_p.hasChildNodes()) {
        q4_p.removeChild(q4_p.lastChild);
    }
    q4_i.setAttribute("src","./img/blank.jpg")
        q4_p.appendChild(document.createTextNode("Use the pattern blah@blah.com or blah@blah.edu"));
        q4_p.setAttribute("class","hint-text")
}
    // Q5 blur/ website
function q5_hints(){
    let form_q5 = document.getElementById("form-q5");
    let q5_p = document.getElementById("q5-p");
    let q5_i = document.getElementById("q5-i");


    while (q5_p.hasChildNodes()) {
        q5_p.removeChild(q5_p.lastChild);
    }
    q5_i.setAttribute("src","./img/blank.jpg")
    flag = 5

    if (validateData(flag) == true){
        q5_i.setAttribute("src","./img/valid.jpg")
        q5_p.setAttribute("class","hint-text-prior")
        q5_p.appendChild(document.createTextNode("."));

    } else{
        q5_i.setAttribute("src","./img/invalid.jpg")
        q5_p.appendChild(document.createTextNode("Try again"));
        q5_p.setAttribute("class","hint-text")
    }
}
    // Q5 focus/ website
function website_focus(){
    let q5 = document.getElementById("q5");

    let q5_p = document.getElementById("q5-p");
    let q5_i = document.getElementById("q5-i");

    while (q5_p.hasChildNodes()) {
        q5_p.removeChild(q5_p.lastChild);
    }
    q5_i.setAttribute("src","./img/blank.jpg")
        q5_p.appendChild(document.createTextNode("Start with https://, contains ~ and trails with /"));
        q5_p.setAttribute("class","hint-text")
}
// submit
function processForm(){
    event.preventDefault();

    // Variables
    let first_name_value = document.info_form.elements["first_name"].value
    let last_name_value = document.info_form.elements["last_name"].value
    let phone_number_value = document.info_form.elements["phone_number"].value
    let email_value = document.info_form.elements["email"].value
    let website_value = document.info_form.elements["website"].value

    let badge_1 = document.getElementById("1")
    let badge_2 = document.getElementById("2")
    let badge_3 = document.getElementById("3")
    let badge_4 = document.getElementById("4")
    let badge_5 = document.getElementById("5")


    let badge = false
    let yes_counter = 0
    let no_counter = 0

    let name_info = first_name_value + " " +last_name_value
    let phone_info = phone_number_value
    let email_info = email_value
    let website_info = website_value

    // Clear Data
    if (yes_counter > 0){
        yes_counter = 0
    }
    if (no_counter > 0){
        no_counter = 0
    }

    // Validate and check input
    flag = 1
    if (validateData(flag) == false){
        q1_flag = false
    } else if (validateData(flag) == true) {
        q1_flag = true
    }
    flag = 2
    if (validateData(flag) == false){
        q2_flag = false
    } else if (validateData(flag) == true) {
        q2_flag = true
    }
    flag = 3
    if (validateData(flag) == false){
        q3_flag = false
    }else if (validateData(flag) == true) {
        q3_flag = true
    }
    flag = 4
    if (validateData(flag) == false){
        q4_flag = false
    }else if (validateData(flag) == true) {
        q4_flag = true
    }
    flag = 5
    if (validateData(flag) == false){
        q5_flag = false
    }else if (validateData(flag) == true) {
        q5_flag = true
    }
    // Show info
    let quiz_1 = document.info_form.elements["quiz_1"].value
    let quiz_2 = document.info_form.elements["quiz_2"].value
    let quiz_3 = document.info_form.elements["quiz_3"].value

    let badge_image = document.getElementById("badge_img")
    let badge_class = document.getElementById("badge")

    if (quiz_1 == "Yes"){
        yes_counter++
        quiz_1_flag = true
    } else if (quiz_1 == "No"){
        no_counter++
        quiz_1_flag = true
    } else {quiz_1_flag = false}

    if (quiz_2 == "Yes"){
        yes_counter++
        quiz_2_flag = true
    }else if (quiz_2 == "No"){
        no_counter++
        quiz_2_flag = true
    }else {quiz_2_flag = false}

    if (quiz_3 == "Yes"){
        yes_counter++
        quiz_3_flag = true
    }else if (quiz_3 == "No"){
        no_counter++
        quiz_3_flag = true
    }else {quiz_3_flag = false}

    // Last check
    if (q1_flag == true && q2_flag == true && q3_flag == true && q4_flag == true && q5_flag == true && quiz_1_flag == true &&quiz_2_flag == true && quiz_3_flag == true){
        while (badge_1.hasChildNodes()) {
            badge_1.removeChild(badge_1.lastChild);
        }
        while (badge_2.hasChildNodes()) {
            badge_2.removeChild(badge_2.lastChild);
        }
        while (badge_3.hasChildNodes()) {
            badge_3.removeChild(badge_3.lastChild);
        }
        while (badge_4.hasChildNodes()) {
            badge_4.removeChild(badge_4.lastChild);
        }
        while (badge_5.hasChildNodes()) {
            badge_5.removeChild(badge_5.lastChild);
        }
        if (badge == true){
            badge_image.setAttribute("src", "./img/white_blank.jpg")
            badge.setAttribute("class","badge-prior")
            badge_5.setAttribute("href","")
            badge = false
        }
        badge_1.textContent = "Name: "+ name_info
        badge_2.textContent = "Phone: " + phone_info
        badge_3.textContent = "Email: " + email_info
        badge_4.textContent = "Website: " + website_info

        if (yes_counter >= 2){
            badge_class.setAttribute("class", "badge")
            badge_image.setAttribute("src", "./img/toxic.jpg")
            badge_5.textContent = "Link to badge"
            badge_5.setAttribute("href","https://students.gaim.ucf.edu/~ch011941/dig3716c/assignment2/img/toxic.jpg")
            badge = true
        } else if (no_counter >= 2){
            badge_class.setAttribute("class", "badge")
            badge_image.setAttribute("src", "./img/cozy.jpg")
            badge_5.textContent = "Link to badge"
            badge_5.setAttribute("href","https://students.gaim.ucf.edu/~ch011941/dig3716c/assignment2/img/cozy.jpg")
            badge = true
        }
    }

    return false
}
window.addEventListener("load", setupForm, false);
