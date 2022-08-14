const thankyouCard = document.querySelector(".thankyouCard");
const feedbackCard = document.querySelector(".feedbackCard");
const ratingBtns = document.querySelectorAll('input[name="rating"]');
const submitBtn = document.querySelector(".submitBtn");
const h3 = document.querySelector("h3");

thankyouCard.style.display = "none";

submitBtn.addEventListener("click", () => {
  let ratingValue;
  for (const ratingBtn of ratingBtns) {
    if (ratingBtn.checked) {
      ratingValue = ratingBtn.value;
      h3.innerHTML = `You have selected ${ratingValue} out of 5`
      thankyouCard.style.display = "block";
      feedbackCard.style.display = "none";
      break;
    } else {
      feedbackCard.style.display = "block";
      thankyouCard.style.display = "none";
    }
  }
});
