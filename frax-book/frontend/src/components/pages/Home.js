import { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import axios from 'axios'
import CreateBlog from '../forms/CreateBlog'
import { useHistory } from 'react-router-dom'


const Home = (props) => {
    const [blogs, setBlogs] = useState(null)
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:4001/blog', {
            headers: {
                'x-auth-token': localStorage.getItem("userToken")
            }
        }).then(res => {
            setBlogs(res.data)
            console.log(res.data);
        })
            .catch(err => console.error(err))
    }, [])

    const handleDelete = (blog) => {
        axios
            .delete(`http://localhost:4001/blog/${blog._id}`, {
                headers: {
                    "x-auth-token": localStorage.getItem("userToken"),
                },
            }).then((res) => {
                console.log(res.data);
                setBlogs([...blogs.filter((t) => t._id !== blog._id)]);
            })
            .catch((err) => console.error(err))
    }


    const handleUpdate = (blog) => {
        history.push(`/update/${blog._id}`)
    }

    return (
        <div>
            <NavBar user={props.user} />
            <h1>Home Page</h1>

            <CreateBlog setBlogs={setBlogs} blogs={blogs} />

            {blogs &&
                blogs.map(blog => (
                    <div key={blog._id}>
                        <h6>{blog.title}</h6>
                        <h6>

                            {blog.details}{" "}

                           

                                <span
                                    className='btn btn-danger'
                                    style={{ marginRight: '5px' }}
                                    onClick={() => handleDelete(blog)}
                                >
                                    X
                                </span>
                           

                           
                                <span
                                    className='btn btn-info'
                                    onClick={() => handleUpdate(blog)}
                                >
                                    Update
                                </span>
                            
                        </h6>

                    </div>
                ))}
        </div>
    )
}

export default Home