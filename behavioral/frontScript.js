function setCommand(value) {
    document.querySelector('#search').style.display = 'none';
    document.querySelector('#upload').style.display = 'none';
    document.querySelector('#execute').style.display = 'none';
    document.querySelector('#neighbors').style.display = 'none';
    if (value == 'search') {
        document.querySelector('#search').style.display = 'block';
    }
    if (value == 'upload') {
        document.querySelector('#upload').style.display = 'block';
    }
    if (value == 'execute') {
        document.querySelector('#execute').style.display = 'block';
    }
    if (value == 'neighbors') {
        document.querySelector('#neighbors').style.display = 'block';
    }
}
function uploadContent(upload) {
    document.querySelector('#filename').value = upload.value.substr(12);
    document.querySelector('.custom-file-label').textContent = upload.value;
}
function uploadScript(upload) {
    document.querySelector('.script-label').textContent = upload.value;
}
