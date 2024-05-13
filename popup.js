document.getElementById('generate').addEventListener('click', function() {
    var serialNumber = document.getElementById('serialNumber').value;
    var oldCNPJ = document.getElementById('oldCNPJ').value;
    var newCNPJ = document.getElementById('newCNPJ').value;

    var resultText = `POS migrated: ${serialNumber}\nfrom old CNPJ: ${oldCNPJ}\nto new CNPJ: ${newCNPJ}`;
    document.getElementById('result').innerText = resultText;
});
