// main.js
import { renderClubHistory, renderAchievement, renderPlayer } from './displayModule.js';

/**
 * Fetches club data from a specified JSON file.
 * @param {string} url - The URL or path to the JSON file.
 * @returns {Promise<Object>} A promise that resolves with the JSON data.
 */
async function fetchClubData(url) {
    try {
        const response = await fetch(url);
        // Check if the network response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching club data:", error);
        // Display an error message to the user
        const errorContainer = document.getElementById('error-message');
        if (errorContainer) {
            errorContainer.textContent = "Failed to load club insights. Please check your internet connection or try again later.";
            errorContainer.classList.remove('hidden'); // Show the error message
        }
        return null; // Return null to indicate failure
    }
}

/**
 * Populates the club history section of the page.
 * @param {Array<Object>} historyItems - An array of club history objects.
 */
function populateClubHistory(historyItems) {
    const containerId = 'club-history-container';
    historyItems.forEach(item => {
        renderClubHistory(item, containerId);
    });
}

/**
 * Populates the achievements section of the page.
 * @param {Array<Object>} achievements - An array of achievement objects.
 */
function populateAchievements(achievements) {
    const containerId = 'achievements-container';
    achievements.forEach(achievement => {
        renderAchievement(achievement, containerId);
    });
}

/**
 * Populates the player roster section of the page.
 * @param {Array<Object>} players - An array of player objects.
 */
function populatePlayerRoster(players) {
    const containerId = 'player-roster-container';
    players.forEach(player => {
        renderPlayer(player, containerId);
    });
}

// Entry point when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchClubData('./data.json');

    if (data) {
        // If data was successfully fetched, populate the sections
        populateClubHistory(data.clubHistory);
        populateAchievements(data.achievements);
        populatePlayerRoster(data.playerRoster);
    }
});