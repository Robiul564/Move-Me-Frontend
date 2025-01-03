// Function to handle option selection and page navigation
function selectOption(element, url) {
    // Remove 'selected' class from all table cells
    const allCells = document.querySelectorAll('.nav-bar td');
    allCells.forEach((cell) => cell.classList.remove('selected'));
  
    // Add 'selected' class to the clicked cell
    element.classList.add('selected');
  
    // Navigate to the desired URL
    window.location.href = url;
  }
  
  // Mock function for getting the Bus count by Owner from the database
  function getBusCountByOwner(busownerId) {
    // Replace this with an actual database call.
    // For now, we're assuming each busowner has 3 buses.
    return busownerId ? 3 : 0;
  }
  
  // Mock function to get the next Bus ID from the database
  function getNextBusId() {
    // Replace with an actual database call to fetch the next available Bus ID.
    return "BUS001"; // Example Bus ID
  }
  

  document.getElementById("payment-method").addEventListener("change", function () {
    const paymentMethod = this.value;
    const extraInput = document.getElementById("extra-input");

    // Clear previous inputs
    extraInput.innerHTML = "";

    if (paymentMethod === "mobile") {
        // Show dropdown for mobile banking providers and an input for the account number
        extraInput.innerHTML = `
            <select id="mobile-banking-provider">
                <option value="">Select Mobile Banking Provider</option>
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="roket">Rocket</option>
                <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Enter Mobile Banking Account Number" />
        `;
        extraInput.style.display = "block";
    } else if (paymentMethod === "bank") {
        // Show input for bank name and bank account number
        extraInput.innerHTML = `
            <input type="text" placeholder="Enter Bank Name" />
            <input type="text" placeholder="Enter Bank Account Number" />
        `;
        extraInput.style.display = "block";
    } else {
        // Hide extra input fields if no valid option is selected
        extraInput.style.display = "none";
    }
  });

  // Optional: Handle changes in the team name dropdown
  document.getElementById("team-name").addEventListener("change", function () {
    console.log(`Selected team: ${this.value}`);
  });
