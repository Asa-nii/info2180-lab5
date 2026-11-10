let lookupButton = document.getElementById('lookup');
let textBox = document.getElementById("country");
let country = ""


function makeRequest(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status ==200){
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };

    xhr.open('GET', 'world.php?country=' + encodeURIComponent(country), true);
    xhr.send();
}

function updateCountry(){
    country=textBox.value;
    makeRequest();
}



lookupButton.addEventListener('click',updateCountry)