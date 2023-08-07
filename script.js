let flags = [
    ["AD","Andorre"],
    ["AE","Émirats Arabes Unis"],
    ["AF","Afghanistan"],
    ["AG","Antigue et barbude"],
    ["AI","Anguilla"],
    ["AK","Abkhazie"],
    ["AL","Albanie"],
    ["AM","Armenie"],
    ["AN","Antilles néerlandaises"],
    ["AO","Angola"],
    ["AQ","Antarctique"],
    ["AR","Argentine"],
    ["AS","Samoa Americaines"],
    ["AT","Autriche"],
    ["AU","Australie"],
    ["AW","Aruba"],
    ["AX","Åland"],
    ["AZ","Azerbaijan"],
    ["BA","Bosnie-Herzégovine"],
    ["BB","Barbade"],
    ["BD","Bangladesh"],
    ["BE","Belgique"],
    ["BF","Burkina Faso"],
    ["BG","Bulgarie"],
    ["BH","Bahreïn"],
    ["BJ","Bénin"],
    ["BM","Bermudes"],
    ["BN","Brunei"],
    ["BO","Bolivie"],
    ["BR","Brésil"],
    ["BS","Bahamas"],
    ["BT","Bhoutan"],
    ["BW","Botswana"],
    ["BY","Biélorussie"],
    ["CA","Canada"],
    ["CC","Iles cocos"],
    ["CD","République démocratique du Congo"],
    ["CF","République centreAfricaine"],
    ["CH","Suisse"],
    ["CI","Côte d'Ivoire"],
    ["CK","Iles Cook"],
    ["CL","Chili"],
    ["CM","Cameroun"],
    ["CN","Chine"],
    ["CO","Colombie"],
    ["CR","Costa Rica"],
    ["CU","Cuba"],
    ["CV","Cap Vert"],
    ["CW","Curaçao"],
    ["CX","Iles Chrismas"],
    ["CY","Chypre"],
    ["CZ","République Tchèque"],
    ["DE","Allemagne"],
    ["DJ","Djibouti"],
    ["DK","Danemark"],
    ["DM","Dominique"],
    ["DO","République Dominicaine"],
    ["DZ","Algérie"],
    ["EC","Équateur"],
    ["EE","Estonie"],
    ["EG","Égypte"],
    ["EH","République arabe sahraouie démocratique"],
    ["ER","Érythrée"],
    ["ES","Espagne"],
    ["ET","Éthiopie"],
    ["FI","Finlande"],
    ["FJ","Fidji"],
    ["FK","Iles Malouines"],
    ["FM","États fédérés de Micronésie"],
    ["FO","Iles Féroé"],
    ["FR","France"],
    ["GA","Gabon"],
    ["GB","Grande Bretagne"],
    ["GD","Grenade"],
    ["GE","Géorgie"],
    ["GG","Guernesey"],
    ["GH","Ghana"],
    ["GI","Gibraltar"],
    ["GR","Groenland"],
    ["GM","Gambie"],
    ["GN","Guinée"],
    ["GQ","Guinée équatoriale"],
    ["GR","Grèce"],
    ["GS","Géorgie du Sud-et-les Îles Sandwich du Sud"],
    ["GT","Guatemala"],
    ["GU","Guam"],
    ["GW","Guinée-Bissau"],
    ["GY","Guyana"],
    ["HK","Hong Kong"],
    ["HN","Honuras"],
    ["HR","Croatie"],
    ["HT","Haiti"],
    ["HU","Hongrie"],
    ["ID","Indonésie"],
    ["IE","Irelande"],
    ["IL","Israël"],
    ["IM","Ile de Man"],
    ["IN","Indes"],
    ["IQ","Iraq"],
    ["IR","Iran"],
    ["IS","Islande"],
    ["IT","Italie"],
    ["JE","Jersey"],
    ["JM","Jamaïque"],
    ["JO","Jordanie"],
    ["JP","Japon"],
    ["KE","Kenya"],
    ["KG","Kirghizistan"],
    ["KH","Cambodge"],
    ["KI","Kiribati"],
    ["KM","Comores"],
    ["KN","Saint-Christophe-et-Niévès"],
    ["KP","Corée du nord"],
    ["KR","Corée du sud"],
    ["KW","Koweït"],
    ["KY","Iles caïmans"],
    ["KZ","Kazakhstan"],
    ["LA","Laos"],
    ["LB","Liban"],
    ["LC","Sainte-Lucie"],
    ["LI","Liechtenstei"],
    ["LK","Sri Lanka"],
    ["LR","Libéria"],
    ["LS","Lesotho"],
    ["LT","Lituanie"],
    ["LU","Luxembourg"],
    ["LV","Lettonie"],
    ["LY","Libye"],
    ["MA","Maroc"],
    ["MC","Monaco"],
    ["MD","Moldavie"],
    ["ME","Montenegro"],
    ["MF","Saint Martin"],
    ["MG","Madagascar"],
    ["MH","Îles Marshall"],
    ["MK","Macédoine du Nord"],
    ["ML","Mali"],
    ["MM","Birmanie"],
    ["MN","Mongolie"],
    ["MO","Macao"],
    ["MP","Îles Mariannes du Nord"],
    ["MQ","Martinique"],
    ["MR","Mauritanie"],
    ["MS","Montserrat"],
    ["MT","Malte"],
    ["MU","Maurice"],
    ["MV","Maldives"],
    ["MW","Malawi"],
    ["MX","Mexique"],
    ["MY","Malaisie"],
    ["MZ","Mozambique"],
    ["NA","Namibie"],
    ["NC","Nouvelle Calédonie"],
    ["NE","Niger"],
    ["NF","île Norfolk"],
    ["NU","Niue"],
    ["NZ","Nouvelle Zélande"],
    ["OM","Oman"],
    ["PA","Panama"],
    ["PE","Péru"],
    ["PF","Polynésie Françaises"],
    ["PG","Papouasie Nouvelle Guinée"],
    ["PH","Philippines"],
    ["PK","Pakistan"],
    ["PL","Pologne"],
    ["PN","îles Pitcairn"],
    ["PR","Puerto Rico"],
    ["PS","Palestine"],
    ["PT","Portugal"],
    ["PW","Palaos"],
    ["PY","Paraguay"],
    ["QA","Qatar"],
    ["RE","Réunion"],
    ["RO","Roumanie"],
    ["RS","Serbie"],
    ["RU","Russie"],
    ["RW","Rwanda"],
    ["SA","Arabie Saouite"],
    ["SB","Îles Salomon"],
    ["SC","Seychelles"],
    ["S","Soudan"],
    ["SE","Suède"],
    ["SG","Singapour"],
    ["SH","Sainte-Hélène"],
    ["SI","Slovanie"],
    ["SK","Slovakie"],
    ["SL","Sierra Leone"],
    ["SM","Saint-Marin"],
    ["SN","Sénégal"],
    ["SO","Somalie"],
    ["SR","Suriname"],
    ["SS","Soudan du Sud"],
    ["ST","Sao Tomé-et-Principe"],
    ["SV","Salvador"],
    ["SY","Syrie"],
    ["SZ","Eswatini"],
    ["TC","Îles Turques-et-Caïques"],
    ["TD","Tchad"],
    ["TF","Terres australes et antarctiques françaises"],
    ["TG","Togo"],
    ["TH","Thaïlande"],
    ["TJ","Tadjikistan"],
    ["TK","Tokelau"],
    ["TL","Timor oriental"],
    ["TM","Turkménistan"],
    ["TN","Tunisie"],
    ["TO","Tonga"],
    ["TR","Turquie"],
    ["TT","Trinité-et-Tobago"],
    ["TV","Tuvalu"],
    ["TW","Taïwan"],
    ["TZ","Tanzanie"],
    ["UA","Ukraine"],
    ["UG","Uganda"],
    ["US","États Unis"],
    ["UY","Uruguay"],
    ["UZ","Uzbekistan"],
    ["VA","Vatican"],
    ["VC","Saint-Vincent-et-les-Grenadines"],
    ["VE","Venezuela"],
    ["VG","Iles Vierges britanniques"],
    ["VI","Îles Vierges des États-Unis"],
    ["VN","Vietnam"],
    ["VU","Vanuatu"],
    ["WF","Wallis-et-Futuna"],
    ["WS","Samoa"],
    ["YE","Yémen"],
    ["YT","Mayotte"],
    ["ZA","Afrique du sud"],
    ["ZM","Zambie"],
    ["ZW","Zimbabwe"],
   
]
let goodAnswer;
let goodAnswerIndex;
let nombreEssai = 0;
let bonneReponses = 0;
let pourcentageBonnesReponses = 0;
const flagContainer = document.querySelector(".flag");
const choicesContainer = document.querySelector(".choices");
const msg = document.createElement("p");
const span = document.querySelector(".pourcentage");
span.textContent = pourcentageBonnesReponses + "%"
let flag;
let gameOver = false;
generateGame();

