import "./styles.css"
import {useState} from "react"
export default function Navbar() {
  const [modalShown, toggleModal] = useState(false);

    function Modal({ children, shown, close }) {
        return shown ? (
          <div
            className="modal-backdrop"
            onClick={() => {
              close();
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        ) : null;
      }
    
    return (
        <>
            <div className="navbar">
            <Modal
                    shown={modalShown}
                    close={() => {
                      toggleModal(false);
                    }}
                  >
                    <div>Select your city</div>
                   
                  </Modal>
                <div> <i class="fa-solid fa-share-nodes"></i> SharePal</div>
                <div className="navbar-middle">
                    <div
                          onClick={() => {
                            toggleModal(!modalShown);
                          }}
                    >Bangalore <i class="fa-solid fa-angle-down"></i></div>
                    <div className="navbar-items">
                    <i class="fa-solid fa-motorcycle"></i>   Trekking
                    </div>
                    <div className="navbar-items">
                    <i class="fa-solid fa-motorcycle"></i>    Riding
                    </div>
                    <div className="navbar-items">
                    <i class="fa-solid fa-motorcycle"></i>    GoPro
                    </div>
                    <div className="navbar-items">
                    <i class="fa-solid fa-motorcycle"></i>   DSLR
                    </div>
                    <div className="navbar-items">
                    <i class="fa-solid fa-motorcycle"></i>     PS4/Xbox
                    </div>
                    <div className="navbar-items">
                    <i class="fa-solid fa-motorcycle"></i>   Games
                    </div>

                </div>
                <div className="navbar-store">
                    <div>
                    <i class="fa-brands fa-app-store-ios"></i>
                    </div>
                </div>
                <div>
                    <div className="navbar-login">Login/signup</div>
                </div>

            </div>
        </>
    )
}