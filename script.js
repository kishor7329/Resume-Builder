function addNewwork() {
let newNode=document.createElement("textarea");
newNode.classList.add("form-control", "workfield");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");
let workexperienceOb=document.getElementById("workExperience");
let weaddbuttonOb=document.getElementById("weaddbutton");
workexperienceOb.insertBefore(newNode,weaddbuttonOb);
}
function addnewedu() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control", "edufield");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let educationOb=document.getElementById("education");
    let edubuttonOb=document.getElementById("edubutton");
    educationOb.insertBefore(newNode,edubuttonOb);
    }
    function addskill() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control", "techskill");    
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let techob=document.getElementById("tech");
    let techbuttonOb=document.getElementById("techbutton");
    techob.insertBefore(newNode,techbuttonOb);
}
function addacheive() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control", "acheivearea");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");
let acheiveOb=document.getElementById("acheive");
let acheivebuttonOb=document.getElementById("acheivebutton");
acheiveOb.insertBefore(newNode,acheivebuttonOb);
}
 function actskill() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control", "actskill");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let actOb=document.getElementById("act");
    let actbuttonOb=document.getElementById("actbutton");
    actOb.insertBefore(newNode,actbuttonOb);
 }
 function actlang() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control", "langskill");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let langOb=document.getElementById("lang");
    let langbuttonOb=document.getElementById("langbutton");
    langOb.insertBefore(newNode,langbuttonOb); 
}
document.getElementById("dpUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profileImg").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
function addReference() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "referencefield");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");
    let refOb = document.getElementById("reference");
    let refButtonOb = document.getElementById("refbutton");
    refOb.insertBefore(newNode, refButtonOb);
}
function generatecv() {
let name=document.getElementById("name").value;
let namet1=document.getElementById("namet1");
namet1.innerHTML=name;
let contact = document.getElementById("contact").value;
let contactt2 = document.getElementById("contactt2");
// Find the img tag and update only the text node after it
contactt2.innerHTML = '<img src="phone.png" style="width: 30px; height: 30px;"> ' + contact;
let email = document.getElementById("email").value;
let emailt3 = document.getElementById("emailt3");
emailt3.innerHTML = '<img src="email.png" style="width: 30px; height: 30px;"> ' + email;
let address = document.getElementById("Address").value;
let adresst3 = document.getElementById("adresst3");
adresst3.innerHTML = '<img src="home.png" style="width: 30px; height: 30px;"> ' + address;
let linkedin = document.getElementById("Linkdin").value;
let linkdt = document.getElementById("linkdt");
linkdt.href = linkedin;

// GitHub
let github = document.getElementById("g").value;
let gtt = document.getElementById("gtt");
gtt.href = github;

// Certificate
let certificate = document.getElementById("Certificate-License").value;
let c = document.getElementById("c");
c.href = certificate;
let acheiveAreas = document.getElementsByClassName("acheivearea");
    let acheiveList = "";
    for (let area of acheiveAreas) {
        if (area.value.trim() !== "") {
            acheiveList += `<li>${area.value}</li>`;
        }
    }
    document.getElementById("acheivet").innerHTML = acheiveList;

    let techAreas = document.getElementsByClassName("techskill");
    let techList = "";
    for (let area of techAreas) {
        if (area.value.trim() !== "") {
            techList += `<li>${area.value}</li>`;
        }
    }

    document.getElementById("techt").innerHTML = techList;

    let langAreas = document.getElementsByClassName("langskill");
    let langList = "";
    for (let area of langAreas) {
        if (area.value.trim() !== "") {
            langList += `<li>${area.value}</li>`;
            
        }
    }
    let langt = document.getElementById("langt");
    langt.innerHTML = langList;
    let actAreas = document.getElementsByClassName("actskill");
    let actList = '<ul style="text-align: left;">';
    for (let area of actAreas) {
        if (area.value.trim() !== "") {
            actList += `<li>${area.value}</li>`;
        }
    }
    actList += "</ul>";
    document.getElementById("actt").innerHTML = actList;

    let eduAreas = document.getElementsByClassName("edufield");
    let eduList = '<ul style="text-align: left; list-style-type: disc;">';
    for (let area of eduAreas) {
        if (area.value.trim() !== "") {
            eduList += `<li>${area.value}</li>`;
        }
    }
    eduList += "</ul>";
    document.getElementById("edut").innerHTML = eduList;
    document.getElementById("cvform").style.display = "none";
 document.getElementById("cvtemplate").style.display = "block";

 let summary = document.getElementById("Profile-Summary").value;
document.getElementById("profiltet").innerText = summary;

let refAreas = document.getElementsByClassName("referencefield");
let refList = "";
for (let area of refAreas) {
    if (area.value.trim() !== "") {
        refList += `<li>${area.value}</li>`;
    }
}
document.getElementById("reft").innerHTML = refList;
}
function printCV() {
    // Print only the CV template section
    let originalContents = document.body.innerHTML;
    let printContents = document.getElementById("cvtemplate").innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload(); // Reload to restore event listeners and state
}
 