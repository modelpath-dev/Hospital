# Google Reviews Integration Setup Guide

This guide will help you integrate your hospital's Google Maps reviews into your website.

## Step 1: Get Your Google Place ID

Your Google Place ID is needed to fetch reviews from the correct business listing.

### Method 1: Using the Google Place ID Finder
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Dr. Partani's Eye Care Hospital Nashik"
3. Copy the Place ID that appears

### Method 2: From Google Maps URL
Your current Google Maps link is: `https://maps.app.goo.gl/Tnhuvkfp6wQJpt1f8`
1. Go to [Google My Business](https://business.google.com/)
2. Find your business listing
3. The Place ID will be in the URL or business details

## Step 2: Set Up Google Cloud Console

### 2.1 Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Name it something like "Partani Eye Care Website"

### 2.2 Enable Places API
1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Places API"
3. Click on "Places API" and click "Enable"

### 2.3 Create API Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. Click "Restrict Key" for security

### 2.4 Restrict the API Key
1. Under "API restrictions", select "Restrict key"
2. Choose "Places API" from the list
3. Under "Website restrictions", add your domains:
   - `localhost:3000` (for development)
   - Your actual domain when deployed
4. Save the restrictions

## Step 3: Configure Your Environment

### 3.1 Update Place ID in the Code
1. Open `src/components/GoogleReviews.tsx`
2. Find this line:
   ```typescript
   const PLACE_ID = "ChIJMQQFqJvr3DsRVpHdh7O-4cs";
   ```
3. Replace it with your actual Place ID

### 3.2 Add API Key to Environment
1. Open `.env.local` file
2. Replace this line:
   ```
   GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
   ```
   With your actual API key:
   ```
   GOOGLE_PLACES_API_KEY=AIzaSyBFw0Qbyq9zTFTd-tUY6dO8X0VLHdLDZSM
   ```

## Step 4: Test the Integration

### 4.1 Start Development Server
```bash
npm run dev
```

### 4.2 Check the Reviews Section
1. Open your website at `http://localhost:3000`
2. Scroll down to the "What Our Patients Say" section
3. You should see your Google Reviews displayed

## Step 5: Deployment Considerations

### 5.1 For Vercel Deployment
1. Add the environment variable in Vercel dashboard:
   - Go to your project settings
   - Add `GOOGLE_PLACES_API_KEY` with your API key

### 5.2 Update API Key Restrictions
1. Add your production domain to the API key restrictions
2. Remove localhost when going live (optional)

## Features Included

✅ **Real-time Google Reviews**: Fetches latest reviews from Google Maps
✅ **Star Ratings**: Displays individual and overall ratings
✅ **Responsive Design**: Works on mobile and desktop
✅ **Professional Layout**: Clean, modern design matching your website
✅ **Loading States**: Shows loading spinner while fetching reviews
✅ **Error Handling**: Graceful handling of API errors
✅ **Call to Action**: Link for patients to write new reviews

## API Limitations

- **Free Tier**: 100 requests per day
- **Paid Tier**: $17 per 1000 requests after free tier
- **Review Limit**: Google returns up to 5 most recent reviews
- **Review Age**: Reviews older than a few months may not be returned

## Troubleshooting

### Common Issues:
1. **"API key not configured"**: Make sure `GOOGLE_PLACES_API_KEY` is in `.env.local`
2. **"Place ID not found"**: Verify your Place ID is correct
3. **"API quota exceeded"**: You've hit the daily limit, wait 24 hours or upgrade
4. **No reviews showing**: Check if your business has public reviews on Google Maps

### Debug Steps:
1. Check browser console for error messages
2. Verify API key has Places API enabled
3. Ensure Place ID is correct for your business
4. Check that your domain is whitelisted in API restrictions

## Cost Estimation

For a typical small business website:
- **Development/Testing**: Free (stays within 100 requests/day)
- **Production**: Usually under $5/month (unless very high traffic)

## Security Best Practices

✅ **API Key Restrictions**: Restricted to Places API only
✅ **Domain Restrictions**: Limited to your website domains
✅ **Environment Variables**: API key stored securely
✅ **No Client-Side Key**: API key only used on server-side

Your Google Reviews integration is now ready to display real patient feedback from Google Maps on your website!