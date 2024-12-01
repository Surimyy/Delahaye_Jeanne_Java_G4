
const button = document.getElementById('button');
const body = document.body
const bande = document.getElementById('bandes')
const footer = document.querySelector('.footer')
const header = document.querySelector('header')
const images = document.querySelectorAll('.image-index')
const couleurs = document.querySelectorAll('.color-white-grey')

button.addEventListener('click', function () {
    button.classList.toggle('bg-color-grey-dark')
    body.classList.toggle('light-mod')
    body.classList.toggle('color-white')
    bande.classList.toggle('bande')
    bande.classList.toggle('bande-light-mod')
    footer.classList.toggle('footer')
    footer.classList.toggle('footer-light')
    header.classList.toggle('header')
    header.classList.toggle('header-light')
    images.forEach(image => {
        image.classList.toggle('image-light-mod');
    });
    couleurs.forEach(couleur => {
        couleur.classList.toggle('color-white-grey')
        couleur.classList.toggle('color-grey')

    });
})

//


const tabs = document.querySelectorAll('.tab')

const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        tab.classList.remove('tab-active')

        contents.forEach(content => {
            content.classList.remove('active');
        });

        this.classList.add('tab-active');

        if (this.classList.contains('tab-home')) {
            const homeContent = document.querySelector('.content.home');
            homeContent.classList.add('active');
        }
        else if (this.classList.contains('tab-questionnaires')) {
            const questionnaireContent = document.querySelector('.content.questionnaires');
            questionnaireContent.classList.add('active');
        }

    })


})

//

let form = document.querySelector('#form1')
let errorBlock = document.querySelector('#error-block')

form.addEventListener('submit', function (formSubmit) {
    formSubmit.preventDefault()

    let name = document.getElementById('name');

    name.classList.remove('input-error', 'input-ok');

    if (name.value.length < 6) {
        name.classList.add('input-error');
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "Le champ Prenom doit contenir au moins 6 caractères"
    } else {
        name.classList.add('input-ok');
    }

    let password = document.getElementById('password');

    let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$");

    password.classList.remove('input-error', 'input-ok');

    if (password.value.length < 8 || passCheck.test(password.value) == false) {
        password.classList.add('input-error')
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "Le champ mot de passe doit contenir au moins 8 caractères et doit contenir minuscule , majuscule , chiffre , caractère spécial"
    }
    else {
        password.classList.add('input-ok')
    }
    console.log(password.value.length)

    let password2 = document.getElementById('password2');
    password2.classList.remove('input-error', 'input-ok');

    if (password.value !== password2.value) {
        password2.classList.add('input-error');
           errorBlock.classList.add('error-block')
        errorBlock.innerText = "veuillez ré-écrire votre mot de passe"
    }
    else {
        password2.classList.add('input-ok');
    }
    let email = document.getElementById('email');
    email.classList.remove('input-error', 'input-ok');

    if (email.value == '') {
        email.classList.add('input-error');
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "Veuillez saisir un e-mail valide"
    }
    else {
        email.classList.add('input-ok')
    }

})