function generateGame(){
//on génère aléatoirement le drapeau et la bonne réponse
 goodAnswerIndex = Math.floor(Math.random()*flags.length);
 goodAnswer = flags[goodAnswerIndex];


//création de la liste des réponses
let choices = [goodAnswer];

// on génère 3 autres réponses aléatoire distinctes

while(choices.length < 4){
    let randomIndex = Math.floor(Math.random()*flags.length);
    let randomResponse = flags[randomIndex];

    if(!choices.includes(randomResponse)){
        choices.push(randomResponse);
    }
}
// on mélange la liste de réponses (fisher yates shuffle)
copy = [];
function shuffle(array) {
    let n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }

shuffle(choices);
//on affiche le drapeau 

 flag = document.createElement("img");
flag.src = `https://flagsapi.com/${flags[goodAnswerIndex][0]}/flat/64.png`;
flagContainer.appendChild(flag);

for(element of copy){
    const btn = document.createElement("button");
    btn.textContent = element[1];
    choicesContainer.appendChild(btn);

}

const allResponses = document.querySelectorAll("button");

allResponses.forEach((button) => {
    button.addEventListener("click", checkResponse);
})
}
function checkResponse(e){
    e.preventDefault();
    if (gameOver) {
        return;
    }
    nombreEssai++;
    document.body.appendChild(msg);
    if(e.target.textContent === goodAnswer[1]){
        msg.textContent = "Bravo, c'était bien " + goodAnswer[1] + " !";
        msg.style.color = "green";
        bonneReponses++;

    } else {
        msg.textContent = "Raté, c'était " + goodAnswer[1] + " !";
        msg.style.color = "red";

    }
    
    majPourcentage();
    gameOver = true;
    setTimeout(() => {
        askAnotherGame();
    }, 100);
    
}



function majPourcentage(){
    pourcentageBonnesReponses = (bonneReponses/nombreEssai*100).toFixed(2);
    span.textContent=pourcentageBonnesReponses + "%";

}

let replayButton = document.createElement("button");
function askAnotherGame() {
    
    replayButton.textContent = "Rejouer";
    choicesContainer.appendChild(replayButton);
    

    replayButton.addEventListener("click", restartGame);

    
}

function restartGame() {
    flagContainer.removeChild(flag);
    choicesContainer.innerHTML = "";
    msg.textContent = "";
    gameOver = false;
    replayButton.removeEventListener("click", restartGame); // Supprimer l'écouteur d'événement
    
    generateGame();
}