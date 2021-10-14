// モジュールインポート
const functions = require("firebase-functions");
const admin = require('firebase-admin')

admin.initializeApp()

// Authユーザが作成されたらUsersに作成
exports.createUser = functions.auth.user().onCreate(async (user) => {
  console.log(user)
  await admin
      .firestore()
      .collection("teachers")
      .doc(user.uid)
      .set(JSON.parse(JSON.stringify(user)));
});
  
const teacherClaims = {
  teacher: true,
};

admin
  .auth()
  .createCustomToken(userId, teacherClaims)
  .then((customToken) => {
    // Send token back to client
  })
  .catch((error) => {
    console.log('Error creating custom token:', error);
  });