let interest = document.getElementById("interets");
let notion = document.getElementById("notions");
let innerInterest = document.querySelector(".interets_description_container");
let innerNotions = document.querySelector(".notions_description_container");

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

let visibility1 = false;
let visibility2 = false;

function toggleManager () {
    interest.addEventListener("click", () => {
        visibility1 = !visibility1;
        if (visibility1) {
            innerInterest.classList.add('is-visible1');
            console.log("interstOnTrue");
        } else {
            innerInterest.classList.remove('is-visible1');
        };
        if (visibility1 && visibility2) {
            innerInterest.classList.add('is-visible1');
            innerNotions.classList.remove('is-visible2');
            visibility2 = !visibility2;
        };
    })
    notion.addEventListener("click", () => {
        visibility2 = !visibility2;
        if (visibility2) {
            innerNotions.classList.add('is-visible2');
            console.log("notionOnTrue");
        } else {
            innerNotions.classList.remove('is-visible2');
        };
        if (visibility2 && visibility1) {
            innerNotions.classList.add('is-visible2');
            innerInterest.classList.remove('is-visible1');
            visibility1 = !visibility1;
        };


    })
}

toggleManager();
