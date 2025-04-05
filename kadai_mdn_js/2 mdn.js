// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// フォーマットして出力
const formattedDate = `${year}年${month}月${day}日`;

// DOM を操作して日付を表示
document.addEventListener("DOMContentLoaded", () => {
  const dateDisplayElement = document.getElementById("date-display");
  dateDisplayElement.textContent = formattedDate;
});
