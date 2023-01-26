const reviewErrorChecker = () => {
    const addReviewButton = document.getElementById("review__submit");
    // If button exists, we are on item page and the code will be used on review submit
    if(addReviewButton){
        const reviewTitle = document.getElementById("review__title");
        const reviewContent = document.getElementById("review__content");
        addReviewButton.addEventListener("click", () => {
            if(reviewTitle.value !== null || reviewContent.value !== null){
                const filterTitle = reviewTitle.value.replace(/[^a-zA-Z0-9]/g, "");
                const filterContent = reviewContent.value.replace(/[^a-zA-Z0-9]/g, "");
                if(filterTitle === "" || filterContent === ""){
                    const errorChecker = document.getElementById("error__review");
                    if(!errorChecker){
                        const formReview = document.getElementById("form__review");
                        const errorMessage = document.createElement("span");
                        errorMessage.setAttribute("id", "error__review");
                        errorMessage.textContent = "Votre message ne peut pas être vide ou contenir de caractères spéciaux."
                        formReview.appendChild(errorMessage);
                    }
                    event.preventDefault();
                }
            }
        })
    }
}

reviewErrorChecker();