import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';


const EditStatus = (props) => {
  const [status, setStatus] = useState(null)
  const { id } = useParams()
  const history = useHistory()



  useEffect(() => {
    axios
      .get(`http:///localhost:4002/status/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setStatus(res.data)
      })
      .catch((err) => console.error(err));
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4002/status/${id}`, status, {
      headers: {
        'x-auth-token': localStorage.getItem("userToken")
      }
    }).then(res => history.push('/home'))
  }

  return (
    <div>
      {status && (
        <form onSubmit={handleSubmit}>
          <label className='form-label' htmlFor="title">
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={status.title}
            onChange={(e) =>
              setStatus({ ...status, [e.target.id]: e.target.value })
            }
          />


          <div className='mb-3'>
            <label className='form-label' htmlFor="details">
              details
            </label>
            <input
              className='form-control'
              type='text'
              id='details'
              name='details'
              value={status.details}
              onChange={(e) =>
                setStatus({ ...status, [e.target.id]: e.target.value })
              }
            />
          </div>

          <input
            type='submit'
            className='btn btn-success'
            value="Update todo"
          />
        </form>
      )}
    </div>
  )
}
export default EditStatus