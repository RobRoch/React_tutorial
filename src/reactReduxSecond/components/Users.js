import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions/userActions'

export class Users extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  isFetched = (fetched) => {
    return fetched ? 'Yes' : 'No';
  }
  isError = (err) => {
    return err ? <h3>Error: {err}</h3> : '';
  }

  render() {
    const slice = this.props.count >= 0 ? this.props.count : 0;
    const users = this.props.users.slice(0,slice).map(user => 
      <div key={user.id} className='user'>
        <img className='user__image' src={user.avatar_url} alt={user.login}></img>
        <h4 className='user__title'>{user.id} : {user.login}</h4>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer"><button className='user__button'>Profile</button></a>
      </div>
    );

    return (
      <div className='users__part part'>
        <h2>Here will be fetched Users</h2>
        <span>Delayed few seconds.</span>
        <h3>Fetching : {this.isFetched(this.props.fetching)}</h3>
        <h3>Fetched : {this.isFetched(this.props.fetched)}</h3>
        {this.isError(this.props.error)}
        <div className='users__wrapper'>
          {users}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  fetched : state.userReducer.fetched,
  fetching : state.userReducer.fetching,
  users : state.userReducer.users,
  error : state.userReducer.error,
  count: state.countReducer.count
})

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
