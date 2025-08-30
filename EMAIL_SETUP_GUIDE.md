# 📧 EMAIL SETUP GUIDE FOR PARTANI EYE CARE
# ==========================================

## Step 1: Create Gmail App Password

1. **Go to your Google Account settings:**
   - Visit: https://myaccount.google.com/
   - Sign in with drpartanieyecarenashik@gmail.com

2. **Enable 2-Factor Authentication (if not already enabled):**
   - Go to Security → 2-Step Verification
   - Follow the setup process

3. **Create App Password:**
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" as the app
   - Select "Other" as device and type "Partani Eye Care Website"
   - Google will generate a 16-character password like: "abcd efgh ijkl mnop"
   - COPY THIS PASSWORD - you'll need it!

## Step 2: Configure Environment Variables

4. **Create .env.local file in your project root:**
   - Copy the .env.example file to .env.local
   - Edit .env.local with your actual credentials

## Step 3: Test the Setup

5. **Restart your development server:**
   - Stop the current server (Ctrl+C)
   - Run: npm run dev
   - Test the contact form

## Step 4: Verify Email Delivery

6. **Check the email in drpartanieyecarenashik@gmail.com:**
   - Look for beautifully formatted emails
   - Check spam folder if needed

## Troubleshooting

- If emails don't send, the form will fallback to opening email client
- Check browser console for error messages
- Verify Gmail App Password is correct
- Ensure 2FA is enabled on Gmail account

## Security Notes

- Never commit .env.local to version control
- Keep your app password secure
- The current mailto fallback works immediately without setup
