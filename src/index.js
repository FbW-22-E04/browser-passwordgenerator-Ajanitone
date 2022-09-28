const container = document.querySelector(".container");
const result = container.querySelector("#result");

const button = document.querySelector("button");

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

button.addEventListener("click", () => {
  let pass = "";

  const length = container.querySelector("#length").value;

  const checkBox = container.querySelector("#mix").checked;

  for (let i = 1; i < length; i++) {
    if (checkBox === true && i % 3 === 0) {
      pass += charset[Math.floor(Math.random() * charset.length)].toUpperCase();
    } else {
      pass += charset[Math.floor(Math.random() * charset.length)];
    }
  }
  result.value = pass;
});
