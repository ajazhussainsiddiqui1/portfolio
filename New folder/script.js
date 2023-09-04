// Data for your portfolio projects
const portfolioData = [
    {
        title: "GreenRoute",
        description: "GreenRoute is a web application that optimizes travel routes based on carbon emissions. It's designed to help users make more eco-friendly transportation choices.",
        caseStudyLink: "#"
    },
    {
        title: "EcoClicker",
        description: "EcoClicker is a browser extension that encourages users to reduce their digital carbon footprint. It's a unique tool to raise awareness about the environmental impact of online activities.",
        caseStudyLink: "#"
    },
    // Add more project objects here
];

// Function to generate portfolio cards based on search text
function generatePortfolioCards(searchText = "") {
    const portfolioContainer = document.getElementById("portfolio-container");
    portfolioContainer.innerHTML = ""; // Clear existing cards

    portfolioData.forEach((project) => {
        if (
            project.title.toLowerCase().includes(searchText.toLowerCase()) ||
            project.description.toLowerCase().includes(searchText.toLowerCase())
        ) {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = project.title;

            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;

            const caseStudyLink = document.createElement("a");
            caseStudyLink.href = project.caseStudyLink;
            caseStudyLink.textContent = "View Case Study";
            caseStudyLink.classList.add("btn");

            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDescription);
            projectCard.appendChild(caseStudyLink);

            portfolioContainer.appendChild(projectCard);
        }
    });
}

// Function to handle search input changes
function handleSearch() {
    const searchInput = document.getElementById("search-input");
    const clearButton = document.getElementById("clear-button");

    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.trim();
        generatePortfolioCards(searchText);

        // Show/hide clear button based on search input
        if (searchText) {
            clearButton.style.display = "block";
        } else {
            clearButton.style.display = "none";
        }
    });

    // Clear search and show all projects
    clearButton.addEventListener("click", () => {
        searchInput.value = "";
        generatePortfolioCards();
        clearButton.style.display = "none";
    });
}

// Call the function to generate portfolio cards when the page loads
window.addEventListener("load", () => {
    generatePortfolioCards(); // Show all projects initially
    handleSearch();
});
