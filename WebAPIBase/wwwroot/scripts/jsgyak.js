window.onload = () => {

    for (var sor = 0; sor < 10; sor++) {

        var ujSor = document.createElement('div')
        ujSor.classList.add("sor")
        document.getElementById("pascal").appendChild(ujSor)

        for (var oszlop = 0; oszlop <= sor; oszlop++) {

            var ujElem = document.createElement("div")
            ujElem.classList.add("elem")
            ujElem.innerText = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop))
            //legyen az innerHTML a megfelelő szám
            ujSor.appendChild(ujElem)
        }
    }

    console.log("betöltődött")

};

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}