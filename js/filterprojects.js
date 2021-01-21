(function() {
	document.addEventListener("DOMContentLoaded", function(){
		// Lista de opciones
		const elements = [...document.getElementsByClassName('projectop')];
		const projectContainers = [...document.getElementsByClassName('project')];

		const selectProject = (projectName) => {
			projectContainers.map((project) => {
				const projectClasses = [...project.classList];
				if (projectClasses.includes(projectName) && !projectClasses.includes('show')) {
					project.classList.remove('hide');
					project.classList.add('show');
				} else if (!projectClasses.includes(projectName) && projectClasses.includes('show')) {
					project.classList.remove('show');
					project.classList.add('hide');
				}
			})
		}

		// Seleccionar proyecto
		elements.forEach((el) => {
			el.addEventListener('click', (event) => {
				const clickedElement = event.target;
				const selectedProjectName = clickedElement.getAttribute('data-project');
				clickedElement.classList.add('selected');
				elements.filter(element => element.getAttribute('data-project') !== selectedProjectName).forEach(element => element.classList.remove('selected'));
				selectProject(selectedProjectName);
			});
		});
	});
})();