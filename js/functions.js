//Fonction pour afficher la fheche de tendance
let afficheTendance = (tendanceEnvoi) => {
    let textTendance ="";
    if (tendanceEnvoi == 'up'){
        textTendance = `<span class="fas fa-arrow-up"></span>`;
    }else if (tendanceEnvoi == 'stable'){
        textTendance = `<span class="fas fa-arrow-right"></span>`;
    }else if (tendanceEnvoi =="down"){
        textTendance = `<span class="fas fa-arrow-down"></span>`;
    }
    return textTendance;
}

//fonction changer couleur fond 
let main = document.getElementById('main');
let heure = new Date();
let heureActuelle = heure.getHours();
if (heureActuelle >= 9 && heureActuelle < 20){
    main.classList.add("jour");
}else{
    main.classList.add("nuit");
}

