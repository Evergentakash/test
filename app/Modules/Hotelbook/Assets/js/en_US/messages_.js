/* JavaScript messages with localization support
 * Support for Google Analytics
 * format : {key:{category, action, label}} 
 **/

var js_msg={};

/* User Registraion - register.phtml - Error Range:[evw00100 - evw00200] */
 js_msg['evw00100'] = ['RegPersonalInfo', 'FirstNameBlank', 'Please enter your First Name'];
 js_msg['evw00101'] = ['RegPersonalInfo', 'LastNameBlank', 'Please enter your Last Name'];
 js_msg['evw00102'] = ['RegPersonalInfo', 'EmailBlank', 'Please enter your Email address'];
 js_msg['evw00103'] = ['RegPersonalInfo', 'EmailInvalid', 'Please enter a valid Email address'];
 js_msg['evw00104'] = ['RegPersonalInfo', 'PasswordBlank', 'Please enter a Password'];
 js_msg['evw00105'] = ['RegPersonalInfo', 'PasswordTooShort', 'Please enter a Password that is 4 characters or longer'];
 js_msg['evw00106'] = ['RegPersonalInfo', 'PasswordConfirmBlank', 'Please enter a Confirmation of your Password'];
 js_msg['evw00107'] = ['RegPersonalInfo', 'PasswordConfirmTooShort', 'Please enter a Confirmation of your Password that is 4 characters or longer'];
 js_msg['evw00108'] = ['RegPersonalInfo', 'PasswordsDontMatch', 'The Password and Confirm Password fields do not match'];
 js_msg['evw00109'] = ['RegSubscription', 'SubPlanNotSelected', 'Please choose which Subscription Plan you would prefer'];
 js_msg['evw00110'] = ['RegPaymentInfo', 'NameOnCardBlank', 'Please enter the Name on the Credit Card'];
 js_msg['evw00111'] = ['RegPaymentInfo', 'CardNumberBlank', 'Please enter a Credit Card Number'];
 js_msg['evw00112'] = ['RegPaymentInfo', 'CardNumberInvalid', 'Please enter a valid Credit Card Number'];
 js_msg['evw00113'] = ['RegPaymentInfo', 'CardNumberNotNumeric', 'Please only enter digits for your Card Number'];
 js_msg['evw00114'] = ['RegPaymentInfo', 'CVVBlank', 'Please enter the CVV number (usually from the back of the card)'];
 js_msg['evw00115'] = ['RegPaymentInfo', 'CVVTooShort', 'Please enter a CVV number at least 3 digits long'];
 js_msg['evw00116'] = ['RegPaymentInfo', 'CVVNotNumeric', 'Please only enter digits for the CVV number'];
 js_msg['evw00117'] = ['RegPaymentInfo', 'CardExpiryTooEarly', 'The Expiration Date you have chosen has already passed'];
 js_msg['evw00118'] = ['RegPaymentInfo', 'ZipCodeBlank', 'Please enter a Zip Code'];
 js_msg['evw00119'] = ['RegTermsConditions', 'TermsNotChecked', 'Please check the box to agree to our Terms of Use and Privacy Policy'];
 js_msg['evw00120'] = ['RegPersonalInfo', 'PasswordTooLong', 'Please enter a Password that is 25 characters or smaller'];
 js_msg['evw00121'] = ['RegPersonalInfo', 'CVVTooLong', 'Please enter a Password that is 4 characters or smaller'];
 js_msg['evw00122'] = ['RegPersonalInfo', 'CountryBlank', 'Please select a Country'];
 js_msg['evw00123'] = ['RegPersonalInfo', 'PayPalEmailBlank', 'Please enter a valid PayPal Account\'s Email address'];

/* Add Contacts - addcontacts.phtml - Error Range:[evw00201 - evw00300] */
js_msg['evw00201'] = ['RegOptionalQ', 'ChildAgeNotSet', 'Please select the Age of this child'];
js_msg['evw00202'] = ['RegOptionalQ', 'ChildGenderNotSet', 'Please select the Gender of this child'];

js_msg['evw00203'] = ['RegOptionalQ', 'ChildFirstNameNotSet', 'Please enter the first name this child'];
js_msg['evw00204'] = ['RegOptionalQ', 'ChildLastNameNotSet', 'Please enter the last name this child'];

