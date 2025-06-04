const loadReviews = () => {
    console.log('loading reviews');
    const reviewList = document.getElementById("reviews-list")
    for (const review of reviews) {
        const el = createReviewElement(review)
        reviewList.appendChild(el)
    }
}

document.addEventListener("DOMContentLoaded", loadReviews)

const handleReviewSubmit = () => {
    console.log("handleReviewSubmit called!");
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
