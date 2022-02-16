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



//Available Denominations : 
//2000, 500, 100, 20, 10, 5, 1

/** 

*Core Logic - 
billAmount = 50
cashGicen = 2000
amountToBeReturned = 1950

//divide this amountToBeReturned with highest denomiator avaliable
1st step : Divide by 2000
Notes to be returned = 1950 / 2000 = 0.975
On Truncuating it, we will have 0 (means 0 notes of 2000)
Remaining Amount = 1950 % 2000 = 1950

2nd step : 
Notes to be returned = Math.trunc(1950/500) = 3
Now, we know we need to return 3 notes of Rs 500
Remaining Amount = 1950 % 500 = 450 

3rd step : 
Notes to be returned = Math.trunc(450 / 100) = 4
Now, we know we need to return 4 notes of 100
Remaining amount = 450 % 100 = 50

4th step : 
Notes to be returned = Math.trunc(50 / 20) = 2
We need 2 notes of Rs 20
Remaining amount = 50 % 20 = 10 

5th step : 
Notes to return = 10 / 10 = 1
We need 1 note of Rs 10
Remaining amount = 10 % 10 = 0 

So, we are done with 3 notes of 500, 4 notes of 100, 3 notes of 10

 **/