//hamburgerMenu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Modal Description

const overlay = document.querySelector(".overlay");

// modal 1
const modal1 = document.querySelector(".modal1");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnOpenModal1 = document.querySelectorAll(".project-btn1");

const openModal1 = function () {
  console.log("Button clicked");
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

for (let i = 0; i < btnOpenModal1.length; i++) {
  btnOpenModal1[i].addEventListener("click", openModal1);
}

btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});

// modal 2
const modal2 = document.querySelector(".modal2");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnOpenModal2 = document.querySelectorAll(".project-btn2");

const openModal2 = function () {
  console.log("Button clicked");
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

for (let i = 0; i < btnOpenModal2.length; i++) {
  btnOpenModal2[i].addEventListener("click", openModal2);
}

btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

// modal 3
const modal3 = document.querySelector(".modal3");
const btnCloseModal3 = document.querySelector(".close-modal3");
const btnOpenModal3 = document.querySelectorAll(".project-btn3");

const openModal3 = function () {
  console.log("Button clicked");
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

for (let i = 0; i < btnOpenModal3.length; i++) {
  btnOpenModal3[i].addEventListener("click", openModal3);
}

btnCloseModal3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal3);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
  }
});
// modal 4
const modal4 = document.querySelector(".modal4");
const btnCloseModal4 = document.querySelector(".close-modal4");
const btnOpenModal4 = document.querySelectorAll(".project-btn4");

const openModal4 = function () {
  console.log("Button clicked");
  modal4.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeModal4 = function () {
  modal4.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

for (let i = 0; i < btnOpenModal4.length; i++) {
  btnOpenModal4[i].addEventListener("click", openModal4);
}

btnCloseModal4.addEventListener("click", closeModal4);
overlay.addEventListener("click", closeModal4);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal4();
  }
});

// modal 5
const modal5 = document.querySelector(".modal5");
const btnCloseModal5 = document.querySelector(".close-modal5");
const btnOpenModal5 = document.querySelectorAll(".project-btn5");

const openModal5 = function () {
  console.log("Button clicked");
  modal5.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeModal5 = function () {
  modal5.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};

for (let i = 0; i < btnOpenModal5.length; i++) {
  btnOpenModal5[i].addEventListener("click", openModal5);
}

btnCloseModal5.addEventListener("click", closeModal5);
overlay.addEventListener("click", closeModal5);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal5();
  }
});

//END OF MODAL SECTION

//fungsi carousel
let slideIndex = 0;
const slideInterval = 2000;

function showSlide(n) {
  const slides = document.querySelectorAll(".certificate");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, slideInterval);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);
autoSlide();

// END OF CARAOUSEL SECTION
//

// Form Validation
function validateForm() {
  let status = true;

  var nama = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var feedback = document.getElementById("feedback").value.trim();

  var namaError = document.getElementById("namaError");
  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");
  var feedbackError = document.getElementById("feedbackError");

  namaError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";
  feedbackError.innerHTML = "";

  if (nama === "") {
    namaError.innerHTML = "Nama harus diisi!";
    status = false;
  } else {
    const regex = /^[A-Za-z\s]*$/;
    if (!regex.test(nama)) {
      namaError.innerHTML =
        "Nama hanya boleh terdiri dari huruf alfabet dan spasi!";
      status = false;
    }
  }

  if (email === "") {
    emailError.innerHTML = "Email harus diisi!";
    status = false;
  } else {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      emailError.innerHTML = "Format email tidak valid!";
      status = false;
    }
  }

  if (phone === "") {
    phoneError.innerHTML = "Nomor harus diisi!";
    status = false;
  } else {
    const phonePattern = /^\+\d{2,3}\s\d{8,}$/;

    if (!phonePattern.test(phone)) {
      phoneError.innerHTML =
        "Format nomor tidak valid! Format: +(kode negara)[spasi](nomor selengkapnya)";
      status = false;
    }
  }

  if (feedback === "") {
    feedbackError.innerHTML = "Harap isi feedback";
    status = false;
  }

  if (status) {
    Swal.fire({
      icon: "success",
      title: "Sukses!",
      text: "Data berhasil terkirim!",
    });

    //clear inputs
    document.getElementById("myForm").reset();
  }

  if (!status) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Data tidak valid",
    });
  }

  return false;
}
// END OF FORM VALIDATION SECTION
