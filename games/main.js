var active;

function removeClassFromElements(elementType, className) { 
    const elements = document.querySelectorAll(elementType); 
    elements.forEach(element => { 
        element.classList.remove(className); 
    }); 
}

function all() {
    const cards = document.querySelectorAll('div.card');
    cards.forEach(card => {
        if (!card.classList.contains(active)) {
            card.style.display = 'block';
        }
    });
}

function filter() {
    if(active=="All") {
        all();
    } else {
         // Select all divs with the class "card"
    const cards = document.querySelectorAll('div.card');

    // Loop through the NodeList
    cards.forEach(card => {
        // Check if the card has the class specified in "active"
        if (card.classList.contains(active)) {
            // Show the card by setting its display style to "block"
            card.style.display = 'block';
        } else {
            // Hide the card by setting its display style to "none"
            card.style.display = 'none';
        }
    });
    }
}

function tab(category) {
    removeClassFromElements('button', 'active'); 
    document.getElementById(category).className += " active";
    active = category;
    filter();
}

