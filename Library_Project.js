const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];

let genreInput = document.getElementById('library_genre_query');
let display = document.querySelector('.library_display_part');

// régler le problème de duplicata de réponses quand on saisie le même input
let response = "";
genreInput.addEventListener("input", (e) => {
books.forEach((el) => {
    if (el.genre === e.target.value) {
        display.innerHTML += `
        <div id="book_founded">
        <p>${el.title}</p>
        <p>${el.author}</p>
        <p>${el.year}</p>
        <p>${el.rating} ⭐</p>
        </div>
        `;
    }
    if ((e.target.value === "")) {
        display.innerHTML = "";
    }
}); 
});

