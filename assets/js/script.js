
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
    let gitHubRepo = "";

    //Use switch to select showcase
    switch (showCase) {
        case 1:
            showCaseTitle = "Datashore Solutions";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP with client login area.";
            showCaseLink = "https://www.datashore.com.au";
            gitHubRepo = "";
            break;
        case 2:
            showCaseTitle = "The Papermill 414";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP. Website no longer active as client no longer trading.";
            showCaseLink = "";
            gitHubRepo = "";
            break;
        case 3:
            showCaseTitle = "JS Quizmaster";
            showCaseBody = "Interactive game utlising HTML, CSS, JS and HTML DOM manipulation.";
            showCaseLink = "https://robertpdavis.github.io/js-quizmaster/";
            gitHubRepo = "https://github.com/robertpdavis/js-quizmaster";
            break;
        case 4:
            showCaseTitle = "Weather Dashboard";
            showCaseBody = "Business customer utlising the Joomlas CMS and modifications on HTML, CMS, JS, PHP";
            showCaseLink = "https://robertpdavis.github.io/weather-pro/";
            gitHubRepo = "https://github.com/robertpdavis/weather-pro";
            break;
        case 5:
            showCaseTitle = "Future Project";
            showCaseBody = "Stay tuned for an exciting new project coming soon!";
            showCaseLink = "";
            gitHubRepo = "";
            break;
        default:
            return;
    }

    //Update modal DOM to dispay required text
    bsModal._dialog.children[0].children[0].children[0].innerHTML = 'Project: <span class="title-desc">' + showCaseTitle + "</span>";
    if (showCaseLink != "") {
        bsModal._dialog.children[0].children[1].innerHTML = "<p>" + showCaseBody + '</p><p>Click on the link below to go to the website.</p><a href="' + showCaseLink + '" target="_blank" >Go to Website</a>';
    } else {
        bsModal._dialog.children[0].children[1].innerHTML = "<p>" + showCaseBody + "</p>";
    }
    //Github link display
    if (gitHubRepo != "") {
        bsModal._dialog.children[0].children[2].children[0].innerHTML = '<a href="' + gitHubRepo + '" target="_blank">Github</a>';
    } else {
        bsModal._dialog.children[0].children[2].children[0].innerHTML = "";
    }

    //Show modal popup to user
    bsModal.show();
}