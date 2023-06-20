 var firebaseConfig = {
            apiKey: "AIzaSyBsxdnOn8nc7NrObnddoqsNpZIKKOT0xQY",
            authDomain: "seedfundr-ba17d.firebaseapp.com",
            projectId: "seedfundr-ba17d",
            storageBucket: "seedfundr-ba17d.appspot.com",
            messagingSenderId: "134144893345",
            appId: "1:134144893345:web:8b1ac9f6cce5907a386be0",
            measurementId: "G-4DV0GWZPJ8"
        };

        firebase.initializeApp(firebaseConfig);


        document.querySelector('#googleSignInButton').addEventListener('click', function () {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(function (result) {
                    // User signed in successfully.
                    var user = result.user;
                    console.log('Signed in user:', user);

                    var userName = user.displayName;
                    var profileImageURL = user.photoURL;
      
                    window.location.href = 'index.html?name=' + encodeURIComponent(userName) + '&picture=' + encodeURIComponent(profileImageURL);;
                })
                .catch(function (error) {
                    // Handle error.
                    console.error('Error signing in:', error);
                });

        })
