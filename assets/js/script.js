
//Create HTML DOM vars
const showcaseForm = document.querySelector('#showcase-form');
const bsModal = new bootstrap.Modal(document.getElementById('bsmodal'), { backdrop: 'static' });

//Showcase listener on item figures and labels
showcaseForm.addEventListener("click", function (event) {
    let showCaseId;
    event.preventDefault();
    showCaseId = event.path[1].id;
    openModal(parseInt(showCaseId.substr(showCaseId.length - 1)));
});

//Open modal popup and customise based on project
function openModal(showCase) {
    let showCaseTitle = "";
    let showCaseBody = "";
    let showCaseLink = "";

    //Use switch to select showcase
    switch (showCase) {
        case 1:
            showCaseTitle = "Datashore Solutions";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP";
            showCaseLink = "https://www.datashore.com.au";
            break;
        case 2:
            showCaseTitle = "The Papermill 414";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP. Website no longer active as client no longer trading.";
            showCaseLink = "";
            break;
        case 3:
            showCaseTitle = "JS Quizmaster";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP";
            showCaseLink = "https://robertpdavis.github.io/js-quizmaster/";
            break;
        case 4:
            showCaseTitle = "Weather Dashboard";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP";
            showCaseLink = "https://robertpdavis.github.io/weather-pro/";
            break;
        case 5:
            showCaseTitle = "Future Project";
            showCaseBody = "Stay tuned for an exciting new project coming soon!";
            showCaseLink = "";
            break;
        default:
            return;
    }

    //Update modal DOM to dispay required text
    bsModal._dialog.children[0].children[0].children[0].textContent = "Project: " + showCaseTitle;
    if (showCaseLink != "") {
        bsModal._dialog.children[0].children[1].innerHTML = "<p>" + showCaseBody + '</p><p>Click on the link below to go to the website.</p><a href="' + showCaseLink + '" target="_blank" >Go to Website</a>';
    } else {
        bsModal._dialog.children[0].children[1].innerHTML = "<p>" + showCaseBody + "</p>";
    }
    //Show modal popup to user
    bsModal.show();
}