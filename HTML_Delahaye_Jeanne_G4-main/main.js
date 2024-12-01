
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
/* Pour chaque element de tab */
tabs.forEach(tab => {
    /* quand clique sur un onglet code s'execute */
    tab.addEventListener('click', function (event) {
        tab.classList.remove('tab-active')
        /*Tous les contenus (stockés dans contents) sont masqués en supprimant leur classe active*/
        contents.forEach(content => {
            content.classList.remove('active');
        });
        /* le tab sur lequel on clique reçoit la class active */
        this.classList.add('tab-active');
        /*si l'onglet cliquer correspond a tab-home alors le if se produit*/
        /* si c le cas il affiche le contenu y correspondant*/
        if (this.classList.contains('tab-home')) {
            const homeContent = document.querySelector('.content.home');
            homeContent.classList.add('active');
        }
        /*sinon c'est  le else if qui se met en place */
        /* si c le cas il affiche le contenu y correspondant*/
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
    //prenom//

    let name = document.getElementById('name');

    name.classList.remove('input-error', 'input-ok');
    /*on verif si le prenom contient bien 6 caractère ou +*/
    if (name.value.length < 6) {
        /*afficher du rouge pour montrer que le prenom n'est pas valide , avec en plus un block
        qui explique ou ets le probleme*/
        name.classList.add('input-error');
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "Le champ Prenom doit contenir au moins 6 caractères"
    } else {
        /*sinon si il n'y a pas de probleme le block est en vert*/
        name.classList.add('input-ok');
    }
    //password//
    let password = document.getElementById('password');
    /*crée un test pour qu'il y ai 1 , minuscule/majuscule/caractère spécial/chiffre*/

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

    //verif password//
    
    let password2 = document.getElementById('password2');
    password2.classList.remove('input-error', 'input-ok');
/*si le password écrit par utilisateur (value) est different de password2 (tjr la value) alors 
il y a un message d'erreur affiché , sinon  le block devient vert */
    if (password.value !== password2.value) {
        password2.classList.add('input-error');
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "veuillez ré-écrire votre mot de passe"
    }
    else {
        password2.classList.add('input-ok');
    }
  //email//
    let email = document.getElementById('email');
    email.classList.remove('input-error', 'input-ok');
  /*on vérifie juste que l'e-mail ai une force d-e-mail*/
    if (email.value == '') {
        email.classList.add('input-error');
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "Veuillez saisir un e-mail valide"
    }
    else {
        email.classList.add('input-ok')
    }
    /* on verifie aussi qu'il y ai un certain nombre de caractère dan l'e-mail écrit*/
    if(email.value.length < 10){
        email.classList.add('input-error');
        errorBlock.classList.add('error-block')
        errorBlock.innerText = "Le champ E-mail doit contenir au moins 10 caractères"
    } else {
       
        email.classList.add('input-ok');
    
    }

})