js_msg['evw00205'] = ['RegOptionalQ', 'ChildEmailNotSet', 'Please enter the email this child'];
js_msg['evw00206'] = ['RegOptionalQ', 'ChildPasswordNotSet', 'Please enter the password this child'];

/* User Login - login.phtml - Error Range:[evw00301 - evw00400] */
js_msg['evw00301'] = ['UserLogIn', 'UserNameBlank', 'Please enter the Email Address you use for your account username'];
js_msg['evw00302'] = ['UserLogIn', 'UserEmailInvalid', 'Please enter a valid Email address'];
js_msg['evw00303'] = ['UserLogIn', 'PasswordBlank', 'Please enter a Password'];
js_msg['evw00304'] = ['UserLogIn', 'PasswordTooShort', 'Please enter a Password that is 4 characters or longer'];
js_msg['evw00305'] = ['UserLogIn', 'PasswordTooLong', 'Please enter a Password that is 25 characters or smaller'];

/* User ForgetPassword - login.phtml - Error Range:[evw00401 - evw00500] */
js_msg['evw00401'] = ['ForgotPassword', 'EmailBlank', 'Please enter the Email Address you use for your account username'];
js_msg['evw00402'] = ['ForgotPassword', 'EmailInvalid', 'Please enter a valid Email address'];

/* User ResetPassword - resetpassword.phtml - Error Range:[evw00501 - evw00600] */
js_msg['evw00501'] = ['ResetPassword', 'PasswordBlank', 'Please enter a New Password'];
js_msg['evw00502'] = ['ResetPassword', 'PasswordConfirmBlank', 'Please enter a Confirmation of your new Password'];
js_msg['evw00503'] = ['ResetPassword', 'PasswordTooShort', 'Please enter a New Password that is 4 characters or longer'];
js_msg['evw00504'] = ['ResetPassword', 'PasswordConfirmTooShort', 'Please enter a Confirmation of your new Password that is 4 characters or longer'];
js_msg['evw00505'] = ['ResetPassword', 'PasswordsDontMatch', 'The New Password and Confirm Password fields do not match'];
js_msg['evw00506'] = ['ResetPassword', 'PasswordTooLong', 'Please enter a New Password that is 25 characters or smaller'];
js_msg['evw00507'] = ['ResetPassword', 'PasswordConfirmTooLong', 'Please enter a Confirmation of your new Password that is 25 characters or smaller'];
js_msg['evw00508'] = ['ResetPassword', 'PasswordInvalid', 'Please enter a valid Password'];

/* MyAccount Details - myaccountdetails.phtml - Error Range:[evw00601 - evw00700] */
js_msg['evw00601'] = ['EditPersonalInfo', 'FirstNameBlank', 'Please enter your First Name'];
js_msg['evw00602'] = ['EditPersonalInfo', 'LastNameBlank', 'Please enter your Last Name'];
js_msg['evw00603'] = ['EditPersonalInfo', 'EmailInvalid', 'Please enter a valid Email address'];
js_msg['evw00604'] = ['EditPersonalInfo', 'OldPasswordTooShort', 'Your Old Password must be 4 characters or longer'];
js_msg['evw00605'] = ['EditPersonalInfo', 'PasswordTooShort', 'Please enter a New Password that is 4 characters or longer'];
js_msg['evw00606'] = ['EditPersonalInfo', 'PasswordConfirmTooShort', 'Please enter a Confirmation of your new Password'];
js_msg['evw00607'] = ['EditPersonalInfo', 'PasswordsDontMatch', 'The New Password and Confirm Password fields do not match'];
js_msg['evw00608'] = ['EditPersonalInfo', 'EmailBlank', 'Please enter a Email address'];
js_msg['evw00609'] = ['EditPersonalInfo', 'OldPasswordBlank', 'Please enter your Old Password'];
js_msg['evw00610'] = ['EditPersonalInfo', 'OldPasswordTooLong', 'Your Old Password must be 25 characters or smaller'];
js_msg['evw00611'] = ['EditPersonalInfo', 'NewPasswordBlank', 'Please enter a New Password'];
js_msg['evw00612'] = ['EditPersonalInfo', 'PasswordTooLong', 'Please enter a New Password that is 25 characters or smaller'];
js_msg['evw00613'] = ['EditPersonalInfo', 'PasswordConfirmBlank', 'Please enter a Confirmation new Password'];
js_msg['evw00614'] = ['EditPersonalInfo', 'PasswordConfirmTooLong', 'Please enter a Confirmation of your new Password that is 25 characters or samller'];
js_msg['evw00615'] = ['EditPersonalInfo', 'DateOFBirthMM/DD/YYYY', 'Please enter Date of birth in MM/DD/YYYY format'];
js_msg['evw00616'] = ['EditPersonalInfo', 'Username', 'Please Enter the Username'];
js_msg['evw00617'] = ['EditPersonalInfo', 'PasswordWhenUsernameThere', 'Please Enter the Password'];
js_msg['evw00618'] = ['EditPersonalInfo', 'MonthlyLimit', 'Please Enter Monthly Limit less than or equal to 1000'];

