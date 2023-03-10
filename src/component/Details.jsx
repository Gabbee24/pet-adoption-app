import { useState, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { useGetPetQuery } from "./petApiService";
import ErrorBoundary from "./ErrorBoundary";
import { useDispatch } from "react-redux";
import { adopt } from "./reduxSlice/adoptedPedSlice";
// import fetchPet from "./fetchPet";
// import AdoptedPetContext from "./AdoptedPetContext";
import Carousel from "./Carousel";
import Modal from "./Modal";

// const Modal = lazy(() => import('./Modal') );

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const {id} = useParams();
  const { isLoading, data: pet} = useGetPetQuery(id);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader"></h2>
      </div>
    );
  }

  return (
    <div className="details">
      <Carousel images={pet.images}/>
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} • {pet.breed} • {pet.city} • {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {pet.name}</h1>
                  <div className="buttons">
                    <button 
                      onClick={() => {
                        dispatch(adopt(pet));
                        navigate('/');
                      }}
                    
                    >
                      Yes
                    </button>
                    <button onClick={() => setShowModal(false)}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </h2>
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props){
  return (
    <ErrorBoundary>
      <Details {...props}/>
    </ErrorBoundary>
  );
};

export default DetailsErrorBoundary;