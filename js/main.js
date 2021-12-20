// Close button function
const leaveWebsite = document.querySelector(".close-button");
const win = 

leaveWebsite.addEventListener("click", closeTab);

function closeTab() {
    window.open(url, '_blank').focus();
}