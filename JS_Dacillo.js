// JavaScript to apply fade-in animation to home section
window.onload = function() {
    var homeSection = document.getElementById('home');
    homeSection.style.display = 'block';
    homeSection.style.opacity = 0;
  
    var fadeInEffect = setInterval(function() {
        if (homeSection.style.opacity < 1) {
            homeSection.style.opacity = parseFloat(homeSection.style.opacity) + 0.1;
        } else {
            clearInterval(fadeInEffect);
        }
    }, 100);
  };

  function searchCourses() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let courses = document.querySelectorAll("#course-list li");

    courses.forEach(course => {
        let courseText = course.textContent.toLowerCase();
        if (courseText.includes(input)) {
            course.style.display = "block"; // Show matching courses
        } else {
            course.style.display = "none"; // Hide non-matching courses
        }
    });
}
