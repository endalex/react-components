import React, {useState, useEffect} from 'react'

function News() {

    const [AppleNews, addAppleNews] = useState([]);
   
    useEffect(() => {

        fetch(
            "http://newsapi.org/v2/everything?q=tesla&from=2021-01-11&sortBy=publishedAt&apiKey=43c58b84d17e4300886b3284ec92f628"
            )
.then((response) => response.json())
.then((data) => {
    console.log(data);

    const kebede = data.articles;
    (AppleNews.addAppleNews) = kebede;

    
})
    });
    console.log("addAppleNews kebede");

    return (
    <div className = "allNewsWrapper">
        <div className = "container">
            <div className = "row justify-content-center text-center">
                    <div className = "col-12">
                        <h1>Latest News</h1> 
                    </div>
                        {AppleNews.map((singleNews, i) => {
                        let newsTitle = singleNews.title;
                        let newsLink = singleNews.url;
                        let newsImage = singleNews.urlToImage;
                         let NewsWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                    <div className="singleNewsWrapper">
                        <div className="newsThumbnail">
                        <a href={newsLink} target="blank">
                        <img src= {newsImage} />
                        </a>
                        </div>
                        <div className="NewsInfoWrapper">
                           <div className="newsTitle"> 
                            <a href={newsTitle} target="blank">
                            </a>
                            </div>
                            <div className="newsDesc">
                            {singleNews.description}
                            </div>
                        </div>

                        <div className="newsLink"> 
                           <a href={newsLink} target="blank">
                           </a>
                        </div>
                    </div>
                </div>   
                );
                 return NewsWrapper;
                })}
                
            </div>

        </div>
            
    </div>
    )
}

export default News;
