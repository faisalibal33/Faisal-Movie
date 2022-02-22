import {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';

const Card = ({apimovie}) => {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, setId] = useState('')
    const [idnumber, setIdnumber] = useState ('')

    const seedetail = () => {
        fetch(`https://www.omdbapi.com/?apikey=88bf0a87&i=${id}`)
        .then(response => response.json())
        .then(data => {setIdnumber(data)})
        .catch(err => {console.log("error get movie detail")})
    }

    return (
        <>
        <div className='container'>
            <div className='row row-cols-md-4'>
                {apimovie && apimovie.map((data, index) => {
                    return (                   
                        <div key={index} className='mb-3'>
                            <div className="card" >
                                <img src={data.Poster} className="card-img-top" alt="Poster.."/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.Title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{data.Year}</h6>
                                    <p onMouseEnter={() => {setId(data.imdbID)}} onClick={() => {setId(data.imdbID);seedetail(); handleShow()}} className="card-link pointer blue">See Detail</p>
                                </div>
                            </div>
                         </div>
                    )
                })}
            </div>
        </div>
        <>
        <Modal size="lg" show={showModal} onHide={handleClose}>
            <Modal.Body>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={idnumber.Poster} alt="poster.."/>
                        </div>
                        <div className='col-md-8'>
                            <ul className='list-group'>
                                <li className='list-group-item'><h3>{idnumber.Title}</h3></li>
                                <li className='list-group-item'>Released: {idnumber.Released}</li>
                                <li className='list-group-item'>Genre: {idnumber.Genre}</li>
                                <li className='list-group-item'>Director: {idnumber.Director}</li>
                                <li className='list-group-item'>Actors: {idnumber.Actors}</li>
                                <li className='list-group-item'>Plot: "{idnumber.Plot}"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    </>
    )
}

export default Card;