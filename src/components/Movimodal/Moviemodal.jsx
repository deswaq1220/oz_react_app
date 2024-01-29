import React, { useRef } from "react";
import { imageBasePath } from "../../contants";
import './Moviemodal.css'
import useOnClickOutside from "../../hooks/useOnClickOutside";
function Moviemodal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_data,
  vote_average,
  setModalOpen,
}) {

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setModalOpen(false)
  })
  
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

          <img
            className="modal_poster-img"
            src={`${imageBasePath}${backdrop_path}`}
            alt="modal_poster_img"
          ></img>
          <div className="modal_content">
            <p className="modal_details">
              <span>100% for you</span>
              {release_date ? release_date : first_air_data}
            </p>
            <h2 className="modal_title">
              {title ? title : name}
            </h2>
            <p className="modal_overview">평점: {vote_average}</p>
            <p className="modal_overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviemodal;
