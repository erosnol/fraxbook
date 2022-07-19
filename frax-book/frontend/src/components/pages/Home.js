import { useEffect, useState } from 'react'
import NavBar from '../layout/NavBar'
import axios from 'axios'
import CreateStatus from '../forms/CreateStatus'
import { useHistory } from 'react-router-dom'


const Home = (props) => {
    const [statuses, setStatuses] = useState(null)
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:4001/status', {
            headers: {
                'x-auth-token': localStorage.getItem("userToken")
            }
        }).then(res => {
            setStatuses(res.data)
            console.log(res.data);
        })
            .catch(err => console.error(err))
    }, [])

    const handleDelete = (blog) => {
        axios
            .delete(`http://localhost:4001/status/${status._id}`, {
                headers: {
                    "x-auth-token": localStorage.getItem("userToken"),
                },
            }).then((res) => {
                console.log(res.data);
                setStatuses([...statuses.filter((t) => t._id !== status._id)]);
            })
            .catch((err) => console.error(err))
    }


    const handleUpdate = (blog) => {
        history.push(`/update/${status._id}`)
    }

    return (
        <div>
            <NavBar user={props.user} />
            <h1>Home Page</h1>

            <CreateStatus setStatuses={setStatuses} statuses={statuses} />

            {statuses &&
                statuses.map(status => (
                    <div key={status._id}>
                        <h6>{status.title}</h6>
                        <h6>

                            {status.details}{" "}



                            <span
                                className='btn btn-danger'
                                style={{ marginRight: '5px' }}
                                onClick={() => handleDelete(status)}
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