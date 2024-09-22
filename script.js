document.getElementById("exploreBtn").addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

// Sample project data
const projects = [
    { title: "Project 1", description: "Description of project 1." },
    { title: "Project 2", description: "Description of project 2." },
    { title: "Project 3", description: "Description of project 3." },
];

const projectList = document.getElementById("projectList");
projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectDiv);
});
