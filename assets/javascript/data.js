// Firebase Authentication //
//setup guides
var setupGuides = (data) => {

    let html = "";
    data.forEach(doc => {
         const guide = doc.data();
         console.log(guide);
         const li =  $("<li>");
         var div1 = $("<div>");
         var div2 = $("<div>");
         div1.addClass("collapsible-header grey lighten-4");
         div1.text($(guide.title));
         div2.addClass("collapsible-body white");
         div2.text($(guide.content));
         li.append(div1);
         li.append(div2);
  
        console.log(li);
  
        html += li
         
        guideList.append(li);
    });
    
  }
  
  
  
  
  $("DOMContentLoaded", function () {
    var modals = $(".modal");
    M.Modal.init(modals);
  
    var config = {
      apiKey: "AIzaSyAxtAWMHjPjjEdZ1gVoGVeSF8i-mdEN9IE",
      authDomain: "project-one-74297.firebaseapp.com",
      databaseURL: "https://project-one-74297.firebaseio.com",
      projectId: "project-one-74297",
      storageBucket: "project-one-74297.appspot.com",
      messagingSenderId: "1057793714147"
    };
    firebase.initializeApp(config);
  
    var auth = firebase.auth();
    var db = firebase.firestore();
  
  
    //get data
    db.collection("train").get().then(snapshot => {
        setupGuides(snapshot.docs)
    })
  
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("user logged in: ", user.email);
        } else {
            console.log("user logged out");
        }
    });
  
    var signupForm = $("#signup-form");
    $("#signup-button").on("click", (e) => {
        e.preventDefault();
  
        var email = $("#signup-email").val()
        var password = $("#signup-password").val();
  
        console.log(email);
        console.log(password);
  
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
            var modal = $("#modal-signup");
            M.Modal.getInstance(modal).close();
        });
    });
  
    // logout 
    $("#logout-button").on("click", (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            console.log("user signed out");
        });
    });
  
    // login
    var loginForm = $("#login-form");
    $("#button-login").on("click", (e) => {
        e.preventDefault();
  
        //get user info
        var email = $("#login-email").val();
        var password = $("#login-password").val();
  
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user);
  
            //close the login modal and reset the form
            var modal = $("#modal-login");
            M.Modal.getInstance(modal).close();
            // loginForm.reset();
        })
    })
  
  });