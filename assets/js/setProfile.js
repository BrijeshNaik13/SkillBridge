let userData = {};

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const schoolName = document.getElementById('school-name').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value.trim();
    const avatar = document.querySelector('img.checked');

    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').innerText = 'Please enter your name!';
        isValid = false;
    } else {
        document.getElementById('name-error').innerText = '';
    }

    if (schoolName === '') {
        document.getElementById('school-name-error').innerText = 'Please enter your school name!';
        isValid = false;
    } else {
        document.getElementById('school-name-error').innerText = '';
    }

    if (age === '') {
        document.getElementById('age-error').innerText = 'Please enter your age!';
        isValid = false;
    } else if (age < 5 || age > 100) {
        document.getElementById('age-error').innerText = 'Your age is not valid!';
        isValid = false;
    } else {
        document.getElementById('age-error').innerText = '';
    }

    if (gender === '') {
        document.getElementById('gender-error').innerText = 'Please select your gender!';
        isValid = false;
    } else {
        document.getElementById('gender-error').innerText = '';
    }

    if (email === '') {
        document.getElementById('email-error').innerText = 'Please enter your email address!';
        isValid = false;
    } else if (!email.includes('@')) {
        document.getElementById('email-error').innerText = 'Your email address is not correct!';
        isValid = false;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    if (!avatar) {
        document.getElementById('avatar-error').innerText = 'Please choose an avatar!';
        isValid = false;
    } else {
        document.getElementById('avatar-error').innerText = '';
    }

    if (isValid) {
        userData = {
            name,
            schoolName,
            age,
            gender,
            email,
            avatar: avatar.id
        };

        console.log(userData);
    }
});

const images = document.querySelectorAll('img');

// Add event listener to each image
images.forEach((image) => {
    image.addEventListener('click', () => {
        // Remove checked class from all images
        images.forEach((img) => img.classList.remove('checked'));

        // Add checked class to the selected image
        image.classList.add('checked');
    });
});