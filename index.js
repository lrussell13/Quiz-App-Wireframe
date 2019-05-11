const store = {
    view: "start",
}

function handleStart(store) {
    $(".startQuiz").on("submit", function(event){
        event.preventDefault();
        store.view = "quiz";
        renderView(store);
    });
}

function handleSubmitAnswer(store) {
    $(".quiz").on("submit", function(event){
        event.preventDefault();
        store.view = "quizAnswerReview";
        renderView(store);
    });
}

function handleSubmitNextQuestion(store){
    $(".submitNextQuestion").on("submit", function(event){
        
            event.preventDefault();
            store.view = "review";
            renderView(store);
    });
}


function incrementCurrentQuestion(){
    store.currentQuestion++;
}

function handleRetakeQuiz() {
    $(".retakeQuiz").on("submit", function(event){
        store.view = "start";
        renderView(store);
    }); 
}




function determineTemplate(store){
    let template = "";
    if(store.view === "start"){
        template = 
        `<div class="containerStart">
            <h1>The Ultimate Marvel Cinematic Universe Quiz</h1>
            <h2>*No Avengers: Endgame Spoilers*</h2>
            <form class="startQuiz">
                <label>
                    <button type="submit" class="submit">Start Quiz</input>
                </label>
            </form>
        </div>
        `;
    } else if (store.view === "quiz"){
        template = 
        `
        <header role="banner"> 
        <ul>
            <li>Question: <span class="questionNumber">1</span>/10</li>
            <li>Score: <span class="score">0</span></li>
        </ul>
        </header>
        <div class="container">
            <h2 class="question">Question?</h2>
            <form class="quiz">
                <fieldset role="radiogroup">
                    <input type="radio" id="radio1" value="option1" name="answer" role="radio"></input>
                    <label for="radio1" class="answerOption">Option1</label>
                    <input type="radio" id="radio2" value="option1" name="answer" role="radio"></input>
                    <label for="radio2" class="answerOption">Option1</label>
                    <input type="radio" id="radio3" value="option1" name="answer" role="radio"></input>
                    <label for="radio3" class="answerOption">Option1</label>
                    <input type="radio" id="radio4" value="option1" name="answer" role="radio"></input>
                    <label for="radio4" class="answerOption">Option1</label>
                </fieldset>
                <label>
                    <input type="submit" class="quizSubmit"></input>
                </label>
            </form>
        </div>
        `;
    } else if (store.view === "quizAnswerReview"){
        template = 
        `
        <header role="banner"> 
        <ul>
            <li>Question: <span class="questionNumber">1</span>/10</li>
            <li>Score: <span class="score">1</span></li>
        </ul>
        </header>
        <div class="container">
            <h1>You Got it Right!</h1>
            <h2 class="question"></h2>
            <h3>*Fun fact about answer*</h3>
            <form class="submitNextQuestion">
                <label>
                    <input type="submit" class="quizSubmit"></input>
                </label>
            </form>
        </div>
        `;
    } else if (store.view === "review"){
        template = 
        `
        <div class="containerStart">
            <h1>Final Review</h1>
            <h2>You got 1/10 right</h2>
            <form class="retakeQuiz">
                <label>
                    <button type="submit" class="submit">Retake</input>
                </label>
            </form>
        </div>
        `;
    }
    return template;
}

function renderView(store) {
    $("body").html(determineTemplate(store));
    handleStart(store);
    handleSubmitAnswer(store);
    handleSubmitNextQuestion(store);
}

$(renderView(store));