// ===============================
// H's Football Jerseys Script
// ===============================

// Live Search
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Category Filter
function filterProducts(category) {

    cards.forEach(card => {

        if (category === "all") {
            card.style.display = "block";
            return;
        }

        if (card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// WhatsApp Order Button
document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const jersey =
            this.closest(".card").querySelector("h3").innerText;

        // Replace with your WhatsApp number
        const phone = "923308480097";

        const message =
`Hello H's Football Jerseys!

I would like to order:

${jersey}

Please send me the details.`;

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});

// Smooth Fade Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card").forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

.hidden{
    opacity:0;
    transform:translateY(30px);
    transition:0.6s;
}

.show{
    opacity:1;
    transform:translateY(0);
}
