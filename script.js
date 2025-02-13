document.addEventListener("DOMContentLoaded", function () {
  // เลือกไฟล์เสียงและกำหนด autoplay
  let bgMusic = document.getElementById("bg-music");

  // เล่นเพลงเมื่อมีการคลิกใดๆ บนหน้าเว็บ
  document.body.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play();
    }
    const goingElement = document.querySelector(".gone");
    if (goingElement) {
      goingElement.style.display = "none";
    }
  });

  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");

    // หยุดวิดีโอถ้าเป็นวิดีโอ
    if (slides[currentSlide].tagName === "VIDEO") {
      slides[currentSlide].pause();
      slides[currentSlide].currentTime = 0;
    }

    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");

    // เล่นวิดีโอถ้าเป็นวิดีโอ
    if (slides[currentSlide].tagName === "VIDEO") {
      slides[currentSlide].play();
    }
  }

  setInterval(showNextSlide, 3000); // เปลี่ยนภาพทุก 3 วินาที

  document.getElementById("show-gift").addEventListener("click", function () {
    let giftPopup = document.getElementById("gift-popup");
    giftPopup.classList.add("show"); // แสดง popup

    let button = document.getElementById("show-gift");
    button.textContent = "ขอบคุณที่เปิดของขวัญ! 🎉"; // เปลี่ยนข้อความของปุ่ม
  });

  document.getElementById("close-popup").addEventListener("click", function () {
    let giftPopup = document.getElementById("gift-popup");
    giftPopup.classList.remove("show"); // ซ่อน popup
  });
});
