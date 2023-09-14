function addNewWeField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wo-experience");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Add Experience');

    let workExp=document.getElementById("workExp");
    let weAddButton=document.getElementById("weAddButton");

    workExp.insertBefore(newNode,weAddButton);
}

function addNewEduField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("education");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Add Education');

    let educationExp=document.getElementById("educationExp");
    let eduAddButton=document.getElementById("eduAddButton");

    educationExp.insertBefore(newNode,eduAddButton);
}

//generate Cv
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    //e-mail
    document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;

    //linkedIn
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedInField").value;

    //gitHub
    document.getElementById("githubT").innerHTML=document.getElementById("gitHubField").value;

    //objective
    document.getElementById("objT").innerHTML=document.getElementById("objectiveField").value;

    //Profile Photo
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    };
    

    //workExp
    let wExp=document.getElementsByClassName("wo-experience");
    let str="";
    for(let e of wExp){
        str+=`<li> ${e.value} </li>`;
    }

    document.getElementById("workExpT").innerHTML=str;

    //Education
    let edu=document.getElementsByClassName("education");
    let str1="";
    for(let e of edu){
        str1+=`<li> ${e.value}</li>`;
    }

    document.getElementById("eduT").innerHTML=str1;


    document.getElementById("cv-structure").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

function printCV(){
    window.print();
}