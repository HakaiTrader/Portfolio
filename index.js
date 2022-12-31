const buttonBloc = document.querySelectorAll('button p')
const arrowButton = document.querySelectorAll('button img')

buttonBloc.forEach(el => el.addEventListener('mouseover', animateArrow));
buttonBloc.forEach(el => el.addEventListener('mouseout', animateArrowRemove));

/////////
/// ANIMATION FLECHE DES BOUTONS ///
/////////
function animateArrow(e) {
    if (e.target == buttonBloc[2]) {
        arrowButton[2].style.display = 'block';
        setTimeout(() => {
            arrowButton[2].classList.add('animate-button')
        }, 10);
    } else if (e.target == buttonBloc[1]) {
        arrowButton[1].style.display = 'block';
        setTimeout(() => {
            arrowButton[1].classList.add('animate-button')
        }, 10);
    } else if (e.target == buttonBloc[0]) {
        arrowButton[0].style.display = 'block';
        setTimeout(() => {
            arrowButton[0].classList.add('animate-button')
        }, 10);
    }
}
function animateArrowRemove(e) {
    if (e.target === buttonBloc[2]) {
        arrowButton[2].style.display = 'none';
        setTimeout(() => {
            arrowButton[2].classList.remove('animate-button');
        }, 10);
    } else if (e.target === buttonBloc[1]) {
        arrowButton[1].style.display = 'none';
        setTimeout(() => {
            arrowButton[1].classList.remove('animate-button');
        }, 10);
    } else if (e.target === buttonBloc[0]) {
        arrowButton[0].style.display = 'none';
        setTimeout(() => {
            arrowButton[0].classList.remove('animate-button');
        }, 10);
    }
}
///////////
//// ANIMATION DES BLOCS APRES CLIQUE SUR BUTTON + APPARITION DES CONTENTS ////
///////////
const bloc = document.querySelectorAll('.bloc');
const contentBloc = [...document.querySelectorAll('.content, .projet, .projet-content')]
console.log(contentBloc);
const pageSound = document.querySelector('.page-sound')
const buttonVoir = document.querySelectorAll('.contacter')

buttonBloc.forEach(el => el.addEventListener('click', moveBloc));

function moveBloc(e) {
    if (e.target === buttonBloc[2]) {
        bloc[2].classList.add('animate-bloc');
        pageSounds()

        setTimeout(() => {
            bloc[2].style.display = 'none';
            bloc[1].style.display = 'flex';
            bloc[0].style.display = 'flex';
            bloc[1].classList.remove('animate-bloc')
            bloc[0].classList.remove('animate-bloc')
            contentBloc[2].style.display = 'flex'
            contentBloc[1].style.display = 'none';
            contentBloc[0].style.display = 'none';
        }, 990);
    } else if (e.target === buttonBloc[1]) {
        bloc[1].classList.add('animate-bloc')
        pageSounds()
        setTimeout(() => {
            bloc[1].style.display = 'none';
            bloc[2].style.display = 'flex';
            bloc[0].style.display = 'flex';
            bloc[2].classList.remove('animate-bloc')
            bloc[0].classList.remove('animate-bloc')
            contentBloc[1].style.display = 'flex';
            contentBloc[2].style.display = 'none';
            contentBloc[0].style.display = 'none';
            counterHtml = 0;
            counterCss = 0;
            counterJs = 0;
        }, 990);

    } else if (e.target === buttonBloc[0]) {
        bloc[0].classList.add('animate-bloc')
        pageSounds()
        setTimeout(() => {
            bloc[0].style.display = 'none';
            bloc[1].style.display = 'flex';
            bloc[2].style.display = 'flex';
            bloc[1].classList.remove('animate-bloc')
            bloc[2].classList.remove('animate-bloc')
            contentBloc[0].style.display = 'flex';
            contentBloc[1].style.display = 'none';
            contentBloc[2].style.display = 'none';
            counterHtml = 0;
            counterCss = 0;
            counterJs = 0;
        }, 990);
    }
}
function pageSounds() {
    let sound = new Audio();
    sound.src = "./sound/PAPRHndl-Pages-qu-on-tourne-9-(ID 2216)-LS.wav";
    sound.play();
    sound.volume = 0.03;
}

///////////
//// COMPTEUR % DES JAUGES ////
///////////

const numberHtml = document.querySelector('.number-html')

buttonBloc[1].addEventListener('click', jaugeHtml)

toggleCompetence = false;
let counterHtml = 0;
function jaugeHtml() {
    jaugeCss()
    setTimeout(() => {
        numberHtml.style.display = 'flex';
        let intervalJaugeHtml = setInterval(() => {
            counterHtml++;
            numberHtml.textContent = counterHtml
            if (counterHtml === 100) {
                clearInterval(intervalJaugeHtml)
            }
        }, 28);
    }, 500);
    return
}

const numberCss = document.querySelector('.number-css')

let counterCss = 0
function jaugeCss() {
    jaugeJs()
    setTimeout(() => {
        numberCss.style.display = 'flex';
        let intervalJaugeCss = setInterval(() => {
            counterCss++;
            numberCss.textContent = counterCss
            if (counterCss === 90) {
                clearInterval(intervalJaugeCss)
            }
        }, 30);
    }, 500);
    return
}

const numberJs = document.querySelector('.number-js')

let counterJs = 0
function jaugeJs() {

    setTimeout(() => {
        numberJs.style.display = 'flex';
        let intervalJaugeJs = setInterval(() => {
            counterJs++;
            numberJs.textContent = counterJs
            if (counterJs === 70) {
                clearInterval(intervalJaugeJs)
            }
        }, 40);
    }, 500);
    return
}
///////////
//// ANIMATIONS  ////
///////////
const imgProfil = document.querySelector('.img-profil')
const textProfil = [...document.querySelectorAll('.text-profil, .img-profil, .bloc')]

const observeProfil = new IntersectionObserver(handleObserver, { rootMargin: '0px' })

textProfil.forEach(el => observeProfil.observe(el));

function handleObserver(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animateProfil');
            observeProfil.unobserve(entry.target)
        }
    })
}