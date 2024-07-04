document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(function(slider) {
        const valueDisplay = slider.nextElementSibling;
        updateValuePosition(slider, valueDisplay);
        
        slider.addEventListener('input', function() {
            updateValuePosition(slider, valueDisplay);
        });
    });
    
    function updateValuePosition(slider, valueDisplay) {
        const value = slider.value;
        const percentage = value + '%';
        valueDisplay.textContent = percentage;
        const sliderWidth = slider.offsetWidth;
        const valueDisplayWidth = valueDisplay.offsetWidth;
        const offset = (value / slider.max) * (sliderWidth - valueDisplayWidth);
        valueDisplay.style.left = offset + 'px';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            const details = project.querySelector('.project-details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });
    });
});


