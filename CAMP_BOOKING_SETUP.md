# 🏕️ CAMP BOOKING SYSTEM SETUP GUIDE
# =====================================

## ✅ What's Been Created:

### 1. **Homepage Integration**
- Added "Camp Booking" section after Services
- Beautiful call-to-action with features showcase
- Redirects to /camp-booking form

### 2. **Camp Booking Form** (/camp-booking)
- Collects: Name, Phone, Date, Time preference
- Mobile-friendly design
- Validation and error handling

### 3. **Payment Integration** (/payment)
- Razorpay payment gateway
- ₹100 registration fee
- Secure payment processing

### 4. **Success Page** (/payment-success)
- Confirmation message
- Next steps for patients
- Contact information

### 5. **Google Sheets Integration**
- Automatic data saving
- Real-time booking tracking
- Payment status updates

### 6. **Email Notifications**
- Confirmation emails to patients
- Booking notifications to clinic
- Professional HTML templates

---

## 🚀 Setup Instructions:

### **Step 1: Razorpay Setup (Required for Payments)**

1. **Create Razorpay Account:**
   - Go to: https://razorpay.com/
   - Sign up for free account
   - Complete KYC verification

2. **Get API Keys:**
   - Go to Dashboard → Settings → API Keys
   - Generate Test/Live keys
   - Copy Key ID and Key Secret

3. **Update .env.local:**
   ```
   RAZORPAY_KEY_ID=rzp_test_your_actual_key
   RAZORPAY_KEY_SECRET=your_actual_secret
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_actual_key
   ```

### **Step 2: Google Sheets Setup (Optional but Recommended)**

1. **Create Google Apps Script:**
   - Go to: https://script.google.com/
   - Create new project
   - Copy code from `google-apps-script.js`
   - Deploy as web app

2. **Configure Permissions:**
   - Execute as: Me
   - Who has access: Anyone
   - Copy the web app URL

3. **Update .env.local:**
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/your-web-app-url
   ```

### **Step 3: Test the System**

1. **Start Development Server:**
   ```bash
   npm run dev
   ```

2. **Test Complete Flow:**
   - Visit homepage
   - Click "Book Camp Session"
   - Fill booking form
   - Complete payment (use test cards)
   - Verify success page

3. **Test Payment Cards (Razorpay Test Mode):**
   - Card: 4111 1111 1111 1111
   - CVV: Any 3 digits
   - Expiry: Any future date

---

## 📊 Features Included:

### **User Experience:**
- ✅ Mobile-first design
- ✅ Easy form filling
- ✅ Secure payments
- ✅ Instant confirmations
- ✅ Email notifications

### **Admin Features:**
- ✅ Real-time booking data in Google Sheets
- ✅ Email notifications for new bookings
- ✅ Payment tracking
- ✅ Customer contact information

### **Payment Features:**
- ✅ Razorpay integration
- ✅ ₹100 registration fee
- ✅ Secure payment processing
- ✅ Payment verification
- ✅ Automatic confirmation

---

## 🔧 Current Status:

- ✅ **Frontend:** Complete and responsive
- ✅ **Backend APIs:** All routes created
- ✅ **Email System:** Working with Gmail
- 🔄 **Payment:** Needs Razorpay keys
- 🔄 **Google Sheets:** Needs Apps Script setup

---

## 🆘 Support:

If you need help setting up:
1. Razorpay account and keys
2. Google Apps Script deployment
3. Testing the payment flow

The system is fully functional and ready for production use once you add your Razorpay credentials!
