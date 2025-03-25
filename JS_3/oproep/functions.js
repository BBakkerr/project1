const cars = ["Saab", "Volvo", "BMW"];
const price = [10000, 8000, 11000];
 
let autosDiv = document.getElementById("autos");
let totaalPrijsDiv = document.getElementById("totaalprijs");
let saveButton = document.getElementById("saveButton")
let lengte_arrays = cars.length;
let toevoegenRadio = document.getElementById("toevoegen");
let updatenRadio = document.getElementById("updaten");
let verwijderenRadio = document.getElementById("verwijderen");
let addCarDiv = document.getElementById("addCar");
let updateCarDiv = document.getElementById("updateCar");
let deleteCarDiv = document.getElementById("deleteCar");
let idInput;
let autoInput = addCarDiv.querySelector('.auto');
let prijsInput = addCarDiv.querySelector('.prijs');
let WarningTextUpdate = document.getElementById("warning-update");
let WarningTextDelete = document.getElementById("warning-delete");
 
console.log(idInput);
console.log(autoInput);
console.log(prijsInput);
 
 
showCars();
totaalPrijs();
console.log("auto: " + cars + " prijs: " + price);
 
function toggleDiv(element)
{
    console.log(element);
    let currentDiv;
 
    if(toevoegenRadio.checked)
    {
        addCarDiv.style.display = "initial";
        currentDiv = addCarDiv;
        updateCarDiv.style.display = "none";
        deleteCarDiv.style.display = "none";
    }
    else if(updatenRadio.checked)
    {
        addCarDiv.style.display = "none";
        updateCarDiv.style.display = "initial";
        currentDiv = updateCarDiv;
        deleteCarDiv.style.display = "none";
    }
    else
    {
        addCarDiv.style.display = "none";
        updateCarDiv.style.display = "none";
        deleteCarDiv.style.display = "initial";
        currentDiv = deleteCarDiv;
    }
 
    determineCurrentInput(currentDiv);
}
 
function showCars()
{
    let tekst = "";
    lengte_arrays = cars.length;
 
    tekst += "De " + cars[0] + " kost &euro;" +  price[0]  + "<hr>";
 
    tekst += "<table>";
    for(let i = 0; i < lengte_arrays; i++)
    {
       
        tekst += "<tr><td>id: "+ i + " - De " + cars[i] + " kost &euro;" +  price[i] + `</td><td><button type='button' onclick= 'selectCar(${i}, "${cars[i]}", ${price[i]})'>selecteren</button></td></tr>`;
       
    }
   
 
    tekst += "</table>";
    tekst += "<hr>";
    autosDiv.innerHTML = tekst;
}
 
function determineCurrentInput(currentDiv)
{
 
    // resetting variables input elements
    idInput = null;
    autoInput = null;
    prijsInput = null;
 
    if(currentDiv.querySelector('.id'))
    {
        idInput = currentDiv.querySelector('.id');
    }
   
    if(currentDiv.querySelector('.auto'))
    {
        autoInput = currentDiv.querySelector(".auto");
    }
   
    if(currentDiv.querySelector('.prijs'))
    {
        prijsInput = currentDiv.querySelector(".prijs");
    }
 
    console.log(idInput);
    console.log(autoInput);
    console.log(prijsInput);
   
}
 
 
 
function addCar()
{
    //console.log("auto: " + cars + " prijs: " + price);
    let prijsInt = parseInt(prijsInput.value);
 
    if(autoInput.value != "" && prijsInput.value != "")
    {
        cars.push(autoInput.value);
        price.push(prijsInt);
    }
   
 
    //console.log(auto.value);
    //console.log(prijsInt);
    //console.log("auto: " + cars + " prijs: " + price);
 
    showCars();
    totaalPrijs();
 
}
 
function updateCar()
{
    WarningTextUpdate.style.display = "none";
    let prijsInt = parseInt(prijsInput.value);
 
    console.log("dit is de id bij de update: " + idInput.value);
 
    if(autoInput.value != "" && prijsInput.value != "" && idInput.value != "" )
    {
        cars[idInput.value] = autoInput.value;
        price[idInput.value] = prijsInt;  
       
        showCars();
        totaalPrijs();
    }
    else
    {
        WarningTextUpdate.style.display = "initial";
    }
}
 
function removeCar()
{
    WarningTextDelete.style.display = "none";
 
    // when the user entered an id
    if(idInput.value != "")
    {
        console.log(cars[idInput.value]);
        // when id exists as index in the array
        if(idInput.value in cars)
        {
       
               
            cars.splice(idInput.value, 1);
            price.splice(idInput.value, 1);
       
           
            showCars();
            totaalPrijs();
        }
        else
        {
            WarningTextDelete.style.display = "initial";
        }
    }
       
}
 
 
function selectCar(index, auto, prijs)
{
    console.log("index: " + index);
    console.log("auto: " + auto);
    console.log("prijs: " + prijs);
 
 
    if(idInput != null)
    {
        idInput.value = index;
        console.log(idInput.value);
    }
 
    if(autoInput != null)
    {
        autoInput.value = auto;
        console.log(autoInput.value);
    }
 
    if(prijsInput != null)
    {
        prijsInput.value = prijs;
        console.log(prijsInput.value);
    }
   
}
 
 
function totaalPrijs()
{
    let totaal = 0;
    let aantalAutos = cars.length;
 
    for(let prijs of price)
    {
        totaal += prijs;
        //console.log("prijs per loop: " + prijs);
        //console.log("totaal per loop: " + totaal);
    }
 
   
   
 
    tekst = "<hr>De totaalprijs van de " + aantalAutos + " auto's is: &euro;" + totaal + "<hr>";
    totaalPrijsDiv.innerHTML = tekst;
 
 
}