import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-wybgSVkI6xh8BHH51XVvmJ9HwXL6F7M",
    authDomain: "clothing-bazzar-db.firebaseapp.com",
    databaseURL: "https://clothing-bazzar-db.firebaseio.com",
    projectId: "clothing-bazzar-db",
    storageBucket: "clothing-bazzar-db.appspot.com",
    messagingSenderId: "610351590015",
    appId: "1:610351590015:web:3220493018cbfe30d2ad4a",
    measurementId: "G-54NM372NN7"
  };

// storing user data in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;  // if no user is currently logged in then do nothing and return

    // if a user is logged in 
    const docQuerry = 'users/' + userAuth.uid   // generating a querry for the database
    const userReference = firestore.doc(docQuerry)  // it gives a document reference object

    const snapShot = await userReference.get(); // it gives the document snapshot, which is used to check if a user exists in our database or not 

    // checking if the data of the user exists in our database
    if(!snapShot.exists){
        // if the user doesnt exist in our database then creating that user in our database
        const { displayName, email} = userAuth;  // extracting required info from the userAuth object 
        const createdAt = new Date();

        try {
            //  saving the required information of the user in our database
            await userReference.set( {displayName, email, createdAt, ...additionalData })

        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userReference;  // returning the userReference object for further use in our application

}
// export const createproductsdata = () => {
//     const productIds = []
//     for(var i =0; i<productIds.length; i++){
//         const url = `https://www.clubfactory.com/gw/cf-detail/api/v1/product/info?productId=${productIds[i]}`
//         fetch(url)
//         .then(response => response.json())
//         .then(result => {
//             const data = result.body
//             console.log(data)
//             const res = firestore.collection("products").doc("t-shirts").collection("women").doc(String(data.id)).set({
//                 id: data.id,
//                 name: data.name,
//                 specifications: data.specificsDTOList,
//                 discountPrice: data.listPriceLocal*87,
//                 actualPrice: data.markingPriceLocal*87,
//                 images: data.productImageList,
//                 discountPercentage: data.off*100
//             })
//         })
//     }
// }

export const getAllProducts = async ()=> {
    const reference = firestore.collection("products");
    const snapshot = await reference.get() ;
    // snapshot.forEach(async snap => {
    //     const ref = snap.ref.collection("men")
    //     const s = await ref.get();
    //     s.forEach(p => {
    //         console.log(p.data())
    //     })
    //     // console.log(snap.ref.collection("men"))
    // });
    // console.log(snapshot)
    return snapshot;
}

export const getParticularCategory = async (category) => {
    const reference = firestore.collection("products").doc(category);
    const snapshot = await reference.get();
    return snapshot
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// exporting firebase authentication
export const auth = firebase.auth()
// exporting firebase firestore(database)
export const firestore = firebase.firestore()

// Managing google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase