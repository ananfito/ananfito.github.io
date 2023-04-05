import { projectsArray } from "./data.js";

let numberOfProjects = 6
let slicedProjectsArray = []
const viewMoreBtn = document.getElementById('btn-view-more')

viewMoreBtn.addEventListener('click', function () {
    if (numberOfProjects >= projectsArray.length) {
        viewMoreBtn.style.display = "none"
        document.getElementById('more-examples').classList.toggle('hidden') 
    } else {
        numberOfProjects += 6
        getProjectsHtml(numberOfProjects)
        renderProjects()
    }
})

function getProjectsHtml (n) {
    slicedProjectsArray = projectsArray.slice(0, n)
    return slicedProjectsArray
}

function renderProjects() {
    let projectsHtml = ''

    slicedProjectsArray.forEach ( function (project) {
        projectsHtml += `
                <a class="project project-tile" id="${project.id}" href="${project.href}" target="_blank">
                    <img class="project-image" src="${project.img}" alt="${project.alt}">
                    <p class="project-title">${project.title}</p>
                </a>
        
        `
        document.getElementById('projects-grid').innerHTML = projectsHtml
    })
}

getProjectsHtml(numberOfProjects)
renderProjects()