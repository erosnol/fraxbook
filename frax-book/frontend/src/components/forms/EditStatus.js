import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

const UpdateBlog = (props) => {
  const [blog, setBlog] = useState(null)
  const { id } = useParams()
  const history = useHistory()



  useEffect(() => {
    axios
      .get(`http:///localhost:4001/blog/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setBlog(res.data)
      })
      .catch((err) => console.error(err));
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4001/blogs/${id}`, blog, {
      headers: {
        'x-auth-token': localStorage.getItem("userToken")
      }
    }).then(res => history.push('/home'))
  }

  return (
    <div>
      {blog && (
        <form onSubmit={handleSubmit}>
          <label className='form-label' htmlFor="title">
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={blog.title}
            onChange={(e) =>
              setBlog({ ...blog, [e.target.id]: e.target.value })
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
              value={blog.details}
              onChange={(e) =>
                setBlog({ ...blog, [e.target.id]: e.target.value })
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
export default UpdateBlog