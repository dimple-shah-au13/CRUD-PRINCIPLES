import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';
//import photo from '../Assets/Images/about.jpg';

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

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { photo, name, post, TestimonialDescription, createdAt, active } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        console.log(response);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Photo</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='photo' value={photo} id="my-input" aria-describedby="my-helper-text" />
                <img src={photo} alt="" className={classes.image}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Post</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='post' value={post} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Testimonial-Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='TestimonialDescription' value={TestimonialDescription} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">CreatedAt</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='createdAt' value={createdAt} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Active</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='active' value={active} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;