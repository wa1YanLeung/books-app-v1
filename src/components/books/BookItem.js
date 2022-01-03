import React, {useState} from 'react'
import Tooltip from "react-simple-tooltip"

const BookItem = ({item}) => {

  const [descModalOpen, setDescModalOpen] = useState(false);
  const authorsArr = item.volumeInfo.authors || [];
  const len = authorsArr.length;
  
  const desc = item.volumeInfo.description;
 
  let descDisplay;
  if (desc === "" || desc == null) {
    descDisplay = 'N/A';
  } else {
    descDisplay = desc;
  }

  // click on the div and press ESC to close the modal
  const handleKeyDown = (e) => {
  if(e.key === 'Escape'){
    setDescModalOpen(false);
  }
}

  return (
    <div className='book-card'>
      <div className='card-top'>
        <h2 className='title'>Title: {item.volumeInfo.title}</h2>
        <Tooltip
          content="Description"
          arrow={5}
          background="#fff"
          border="#000"
          color="#000"
          padding={5}
          placement="bottom"
        >
          <button className='search-detail-btn' 
            onClick={() => {
            setDescModalOpen(true);
            }}>
            <i className='fas fa-ellipsis-v'></i>
          </button>
        </Tooltip>
      </div>
      <ul>
        <li>
          <strong>First Author: </strong>{len>=1?authorsArr[0]: 'N/A'}
        </li>
        <li>
          <strong>Second Author: </strong>{len>=2?authorsArr[1]: 'N/A'}
        </li>
        <li>
          <strong>Third Author: </strong>{len>=3?authorsArr[2]: 'N/A'}
        </li>
      </ul>
      {descModalOpen &&
        <div className="desc modalContainer" tabIndex="2" onKeyDown={handleKeyDown}>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setDescModalOpen(false);
              }}
            >
            X
            </button>
          </div>
          <h2>Description</h2>
          <p className="desc-p">{descDisplay}</p>
        </div>}
     
    </div>
  )
}

export default BookItem
