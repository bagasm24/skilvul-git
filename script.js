function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;
    
    return formData = { name, city, email, zipCode, status };
}

function isNumber(value) {
    return !isNaN(value);
  }

function checkboxIsChecked() {
    let statusCheckbox = document.getElementById("status")
    return statusCheckbox.checked
  }

function validateFormData(formData) {
    if(formData!==null && !isNaN(formData.zipCode) && document.getElementById("status").checked ==true){
        return true;
    } else{
        return false;
    }
}


function submit() {
    const formData = handleGetFormData()

    if (validateFormData(formData)) {
        document.getElementById('warning').textContent = '';
    } else {
        document.getElementById('warning').textContent = 'Periksa form anda sekali lagi';
    }
}
document.getElementById('myForm').addEventListener('submit', submit);