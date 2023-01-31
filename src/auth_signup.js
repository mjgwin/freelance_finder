import {auth} from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


export const signup_user = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            const user = userCredential.user;
            console.log("User creation sucess!")
        }
    ).catch(
        (error) => {
            const error_code = error.code;
            const error_message = error.message;
            console.log(`Error occured when creating user with code: ${error_code} and message ${error_message}`)
        }
    )

}

export const signin_user = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            const user = userCredential.user;
            console.log("Sign in success!")
        }
    ).catch(
        (error) => {
            const error_code = error.code;
            const error_message = error.message;
            console.log(`Error occured when signing in user with code: ${error_code} and message ${error_message}`)
        }
    )
}

//State listener below (may need to shift to another file)

onAuthStateChanged(auth, (user) => {
    if(user){
        console.log(`Signed in with ${user.uid}`)
    }else{
        console.log("Not signed in")
    }
})
