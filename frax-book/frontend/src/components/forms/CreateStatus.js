import axios from 'axios';
import { useState } from 'react';

const CreateBlog = (props) => {
    const [blogData, setFormData] = useState({
        title: '',
        details: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4001/blog', blogData, {
            headers: {
                'x-auth-token': localStorage.getItem("userToken")
            }
        }).then(res => props.setBlogs([...props.blogs, res.data]))
    }

    return (

        <form onSubmit={handleSubmit}>
           
                <label className='form-label' htmlFor="title">
                    Title
                </label>
                <input
                    className='form-control'
                    type='text'
                    id='title'
                    name='title'
                    value={blogData.title}
                    onChange={(e) =>
                        setFormData({ ...blogData, [e.target.id]: e.target.value })}
                />
         

            <div className='mb-3'>
                <label  className='form-label' htmlFor="details">
                </label>
                <input
                    className='form-control'
                    type='text'
                    id='details'
                    name='details'
                    value={blogData.details}
                    onChange={(e) =>
                        setFormData({ ...blogData, [e.target.id]: e.target.value })}
                />
            </div>
            <input type='submit' className='btn btn-success' />
        </form>

    )
}
export default CreateBlog
