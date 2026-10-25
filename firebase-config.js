// Firebase プロジェクト futago-milk の接続設定（「プロジェクトの設定」→「マイアプリ」に表示される値）。
//
// ここの値（apiKey など）は公開されても問題のない識別子です。
// 記録を守っているのは Firebase 側に設定した Firestore のルール（許可したメールアドレスだけ読み書き可）です。
//
// window.FIREBASE_CONFIG = null にすると、記録はその端末のブラウザだけに保存されます（動作確認用）。

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDfrzZ9D_k-WAvcRvbsY_AF54zSMtkxV7Y",
  authDomain: "futago-milk.firebaseapp.com",
  projectId: "futago-milk",
  storageBucket: "futago-milk.firebasestorage.app",
  messagingSenderId: "976185106234",
  appId: "1:976185106234:web:c4f07ba1e1ccfab2d8fa03"
};

// メモ翻訳（Firebase AI Logic）用の App Check：reCAPTCHA v3 のサイトキー（公開用。秘密鍵は Firebase 側だけに登録）。
window.APPCHECK_SITE_KEY = "6LdmiQAuAAAAAJBXcb7NfWGS_cv-nhqmz7mRXvbp";
