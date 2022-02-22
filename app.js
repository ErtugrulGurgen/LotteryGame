let inputById = document.getElementById("number");
let buttonById = document.getElementById("submit");
let result = [];
let resultText = "";
let clearButtonById = document.getElementById("clear");

function lottery() {
  if (inputById.value == "") {
    alert("Come on! All you can do is to write a number to play this game!");
  } else if (parseInt(inputById.value) > 10) {
    alert("Number should not be more than 10");
    inputById.value = "";
  } else {
    counter = parseInt(inputById.value);
    for (let x = 0; x < counter; x++) {
      for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 90);
        result.push(`${randomNumber}`);
        resultText += `${randomNumber} - `;
      }
      for (let i = 0; i < 1; i++) {
        let randomNumber = Math.floor(Math.random() * 90);
        result.push(`${randomNumber}`);
        resultText += `${randomNumber} | `;
      }
      let a = 1;
      for (let i = 0; i < a; i++) {
        let joker = Math.floor(Math.random() * 90);
        if (result.includes(joker)) {
          a++;
          continue;
        } else {
          result.push(`${joker}`);
          resultText += `${joker} | `;
        }
      }
      for (let i = 0; i < 1; i++) {
        let randomNumber = Math.floor(Math.random() * 90);
        result.push(`${randomNumber}`);
        resultText += `${randomNumber}`;
      }
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "divAdded");
      let node = document.createTextNode(resultText);
      let para = document.createElement("p");
      para.appendChild(node);
      newDiv.appendChild(para);
      document.getElementById("result").appendChild(newDiv);
      newDiv.style.border = "1px solid black";
      newDiv.style.borderRadius = "1rem";
      newDiv.style.width = "200px";
      newDiv.style.height = "30px";
      newDiv.style.marginLeft = "41%";
      newDiv.style.marginTop = "1%";
      newDiv.style.fontSize = "smaller";
      newDiv.style.alignItems = "center";
      para.style.margin = "3% 0 0 5%";
      resultText = "";
      inputById.value =""
    }
  }
}

buttonById.addEventListener("click", lottery);
clearButtonById.addEventListener("click", ()=>{
    location.reload();
});
