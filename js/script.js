const seats = document.querySelectorAll(".seat");
let count = 0;
let selectedSeats = [];

for (let seat of seats) {
    seat.addEventListener('click', function handleClick() {
        let seatName = seat.innerText;

        if (!selectedSeats.includes(seatName) && selectedSeats.length < 4) {
            selectedSeats.push(seatName);
            count++;

            setElementById("seatSelected", count);
            seat.classList.add('bg-degin');
            seat.classList.add('bg-[#1DD100]');
            setElementByIdvalue("availableSeat", count);
            makeAtr(seatName);
            upgreadTotalPrice();
            let input = document.getElementById("cupon");
            let button = document.getElementById("cupbtn");


            if (selectedSeats.length === 4) {
                input.disabled = false;
                button.disabled = false;
            }
        } else {
            alert("Seat already selected or maximum limit reached.");
        }
    });
}

function upgreadGrandPrice() {
    let coupon = document.getElementById("cupon").value;
    let grandPriceElement = document.getElementById("gPrice");
    let totalPriceElement = document.getElementById("totalPrice");
    let totalPrice = parseInt(totalPriceElement.innerText);

    if (coupon === "NEW15") {
        let grandPrice = Math.round(totalPrice * 0.85);
        grandPriceElement.innerText = grandPrice;
    } else if (coupon === "Couple 20") {
        let grandPrice = Math.round(totalPrice * 0.8);
        grandPriceElement.innerText = grandPrice;
    } else {
        alert('Invalid Coupon Code');
    }
}


function validateForm() {
    let passengerName = document.getElementById("passengerName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    if (passengerName === "" || phoneNumber === "" || selectedSeats.length === 0) {
        alert("Please complete all required fields. Ensure you have selected at least one seat.");
    } else {
        addClassNameById('body-hidden', 'hidden');
        removeClassNameById('sec-body', 'hidden');
    }
}

function resetValues() {
    count = 0;
    selectedSeats = [];
    setElementById("seatSelected", count);
    setElementByIdvalue("availableSeat", count);
    addClassNameById("gtotal", 'hidden');

    seats.forEach(seat => {
        seat.classList.remove('bg-[#1DD100]');
    });

    let totalPriceElement = document.getElementById("totalPrice");
    let initialTotalPrice = 0;
    totalPriceElement.innerText = initialTotalPrice;

    let grandPriceElement = document.getElementById("gPrice");
    grandPriceElement.innerText = initialTotalPrice;

    document.getElementById("cupon").value = "";


    document.getElementById("passengerName").value = "";
    document.getElementById("phoneNumber").value = "";
}
function clearSpecificRows() {
    const table = document.getElementById("table");
    while (table.children.length > 1) {
        table.removeChild(table.children[1]);
    }
}

function backToHomePage() {
    resetValues();
    clearSpecificRows();
    removeClassNameById('body-hidden', 'hidden');
    addClassNameById('sec-body', 'hidden');
    selectedSeats = [];
}
