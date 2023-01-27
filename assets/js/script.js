const app = {
    reviewErrorChecker: () => {
        const addReviewButton = document.getElementById("review__submit");
        // If button exists, we are on item page and the code will be used on review submit
        if(addReviewButton){
            const reviewTitle = document.getElementById("review__title");
            const reviewContent = document.getElementById("review__content");
            addReviewButton.addEventListener("click", () => {
                if(reviewTitle.value !== null || reviewContent.value !== null){
                    const filterTitle = reviewTitle.value.match("[^A-Za-z0-9 .,?!':-;%$£]");
                    const filterContent = reviewContent.value.match("[^A-Za-z0-9 .,?!':-;%$£]");
                    if(filterTitle !== null || filterContent !== null){
                        const errorChecker = document.getElementById("error__review");
                        if(!errorChecker){
                            const formReview = document.getElementById("form__review");
                            const errorMessage = document.createElement("span");
                            errorMessage.setAttribute("id", "error__review");
                            errorMessage.textContent = "Votre message ne peut pas contenir de caractères spéciaux."
                            formReview.appendChild(errorMessage);
                        }
                        event.preventDefault();
                    }
                }
            })
        }
    },

    init: () => {
        app.reviewErrorChecker();
    }
}
    
app.init();