document.addEventListener("DOMContentLoaded", function(){
  console.log('cargo dom');
  // Variable select
  const selectWorks = document.getElementById('select-works');
  const filterSelection = (selection) => {
    const elements = [...document.getElementsByClassName('music')];
    if (selection === 'all') {
      console.log(elements)
      elements.map((el) => {
        el.classList.remove('hide');
        if (![...el.classList].includes('show'))
        el.classList.add('show');
        return el;
      });
      return elements;
    } else {
      const filteredElements = elements.map((el) => {
        const elClasses = [...el.classList];
        if (elClasses.includes(selection) && !elClasses.includes('show')) {
          el.classList.remove('hide');
          el.classList.add('show');
        } else if (!elClasses.includes(selection)) {
          el.classList.remove('show');
          el.classList.add('hide');
        }
      });
      console.log(filteredElements)
      return filteredElements;
    }
  }

  filterSelection('all');
  selectWorks.addEventListener('change', (event) => {
    filterSelection(event.target.value);
    console.log(event.target.value);
  })
});

// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("col");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
