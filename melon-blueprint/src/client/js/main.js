import "../scss/styles.scss";

const myDialog = document.getElementById('myDialog');
const player = document.getElementById('player');

function logout() {
   fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "로그아웃" }),
   })
   .then((response) => {
      if (response.ok) {
         window.location.reload();
      } else {
         throw new Error("로그아웃 실패");
      }
   }).catch((error) => console.error(error));
}

let isListening = false;

function listen(id, song) {
   if (!isListening) {
      isListening = true;
      const data = { id: song };
      fetch("listen", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data)
      }).then(res => console.log(`${res.status} 듣기 성공`)).catch(error => console.log(`${error} 에러`));

      player.src = `https://www.youtube.com/embed/${song}?autoplay=1&origin=http://example.com`;
      myDialog.showModal();
      isListening = false;
   }
}

function dialogClick(event) {
   if (event.target.nodeName === "DIALOG") {
      player.src = "";
      myDialog.close();
      window.location.reload();
   }
}

