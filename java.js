// Code JavaScript pour ajouter des interactions

const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Produit ajouté au panier !");
    });
});
