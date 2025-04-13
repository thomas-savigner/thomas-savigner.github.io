// script.js

// Fonction pour récupérer les dépôts publics via l'API GitHub
async function fetchGitHubRepos() {
    const username = "thomas-savigner"; // Remplacez par votre nom d'utilisateur GitHub
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const repos = await response.json();
        displayRepos(repos);
    } catch (error) {
        console.error("Erreur lors de la récupération des dépôts :", error);
    }
}

// Fonction pour afficher les dépôts sous forme de cartes
function displayRepos(repos) {
    const container = document.getElementById("projects-container");

    repos.forEach(repo => {
        // Crée une carte pour chaque dépôt
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description || "Aucune description disponible."}</p>
            <a href="${repo.html_url}" target="_blank">Voir le projet</a>
        `;

        container.appendChild(card);
    });
}

// Appeler la fonction pour récupérer et afficher les dépôts
fetchGitHubRepos();