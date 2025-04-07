//btn,textというidを持つHTML要素を取得し、定数に代入する。
const btn = document.getElementById("");
const text = document.getElementById("");

//HTML要素がクリックされたときに、イベント処理を実行する。
btn.addEventListener("click", () => {
  //2秒後に実行される処理をセット。
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
