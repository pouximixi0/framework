// create element on the div
function createElement(div, elementType, className, content, option) {
  var messageElement;
  //elementType and option
  if (elementType && option) {
    messageElement = document.createElement(elementType, [option]);
  } else if (!elementType && option) {
    console.log("error in the funtion createElement()");
  } else if (!option && elementType) {
    console.log("error in the funtion createElement()");
  } else {
    console.log("error in the funtion createElement()");
  }
  //content
  if (content) {
    messageElement.textContent = content;
  } else {
    console.log("error in the funtion createElement()");
  }
  //className
  if (className) {
    messageElement.classList.add(className);
  } else {
    console.log("error in the funtion createElement()");
  }
  document.getElementById(div).appendChild(messageElement);
}

// read Cookies
function readCookie(nom) {
  nom = nom + "=";
  var liste = document.cookie.split(";");
  for (var i = 0; i < liste.length; i++) {
    var c = liste[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nom) == 0) return c.substring(nom.length, c.length);
  }
  return null;
}

// create Cookies
function createCookie(nom, contenu, jours) {
  var e = null;
  var date = new Date();
  date.setTime(date.getTime() + jours * 24 * 60 * 60 * 1000);
  e = "; expires=" + date.toGMTString();
  document.cookie = nom + "=" + contenu + e + "; path=/";
}

// deleteCookies
function deleteCookie(name) {
  if (name) {
    document.cookie = `${name}=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
  } else {
    console.log("name is empty");
  }
}

// typing
function typingSimulation(text, delay, element) {
  elementValue = document.getElementById(element);
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      elementValue.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}
