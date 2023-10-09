import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllGalleries } from "../../../store/galleries/selectors";
import { performFetchGalleries } from "../../../store/galleries/slice";

const AllGalleries = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(selectAllGalleries);

  useEffect(() => {
    console.log('balbla')
    dispatch(performFetchGalleries());
  }, []);

  return (
    <div>
      <h1>All Galleries</h1>
      <div className="alert alert-info" style={{ display: galleries.length === 0 ? "block" : "none" }}>
        <p>No galleries found!</p>
      </div>
      <div className="galleries">
        {galleries.map((gallery) => (
          <div className="jumbotron text-center" key={gallery.id}>
            <img src={gallery.images[0].url} alt={gallery.title} />
            <h5 className="display-5 my-4">
              <Link to={`/gallery/${gallery.id}`} className="router-link">
                {gallery.name}
              </Link>
            </h5>
            <Link to={`/author/${gallery.user.id}`} className="router-link">
              <strong>Author:</strong> {gallery.user.name}
            </Link>
            <br />
            <small>Created at: {gallery.created_at}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGalleries;
