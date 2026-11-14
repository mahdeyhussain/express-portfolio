// IIFE - Immediately Invoked Function Expression
// runs as soon as the file loads and keeps its variables out of the global scope
(function () {
    function Start() {
        console.log("App started...");
    }
    // run Start once the page has finished loading
    window.addEventListener("load", Start);
})();