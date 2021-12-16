// Close button function
const leaveWebsite = document.querySelector(".close-button");
const win = window.open('/Employees/GetAttendenceDataBySelectedData/?attendDateString=' + $("#AttendDate").val() + ', "_blank');

window.top.close();