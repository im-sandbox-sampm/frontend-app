/**
 * Message display module with XSS vulnerabilities.
 * 
 * This file intentionally contains XSS vulnerabilities
 * for demonstration purposes in the GHAS Campaigns + Autofix video.
 * 
 * DO NOT use this code in production!
 */

/**
 * Vulnerable function - uses innerHTML with unsanitized user input
 */
function displayMessage(userInput) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = userInput;
}

/**
 * Another vulnerable function - DOM-based XSS
 */
function showNotification(message) {
    const notificationDiv = document.createElement('div');
    notificationDiv.innerHTML = message;
    document.body.appendChild(notificationDiv);
}

/**
 * Vulnerable comment display
 */
function renderComment(commentText, username) {
    const commentElement = document.getElementById('comments');
    commentElement.innerHTML += `
        <div class="comment">
            <strong>${username}</strong>: ${commentText}
        </div>
    `;
}

/**
 * Vulnerable search results display
 */
function displaySearchResults(query, results) {
    const searchContainer = document.getElementById('search-results');
    searchContainer.innerHTML = `<h2>Results for: ${query}</h2>`;
    
    results.forEach(result => {
        searchContainer.innerHTML += `<div class="result">${result.title}</div>`;
    });
}

/**
 * Vulnerable URL parameter handler
 */
function displayWelcomeMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
        document.getElementById('welcome').innerHTML = `Welcome, ${name}!`;
    }
}

export { displayMessage, showNotification, renderComment, displaySearchResults, displayWelcomeMessage };
