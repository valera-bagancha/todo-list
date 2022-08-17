export const signUpTemplate = `
  <div class="app">
    <div class="main-background">
      <div class="content-container" >
        <div class="content-container">
          <header class="head">
            <div class="logo">Sign up</div>
          </header>
          <div class="auth-content">
            <form action="#" class="form_body">
              <div class="content-text">
                <p>Email</p>
                <input id="verificationEmail" class="input" placeholder="your email" type="text">
              </div>
              <div class="content-text">
                <p>Password</p>
                <input id="verificationPassword" class="input" placeholder="your password" type="password">
              </div>
              <div class="content-text">
                <p>Repeat password</p>
                <input id="verificationRepeatPassword"  class="input" placeholder="repeat your password" type="password">
              </div>
              <div class="target">
                <a id='login-link' class="target-text" href="">Log in</a>
              </div>
              <button id="button-signup" class="button-submit">Sign up</button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  </div>
`;