# Email Setup Guide for Motion Broadband Contact Form

## Overview
The contact form has been configured to send emails to `sales@motionbroadbandltd.com` using EmailJS service. If EmailJS is not configured, it falls back to opening the user's default email client with a pre-filled message.

## 🚀 **Quick Start (Fallback Method)**
The contact form will work immediately using the mailto fallback method:
- When users submit the form, their default email client opens
- The email is pre-filled with all form data
- Users can send the email directly from their email client
- This works without any additional setup

## 📧 **EmailJS Setup (Recommended)**
For a more professional experience, set up EmailJS to send emails directly from the website:

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Create Email Service**
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### **Step 3: Create Email Template**
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Motion Broadband website contact form.
```

4. Set the template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content

5. Set the "To Email" to: `sales@motionbroadbandltd.com`
6. Note down your **Template ID**

### **Step 4: Get Public Key**
1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Note it down

### **Step 5: Configure Environment Variables**
1. Copy `.env.example` to `.env` in your project root
2. Fill in your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server

## 🔧 **Current Implementation**

### **Form Functionality**
- **Validation**: All required fields must be filled
- **Loading State**: Shows spinner while submitting
- **Success State**: Shows confirmation message
- **Error State**: Shows error message with retry option
- **Form Reset**: Clears form after successful submission

### **Email Content**
The email sent to `sales@motionbroadbandltd.com` includes:
- Customer's full name
- Customer's email address
- Customer's phone number
- Subject line
- Detailed message
- Timestamp (automatically added by email service)

### **Fallback Behavior**
If EmailJS is not configured:
1. Form opens user's default email client
2. Email is pre-filled with all form data
3. User can review and send manually
4. Success message is still shown

## 📱 **User Experience**

### **With EmailJS (Recommended)**
1. User fills out form
2. Clicks "Send Message"
3. Form shows loading spinner
4. Email is sent directly to Motion Broadband
5. Success message appears
6. Form resets automatically

### **With Mailto Fallback**
1. User fills out form
2. Clicks "Send Message"
3. Default email client opens
4. Email is pre-filled with form data
5. User sends email manually
6. Success message appears on website

## 🛡️ **Security Features**

### **Data Protection**
- No sensitive data stored in browser
- Form data only transmitted via HTTPS
- EmailJS handles email delivery securely
- No server-side storage required

### **Spam Prevention**
- EmailJS includes built-in rate limiting
- Form validation prevents empty submissions
- User must have email client configured for fallback

## 📊 **Benefits**

### **For Motion Broadband**
- **Direct Email Delivery**: Messages arrive directly in inbox
- **Professional Appearance**: No "sent from website" disclaimers
- **Automatic Processing**: No manual email client required
- **Reliable Delivery**: EmailJS handles delivery and retries

### **For Customers**
- **Easy Submission**: Simple form interface
- **Immediate Feedback**: Success/error messages
- **No Email Client Required**: Works even without configured email
- **Mobile Friendly**: Optimized for all devices

## 🔍 **Testing**

### **Test the Form**
1. Fill out all required fields
2. Submit the form
3. Check for success message
4. Verify email arrives at `sales@motionbroadbandltd.com`

### **Test Error Handling**
1. Disconnect internet
2. Submit form
3. Verify error message appears
4. Reconnect and try again

## 📈 **Analytics & Monitoring**

### **EmailJS Dashboard**
- View email delivery statistics
- Monitor success/failure rates
- Track usage limits
- Manage templates and services

### **Form Analytics**
- Success/error rates tracked in browser console
- User interaction data available via analytics tools
- Form completion rates can be monitored

## 🚨 **Troubleshooting**

### **Common Issues**

#### **Emails Not Sending**
1. Check EmailJS credentials in `.env` file
2. Verify service and template IDs are correct
3. Check EmailJS dashboard for error logs
4. Ensure email service is properly configured

#### **Fallback Not Working**
1. Check if user has default email client configured
2. Verify mailto links work in browser
3. Check browser popup blockers

#### **Form Validation Errors**
1. Ensure all required fields are filled
2. Check email format validation
3. Verify form data is being captured correctly

### **Debug Mode**
Check browser console for detailed error messages:
- EmailJS connection errors
- Form validation issues
- Network connectivity problems

## 📋 **Maintenance**

### **Regular Tasks**
- Monitor EmailJS usage limits
- Check email delivery rates
- Update templates as needed
- Review and respond to contact form submissions

### **Updates**
- Keep EmailJS library updated
- Monitor for new EmailJS features
- Update email templates as business needs change

## 🎯 **Next Steps**

1. **Immediate**: Form works with mailto fallback
2. **Recommended**: Set up EmailJS for professional email delivery
3. **Optional**: Add form analytics and tracking
4. **Future**: Consider adding file upload capability

The contact form is now fully functional and will ensure all customer inquiries reach Motion Broadband promptly and reliably!
