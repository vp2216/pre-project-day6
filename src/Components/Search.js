import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import load from "./spin.gif";

function Search() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setData([]);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=7d4dee06a13ee29116e3d92bf9f86064&nojsoncallback=1&safe_search=1&extras=url_m,url_n,url_z,url_c,url_l,url_o&page=${page}&per_page=24&tags=${location.state.tag}`
      )
      .then((res) => setData(res.data.photos.photo));
  }, [location.state.tag, page]);

  useEffect(() => {
    setPage(1);
  }, [location.state.tag]);

  return (
    <div className="display">
      <div className="displayhead">{location.state.tag} Images</div>
      {data.length !== 0 ? (
        <div className="imageholder">
          {data.map((data, i) => {
            return (
              <span key={i}>
                <img
                  src={
                    data.url_c ||
                    data.url_l ||
                    data.url_o ||
                    data.url_z ||
                    data.url_n ||
                    data.url_m
                  }
                  className="images"
                  alt="flickr"
                />
              </span>
            );
          })}
        </div>
      ) : (
        <img src={load} className="load" alt="loading" />
      )}
      <span className="pagination">
        <button
          className="btn"
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          {"<"}
        </button>
        <div className="page">{page}</div>
        <button className="btn" onClick={() => setPage(page + 1)}>
          {">"}
        </button>
      </span>
    </div>
  );
}

export default Search;
