// --- global variables ---
//NOTE: I could do the angular part but you mentioned something in files that isn't there
//Don't really understand how you are calculating the interest part so I can't really do it.
//Additionally I know the majority of my program should be fine, however I never seem to be able to make it work
//very frustrating and I know that I can contact you about this but I have a lot of my free time taken up
//so scheduling a meeting is a nightmare

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 
var app = angular.module("mod", []);    
     
// --- function: loadDoc() ---
if(localStorage.get(JsonObj) == null){
$(document).ready(function() {
  // pre-fill defaults for first loan year
  // changed all to jQuery
  var defaultYear = loans[0].loan_year;
  $("#loan_year01").value = defaultYear;
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt01").value = defaultLoanAmount.toFixed(2);
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int01").value = defaultInterestRate;
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal01").innerHTML = toComma(loanWithInterest.toFixed(2));
  
  // pre-fill defaults for other loan years
  // changed all to jQuery
  for(var i=2; i<6; i++) {
    $("#loan_year0" + i).val(defaultYear++);
    $("#loan_year0" + i).attr('disabled','disabled');
    $("#loan_year0" + i).css.backgroundColor("gray");
    $("#loan_year0" + i).css.color("white");
    $("#loan_amt0" + i).val(defaultLoanAmount.toFixed(2));
    $("#loan_int0" + i).val(defaultInterestRate);
    $("#loan_int0" + i).attr('disabled','disabled');
    $("#loan_int0" + i).css.backgroundColor("gray");
    $("#loan_int0" + i).css.color("white");
    loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
    $("#loan_bal0" + i).html(toComma(loanWithInterest.toFixed(2)));
    } // end: "for" loop
  
  // all input fields: select contents on focus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur( function() {
	//fix up input before going off to updating the array
	var filter=/[a-z]/
	if($("#loan_year01").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  $("#loan_int01").blur( function() {
    //Throw an alert if there is a character in the input
	var filter=/[a-z]/
	if($("#loan_int01").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  
  //too tired to find more efficent way to code this.
  $("$loan_amt01").blur( function() {
    //Throw an alert if there is a character in the input
	var filter=/[a-z]/
	if($("#loan_amt01").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  $("$loan_amt02").blur( function() {
	  //Throw an alert if there is a character in the input
    var filter=/[a-z]/
	if($("#loan_amt01").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  $("$loan_amt03").blur( function() {
      //Throw an alert if there is a character in the input
    var filter=/[a-z]/
	if($("#loan_amt03").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  $("$loan_amt04").blur( function() {
      //Throw an alert if there is a character in the input
    var filter=/[a-z]/
	if($("#loan_amt04").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  $("$loan_amt05").blur( function() {
      //Throw an alert if there is a character in the input
    var filter=/[a-z]/
	if($("#loan_amt05").val().match(filter)==null){
		alert("Error: Cannot have characters in years");
	}
	else{
    updateLoansArray();
	}
  });
  
  
} // end: function loadDoc()
}
}
else{
	let temp=localStorage.get(JsonObj)
	loans=Json.parse(JsonObj);
}

function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateLoansArray() {
  loans[0].loan_year = parseInt($("#loan_year01").val());
  //pretty much doing the same thing but with interest rate  (since you have it disabled)
  loans[0].loan_int_rate=parseInt($("loan_int01").val());
  var loanTotal=0;
  var tempLoan=0;
  var interestAmt=0;
  for(var i=1; i<5; i++) {
	loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
	
	//find the amount input in the loan amount and put it back into the array
	tempLoan=parseInt($("#loan_amt0"+i).val());
	loans[i].loan_amount=tempLoan;
	$("#loan_int0"+i).val(tempLoan);
	
	//find amount owed due to interest and plug it back into chart
	loanTotal+=tempLoan*(1+loans[0].loan_int_rate);
    $("#loan_bal0"+i).val(loanTotal);
	
	//Same concept as the year updating but keeping interest constant
	loans[i].loan_int_rate = loans[0].loan_int_rate;
	$("#loan_int0"+(i+1)).val(loans[i].loan_int_rate);
	
	//find pure interest amount and put it back into graph
	interestAmt+=tempLoan*loans[0].loan_int_rate;
	$("#loan_int_accrued").val(interestAmt);
	
  }
  var JsonObj = JSON.Stringify(loans);
  //ensure duplicate copies aren't in storage
  localStorage.clear();
  localStorage.set(JsonObj);
}
