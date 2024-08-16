window.onload = function()
{
    getRandomQuotationsReady()
}

function getRandomQuotationsReady()
{
 var btn = document.getElementById("btn");
 btn.onclick = function()
 {
    var randomQuotetestArray = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "The best way to predict the future is to create it.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "Don't watch the clock; do what it does. Keep going.",
        "The only way to do great work is to love what you do."
    ];
    var randomQuote = document.getElementById("randomQuote");
    var rand = Math.floor(Math.random()*10);
    randomQuote.textContent = "\""+randomQuotetestArray[rand]+"\"";
 }   
}