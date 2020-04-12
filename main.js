// mobile cart item Hendler
function plusMobBtn() {
    var mobPlus = parseInt(document.getElementById('mobileNumberCount').value);
    mobPlus++;
    document.getElementById('mobileNumberCount').value = mobPlus;
    var mobTotalValue = mobPlus;
    mobTotalValue = mobTotalValue;
    totalPriceMob = 1500 * mobTotalValue;
    document.getElementById('currentMobilePrice').innerHTML = totalPriceMob;
    totalPay();
}

function minusMobBtn() {
    var mobMinus = parseInt(document.getElementById('mobileNumberCount').value);
    --mobMinus;
    if (mobMinus >= 0) {
        console.log(mobMinus);
    } else {
        return 0;
    }
    document.getElementById('mobileNumberCount').value = mobMinus;
    var mobTotalValue = mobMinus;
    mobTotalValue = mobTotalValue;
    totalPriceMob = 1500 * mobTotalValue;
    document.getElementById('currentMobilePrice').innerHTML = totalPriceMob;
    totalPay();
}

// case cart item Hendler

function plusCaseBtn() {
    var casePlus = parseInt(document.getElementById('caseNumberCount').value);
    casePlus++;
    document.getElementById('caseNumberCount').value = casePlus;
    var caseTotalValue = casePlus;
    caseTotalValue = caseTotalValue;
    totalPriceCase = 50 * caseTotalValue;
    document.getElementById('currentCasePrice').innerHTML = totalPriceCase;
    totalPay();
}

function minusCaseBtn() {
    var caseMinus = parseInt(document.getElementById('caseNumberCount').value);
    --caseMinus;
    if (caseMinus >= 0) {
        console.log(caseMinus);
    } else {
        return 0;
    }
    document.getElementById('caseNumberCount').value = caseMinus;
    var caseTotalValue = caseMinus;
    caseTotalValue = caseTotalValue;
    totalPriceCase = 50 * caseTotalValue;
    document.getElementById('currentCasePrice').innerHTML = totalPriceCase;
    totalPay();
}

// Total Price Calculat

function totalPay() {
    var subTotalMob = parseInt(document.getElementById('currentMobilePrice').innerText);
    var subTotalCase = parseInt(document.getElementById('currentCasePrice').innerText);

    var subTotalAdd = subTotalMob + subTotalCase;
    var addTex = subTotalAdd * 5 / 100;
    var allTotall = subTotalAdd + addTex;

    document.getElementById('subTotal').innerHTML = subTotalAdd;
    document.getElementById('totalTex').innerHTML = addTex;
    document.getElementById('total').innerHTML = allTotall;

}

// Cart Remove

// function removeCart1() {
//     var cartRemoBtn = document.getElementsById("removeCart1");
//     remove("cart1")
// }