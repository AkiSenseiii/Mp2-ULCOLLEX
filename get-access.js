AOS.init();

const clickableImages = document.querySelectorAll('#clickable-image');
const textNumbers = document.querySelectorAll('#text-number');

for (let i = 0; i < clickableImages.length; i++) {
  let count = parseInt(textNumbers[i].textContent);

  clickableImages[i].addEventListener('click', function() {
    count++;
    textNumbers[i].textContent = count;
  });
}

function logout() {
    localStorage.removeItem("remember");
    window.location.href = "home.html";
  }