const projectContainer = document.querySelectorAll('.project');
let height = "";

projectContainer.forEach(project => {
    project.addEventListener('click', () => {
      if (project.children[1].children[3].children[0].children.length < 4) height = "180px";
      else if (project == projectContainer[1] && window.innerWidth < 600) height = "200px";
      else height = "200px";

      if (project.style.height == "") {
        project.style.height = height;
        project.children[1].children[3].style.display = "block";
        project.children[1].children[4].style.display = "block";
      } else if (project.style.height == height) {
        project.style.height = "80px";
        project.children[1].children[3].style.display = "none";
        project.children[1].children[4].style.display = "none";
      } else {
        project.style.height = height;
        project.children[1].children[3].style.display = "block";
        project.children[1].children[4].style.display = "block";
      }
    });
});