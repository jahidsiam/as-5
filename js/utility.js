function setElementById(id, value) {
    document.getElementById(id).innerText = value;
}
function setElementByIdvalue(id, value) {
    document.getElementById(id).innerText = 40 - value;
}
function removeClassNameById(id, classNmae) {
    document.getElementById(id).classList.remove(classNmae)
}
function addClassNameById(id, classNmae) {
    document.getElementById(id).classList.add(classNmae)
}
function makeAtr(value) {
    const table = document.getElementById("table");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = value;
    var td2 = document.createElement("td");
    td2.innerText = "Economy";
    var td3 = document.createElement("td");
    td3.innerText = "550";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
}
function upgreadTotalPrice() {
    let TotalPrice = parseInt(document.getElementById('totalPrice').innerText)
    TotalPrice = TotalPrice + 550;
    document.getElementById('gPrice').innerText = TotalPrice;

    document.getElementById('totalPrice').innerText = TotalPrice
}