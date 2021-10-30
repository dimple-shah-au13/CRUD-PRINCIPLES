import  { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';


const initialValue = {
    photo:'',
    name: '',
    post: '',
    TestimonialDescription: '',
    createdAt: '',
    active:''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const {photo, name, post, TestimonialDescription, createdAt, active } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all'); 
    }

    

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Photo</InputLabel>
                <Input type="file" onChange={(e) => onValueChange(e)} name='photo' value={photo} id="my-input" />
                <img src={photo} alt=""  className={classes.image}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Post</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='post' value={post} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Testimonial-Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='TestimonialDescription' value={TestimonialDescription} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">createdAt</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdAt' value={createdAt} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Active</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='active' value={active} id="my-input" />
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;