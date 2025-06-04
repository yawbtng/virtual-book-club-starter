const loadReviews = () => {
    console.log('loading reviews');
    const reviewList = document.getElementById("reviews-list")
    for (const review of reviews) {
        const el = createReviewElement(review)
        reviewList.appendChild(el)
    }
}

document.addEventListener("DOMContentLoaded",  () => { 
    loadReviews();
    const reviewForm = document.querySelector("#review-form");
    reviewForm.addEventListener("submit", handleReviewSubmit);

})

const handleReviewSubmit = (event) => {
    console.log("handleReviewSubmit called!");
    event.preventDefault();
    
    const reviewMessage = document.querySelector("#review-text");
    const reviewTitle = document.querySelector("#book-title");
    const reviewRating = document.querySelector("#rating");

    const reviewText = reviewMessage.value;
    const title = reviewTitle.value;
    const rating = reviewRating.value;

    let review = {
        title,
        reviewText: reviewText,
        reviewTitle: reviewTitle,
        rating,
        likes:0,
        reposts:0
    }

    const newReviewElement = createReviewElement(review);
    const reviewsList = document.querySelector("#reviews-list");
    reviewsList.insertBefore(newReviewElement, reviewsList.firstChild);

    event.target.reset();
}


const createReviewElement = (review) => {
    console.log(review);
    const reviewElement = document.createElement("div");
    reviewElement.className = "review-item";

    reviewElement.innerHTML = `
    <p class="book-title">${review.title}</p>
    <p>${review.reviewText}</p>
    <p>Rating: ${review.rating}</p>
    <button>Like Count: ${review.likes}</button>
    <button>Repost Count: ${review.reposts}</button>
    `
    return reviewElement;
}