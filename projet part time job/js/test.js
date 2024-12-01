let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
/* circle loader */
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        preloader.style.display = "none"; // Ensure it is removed after fade-out
    }, 500); // Match the fade-out duration
});

/* circle loader*/  

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    signupLink = document.querySelector(".sginup-link"),  // Lien Sign up
    loginLink = document.querySelector(".login-link");    // Lien Login

// Gérer la visibilité des mots de passe
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});

// Gérer l'affichage du formulaire de connexion et d'inscription
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.add("show-signup");
    console.log("Signup form displayed");
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.remove("show-signup");
    console.log("Login form displayed");
});

    // Initialize Supabase
    const supabaseUrl = 'https://xxlyxotktzuaziiavbju.supabase.co';  // Replace with your Supabase URL
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4bHl4b3RrdHp1YXppaWF2Ymp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMDM4MDIsImV4cCI6MjA0ODU3OTgwMn0.AfOODAWdKJDi8qK3JD2L87hFHYwRC2dtAWlDcM9R6HQ';                // Replace with your Supabase Key
    const supabase = createClient(supabaseUrl, supabaseKey);


    // Sign Up Function
    async function signUp() {
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        document.getElementById('signup-message').innerText = `Sign Up Error: ${error.message}`;
      } else {
        document.getElementById('signup-message').innerText = 'Sign Up Successful! Check your email to confirm.';
      }
    }

    // Log In Function
    async function logIn() {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        document.getElementById('login-message').innerText = `Log In Error: ${error.message}`;
      } else {
        document.getElementById('login-message').innerText = 'Log In Successful!';
      }
    }

    // Log Out Function
    async function logOut() {
      const { error } = await supabase.auth.signOut();

      if (error) {
        document.getElementById('logout-message').innerText = `Log Out Error: ${error.message}`;
      } else {
        document.getElementById('logout-message').innerText = 'Logged Out Successfully!';
      }
    }