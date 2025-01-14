
// Form validation

document.getElementById('projectForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // clear all error messages
    document.querySelectorAll('.text-red-500').forEach(el => el.classList.add('hidden'));

    // Validate First Name
    if (!document.getElementById('firstName').value) {
        document.getElementById('firstNameError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Last Name
    if (!document.getElementById('lastName').value) {
        document.getElementById('lastNameError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(document.getElementById('phone').value)) {
        document.getElementById('phoneError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Address Fields
    ['street', 'city', 'state', 'pincode'].forEach(field => {
        if (!document.getElementById(field).value) {
            document.getElementById(`${field}Error`).classList.remove('hidden');
            isValid = false;
        }
    });

    // Validate Project Details
    if (!document.getElementById('projectDetails').value) {
        document.getElementById('projectDetailsError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Budget
    if (!document.querySelector('input[name="budget"]:checked')) {
        document.getElementById('budgetError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Deadline
    if (!document.querySelector('input[name="deadline"]:checked')) {
        document.getElementById('deadlineError').classList.remove('hidden');
        isValid = false;
    }

    // Validate Contact Method
    if (!document.querySelector('input[name="contactMethod"]:checked')) {
        document.getElementById('contactMethodError').classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can add your form submission logic here
    }
});

