var config = {
    apiKey: "AIzaSyA571n6TcSLjPftXjBI9zGxCXRkCtVMpeM",
    authDomain: "googligansclassproject1.firebaseapp.com",
    databaseURL: "https://googligansclassproject1.firebaseio.com",
    storageBucket: "",
};

$('#submitButton').on('click', function () {
    event.preventDefault();
    employee = $("#employeeName").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyRate = $("#monthlyRate").val().trim();

    newRow = ("<tr>" +
        "<td>" + employee + "</td>" +
        "<td>" + role + "</td>" +
        "<td>" + startDate + "</td>" +
        "<td>" + "Months Worked" + "</td>" +
        "<td>" + monthlyRate + "</td>" +
        "<td>" + "Total Billed" + "</td>" +
        "</tr>");
    $('#currentEmployees').append(newRow);
});

// inputs from the form
