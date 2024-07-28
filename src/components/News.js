import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewList from "./NewsList";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  
  useEffect(() => {
    updateNews();
  }, []);

  const fetchData = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    // setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false)
    props.setProgress(100);
  };

  const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <>
      {/* <NewsCategory /> */}
      <div className="mb-3">
        <h3 className="main-heading">
          Top Headlines from <i>{capitalize(props.category)}</i>
        </h3>
      </div>
      {loading && <Spinner />}
      {/* <div className='col-12 d-flex justify-content-between'>
            <button className='btn btn-dark' onClick={handelPrevClick} disabled={page <= 1}>Previes</button>
            <button className='btn btn-dark' disabled={state.page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={handelNextClick}>Next</button>
          </div> */}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={!loading && <h6 className="text-center">Loading...</h6>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="row"
      >
        {articles.map((element, index) => {
          return (
            <div className="col-md-6 col-lg-6 mx-auto d-flex" key={index + 1}>
              <NewList
                title={element.title}
                description={
                  element.description ? element.description.slice(0, 60) : ""
                }
                imgUrl={element.urlToImage}
                url={element.url}
                publicDate={element.publishedAt}
                author={element.author ? element.author : "No Author found"}
                source={element.source.name}
              ></NewList>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 12,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
