# EmailJS Setup Guide

## आपको EmailJS setup करने के लिए ये steps follow करने होंगे:

### 1. EmailJS Account बनाएं
1. [EmailJS.com](https://www.emailjs.com/) पर जाएं
2. "Sign Up" पर click करें और free account बनाएं
3. Email verify करें

### 2. Email Service Add करें
1. EmailJS dashboard में जाएं
2. "Email Services" पर click करें
3. "Add New Service" पर click करें
4. Gmail को select करें
5. अपनी Gmail ID से connect करें
6. Service ID को copy करें (जैसे: service_abc123)

### 3. Email Template बनाएं
1. "Email Templates" पर click करें
2. "Create New Template" पर click करें
3. Template में ये variables add करें:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: Portfolio Contact: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```
4. Template ID को copy करें (जैसे: template_xyz789)

### 4. Public Key प्राप्त करें
1. "Account" settings में जाएं
2. "API Keys" section में जाएं
3. Public Key को copy करें

### 5. Code में Values Update करें
`src/services/emailService.js` file में ये values replace करें:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123'; // आपका Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // आपका Template ID  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // आपका Public Key
```

### 6. Test करें
1. `npm start` से application run करें
2. Contact form fill करके test message भेजें
3. आपकी Gmail में message आना चाहिए

## Important Notes:
- ये service बिल्कुल free है
- GitHub Pages पर perfectly work करेगी
- कोई backend की जरूरत नहीं है
- सभी messages आपकी Gmail में आएंगे

## Troubleshooting:
- अगर messages नहीं आ रहे तो EmailJS dashboard में "Logs" check करें
- Gmail के spam folder भी check करें
- Service ID, Template ID और Public Key सही हों

## Security:
- Public Key को share करना safe है
- Private keys कभी भी frontend में use न करें
