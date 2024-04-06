const apikey=
'926d7b10ab5f4029a29aa0cd1171de02'
const blogcontainer=document.getElementById( 'blog-container' );
const searchField= document.getElementById('search-input')
const searchButton= document.getElementById('search-button')
async function  fetchRandomNews(){
    try{
        const apiUrl=`https://newsapi.org/v2/everything?q=apple&from=2024-04-04&to=2024-04-04&sortBy=popularity&apiKey=${apikey}`
       const response = await fetch(apiUrl)
       const data = await response.json()
       return data.articles;

    }catch(error){
        console.error("error fetching random news ",error)
        return[]
    }
}
searchButton.addEventListener("click", async () =>{
    const query = searchField.value.trim();
    if(query!==""){
        try{
            const articles = await fetchNewsQuery
            (query)
            displayBlogs(articles)

        }catch(error){
            console.log("error fetching news by query",error)
        }
    }
})
 async function  fetchNewsQuery(query){
     try{
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apikey}`
   const response = await fetch(apiUrl)
   const data = await response.json()
   return data.articles;

}catch(error){
    console.error("error fetching random news ",error)
    return[]
}

} 

function displayBlogs(articles){
    blogcontainer.innerHTML=""
    articles.forEach((article)=>{
        const blogCard=document.createElement
        ("div")
        blogCard.classList.add("blog-card")
        const img= document.createElement('img')
        img.src = article.urlToImage
        img.alt= article.tittle
        const tittle = document.createElement("h2")
        tittle.textContent= article.title
        const description=document.createElement
        ("p")
        description.textContent=article.description
        blogCard.appendChild(img);
        blogCard.appendChild(tittle);
        blogCard.appendChild(description);
        blogCard.addEventListener("click",()=>{
            window.open(article.url,"_blank");
        })
        blogcontainer.appendChild(blogCard);
   })
}


(async()=>{
    try{
        const articles= await  fetchRandomNews();
        displayBlogs(articles);
        await fetchRandomNews()
    }catch(error){
        console.error("error fetching random news ",error);

    }
})();
