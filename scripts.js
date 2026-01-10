// Tableau des citations
const quotes = [
    {
        text: "La vie est ce qui arrive quand on est occupé à faire d'autres projets.",
        author: "John Lennon"
    },
    {
        text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
        author: "Winston Churchill"
    },
    {
        text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
        author: "Gandhi"
    },
    {
        text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
        author: "Steve Jobs"
    },
    {
        text: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
        author: "Nelson Mandela"
    },
    {
        text: "La simplicité est la sophistication suprême.",
        author: "Léonard de Vinci"
    },
    {
        text: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.",
        author: "Dalaï Lama"
    },
    {
        text: "La meilleure façon de prédire l'avenir est de le créer.",
        author: "Peter Drucker"
    }
];

// Éléments du DOM
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

// Fonction pour obtenir une citation aléatoire
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Fonction pour afficher une nouvelle citation avec animation
function displayNewQuote() {
    // Ajouter la classe de fondu
    quoteText.classList.remove('fade-in');
    quoteAuthor.classList.remove('fade-in');
    
    // Forcer le reflow pour relancer l'animation
    void quoteText.offsetWidth;
    
    // Obtenir et afficher une nouvelle citation
    const quote = getRandomQuote();
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
    
    // Réappliquer la classe d'animation
    quoteText.classList.add('fade-in');
    quoteAuthor.classList.add('fade-in');
}

// Événement pour le bouton "Nouvelle citation"
newQuoteBtn.addEventListener('click', displayNewQuote);

// Événement pour la touche Espace
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        displayNewQuote();
    }
});

// Afficher une première citation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    displayNewQuote();
    
    // Ajouter la classe d'animation après un court délai pour l'effet initial
    setTimeout(() => {
        quoteText.classList.add('fade-in');
        quoteAuthor.classList.add('fade-in');
    }, 100);
});