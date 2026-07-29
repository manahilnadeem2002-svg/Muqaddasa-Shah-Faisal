const form = document.getElementById("profileForm");

const cardContainer = document.getElementById("cardContainer");

const downloadBtn = document.getElementById("downloadBtn");

form.addEventListener("submit", function(e){

e.preventDefault();

const fullName = document.getElementById("fullName").value.trim();

const role = document.getElementById("role").value.trim();

const skill = document.getElementById("skill").value.trim();

document.getElementById("cardName").textContent = fullName;

document.getElementById("cardRole").textContent = role;

document.getElementById("cardSkill").textContent = skill;

document.getElementById("avatar").textContent = fullName.charAt(0).toUpperCase();

cardContainer.classList.remove("hidden");

});

downloadBtn.addEventListener("click",function(){

window.print();

});
