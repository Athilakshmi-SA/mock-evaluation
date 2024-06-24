// scripts.js

// Function to add project dynamically
function addProject() {
    const projectsContainer = document.getElementById('projects-container');
    const projectEntry = document.createElement('div');
    projectEntry.classList.add('project-entry');
    projectEntry.innerHTML = `
        <label for="project-title">Project Title:</label>
        <input type="text" name="project-title" required>
        
        <label for="project-description">Description:</label>
        <input type="text" name="project-description" required>
        
        <button type="button" onclick="removeEntry(this)">Remove Project</button>
    `;
    projectsContainer.appendChild(projectEntry);
}

// Function to add experience dynamically
function addExperience() {
    const experiencesContainer = document.getElementById('experiences-container');
    const experienceEntry = document.createElement('div');
    experienceEntry.classList.add('experience-entry');
    experienceEntry.innerHTML = `
        <label for="experience-company">Company:</label>
        <input type="text" name="experience-company" required>
        
        <label for="experience-role">Role:</label>
        <input type="text" name="experience-role" required>
        
        <label for="experience-duration">Duration:</label>
        <input type="text" name="experience-duration" required>
        
        <button type="button" onclick="removeEntry(this)">Remove Experience</button>
    `;
    experiencesContainer.appendChild(experienceEntry);
}

// Function to remove dynamically added entry
function removeEntry(button) {
    button.parentElement.remove();
}



