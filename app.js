$('#submitButton').on('click', function () {
    newRow = ("<tr>" + "<td>Name</td>" + "<td>role</td>" + "<td>Start Date</td>" + "<td>Months Worked</td>" + "<td>Monthly Rate</td>" + "<td>Total Billed</td>" + "</tr>");
    $('#currentEmployees').append(newRow);
});