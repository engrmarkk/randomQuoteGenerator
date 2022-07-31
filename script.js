let dc = document; // dc represent document when working with DOM

let quoteBtn = dc.querySelector(".quotes"); // picked the class of the quote button from html and assign it to a varable
let nextBtn = dc.querySelector(".next"); // picked the class of the next button from html and assign it to a varable
let displayQuote = dc.querySelector(".quote"); // picked the class of the p tag that displays the quotes from html and assign it to a varable
let displayAuthor = dc.querySelector(".author"); // picked the class of the author name from html and assign it to a varable
let pCon = dc.querySelector(".p-tag"); // picked the class of the div container wrapping the quote and author name from html and assign it to a varable
let shareBtn = dc.querySelector(".twitter-share-button"); // picked the class of the tweet button from html and assign it to a varable
let displayQuoteContainer = dc.querySelector(".display-quote"); // picked the class of the div container wrapping the quote, author name and buttons  from html and assign it to a varable

/* 
I add an event listener to the quote button to 
display the quote container when 
clicked and hide when clicked the second time
*/
quoteBtn.addEventListener("click", () => {
  displayQuoteContainer.classList.toggle("active");
  quoteBtn.classList.toggle("active");
});

async function motivateQuote() {    // declared an async function

  let response = await fetch("https://type.fit/api/quotes"); // used the fetch keyword to get the quotes from an API

  const data = await response.json(); // convert the fetch API to an object with the json() keyword

  perQuote = Math.floor(Math.random() * data.length); // convert the lenght of the object gotten from the json to an integer and setting it to random
  const mainQuote = data[perQuote]; // data[perQuote] displays all quotes with random indexes
  const quoteContent = mainQuote.text; // assigning the quote text to a variable
  const authorName = mainQuote.author; // assigning the author name to a vriable
  displayQuote.innerHTML = quoteContent; //assigning the quote text of each random quotes to the displayQuote variable from the DOM
  displayAuthor.innerHTML = `-${authorName}`; // assigning the author name of each random quotes to the displayAuthor variable from the DOM

  /*
  for each click the container of the 
  quote text and author name should 
  take this animation
  */
  pCon.classList.add("active");
  setTimeout(function () {
    pCon.classList.remove("active");
  }, 1000);

  //   ...........................................................

  shareBtn.href = `https://twitter.com/intent/tweet?text=${quoteContent}-${authorName}`; // get the tweet button to tweet the current quote displayed on your screen
}

motivateQuote(); // invoking the function above

nextBtn.addEventListener("click", motivateQuote); // for every click on the next button, invoke the function
