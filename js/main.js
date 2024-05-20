// BOTON IR ARRIBA
const irArriba = document.querySelector(".scrolltop");

irArriba.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
window.addEventListener("scroll", () => {
  if (window.scrollY < 500) {
    irArriba.style.right = -100 + "px";
  } else {
    irArriba.style.right = 5 + "px";
  }
});

// VALIDACION FORMULARIO

const formulario = document.getElementById("contact-form");
const nombreCampo = document.getElementById("contact-name");
const apellidoCampo = document.getElementById("contact-surname");
const telefonoCampo = document.getElementById("contact-phone");
const emailCampo = document.getElementById("contact-email");
const comensalesCampo = document.getElementById("contact-num");
const fechaCampo = document.getElementById("contact-date");
const dniCampo = document.getElementById("contact-dni");
const botonEnviar = document.getElementById("send-button");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
// VALIDACIÓN DE CAMPOS EN 0
nombreCampo.addEventListener("blur", function (e) {
  const campo = e.target.value;
  if (campo.trim().length === 0) {
    document.querySelector("#spanName").innerText = "Se requiere un nombre";
  } else {
    document.querySelector("#spanName").innerText = "";
  }
});

apellidoCampo.addEventListener("blur", function (e) {
  const campo = e.target.value;
  if (campo.trim().length === 0) {
    document.querySelector("#spanSurname").innerText =
      "Se requiere un apellido";
  } else {
    document.querySelector("#spanSurname").innerText = "";
  }
});

telefonoCampo.addEventListener("blur", function (e) {
  const campo = e.target.value;
  if (campo.trim().length === 0) {
    document.querySelector("#spanPhone").innerText = "Se requiere un teléfono";
  } else {
    document.querySelector("#spanPhone").innerText = "";
  }
});

emailCampo.addEventListener("blur", function (e) {
  const campo = e.target.value;
  if (campo.trim().length === 0) {
    document.querySelector("#spanEmail").innerText =
      "Se requiere un correo electrónico";
  } else {
    document.querySelector("#spanEmail").innerText = "";
  }
});

comensalesCampo.addEventListener("blur", function (e) {
  const campo = e.target.value;
  if (campo.trim().length === 0) {
    document.querySelector("#spanNum").innerText = "Se requiere un número";
  } else {
    document.querySelector("#spanNum").innerText = "";
  }
});

fechaCampo.addEventListener("blur", function (e) {
  const campo = e.target.value;
  if (campo.trim().length === 0) {
    document.querySelector("#spanDate").innerText = "Se requiere una fecha";
  } else {
    document.querySelector("#spanDate").innerText = "";
  }
});

// VALIDAR CAMPO DE EMAIL

const validarEmail = (e) => {
  const campoVacio = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  if (campoVacio.trim().length > 5 && !regex.test(campoVacio)) {
    document.querySelector("#spanEmail").innerText =
      "Introduce un correo válido";
  } else {
    document.querySelector("#spanEmail").innerText = "";
  }
};

emailCampo.addEventListener("input", validarEmail);

// VALIDAR CAMPO DE IMAGEN

dniCampo.addEventListener("change", (e) => {
  const imgExt = e.target.files[0].name.split(".").pop().toLowerCase();
  const imgPermitidas = ["jpg", "jpeg", "png"];

  if (!imgPermitidas.includes(imgExt)) {
    document.querySelector("#spanDni").innerText = "Sube tu DNI";
  } else {
    document.querySelector("#spanDni").innerText = "";
  }
});
