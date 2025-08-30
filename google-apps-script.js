// Google Apps Script for Google Sheets Integration
// Steps to set up:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Replace the default code with this script
// 4. Deploy as a web app with "Execute as: Me" and "Who has access: Anyone"
// 5. Copy the web app URL and add it to your .env.local as GOOGLE_SCRIPT_URL

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Open your Google Sheet by ID
    const SHEET_ID = '1TUEllYi5NNeQTiZdwkSVFjQy7Jqt_3Fax44g5mLNSrQ';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Name', 'Phone Number', 'Checking Date', 'Preferable Timing', 'Payment ID', 'Timestamp']
      ]);
    }
    
    // Add the new booking data
    sheet.appendRow([
      data.name,
      data.phoneNumber,
      data.checkingDate,
      data.preferableTime,
      data.paymentId || 'Pending',
      new Date().toISOString()
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Google Apps Script is working!' }))
    .setMimeType(ContentService.MimeType.JSON);
}
