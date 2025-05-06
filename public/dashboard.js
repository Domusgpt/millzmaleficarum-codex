/**
 * MillzMaleficarum Codex v0.1
 * Dashboard script for managing magazine content
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get form and attach submit event
  const uploadForm = document.getElementById('upload-form');
  uploadForm.addEventListener('submit', handleFormSubmit);
  
  // Load current magazine data
  loadCurrentData();
});

/**
 * Handles form submission for magazine data upload
 * @param {Event} event - The form submit event
 */
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const fileInput = document.getElementById('magazine-file');
  const statusMessage = document.getElementById('status-message');
  
  // Reset status message
  statusMessage.className = 'status-message';
  statusMessage.textContent = '';
  
  // Validate file
  if (!fileInput.files || fileInput.files.length === 0) {
    showStatusMessage('Please select a JSON file to upload.', 'error');
    return;
  }
  
  const file = fileInput.files[0];
  
  // Validate file type
  if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
    showStatusMessage('Only JSON files are allowed.', 'error');
    return;
  }
  
  // Validate file size (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    showStatusMessage('File size exceeds 2MB limit.', 'error');
    return;
  }
  
  // Validate JSON structure
  try {
    const fileContent = await readFileAsText(file);
    const jsonData = JSON.parse(fileContent);
    
    // Enhanced validation of required structure
    if (!jsonData.title) {
      showStatusMessage('Invalid JSON structure: Missing "title" field.', 'error');
      return;
    }
    
    if (!jsonData.sections) {
      showStatusMessage('Invalid JSON structure: Missing "sections" field.', 'error');
      return;
    }
    
    if (!Array.isArray(jsonData.sections)) {
      showStatusMessage('Invalid JSON structure: "sections" must be an array.', 'error');
      return;
    }
    
    // Validate each section has required fields
    for (let i = 0; i < jsonData.sections.length; i++) {
      const section = jsonData.sections[i];
      if (!section.title || !section.content) {
        showStatusMessage(`Invalid section at index ${i}: Each section must have "title" and "content" fields.`, 'error');
        return;
      }
    }
    
    console.log('JSON validation passed:', jsonData.title);
  } catch (error) {
    showStatusMessage('Invalid JSON format: ' + error.message, 'error');
    return;
  }
  
  // Submit form data
  const formData = new FormData(uploadForm);
  
  try {
    showStatusMessage('Uploading...', '');
    
    const response = await fetch('/api/upload-magazine-data', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (response.ok) {
      showStatusMessage(result.message || 'Magazine data updated successfully!', 'success');
      // Reload data display
      loadCurrentData();
      // Reset form
      uploadForm.reset();
    } else {
      showStatusMessage(result.error || 'Failed to update magazine data.', 'error');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    showStatusMessage('Error uploading file. Please try again later.', 'error');
  }
}

/**
 * Reads a file as text
 * @param {File} file - The file to read
 * @returns {Promise<string>} - The file content as text
 */
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = event => resolve(event.target.result);
    reader.onerror = error => reject(error);
    reader.readAsText(file);
  });
}

/**
 * Shows a status message to the user
 * @param {string} message - The message to display
 * @param {string} type - The message type ('success', 'error', or empty for neutral)
 */
function showStatusMessage(message, type) {
  const statusElement = document.getElementById('status-message');
  statusElement.textContent = message;
  statusElement.className = 'status-message';
  
  if (type) {
    statusElement.classList.add(`status-${type}`);
  }
}

/**
 * Loads and displays current magazine data
 */
async function loadCurrentData() {
  const dataDisplay = document.getElementById('current-data');
  
  try {
    const response = await fetch('/api/magazine-data');
    
    if (!response.ok) {
      throw new Error('Failed to fetch magazine data');
    }
    
    const data = await response.json();
    dataDisplay.textContent = JSON.stringify(data, null, 2);
    
    // Add syntax highlighting effect
    applyBasicSyntaxHighlighting(dataDisplay);
  } catch (error) {
    console.error('Error loading current data:', error);
    dataDisplay.textContent = 'Error loading current magazine data.';
  }
}

/**
 * Applies basic syntax highlighting to JSON display
 * @param {HTMLElement} element - The element containing JSON text
 */
function applyBasicSyntaxHighlighting(element) {
  let content = element.textContent;
  
  // Replace with HTML that includes spans for different JSON elements
  content = content
    .replace(/"([^"]+)":/g, '<span style="color: #ff9900;">"$1":</span>')  // keys
    .replace(/: "([^"]+)"/g, ': <span style="color: #00cc00;">"$1"</span>') // string values
    .replace(/: (\d+)/g, ': <span style="color: #cc00ff;">$1</span>')      // number values
    .replace(/: (true|false)/g, ': <span style="color: #0099cc;">$1</span>'); // boolean values
    
  element.innerHTML = content;
}