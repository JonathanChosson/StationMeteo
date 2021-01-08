// Stokage du token dans le LocalStorage
let monToken = localStorage;
// Connexion à la première API pour obtenir un token
fetch("https://api.netatmo.com/oauth2/token", {
    method: "POST",
    headers: {
        "Host": "api.netatmo.com",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body : 'grant_type=password&client_id=5ff434554f173e6500415630&client_secret=aq8elMaTWxySVG8LPiqM3yk0azNDB39&username=catstrike@gmail.com&password=Dragone13'
})
    .then(response => response.json()) 
    .then(data => {
        monToken.setItem(0,JSON.stringify(data));
    })
    .catch(erreur => console.log('erreur : ' + erreur));

// Récupère la veleur du Token dans le LocalStorage
let tokenActuel = monToken[0] && JSON.parse(monToken[0]);

// Appel à l'API avec le token
let url = "https://api.netatmo.com/api/getstationsdata?device_id=70%3Aee%3A50%3A02%3A92%3A1e&get_favorites=false";
let bearer = 'Bearer ' + tokenActuel.access_token;
fetch(url, {
    method:'GET',
    headers:{
        'Authorization': bearer,
    }
})
    .then((reponse) => 
    reponse.json()
    .then((data) => {
        //stock dans le localStorage la météo actuelle
        monToken.setItem(1,JSON.stringify(data.body.devices[0]))
    })
    ).catch(erreur => console.log('erreur : ' + erreur));

let meteoStation = monToken[1] && JSON.parse(monToken[1]);

