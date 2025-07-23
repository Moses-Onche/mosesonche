const projectContainer = document.querySelectorAll('.project');
let height = "";

projectContainer.forEach(project => {
    project.addEventListener('click', () => {
      if (project.children[1].children[3].children[0].children.length < 4) height = "230px";
      else height = "250px";

      if (project.style.height == "") {
        project.style.height = height;
      } else if (project.style.height == height) {
        project.style.height = "115px";
      } else {
        project.style.height = height;
      }
    });
});