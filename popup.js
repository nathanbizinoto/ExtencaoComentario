document.getElementById('generate').addEventListener('click', function() {
    var serialNumber = document.getElementById('serialNumber').value;
    var oldCNPJ = formatCNPJ(document.getElementById('oldCNPJ').value);
    var newCNPJ = formatCNPJ(document.getElementById('newCNPJ').value);

    if (!validateCNPJ(oldCNPJ) || !validateCNPJ(newCNPJ)) {
        showModal("Por favor, insira CNPJs válidos com exatamente 14 dígitos.", false);
        return;
    } else if (oldCNPJ === newCNPJ) {
        showModal("O CNPJ antigo e o novo CNPJ não podem ser iguais.", false);
        return;
    }

    var resultText = `POS migrated: ${serialNumber}\nfrom old CNPJ: ${oldCNPJ}\nto new CNPJ: ${newCNPJ}`;
    showModal(resultText, true);
});

function formatCNPJ(cnpj) {
    return cnpj.replace(/[\D]/g, '');
}

function validateCNPJ(cnpj) {
    return cnpj.length === 14; 
}

function showModal(text, allowCopy) {
    document.getElementById('modalText').innerText = text;
    var button = document.getElementById('modalButton');
    if (allowCopy) {
        button.innerText = 'Copiar Texto';
        button.onclick = copyText;
    } else {
        button.innerText = 'OK';
        button.onclick = function() { document.getElementById('myModal').style.display = 'none'; };
    }
    document.getElementById('myModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
});

function copyText() {
    navigator.clipboard.writeText(document.getElementById('modalText').innerText).then(function() {
        showModal('Texto copiado com sucesso!', false);
    }, function(err) {
        showModal('Erro ao copiar texto: ' + err, false);
    });
}
