# Nodemailer Server

A simple Node.js server using Nodemailer to send emails via an API endpoint. This server allows you to send emails with a specified recipient, subject, and message body.

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:nandu-99/QuickSend.git
   cd nodemailer-server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with your email configuration (see the [Environment Variables](#environment-variables) section).

## Usage

1. **Start the server:**

   ```bash
   node index.js
   ```

2. The server will run on `http://localhost:3000` by default.

## API

### Send Email

- **Endpoint:** `POST /api/send-email`
- **Request Body:**

```json
{
  "to": "recipient@example.com",
  "subject": "Your Subject Here",
  "text": "Your email body here."
}
```

- **Response:**

  - **Success (200):**
  
    ```json
    {
      "message": "Email sent successfully",
      "info": {
        // Mail info object
      }
    }
    ```

  - **Failure (500):**
  
    ```json
    {
      "message": "Failed to send email",
      "error": {
        // Error details
      }
    }
    ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
EMAIL_HOST=smtp.example.com      # Replace with your SMTP server
EMAIL_PORT=587                    # Common port for SMTP
EMAIL_USER=your-email@example.com  # Replace with your email address
EMAIL_PASS=your-password           # Replace with your email password
```
