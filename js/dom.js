console.log(meteoStation);

//// Ecoute et remplissage de divHome ////
//// Ecoute le dom ////

//divHOME
let tempHome = document.getElementById('tempHome');
let tempTendanceHome = document.getElementById('tempTendanceHome');
let tempMaxHome = document.getElementById('tempMaxHome');
let tempMinHome = document.getElementById('tempMinHome');
let tempPressionHome = document.getElementById('tempPressionHome');
let tempPressionTendanceHome = document.getElementById('tempPressionTendanceHome');
let tempHumiditeHome = document.getElementById('tempHumiditeHome');
let tempBruitHome = document.getElementById('tempBruitHome');

//divCapteur
let tempCapteur = document.getElementById('tempCapteur');
let tempTendanceCapteur = document.getElementById('tempTendanceCapteur');
let tempMaxCapteur = document.getElementById('tempMaxCapteur');
let tempMinCapteur = document.getElementById('tempMinCapteur');
let tempHumiditeCapteur = document.getElementById('tempHumiditeCapteur');
let tempBatterieCapteur = document.getElementById('tempBatterieCapteur');

//divPluviometre
let pluieMaintenant = document.getElementById('pluieMaintenant');
let pluieCumulé = document.getElementById('pluieCumulé');
let pluiePrévu = document.getElementById('pluiePrévu');
let tempBatteriePluie = document.getElementById('tempBatteriePluie');

////remplissage du dom////

//divHOME
tempHome.innerHTML =`${meteoStation.dashboard_data.Temperature} °`;
tempTendanceHome.innerHTML= afficheTendance(meteoStation.dashboard_data.temp_trend);
tempMaxHome.innerHTML = `Max : ${meteoStation.dashboard_data.max_temp} °`;
tempMinHome.innerHTML = `Min : ${meteoStation.dashboard_data.min_temp} °`;
tempPressionHome.innerHTML = `Pression : ${meteoStation.dashboard_data.Pressure} mbar`;
tempPressionTendanceHome.innerHTML = afficheTendance(meteoStation.dashboard_data.pressure_trend);
tempHumiditeHome.innerHTML = `<span class="fas fa-tint"></span> : ${meteoStation.dashboard_data.Humidity} %`;
tempBruitHome.innerHTML = `<span class="fas fa-volume-up"></span> : ${meteoStation.dashboard_data.Noise} db`;

//divCapteur
tempCapteur.innerHTML = `${meteoStation.modules[0].dashboard_data.Temperature} °`;
tempTendanceCapteur.innerHTML = afficheTendance(meteoStation.modules[0].dashboard_data.temp_trend);
tempMaxCapteur.innerHTML = `Max : ${meteoStation.modules[0].dashboard_data.max_temp} °`;
tempMinCapteur.innerHTML = `Min : ${meteoStation.modules[0].dashboard_data.min_temp} °`;
tempHumiditeCapteur.innerHTML = `<span class="fas fa-tint"></span> : ${meteoStation.modules[0].dashboard_data.Humidity} %`;
tempBatterieCapteur.innerHTML = `<span class="fas fa-battery-three-quarters"></span> :  ${meteoStation.modules[0].battery_percent} %`;

//divPluviometre
pluieMaintenant.innerHTML = `Maintenant : ${meteoStation.modules[1].dashboard_data.sum_rain_1} mm/h`;
pluieCumulé.innerHTML = `Cumulé (24h) : ${meteoStation.modules[1].dashboard_data.sum_rain_24} mm/h`;
pluiePrévu.innerHTML = `Prévu : ${meteoStation.modules[1].dashboard_data.Rain} mm/h`;
tempBatteriePluie.innerHTML = `<span class="fas fa-battery-three-quarters"></span> : ${meteoStation.modules[1].battery_percent} %`;
