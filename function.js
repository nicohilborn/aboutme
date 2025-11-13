function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
 function changeColor() {
      const text = document.getElementById("colorText");
      const colors = ["#ff4d4d", "#4dff88", "#4db8ff", "#ffdb4d", "#d24dff"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      text.style.color = randomColor;
    }