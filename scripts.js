// Éléments du DOM
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

// Tableau pour stocker les citations
let citations = [];

// Charger les citations depuis le fichier JSON
async function loadCitations() {
    try {
        const response = await fetch('1000_citations.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des citations');
        }
        citations = await response.json();
        // Afficher une citation aléatoire au chargement
        afficherCitationAleatoire();
    } catch (error) {
        console.error('Erreur:', error);
        quoteText.textContent = 'Impossible de charger les citations. Veuillez réessayer plus tard.';
    }
}

// Afficher une citation aléatoire
function afficherCitationAleatoire() {
    if (citations.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * citations.length);
    const citation = citations[randomIndex];
    
    quoteText.textContent = citation.citation;
    quoteAuthor.textContent = citation.auteur;
}

// Événement du bouton
newQuoteBtn.addEventListener('click', afficherCitationAleatoire);

// Charger les citations au démarrage
loadCitations();