const markAllReadButton = document.querySelector(".notifs__mark-read-button");
const unreadNotifsCount = document.querySelector(".notifs__count");
const unreadNotifs = document.querySelectorAll(".notif--unread");

markAllReadButton.addEventListener("click", (e) => {
  e.preventDefault();
  unreadNotifs.forEach((notif) => {
    notif.classList.remove("notif--unread");
  });

  unreadNotifsCount.classList.add("hidden");
});
