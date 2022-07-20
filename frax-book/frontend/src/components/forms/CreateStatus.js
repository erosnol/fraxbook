import axios from 'axios';
import { useState } from 'react';

const CreateStatus = (props) => {
    const [statusData, setFormData] = useState({
        title: '',
        details: ''
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
            <h3>Create Status</h3>
            <form onSubmit={handleSubmit}>

                <label className='form-label' htmlFor="title">
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
                />


                <div className='mb-3'>
                    <label className='form-label' htmlFor="details">
                        Details
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        id='details'
                        name='details'
                        value={statusData.details}
                        onChange={(e) =>
                            setFormData({ ...statusData, [e.target.id]: e.target.value })}
                    />
                </div>
                <input type='submit' className='btn btn-success' />
            </form>
        </div>
    )
}
export default CreateStatus
