<template>
  <div>
        <div class="text-red-500 text-9xl">
                test
        </div>
  </div>
</template>

<script>
// import the firestore instance and relevant methods | 
// import db from '@/firestore/init.js';
// import { collection, addDoc } from 'firebase/firestore';
export default {

    meathod:{
        // async createUser(){
        //     const colRef = collection(db, 'users');

        //     const dataObj = {
        //         firstName: 'testUser',
        //         lastname: 'testUser',
        //         dob: 2000,
        //     }

        //     const docRef = await addDoc(colRef, dataObj);
        //     console.log("Document Created with id: " + docRef.id);
        // }
    },
    created(){
        // this.createUser();
    }
}
</script>