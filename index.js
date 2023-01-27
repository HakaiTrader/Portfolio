const content = [...document.querySelectorAll('.contenu')];
const onglet = [...document.querySelectorAll('.click')];

onglet.forEach(el => el.addEventListener('click', visibleContent))


function visibleContent(e){

    if (e.target === onglet[0]) {
        content[0].style.display = "flex";
        content[1].style.display = "none";
        content[2].style.display = "none";
        content[3].style.display = "none";
    } else if (e.target === onglet[1]){
        content[1].style.display = "flex";
        content[2].style.display = "none";
        content[3].style.display = "none";
        content[0].style.display = "none";
    } else if (e.target === onglet[2]){
        content[1].style.display = "none";
        content[2].style.display = "flex";
        content[3].style.display = "none";
        content[0].style.display = "none";
    } else if (e.target === onglet[3]){
        content[1].style.display = "none";
        content[2].style.display = "none";
        content[3].style.display = "flex";
        content[0].style.display = "none";
    }
}