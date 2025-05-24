const apiBaseUrl = 'use your api endpoint here'; // Ensure this is your correct deployed API URL with stage

// Helper to send JSON or FormData
async function sendForm(endpoint, method, data, isFile = false) {
  try {
    const options = {
      method,
      headers: isFile ? {} : { 'Content-Type': 'application/json' },
      body: isFile ? data : JSON.stringify(data)  // Ensure data is in JSON format
    };

    const response = await fetch(`${apiBaseUrl}/${endpoint}`, options);

    // Handle error response
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${response.status} - ${errorText}`);
    }

    const json = await response.json();
    console.log(json);
    alert("✅ Success: " + JSON.stringify(json));
  } catch (err) {
    console.error("❌ Error:", err);
    alert("❌ Error: " + err.message);
  }
}

// Form Handlers
document.getElementById('addEmployeeForm').onsubmit = e => {
  e.preventDefault();
  // Ensure the form data is correctly formatted to match API's expected structure
  const data = {
    employeeID: e.target.employeeID.value,  // Adjust field names based on your form
    name: e.target.name.value,
    email: e.target.email.value,
    department: e.target.department.value,
    joinDate: e.target.joinDate.value  // Ensure the field name matches exactly
  };

  // Send formatted data in JSON to the API
  sendForm('AddEmployeeFunction', 'POST', data); // Ensure the correct route is used here
};

document.getElementById('leaveForm').onsubmit = e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  sendForm('AddLeaveRequestFunction', 'POST', data);
};

document.getElementById('payrollForm').onsubmit = e => {
    e.preventDefault();
  
    const data = {
      employeeID: e.target.employeeID.value,
      basicPay: parseFloat(e.target.basicPay.value),
      allowance: parseFloat(e.target.allowance.value),
      deductions: parseFloat(e.target.deductions.value)
    };
  
    sendForm('ProcessPayrollFunction', 'POST', data);
  };
  

document.getElementById('performanceForm').onsubmit = e => {
    e.preventDefault();
  
    const data = {
      employeeID: e.target.employeeID.value,
      comments: e.target.comments.value,
      score: parseInt(e.target.score.value)  // Ensure score is a number
    };
  
    sendForm('SubmitPerformanceReviewFunction', 'POST', data);
  };

document.getElementById('attendanceForm').onsubmit = e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  sendForm('MarkAttendanceFunction', 'POST', data);
};

document.getElementById('uploadForm').onsubmit = async e => {
    e.preventDefault();
  
    const form = e.target;
    const employeeID = form.employeeID.value;
    const fileInput = form.file.files[0];
  
    if (!fileInput) {
      alert("❌ Please select a file.");
      return;
    }
  
    const fileName = fileInput.name;
  
    // Convert file to base64
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1]; // Strip the "data:*/*;base64," prefix
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
    });
  
    try {
      const fileContent = await toBase64(fileInput);
  
      const data = {
        employeeID,
        fileName,
        fileContent
      };
  
      sendForm('UploadDocumentFunction', 'POST', data);
    } catch (error) {
      console.error("❌ Base64 conversion failed:", error);
      alert("❌ Failed to read file.");
    }
  };
  
