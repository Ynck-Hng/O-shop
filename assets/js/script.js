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

    signupValueChecker: () => {
        const createAccountButton = document.getElementById("signup__button--submit");
        if(createAccountButton){
            const usernameInput = document.getElementById("firstname__submit");
            const lastnameInput = document.getElementById("lastname__submit");
            createAccountButton.addEventListener("click", () => {
                if(usernameInput.value !== null || lastnameInput.value !== null){
                    const filterUsername = usernameInput.value.match("[^A-Za-z0-9 'éèàùîôç-]");
                    const filterLastname = lastnameInput.value.match("[^A-Za-z0-9 'éèàùîôç-]");                    
                    if(filterUsername !== null || filterLastname !== null){
                        const inputErrorChecker = document.getElementById("input__filtered--error");
                        if(!inputErrorChecker){
                            const ulError = document.getElementById("errorSignup__container");
                            const inputErrorMessage = document.createElement("li");
                            inputErrorMessage.setAttribute("id", "input__filtered--error");
                            inputErrorMessage.textContent = "• Votre prénom ou nom ne peut pas contenir certains caractères spéciaux."
                            ulError.appendChild(inputErrorMessage);
                        }
                        event.preventDefault();
                    }
                }
            })
        }
    },

    disableButton: () => {
        const createAccountButton = document.getElementById("signup__button--submit");
        createAccountButton.addEventListener("click", () => {
            event.preventDefault();
        })
    },

    init: () => {
        app.reviewErrorChecker();
        app.signupValueChecker();
    }
}
    
app.init();