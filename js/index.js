function hitung() {
    var sideLength = document.getElementById("sideLength").value;
    
    if (sideLength === "") {
        alert("Masukkan panjang sisi terlebih dahulu");
        return;
    }

    var luas = sideLength * sideLength;
    var keliling = 4 * sideLength;

    document.getElementById('luas').innerText = luas;
    document.getElementById('keliling').innerText = keliling;
}

function reset() {
    document.getElementById("sideLength").value = "";
    document.getElementById("luas").innerText = "";
    document.getElementById("keliling").innerText = "";
}
