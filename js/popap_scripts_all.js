//<!------------------------------------------->//
//<!--------------- Скрипты ------------------->//
//<!------------------------------------------->//

  //------------- Отправка письма --------------//
  var link = document.querySelector(".contacts__write-to-us");
  var popup = document.querySelector(".modal-letter");
  var close = popup.querySelector(".modal-letter__close");
  var form = popup.querySelector("form");

  var name = popup.querySelector("[name=person-name]");
  var pemail = popup.querySelector("[name=person-email]");
  var ptext = popup.querySelector("[name=person-text]");

  var isStorageSupport = true;
  var storage_name = "";
  var storage_email = "";

  try {
    storage_name = localStorage.getItem("name");
    storage_email = localStorage.getItem("pemail");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage){
      name.value = storage_name;
      pemail.value = storage_email;
      // ptext.value = storage;
      pemail.focus();
    } else{
      name.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !pemail.value || !ptext.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      // console.log("Нужно ввести логин и пароль");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("pemail", pemail.value);
        // localStorage.setItem("ptext", ptext.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

  //------------- Карта ---------------//
  var mapLink = document.querySelector(".contacts__map-button");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal__close-map");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });