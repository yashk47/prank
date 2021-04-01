import ReactPlayer from "react-player";
import "./App.css";
import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
} from "mdbreact";

function App() {
  const [muted, setMuted] = React.useState(false);
  const [modal, setModal] = React.useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMuted(true);
  //   }, 2000);
  // }, []);
  const onModalClose = () => {
    setModal(false);
    setMuted(true);
  };

  return (
    <div className="App">
      {!muted && (
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="auto" md="12">
              <img src="Screenshoa.png" className="img-fluid" alt="" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
      {!muted && (
        <MDBContainer>
          <MDBModal isOpen={modal} toggle={onModalClose}>
            <MDBModalHeader toggle={onModalClose}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Treat From "Dushyant Sharma" Please Add Your food in Cart
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={onModalClose} color="primary">
                Continue
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      )}
      {!modal && (
        <ReactPlayer
          controls
          url="videoplayback.mp4"
          width="100%"
          height="100%"
          playing={muted}
        />
      )}
      {/* <video muted={muted} autoPlay controls>
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
    </div>
  );
}

export default App;
