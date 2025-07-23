const projectContainer = document.querySelectorAll('.project');
let open = false;

projectContainer.forEach(project => {
    project.addEventListener('click', () => {
      if (!open) {
        project.style.height = "240px";
        open = true;
      } else {
        project.style.height = "115px";
        open = false;
      }
    });
});