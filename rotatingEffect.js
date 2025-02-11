document.addEventListener("DOMContentLoaded", function () {
   let reviews = document.querySelectorAll(".review-item");
   let index = 0;

   if (reviews.length < 4) {
      console.error("Not enough reviews for rotation! Found:", reviews.length);
      return;
   }

   function rotateReviews() {
      // Remove current classes and reset opacity
      reviews.forEach((review) => {
         review.classList.remove("active", "top", "bottom", "left", "right");
         review.style.opacity = "0"; // Hide all initially
      });

      // Assign new positions for diamond shape
      reviews[index].classList.add("active");
      reviews[index].style.opacity = "1"; // Center (main focus)

      reviews[(index + 1) % reviews.length].classList.add("top");
      reviews[(index + 1) % reviews.length].style.opacity = "1"; // Top

      reviews[(index + 2) % reviews.length].classList.add("right");
      reviews[(index + 2) % reviews.length].style.opacity = "0.1"; // Right

      reviews[(index + 3) % reviews.length].classList.add("bottom");
      reviews[(index + 3) % reviews.length].style.opacity = "0"; // Bottom

      reviews[(index + 4) % reviews.length].classList.add("left");
      reviews[(index + 4) % reviews.length].style.opacity = "0.1"; // Left

      // Debugging log
      console.log("Current Index:", index, "Review Text:", reviews[index].innerText);

      // Move to next review
      index = (index + 1) % reviews.length;
   }

   // Initialize & start rotation every 5 seconds
   rotateReviews();
   setInterval(rotateReviews, 5000);
});
