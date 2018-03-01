// initializing firebase
var config = {
    apiKey: "AIzaSyA571n6TcSLjPftXjBI9zGxCXRkCtVMpeM",
    authDomain: "googligansclassproject1.firebaseapp.com",
    databaseURL: "https://googligansclassproject1.firebaseio.com",
    storageBucket: "",
};

firebase.initializeApp(config);

var database = firebase.database();



// date calculator function




var employee = "";
var role =  "";
var startDate = "";
var monthlyRate =  "";

$('#submitButton').on('click', function () {
    // stopping the submit button from refreshing the page
    event.preventDefault();
    // inputs from the form
    employee = $("#employeeName").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    monthlyRate = $("#monthlyRate").val().trim();

    database.ref().push({
        employee: employee,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,

    });

    $("#employeeName").val("");
    $("#role").val("");
    $("#startDate").val("");
    $("#monthlyRate").val("");
});

// Retrieve new posts as they are added to our database
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    var newPost = childSnapshot.val();
    var employeeFB = newPost.employee;
    var roleFB = newPost.role;
    var startDateFB = newPost.startDate;
    var monthlyRateFB = newPost.monthlyRate;

    //  appending the date from the form into the row
    newRow = ("<tr>" +
    "<td>" + employeeFB + "</td>" +
    "<td>" + roleFB + "</td>" +
    "<td>" + startDateFB + "</td>" +
    "<td>" + "Months Worked" + "</td>" +
    "<td>" + monthlyRateFB + "</td>" +
    "<td>" + "Total Billed" + "</td>" +
    "</tr>");
$('#currentEmployees').append(newRow);
  });