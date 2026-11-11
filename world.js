let lookupButton = document.getElementById('lookup');
let textBox = document.getElementById("country");
let country = ""
let citiesButton = document.getElementById("lookup-cities");
let url =""

function makeRequest(lookup){
    let country = textBox.value;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };

    let url = 'world.php?country=' + encodeURIComponent(country);
    if (lookup) {
        url += '&lookup=' + lookup;
    }
    xhr.open('GET', url, true);
    xhr.send();
}



lookupButton.addEventListener('click',function(){makeRequest('')});
citiesButton.addEventListener('click', function(){ makeRequest('cities'); });