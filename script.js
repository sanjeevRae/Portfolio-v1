document.querySelector('.toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const headings = document.querySelectorAll('.text h5, .text h6');

    headings.forEach(heading => {
        if (document.body.classList.contains('dark-mode')) {
            heading.style.backgroundColor = 'black';
            heading.style.color = 'white';

            heading.addEventListener('mouseover', handleMouseOver);
            heading.addEventListener('mouseout', handleMouseOut);
        } else {
            heading.style.backgroundColor = '';
            heading.style.color = '';

            heading.removeEventListener('mouseover', handleMouseOver);
            heading.removeEventListener('mouseout', handleMouseOut);
        }
    });
});

function handleMouseOver() {
    this.style.color = 'gold';
}

function handleMouseOut() {
    this.style.color = 'white';
}


var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");

function showModal(src) {
    modal.style.display = "flex";
    modalImg.src = src; 
}

function closeModal() {
    modal.style.display = "none"; 
}

var closeBtn = document.getElementsByClassName("close")[0]; 
closeBtn.addEventListener("click", closeModal);

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


