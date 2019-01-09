const form = document.querySelector('form');
const btn = document.querySelector("button");
const audio = new Audio('./imperial_march.mp3');


btn.addEventListener("click", (e) => {
  e.preventDefault();

  let arr = [];
  const select = document.querySelectorAll('input[type=checkbox]');
  select.forEach((element, index) => {
    if (element.checked) {
      arr.push(index);
    }
  })
  if (arr.includes(0) || arr.length === 0) {
    console.log('rickroll')
    form.submit();
  }
  else {
    audio.play();
    console.log('imperial_march')
  }

});
