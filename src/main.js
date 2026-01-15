import "@lottiefiles/lottie-player";
import addUser from "./assets/json/add-user.json";
import onlinePayment from "./assets/json/online-payment.json";
import success from "./assets/json/success.json";
import error from "./assets/json/warning.json";
import paymentLottie from "./assets/json/contactless-wifi payment.json";
import wallet from "./assets/json/card.json";


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("lottie-player").forEach((player) => {
    switch (player.id) {
      case "add-user":
        player.load(addUser);
        break;
      case "error":
        player.load(error);
        break;
      case "success":
        player.load(success);
        break;
      case "online-payment":
        player.load(onlinePayment);
        break;
      case "wallet":
        player.load(wallet);
        break;
      case "paymentLottie":
        player.load(paymentLottie);
        break;
      default:
        console.warn("No animation found for:", player.id);
    }
  });
});