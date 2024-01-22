// Tip CAlculator
document.getElementById("btn1").addEventListener("click",btnCalculate);
    document.getElementById("btn2").addEventListener("click",btnCleared);


let btn = document.getElementById('btn') ;

 function btnCalculate() {
    let BillAmount= document.getElementById("Bill-in"). value;
    let TipPercentage= document.getElementById("TipPercentage-in"). value;
    let NumberOfPeople= document.getElementById("Number-in" ). value;

    



    let TipAmount= document.getElementById("Tip-in"). value = BillAmount / TipPercentage;
    let TipPerAPerson= document.getElementById("Tip2-in"). value = NumberOfPeople;
document.getElementById("TotalAmount-in").value= (BillAmount) +(TipAmount);

document.getElementById("TotalAmount-in").value = Math.round(TipAmount);

}
function btnCleared () {
    document.getElementById("Bill-in"). value = "";
    document.getElementById("TipPercentage-in"). value = "";
    document.getElementById("Number-in" ). value = "";

    document.getElementById("Tip-in"). value = "";
    document.getElementById("Tip2-in"). value = "";
    document.getElementById("TotalAmount-in"). value = "";


}

 // INPUT
 let BillAMOUNT = document.getElementById("Bill-in").value
 let TipPercentage = document.getElementById("TipPercentage-in").value
 let TipAmount =TipPercentage/100*BillAMOUNT
 let TotalAmount= Document.getElementById.value