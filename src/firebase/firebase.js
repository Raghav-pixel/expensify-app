import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyChswmwyxTnP_VCtJ3aYm-UPz7bzPT0J4c",
    authDomain: "expensify-380e5.firebaseapp.com",
    databaseURL: "https://expensify-380e5.firebaseio.com",
    projectId: "expensify-380e5",
    storageBucket: "expensify-380e5.appspot.com",
    messagingSenderId: "458655098068",
    appId: "1:458655098068:web:af8d8f44186034a9674741",
    measurementId: "G-B7JXEBE352"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database().ref('expenses').on('value', (snapshot)=> {
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id : childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database().ref('expenses').once('value')
// .then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=> {
//         expenses.push({
//             id : childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });


  // database().ref('expenses').push({
//     description : 'Rent',
//     note: '',
//     amount: 13500,
//     createdAt : 109500
// });


//   database().ref().on('value', (sanpshot)=> {
//     const val = sanpshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

//   database().ref().set({
//       name : 'Raghav khanna',
//       age : 21,
//       stressLevel: 6,
//       job: {
//         title: 'software developer',
//         company: 'Google'
//       },
//       location : {
//           city : 'Varanasi',
//           country : 'India'
//       }
//   }).then(()=>{
//       console.log('Data is saved')
//   }).catch((e)=>{
//       console.log('This failed', e)
//   });
  
//   database().ref('isSingle').remove().then(()=>{
//       console.log('Data is removed')
//   }).catch((e)=> {
//       console.log('Unable to remove data', e)
//   });

// database().ref().update({
//     stressLevel : 9,
//     'job/company' : 'Amazon',
//     'location/city' : 'Seatle'
// });
  