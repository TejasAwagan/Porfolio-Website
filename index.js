
// nav full screen open btn
function openFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen")
    
    navFullScreen.classList.remove("nav-fullscreen-close")
    navFullScreen.classList.add("nav-fullscreen-open")
}
function closeFullScreenNav() {
    const navFullScreen = document.getElementById("navFullScreen")
    navFullScreen.classList.add("nav-fullscreen-close")
    navFullScreen.classList.remove("nav-fullscreen-open")
    
}

formbutton("create", {
  action: "https://formspree.io/f/mdovvpzr",
  title: "How can we help?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
});

///////////////////////////////////////////////////////////////////////////////

