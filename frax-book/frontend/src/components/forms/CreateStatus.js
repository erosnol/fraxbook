import axios from 'axios';
import { useState } from 'react';

const CreateStatus = (props) => {
    const [statusData, setFormData] = useState({
        title: '',
        details: '',
        created_by: '',
        created_at:''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4002/status', statusData, {
            headers: {
                'x-auth-token': localStorage.getItem("userToken")
            }
        }).then(res => props.setStatuses([...props.statuses, res.data]))
    }

    return (
        <div>
            <h4 className='text-light'>Feed</h4>
            <form onSubmit={handleSubmit}>

                {/* <label className='form-label text-light' htmlFor="title">
                    Title
                </label>
                <input
                    className='form-control'
                    type='text'
                    id='title'
                    name='title'
                    value={statusData.title}
                    onChange={(e) =>
                        setFormData({ ...statusData, [e.target.id]: e.target.value })}
                /> */}


                <div className='mb-3'>
                    <label className='form-label text-light' htmlFor="details">
                    Details
                    </label>
                    <input 
                       user={props.user}
                        className='form-control'
                        type='text'
                        id='details'
                        name='details'
                        value={statusData.details} 
                        onChange={(e) =>
                            setFormData({ ...statusData, [e.target.id]: e.target.value })}
                    />
                </div>
                <input type='submit' value='Update Status' className='btn btn-secondary btn-lg float-end' />
            </form>
        </div>
    )
}
export default CreateStatus
