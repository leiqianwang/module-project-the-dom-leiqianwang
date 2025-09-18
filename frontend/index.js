function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  document.querySelectorAll('.quoteoftheday, .corporatespeak, .countdown, .friends')
    .forEach(div => {
      div.classList.add('widget');
      div.setAttribute('tabindex', '0'); // Make widgets focusable
});

  const quoteDiv = document.querySelector('.quoteoftheday');
  const corpDiv = document.querySelector('.corporatespeak');
  const countdownDiv = document.querySelector('.countdown');
  const friendsDiv = document.querySelector('.friends');
  
  // const widgetDiv = document.createElement('div');
  // widgetDiv.className = 'widget';

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
      function showRandomQuote() {
           if (typeof quotes !== 'undefined' && Array.isArray(quotes) && quotes.length > 0) {
             const randomIndex = Math.floor(Math.random() * quotes.length);
             const randomQuote = quotes[randomIndex];

             //Remove any previous quote (but keep the h3)
             while (quoteDiv.children.length > 1) {
               quoteDiv.removeChild(quoteDiv.lastChild);
             }
         
             // Create quote text element
             const quoteText = document.createElement('p');
             quoteText.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;       
           
             // Append to the quote widget
             quoteDiv.appendChild(quoteText);          
           }
          
       }
       showRandomQuote();
       setInterval(showRandomQuote,10000); // Change quote every 5 seconds

  // Assume `quotes` is an array of objects from data.js, each with `quote` and `author` properties
//  if (typeof quotes !== 'undefined' && Array.isArray(quotes) && quotes.length > 0) {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const randomQuote = quotes[randomIndex];

//   // Create quote text element
//   const quoteText = document.createElement('div');
//   quoteText.textContent = `"${randomQuote.quote}"`;

//   // Create author element
//   const quoteAuthor = document.createElement('div');
//   quoteAuthor.textContent = `— ${randomQuote.author}`;

//   // Append to the quote widget
//   quoteDiv.appendChild(quoteText);
//   quoteDiv.appendChild(quoteAuthor);
// }

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
