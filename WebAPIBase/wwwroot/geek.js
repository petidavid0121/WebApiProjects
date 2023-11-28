var viccek;

window.onload = letöltés;
function letöltés() {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(k) {
    console.log("sikeres letöltés")
    console.log(k)
    viccek = k;
    for (var i = 0; i < k.length ; i++)
    {
        var ujElem = document.createElement('div')
        ujElem.innerText = k[i]
        document.getElementById('main').appendChild(ujElem)
    }
}