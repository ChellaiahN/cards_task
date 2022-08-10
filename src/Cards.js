import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes , faCheck} from '@fortawesome/free-solid-svg-icons'

function Cards(props) {
  return (
    
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {props.data.name}
                </h5>
                <h6 className="card-price text-center">
                  ${props.data.price}<span className="period">/month</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  {props.data.features.map((a)=>{
                    return (
                    <li className = {!a.isEnable ? "text-muted" : ""}>
                    <span className="fa-li">
                        {
                            a.isEnable ? <FontAwesomeIcon icon = {faCheck} /> : <FontAwesomeIcon icon = {faTimes} />
                        }
                    </span> 
                    {a.title}                   
                  </li>
                    );
                  })}
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
          
  );
}

export default Cards;
