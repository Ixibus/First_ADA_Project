let projectTitle = document.getElementById("project_title");
let projectDescription = document.getElementById("project_description");

let counterProjetSection = document.querySelector(".counter_project_container");
let libraryProjetSection = document.querySelector(".library_project_container");
let PFCProjetSection = document.querySelector(".PFC_project_container");

let counterLogo = document.getElementById("counter_project_logo");
let libraryLogo = document.getElementById("library_project_logo");
let PFCLogo = document.getElementById("PFC_project_logo");

// // méthode "toggle"
// interest.addEventListener("click", () => {
//     innerInterest.classList.toggle('is-visible');
// })

// // méthode avec un booléen
// let visibility = false;
// notion.addEventListener("click", () => {
//     visibility = !visibility;
//     if(visibility) {
//         innerNotions.classList.add('is-visible2');
//     } else {
//         innerNotions.classList.remove('is-visible2')
//     }
// })

let CounterVisibility = false;
let LibraryVisibility = false;
let PFCVisibility = false;

function toggleProjectsManager() {
  counterLogo.addEventListener("click", () => {
    CounterVisibility = !CounterVisibility;
    if (CounterVisibility) {
      counterProjetSection.classList.remove("is-Counter_Project_invisible");
      projectTitle.innerText = "Le Compteur de cliques";
      projectDescription.innerText =
        "Cliquez simplement sur plus pour incrémenter ou moins pour décrémentez";
      console.log("counterTrue");
    } else {
      counterProjetSection.classList.add("is-Counter_Project_invisible");
    }
    if (
      (CounterVisibility && PFCVisibility) ||
      (CounterVisibility && LibraryVisibility) ||
      (CounterVisibility && LibraryVisibility && PFCVisibility)
    ) {
      counterProjetSection.classList.remove("is-Counter_Project_invisible");
      projectTitle.innerText = "Le Compteur de cliques";
      projectDescription.innerText =
        "Cliquez simplement sur plus pour incrémenter ou moins pour décrémenter";
      libraryProjetSection.classList.add("is-Library_Project_invisible");
      PFCProjetSection.classList.add("is-PFC_Project_invisible");
      LibraryVisibility = !LibraryVisibility;
      PFCVisibility = !PFCVisibility;
    }
  });

  libraryLogo.addEventListener("click", () => {
    LibraryVisibility = !LibraryVisibility;
    if (LibraryVisibility) {
      libraryProjetSection.classList.remove("is-Library_Project_invisible");
      projectTitle.innerText = "La petite bibliothèque";
      projectDescription.innerText =
        'Entrez un genre littéraire entre "art" et "programming" pour voir si la bibliothèque a ces livres de ce genre en stock';
      console.log("libraryTrue");
    } else {
      libraryProjetSection.classList.add("is-Library_Project_invisible");
    }
    if (
      (LibraryVisibility && CounterVisibility) ||
      (LibraryVisibility && PFCVisibility) ||
      (LibraryVisibility && CounterVisibility && PFCVisibility)
    ) {
      libraryProjetSection.classList.remove("is-Library_Project_invisible");
      projectTitle.innerText = "La petite bibliothèque";
      projectDescription.innerText =
        'Entrez un genre littéraire entre "art" et "programming" pour voir si la bibliothèque a ces livres de ce genre en stock';
      counterProjetSection.classList.add("is-Counter_Project_invisible");
      PFCProjetSection.classList.add("is-PFC_Project_invisible");
      CounterVisibility = !CounterVisibility;
      PFCVisibility = !PFCVisibility;
    }
  });

  PFCLogo.addEventListener("click", () => {
    PFCVisibility = !PFCVisibility;
    if (PFCVisibility) {
      PFCProjetSection.classList.remove("is-PFC_Project_invisible");
      projectTitle.innerText = "Pierre Feuille Ciseaux";
      projectDescription.innerText = "Choisissez en bas parmis \"🪨\", \"🌿\" ou \"✂️\" en cliquant sur l'icone, et voyez si vous gagnez face au CPU";
      console.log("PFCTrue");
    } else {
      PFCProjetSection.classList.add("is-PFC_Project_invisible");
    }
    if (
      (PFCVisibility && CounterVisibility) ||
      (PFCVisibility && LibraryVisibility) ||
      (PFCVisibility && LibraryVisibility && CounterVisibility)
    ) {
      PFCProjetSection.classList.remove("is-PFC_Project_invisible");
      counterProjetSection.classList.add("is-Counter_Project_invisible");
      libraryProjetSection.classList.add("is-Library_Project_invisible");
      CounterVisibility = !CounterVisibility;
      LibraryVisibility = !LibraryVisibility;
    }
  });
}

toggleProjectsManager();
