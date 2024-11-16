# SendX - Nodemailer Email API 📧

A simple Node.js server using **Nodemailer** to send emails via an API endpoint. This server allows you to send emails with a recipient, subject, and message body. 🚀

## Installation ⚙️

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Adi-gitX/SendX.git
   cd SendX
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with your email configuration. 📝

## Usage 🚀

1. **Start the server:**

   ```bash
   node index.js
   ```

2. The server will run on `http://localhost:3000` by default. 🌐

## API 💻

### Send Email 📤

- **Endpoint:** `POST /api/send-email`
- **Request Body:**  
  `{ "to": "recipient@example.com", "subject": "Subject", "text": "Message body" }`

## Environment Variables ⚡

Create a `.env` file in the root directory with the following variables:

```plaintext
EMAIL_HOST=smtp.example.com      # Replace with your SMTP server
EMAIL_PORT=587                   # SMTP port
EMAIL_USER=your-email@example.com  # Your email address
EMAIL_PASS=your-email-password     # Your email password
```

## Tools and Libraries Used 🛠️

- **Nodemailer** for sending emails. 📧
- **Morgan** for HTTP request logging, helping track API requests and responses. 🔍
