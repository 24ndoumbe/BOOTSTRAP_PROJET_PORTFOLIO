
//Activation des tooltips 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Script pour basculer l'affichage
function toggleDescription(projectNumber) {
    var shortDesc = document.getElementById('short-desc-' + projectNumber);
    var longDesc = document.getElementById('long-desc-' + projectNumber);
    var btn = document.getElementById('toggle-btn-' + projectNumber);

    if (longDesc.style.display === "none") {
        longDesc.style.display = "block";
        shortDesc.style.display = "none";
        btn.innerText = "Voir moins";
    } else {
        longDesc.style.display = "none";
        shortDesc.style.display = "block";
        btn.innerText = "Voir plus";
    }
}

//bouton de defilement
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}