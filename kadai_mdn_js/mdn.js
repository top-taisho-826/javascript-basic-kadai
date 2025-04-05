// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// コンソールに出力
console.log(`${year}年${month}月${day}日`);
