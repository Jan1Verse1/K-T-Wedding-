const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const submit = document.querySelector(".btn");
const submit_button = document.querySelector(".first-button.btn");
let loading_animation = document.querySelector(".fa-solid.fa-spinner.fa-spin");

let fullname = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

id = "arr1";

let isFetching = false;

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  clearInputs();
};

//clear inputs
function clearInputs() {
  fullname.value = "";
  email.value = "";
  phone.value = "";

  fullname.classList.remove("success");
  email.classList.remove("success");
  phone.classList.remove("success");

  fullname.classList.remove("error");
  email.classList.remove("error");
  phone.classList.remove("error");
}

//snackbar
const snackBar = (message, type) => {
  var x = document.getElementById("snackbar");
  x.innerText = message;
  if (type === "error") {
    x.className = "show error";
  } else {
    x.className = "show success";
  }
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};

function handleRsvp() {
  loading_animation.classList.toggle("animation");
  submit_button.disabled = true;
  //name check
  if (fullname.value == "") {
    fullname.classList.remove("success");
    fullname.classList.add("error");
  } else {
    fullname.classList.add("success");
  }

  //email check
  if (email.value == "") {
    email.classList.remove("success");
    email.classList.add("error");
  } else {
    email.classList.add("success");
  }

  //email check
  if (phone.value == "") {
    phone.classList.remove("success");
    phone.classList.add("error");
  } else {
    phone.classList.add("success");
  }

  if (fullname.value != "" && email.value != "" && phone.value != "") {
    let formdata = new FormData();
    formdata.append("full_name", fullname.value);
    formdata.append("email_address", email.value);
    formdata.append("phone", phone.value);

    fetch("https://my-playground-437o.onrender.com/addrsvp", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then(function (data) {
        clearInputs();
        snackBar("RSVP received, see you at the wedding", "success");
        closeModal();
        loading_animation.classList.toggle("animation");
        submit_button.disabled = false;
      })
      .catch(function (error) {
        console.log("Request failed", error);
        loading_animation.classList.toggle("animation");
        submit_button.disabled = false;
      });
  } else {
    loading_animation.classList.toggle("animation");
    submit_button.disabled = false;
  }
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

submit_button.addEventListener("click", handleRsvp);
