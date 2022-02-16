//visualise like input --> processing --> output : as always
//input needs to be taken in javascript from HTML world 


//inputs are bill amount, cash given and checkbutton
const billAmount = document.querySelector("#bill-amount"); 
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes"); //this will return an array of all selected ids


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
//we will addEventListener to checkButton 
//on getting clicked, we need to check if billAmount is positive
//on getting clicked, we need to check if billAmount >= cashGiven 
checkButton.addEventListener("click", function validateBillAndCashAmount() {
    
    if (billAmount.value > 0) 
    {
    hideMessage();
        if (cashGiven.value >= billAmount.value) {
            //first we need to get the difference
            //based on this difference, we will figure out the number of notes
            const amountToBeReturned = cashGiven.value - billAmount.value;
            caluclateChange(amountToBeReturned);

        } 
        else {
            showMessage("Jitne ka samaan liye, uske barabaar to denge na paisa.");
        }
    } 
    else {
        showMessage("Bill negative mai kyu bhai?");  
    }
})


//core logic
function caluclateChange(amountToBeReturned)
{
    for (let i = 0; i < availableNotes.length; i++){
        //first, we need to figure out for each denomination, how many notes we need
        const numberOfNotes = 
        Math.trunc(amountToBeReturned / availableNotes[i]);

        //second, after using that denomination, we need to find the remaining amount and continue the looping journey
        amountToBeReturned = amountToBeReturned % availableNotes[i]

        //updating the number of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function hideMessage(){
    message.style.display = "none"; 
    //this is so that when i enter something valid, this is hidden
};
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}


