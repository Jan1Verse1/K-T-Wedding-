const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const submit = document.querySelector(".btn");

let fullname = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");


id = 'arr1'

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};



function theGuest() {

    let fullname = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");


    console.log(fullname, email, phone);

    let guest = [fullname, email, phone];

    console.log(guest)



    window.localStorage.setItem("guest", JSON.stringify(guest));



    alert("Thank you for RSVPing for our celebration. " + "Thank you!" + "Your access card has been sent to " + email);

}

theGuest()

function store() {
    var inputFullName = document.querySelector("#name");
    localStorage.setItem("fullName", inputFullName.value);

    var inputEmail = document.querySelector("#email");
    localStorage.setItem("email", inputEmail.value);

    var inputPhone = document.querySelector("#phone");
    localStorage.setItem("phone", inputPhone.value);
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

submit.addEventListener("click", store);