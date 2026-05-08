const loginContainer = document.createElement('div');
loginContainer.innerHTML = `
  <div style="height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(135deg,#0f172a,#581c87,#111827);font-family:Arial;">
    <div style="padding:30px;width:350px;border-radius:20px;background:rgba(255,255,255,0.1);backdrop-filter:blur(15px);box-shadow:0 8px 32px rgba(0,0,0,0.3);color:white;animation:fadeIn 1s ease;">
      <h1 style="text-align:center;margin-bottom:20px;">Welcome Back</h1>
      <input id="email" type="email" placeholder="Email" style="width:100%;padding:12px;margin-bottom:15px;border:none;border-radius:10px;outline:none;" />
      <input id="password" type="password" placeholder="Password" style="width:100%;padding:12px;margin-bottom:20px;border:none;border-radius:10px;outline:none;" />
      <button id="loginBtn" style="width:100%;padding:12px;border:none;border-radius:10px;background:linear-gradient(90deg,#ec4899,#8b5cf6);color:white;font-size:16px;cursor:pointer;">Login</button>
    </div>
  </div>
`;

document.body.style.margin = '0';
document.body.appendChild(loginContainer);

document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  alert(`Logged in as ${email}`);
});