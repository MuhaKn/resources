const text=document.getElementById("q");
const author=document.getElementById("a");
const getNewQuote = async () =>
{
    //api for quotes
    var url="https://zenquotes.io/api/random";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    // const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[1].text;
    
    //Store the author of the respective quote
    const auth=allQuotes[1].author;

    if(auth==null)
    {
        author = "Anonymous";
    }
 
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    

}

getNewQuote();