/* Add CreditCard - addccpaymeth.phtml - Error Range:[evw00701 - evw00800] */
js_msg['evw00701'] = ['AddPaymentInfo', 'CardNumberBlank', 'Please enter a Credit Card Number'];
js_msg['evw00702'] = ['AddPaymentInfo', 'CardNumberNotNumeric', 'Please only enter digits for your Card Number'];
js_msg['evw00703'] = ['AddPaymentInfo', 'CardNumberInvalid', 'Please enter a valid Credit Card Number'];
js_msg['evw00704'] = ['AddPaymentInfo', 'CVVBlank', 'Please enter the CVV number (usually from the back of the card)'];
js_msg['evw00705'] = ['AddPaymentInfo', 'CVVNotNumeric', 'Please only enter digits for the CVV number'];
js_msg['evw00706'] = ['AddPaymentInfo', 'CVVTooShort', 'Please enter a CVV number at least 3 digits long'];
js_msg['evw00707'] = ['AddPaymentInfo', 'CardExpiryTooEarly', 'The Expiration Date you have chosen has already passed'];
js_msg['evw00708'] = ['AddPaymentInfo', 'CVVTooLong', 'Please enter a CVV number at max of 4 digits long'];

/* Update CreditCard - updatepayment.phtml - Error Range:[evw00801 - evw00900] */
js_msg['evw00801'] = ['EditPaymentInfo', 'CardExpiryTooEarly', 'The Expiration Date you have chosen has already passed'];

/* Make PayPal payment - makepaypalpmt.phtml - Error Range:[evw00901 - evw01000] */
js_msg['evw00901'] = ['MakePayPalPmt', 'EmailBlank', 'Please enter your PayPal Account\'s Email address'];
js_msg['evw00902'] = ['MakePayPalPmt', 'EmailInvalid', 'Please enter a valid Email address'];

/* One time Credit Card payment - onetimepayment.phtml - Error Range:[evw01001 - evw01100] */
js_msg['evw01001'] = ['OneTimeCCPmt', 'CardNumberBlank', 'Please enter a Credit Card Number'];
js_msg['evw01002'] = ['OneTimeCCPmt', 'CardNumberNotNumeric', 'Please only enter digits for your Card Number'];
js_msg['evw01003'] = ['OneTimeCCPmt', 'CardNumberInvalid', 'Please enter a valid Credit Card Number'];
js_msg['evw01004'] = ['OneTimeCCPmt', 'CVVBlank', 'Please enter the CVV number (usually from the back of the card)'];
js_msg['evw01005'] = ['OneTimeCCPmt', 'CVVNotNumeric', 'Please only enter digits for the CVV number'];
js_msg['evw01006'] = ['OneTimeCCPmt', 'CVVTooShort', 'Please enter a CVV number at least 3 digits long'];
js_msg['evw01007'] = ['OneTimeCCPmt', 'CardExpiryTooEarly', 'The Expiration Date you have chosen has already passed'];
js_msg['evw01008'] = ['OneTimeCCPmt', 'CVVTooLong', 'Please enter a CVV number at max of 4 digits long'];
js_msg['evw01009'] = ['OneTimeCCPmt', 'AmountBlank', 'Please enter amount'];

/* --------------------------------------------------------------------------------------------------------------------- */
/* Miscellaneous localization messages(Non JavaScript Error Messages */
js_msg['Selected'] = 'Selected';
js_msg['Choose Plan'] = 'Choose&nbsp;Plan';

/* device.phtm */

js_msg['evw011001'] = ['AddDevice', 'SerialNumber', 'Please enter the SerialNumber of the device'];
js_msg['evw011002'] = ['AddDevice', 'ModelNumber', 'Please enter the ModelNumber of the device'];
js_msg['evw011003'] = ['AddDevice', 'DeviceName', 'Please enter the DeviceName of the device'];

