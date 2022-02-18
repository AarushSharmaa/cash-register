![istockphoto-999754474-170667a](https://user-images.githubusercontent.com/68619452/154638242-5d8af6c2-aba2-487e-8131-fd0626486def.jpg)

# Cash Register
- This web app will take a **bill amount(what customer owes)**, **cash amount(what customer paid)**, and will return the minimum number of notes to return to the customer to even the balance.
- In simple words, you buy groceries worth 100 rs and paid 500 rs, so you will receive 400 rs in return. This web app will tell minimum number of notes to return so that it sums up to 400.
- Available notes are : 2000, 500, 100, 20, 10, 5, 1

### Let us understand the core logic we used in our web app 


- Available Denominations : 
2000, 500, 100, 20, 10, 5, 1

- Lets assume : 
billAmount = 50, cashGiven = 2000 and amountToBeReturned = 1950

### Now, we need minimum number of notes that sums up to 1950

- 1st step : First, we need to figure out how many notes of each denomination we need.
--> Notes to be returned = (1950 / 2000) = 0.975
--> On Truncuating it, we will have 0 (means 0 notes of 2000)
--> Remaining Amount = 1950 % 2000 = 1950

- 2nd step : 
--> Notes to be returned = Math.trunc(1950/500) = 3
--> Now, we know we need to return 3 notes of Rs 500
--> 
Remaining Amount = 1950 % 500 = 450 

- This is how our core logic will continue.



