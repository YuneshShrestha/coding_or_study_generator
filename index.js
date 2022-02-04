var random1 = Math.random();
var study = Math.floor(random1 * 100) + 1;
var code = 100 - study;
document.getElementById("studyP").innerHTML = "Percent:"+study+"%";
document.getElementById("codingP").innerHTML = "Percent:"+code+"%";
if(study>code){
    document.getElementById("message").style.color = "blue";
    document.getElementById("message").innerHTML = "Back to studies nerd 😆";
}
else if(code>study){
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Coding is the best way to learn 😇";
}
else{
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Balance is necessary 😥";
}