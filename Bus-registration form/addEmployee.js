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
  
  // Function to handle the registration of a bus (This is a mock function)
  function registerBus(busId, registrationNumber, seats, deviceId, fitnessExpiry, insuranceExpiry) {
    console.log("Bus Registered: ", {
      busId,
      registrationNumber,
      seats,
      deviceId,
      fitnessExpiry,
      insuranceExpiry,
    });
  
    // You would call your backend to actually store the bus details
  }
  
  // Event listener for when the Busowner ID changes
  document.getElementById("busowner-id").addEventListener("change", function() {
    const busownerId = this.value;
  
    // Query to get the number of buses for this busowner (mock data)
    const busCount = getBusCountByOwner(busownerId);
  
    // If Busowner has buses, display bus info and 'Add Bus' button
    if (busCount > 0) {
      document.getElementById("bus-owner-info").style.display = "block";
      document.getElementById("bus-count").textContent = busCount;
      document.getElementById("add-bus-btn").style.display = "inline-block";
    } else {
      document.getElementById("bus-owner-info").style.display = "none";
      document.getElementById("add-bus-btn").style.display = "none";
    }
  });
  
  // Event listener to display the extended form to add a new bus
  document.getElementById("add-bus-btn").addEventListener("click", function() {
    // Show the extended form
    document.getElementById("bus-info").style.display = "block";
  
    // Fetch the next available Bus ID from the database (mock data)
    const nextBusId = getNextBusId();
    document.getElementById("bus-id").value = nextBusId;
  });
  
  // Event listener to handle the registration of a bus
  document.getElementById("register-bus-btn").addEventListener("click", function(e) {
    e.preventDefault();
  
    // Collect the form values
    const busId = document.getElementById("bus-id").value;
    const registrationNumber = document.getElementById("registration-number").value;
    const seats = document.getElementById("seats").value;
    const deviceId = document.getElementById("device-id").value;
    const fitnessExpiry = document.getElementById("fitness-expiry").value;
    const insuranceExpiry = document.getElementById("insurance-expiry").value;
  
    // Register the bus by calling the registerBus function
    registerBus(busId, registrationNumber, seats, deviceId, fitnessExpiry, insuranceExpiry);
  });
  