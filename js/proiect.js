
    document.getElementById("demo").addEventListener("keypress", myFunction);

    function myFunction() {
    document.getElementById("demo").style.backgroundColor = "#809076";
    }

    const canvas = document.getElementById("shroom");
    const ctx = canvas.getContext("2d");

   draw();
             
   function draw() {

      ctx.fillStyle = "#F8D794";
      ctx.fillRect(140, 25, 20, 35);

      ctx.beginPath();
      ctx.arc(150, 20, 20, 0, 2*Math.PI);
      ctx.moveTo(190, 40);
      ctx.lineTo(110, 40);
      ctx.lineTo(137, 5);
      ctx.lineTo(164, 5);
      ctx.fillStyle = "#ad4337ff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(155, 10, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(135, 20, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(143, 32, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(175, 33, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(158, 23, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(125, 35, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

   }          
   

    const canvasContainer = document.getElementById("canvas-container");
    if(canvasContainer) {
        canvasContainer.addEventListener("click", () => {
          const culoareVeche = canvasContainer.style.backgroundColor;
          canvasContainer.style.backgroundColor = "#675990ff"; 
           setTimeout(() => {
            canvasContainer.style.backgroundColor = culoareVeche;
        }, 2000);
        });
     }

     canvas.addEventListener("click", (e) => {
    e.stopPropagation();
    colorRandom();
    form.requestSubmit();
    });

   function colorRandom() { 

      const culori = ["#BB6830", "#5d996bff", "#5687a3ff", "#8d4f73ff", "#7c5f93ff"]
      let culoareRandom = culori[Math.floor(Math.random() * culori.length)];
      
      ctx.beginPath();
      ctx.arc(150, 20, 20, 0, 2*Math.PI);
      ctx.moveTo(190, 40);
      ctx.lineTo(110, 40);
      ctx.lineTo(137, 5);
      ctx.lineTo(164, 5);
      ctx.fillStyle = culoareRandom;
      ctx.fill();
    
      ctx.beginPath();
      ctx.arc(155, 10, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(135, 20, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(143, 32, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(175, 33, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(158, 23, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(125, 35, 3, 0, 2*Math.PI);
      ctx.fillStyle = "#e8dfccff";
      ctx.fill();
      
   }

const form=document.getElementById('formular');
form.addEventListener('submit', (e) => {
    const telefonInput = document.querySelector('input[type="tel"]');
    const telefonRegex = /^07[0-9]{8}$/;
    
    if (!telefonRegex.test(telefonInput.value)) {
        e.preventDefault();
        alert("Numar de telefon invalid !");
        telefonInput.style.border = "2px solid red";
        return; 
    }

    e.preventDefault(); 

let scor = 0;

const q1 = document.querySelector('input[name="1"]:checked').value;
const q2 = document.querySelector('input[name="2"]:checked').value;
const q3 = document.querySelector('input[name="3"]:checked').value;
const q4 = document.querySelector('input[name="4"]:checked').value;
const q5 = document.querySelector('input[name="5"]').value;


scor += Number(q1);
scor += Number(q2);
scor += Number(q3);
scor += Number(q4);
scor += Number(q5);

let rezultat = "";

const media = scor / 5;

if (media <= 1.5) {
  rezultat = "Dina";
} else if (media <= 2.5) {
  rezultat = "Tess";
} else if (media <= 3.5) {
  rezultat = "Ellie";
} else if (media <= 4.4) {
  rezultat = "Joel";
} else {
  rezultat = "Abby";
}


document.getElementById("rezultat").textContent = rezultat;

const rezultatEl = document.getElementById("rezultat");

rezultatEl.className = "rezultat";

rezultatEl.textContent = rezultat;

if (rezultat === "Ellie") {
  rezultatEl.classList.add("ellie");
} 

else if (rezultat === "Joel") {
  rezultatEl.classList.add("joel");
} 
else if (rezultat === "Dina") {
  rezultatEl.classList.add("dina");
} 
else if (rezultat === "Tess") {
  rezultatEl.classList.add("tess");
} 
else if (rezultat === "Abby") {
  rezultatEl.classList.add("abby");
}



let istoric = JSON.parse(localStorage.getItem("istoricQuiz")) || [];


let intrareNoua = {
    nume: document.getElementById("demo").value,
    personaj: rezultat,
    data: new Date().toLocaleString() 
};

istoric.push(intrareNoua);
localStorage.setItem("istoricQuiz", JSON.stringify(istoric));


const mesajConfirmare = document.createElement("div");
mesajConfirmare.textContent = "Rezultatul a fost salvat in istoric!";
mesajConfirmare.style.color = "#F8D794";
mesajConfirmare.style.marginTop = "10px";
mesajConfirmare.style.textAlign = "center";

rezultatEl.parentNode.insertBefore(mesajConfirmare, rezultatEl.nextSibling);


setTimeout(() => {
    mesajConfirmare.remove();
}, 3000);
});


setInterval(colorRandom, 20000);

const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeEl = document.getElementById("welcome");
const authDiv = document.getElementById("auth");

let users = {};


fetch('users.json')
  .then(response => response.json())
  .then(data => {
    users = data;
  })

function loginout() {
  const user = localStorage.getItem("currentUser");
  if(user) {
    authDiv.style.display = "none";
    welcomeEl.textContent = `Bine ai venit, ${user}!`;
    logoutBtn.style.display = "inline";
  }
}


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  if(users[username] && users[username] === password) {
    localStorage.setItem("currentUser", username);
    authDiv.style.display = "none";
    welcomeEl.textContent = `Bine ai venit, ${username}!`;
    logoutBtn.style.display = "inline";
  }
  else {
    alert("Username sau parola gresita !");
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  authDiv.style.display = "block";
  welcomeEl.textContent = "";
  logoutBtn.style.display = "none";
});




const btnIstoric = document.getElementById("btnIstoric");
const btnStergeIstoric = document.getElementById("btnStergeIstoric");
const listaIstoric = document.getElementById("listaIstoric");

if(btnIstoric) {
    btnIstoric.addEventListener("click", () => {

        if (listaIstoric.style.display === "block") {
            listaIstoric.style.display = "none";
            btnIstoric.textContent = "Vezi istoric";
            btnStergeIstoric.style.display = "none";
            return;
        }


        listaIstoric.style.display = "block";
        btnIstoric.textContent = "Ascunde Istoric";
        listaIstoric.innerHTML = "";

        const istoric = JSON.parse(localStorage.getItem("istoricQuiz")) || [];

        if (istoric.length === 0) {
            listaIstoric.innerHTML = "<li style='border:none; text-align:center;'>Nu exista istoric salvat</li>";
            btnStergeIstoric.style.display = "none";
        } else {
            
            btnStergeIstoric.style.display = "inline-block";


            istoric.reverse().forEach(item => {
                const li = document.createElement("li");
                
                li.innerHTML = `
                    <div>
                        <span style="color: #BB6830;">${item.nume}</span> 
                        a obtinut: ${item.personaj}
                    </div>
                    <div style="font-size: 13px;">
                        ${item.data}
                    </div>
                `;

                listaIstoric.appendChild(li);
            });
        }
    });
}


if(btnStergeIstoric) {
    btnStergeIstoric.addEventListener("click", () => {

      localStorage.removeItem("istoricQuiz");

    });
}





 

        
       
      

  