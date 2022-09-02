const singleTextMessage = require('./singleTextMessage');
const multipleTextImage = require('./multipleTextImage');
const multipleTextPdfVariable = require('./multipleTextPdfVariable');
const phNumber = require('./numbers.json');
const today = new Date();

let date = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`

singleTextMessage(phNumber[1])     //function for sending a text message to single user

for (let i = 1; i <= Object.keys(phNumber).length; i++) {
    multipleTextImage(phNumber[i]);     //to send text and image to multiple numbers
}

for (let i = 1; i <= Object.keys(phNumber).length; i++) {
    multipleTextPdfVariable(phNumber[i], date);     //to send text, PDF and variable(date)  to multiple numbers
}
