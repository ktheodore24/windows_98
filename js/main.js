// Close button function
const leaveWebsite = document.querySelector(".close-button");

leaveWebsite.addEventListener("click", closeTab);

function closeTab() {
    window.open('/Employees/GetAttendenceDataBySelectedData/?attendDateString=' + $("#AttendDate").val() + ', "_blank');
    
    window.top.close();
}