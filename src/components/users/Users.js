import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";

const Users = ({users, loading}) => {

    if(loading){
        return <Spinner/>;
    }
    else{
        return(
            <div style={userStyle}>
                {users.map(user => ( //loop through the user in the state 
                    <UserItem key={user.id} user={user}/> //pass the entire user object as a prop to UserItem
                ))}
            </div>);
    }
}

Users.propTypes = {
    users:PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired 
}

const userStyle = 
{
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users;