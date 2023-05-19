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

// A possible alterative if we use event delegation:
// https://stackoverflow.com/questions/36121179/event-delegation-pattern-with-addeventlistener-and-nested-elements-in-buttons
const notifs = document.querySelectorAll(".notif");
notifs.forEach((notif) => {
  notif.addEventListener("click", () => {
    notif.classList.remove("notif--unread");
    unreadNotifsCount.textContent =
      document.querySelectorAll(".notif--unread").length;

    if (unreadNotifsCount.textContent === "0") {
      unreadNotifsCount.classList.add("hidden");
    }
  });
});
