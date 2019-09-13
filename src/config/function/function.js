import {Firebase,providerApp} from './../firebase/firebase'


function loginFunc(){
return new Promise((resolve,reject)=>{
    Firebase.auth().signInWithPopup(providerApp).then((result)=> {
    var token = result.credential.accessToken;
    var user = result.user;
    resolve(user)
    // ...
  }).catch(function(error) {
    // Handle Errors here.

    var errorMessage = error.message;
reject(errorMessage)  
  })
})
}
export {loginFunc}