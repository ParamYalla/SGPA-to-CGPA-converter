document
  .getElementById("converter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Get the values entered by the user
    const sgpa = parseFloat(document.getElementById("sgpa").value);
    const semesters = parseInt(document.getElementById("semesters").value); // Validate the input

    if (
      isNaN(sgpa) ||
      isNaN(semesters) ||
      sgpa < 0 ||
      sgpa > 10 ||
      semesters <= 0
    ) {
      alert("Please enter valid SGPA and number of semesters.");
      return;
    } // Calculate CGPA

    const cgpa = sgpa / semesters; // Display the result

    document.getElementById(
      "result"
    ).textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
  });
