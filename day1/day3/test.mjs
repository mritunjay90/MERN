import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));

const loginPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #2a3d66 0%, #4f91d9 100%);
      color: #fff;
    }

    .login-card {
      width: min(420px, 90%);
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 24px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
      padding: 40px 32px;
    }

    .login-card h1 {
      font-size: 2rem;
      margin-bottom: 24px;
      letter-spacing: 0.04em;
    }

    .form-group {
      display: grid;
      gap: 12px;
      margin-bottom: 18px;
    }

    label {
      font-size: 0.95rem;
      color: #e8f1ff;
    }

    input {
      width: 100%;
      padding: 14px 16px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(255, 255, 255, 0.08);
      color: #fff;
      font-size: 1rem;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(79, 145, 217, 0.28);
      border-color: #5db0ff;
    }

    button {
      width: 100%;
      padding: 14px 16px;
      border: none;
      border-radius: 14px;
      background: #4f91d9;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease;
    }

    button:hover {
      transform: translateY(-1px);
      background: #3a7cc1;
    }

    .footer {
      margin-top: 18px;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.78);
      text-align: center;
    }

    .footer a {
      color: #d8e8ff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <main class="login-card">
    <h1>Sign in to your account</h1>
    <form method="POST" action="/login">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p class="footer">New here? <a href="#">Create an account</a></p>
  </main>
</body>
</html>`;

app.get('/', (req, res) => {
  res.send(loginPage);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const validEmail = 'user@example.com';
  const validPassword = 'password123';

  if (email === validEmail && password === validPassword) {
    res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome</title>
        <style>
          body { display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #1f2f4d; color: #fff; font-family: Arial, sans-serif; }
          .message { text-align: center; }
          .message h1 { margin-bottom: 16px; }
          .message a { color: #4f91d9; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="message">
          <h1>Login successful</h1>
          <p>Welcome back, ${email}.</p>
          <p><a href="/">Return to login</a></p>
        </div>
      </body>
      </html>`);
  } else {
    res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login failed</title>
        <style>
          body { display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #2f1f3d; color: #fff; font-family: Arial, sans-serif; }
          .message { text-align: center; }
          .message h1 { margin-bottom: 16px; color: #ff7f7f; }
          .message a { color: #d8e8ff; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="message">
          <h1>Invalid credentials</h1>
          <p>Please try again with the correct email and password.</p>
          <p><a href="/">Back to login</a></p>
        </div>
      </body>
      </html>`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Login page available at http://localhost:${PORT}`);
});
