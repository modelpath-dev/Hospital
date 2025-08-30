import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, phoneNumber, checkingDate, preferableTime } = await request.json();

    // Google Sheets API endpoint
    const SHEET_ID = '1TUEllYi5NNeQTiZdwkSVFjQy7Jqt_3Fax44g5mLNSrQ';
    const RANGE = 'Sheet1!A:D'; // Adjust range based on your sheet structure
    
    // For now, we'll use a simple approach with Google Apps Script
    // You'll need to create a Google Apps Script web app that accepts POST requests
    
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL; // We'll set this up
    
    if (scriptUrl) {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          checkingDate,
          preferableTime,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        return NextResponse.json({ 
          success: true, 
          message: 'Booking data saved successfully!' 
        });
      }
    }

    // Fallback: Log the data (for development)
    console.log('Camp Booking Data:', {
      name,
      phoneNumber,
      checkingDate,
      preferableTime,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking received! Please proceed to payment.' 
    });

  } catch (error) {
    console.error('Camp booking error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process booking. Please try again.' 
      }, 
      { status: 500 }
    );
  }
}
