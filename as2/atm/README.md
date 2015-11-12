Wenqiang Chen (chen25)
Carolyn Chong (chongce)
Kevin Ly (lyk2)
Meraj Patel (patelmu2)

Instructions to run software:
To run the software locally, in the atm folder, open up index.html in your browser OR http://tools.quarters.space/as2/atm
Run on Chrome 46.
Please view the application full-screen. 
Please do not use browser functions (eg. navigation and manually editing location)
We have made the assumption that actions made directly with the machine (eg. swiping cards, inputing and withdrawing cash/cheques from ATM) are handled by the machine.

Account Number: 12341234
Pin: 1234

Design Decisions:
# We implemented all the requirements
# Ability to enter an account number, simulating swiping/inserting a card --> On first page
# Ability to withdraw and deposit cash, updating a bank account balance accordingly --> Separate functions that are accessible from the main menu. Updated balance is shown after the transaction.
# Ability to simply check/display account balances --> Accessible via main menu under "Account History"
# Transfers between accounts --> Accessible via main menu under "Transfers"

# We also implemented the following additional features:
# A digital clock in the header to record transaction times
# A "Request Help" button in the header for easy access
# "Main Menu" and "Exit" Buttons in the same spot on every page for easy and convenient access, with appropriate background colours
# We added pictures to simplify the user's experience and provide guidance to those who are visual learners
# A loading page that appears during transactions to give the user feedback that their transaction is in progress
# Ability to print receipts
# Display and print transactions in "Account History"
# Currency Exchange
# Password is starred upon input
# Pin changer
# Automatic redirect back to login page upon exit
# Validation: on input, withdrawl amounts, alert dialogs
# A credit card account
# Withdraw preferred bill denominations