// Close button function
const leaveWebsite = document.querySelector(".close-button");



var win = window.open('/Employees/GetAttendenceDataBySelectedData/?attendDateString=' + $("#AttendDate").val() + ', "_blank');

window.top.close();