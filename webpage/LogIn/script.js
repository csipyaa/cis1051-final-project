// successful password requirements
// minimum length must be at least 14 characters or more.
// must include the following at least 1 of the following 
// * special character; upper-case letter;
// 
// 
// 
let error_Msg = "";
// password strength
function passValidation(password) {
    if(password.length <= 14) { 
        error_Msg = error_Msg +  "Your password must be at least 14 characters long"
    } 

    let special_Char = /[!@#$%^&*(),.?":{}|<>]/; 
    let upper_Case = /A-Z/;
    let valid_Num = /\d/;

    if (password != )







}