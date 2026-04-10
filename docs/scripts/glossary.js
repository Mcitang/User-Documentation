// function setupGlossary() {
//     console.log("DOM loaded");
//     if (!location.pathname.includes("glossary")) return;

//     // Assign tags
//     const rows = document.querySelectorAll("table tr");
    
//     rows.forEach(row => {
//         const firstCell = row.querySelector("td:first-child");
//         if (firstCell) {
//             // Get text, lowercase it, and replace spaces with dashes
//             const termText = firstCell.textContent.trim().toLowerCase();
            
//             console.log(`Creating tag for ${termText}`);
//             const termId = termText.toLowerCase().replace(/\s+/g, '-');
            
//             // Assign the ID to the table cell
//             firstCell.id = termId;
//         }
//     });
// }

// document.addEventListener("DOMContentLoaded", setupGlossary);