/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import User from './User';

const Users = ({state}) => {
    if (!state) {
      return <h1>Loading...</h1>;
    }
    if (!state.length) {
      return <h2>Sorry, No user found!</h2>;
    } else {
      return (
        <>
          {state.map((data) => {
            return (
              <Fragment key={data._id}>
                <User key={data.id} {...data} />
              </Fragment>
            );
          })}
        </>
      );
    }
  };
export default Users