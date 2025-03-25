function ShowDateTime() {
    const currentdate = new Date();
    let year = currentdate.getFullYear();
    let month = currentdate.getMonth() + 1;
    let day = currentdate.getDate();
    let hours = currentdate.getHours();
    let minutes = currentdate.getMinutes();
    let seconds = currentdate.getSeconds();
    
    let formattedDate= "De datum van vandaag :" + day + '-' + month + '-' + year;
    let formattedTime= "De tijd is :" + hours + ':' + minutes + ':' + seconds;
    document.getElementById("dateTime").innerHTML = dateTime;
}

function ShowHelloInAlertBox() {
    alert("Hello World");
}
function ShowHelloConsole() {
    console.log("Hello World");
}
function changeText() {
    document.getElementById("changeText").innerHTML = "DIT IS DE NIEUWE TEXT"; 
}

function changeOutputDivStyle() {
    console.log(document.getElementById("outputDiv").className);
    document.getElementById("outputDiv").className = "newStyle";
}