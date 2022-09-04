let elForm = document.querySelector(".perents__form-js");
let elInputName = elForm.querySelector(".perents__name-js");
let elInputSurename = elForm.querySelector(".perents__surname-js");
let elInputContact = elForm.querySelector(".perents__contact-js");
let elInputRelative = elForm.querySelector(".perents__relative-js");

let elResultList = document.querySelector(".result-list");

let arrResultObject = [];

elForm.addEventListener("submit", evt => {
  evt.preventDefault();

  let nameValue = elInputName.value;
  let surnameValue = elInputSurename.value;
  let telValue = Number(elInputContact.value);
  let relativeValue = elInputRelative.value;

  const perentsObject = {
    ismi: nameValue,
    familyasi: surnameValue,
    telefon: telValue,
    qarindosh: relativeValue
  }

  arrResultObject.push(perentsObject);

  let elItem = document.createElement("li");
  elItem.className = "hero__item form-control mb-2";

  let elParagraphName = document.createElement("p");
  let elParagraphSurname = document.createElement("p");
  let elLinkTel = document.createElement("a");
  let elParagraphRelative = document.createElement("p");

  arrResultObject.forEach(arr => {
    elParagraphName.textContent = `Ismi: ${arr.ismi}`;
    elParagraphSurname.textContent = `Familyasi: ${arr.familyasi}`;
    elLinkTel.textContent = `Telefon raqami: +${arr.telefon}`;
    elLinkTel.href = `tel: +${arr.telefon}`;
    elParagraphRelative.textContent = `Qarindoshligi: ${arr.qarindosh}`;

    if (nameValue.includes(Number(nameValue)) || surnameValue.includes(Number(surnameValue)) || relativeValue.includes(Number(relativeValue))) {
      if (nameValue.includes(Number(nameValue))) {
        elParagraphName.textContent = "Itimos 'ism' ga son kiritmamg";
        delete arr.ismi;
      }
      if (surnameValue.includes(Number(surnameValue))) {
        elParagraphSurname.textContent = "Itimos 'familya' ga son kiritmamg";
        delete arr.familyasi;
      }
      if (relativeValue.includes(Number(relativeValue))) {
        elParagraphRelative.textContent = "Itimos 'qarindosh' ga son kiritmamg";
        delete arr.qarindosh;
      }

      if (isNaN(telValue)) {
        elLinkTel.textContent = "Istimos raqamni son da kiriting";
        elLinkTel.href = `#tel`;
        delete arr.telefon;
      }
    }
    else if (isNaN(telValue)) {
      elLinkTel.textContent = "Istimos raqamni son da kiriting";
      elLinkTel.href = `#tel`;
      delete arr.telefon;
    }

    localStorage.clear();
    // add local storage
    localStorage.setItem("person", JSON.stringify(arrResultObject));

    elItem.append(elParagraphName, elParagraphSurname, elLinkTel, elParagraphRelative);
    elResultList.appendChild(elItem);
  })

  console.log(arrResultObject);

  elInputName.value = "";
  elInputSurename.value = "";
  elInputContact.value = "";
  elInputRelative.value = "";
})

// get local storage
let getPerson = localStorage.getItem("person");
console.log(JSON.parse(getPerson));

elForm.addEventListener("reset", () => {
  arrResultObject.splice(0, arrResultObject.length);
  elResultList.innerHTML = null;

  console.log(arrResultObject);

  elInputName.value = "";
  elInputSurename.value = "";
  elInputContact.value = "";
  elInputRelative.value = "";
})
