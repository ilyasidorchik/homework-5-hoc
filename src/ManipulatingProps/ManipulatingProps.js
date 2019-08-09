import React, { Component } from 'react';
import { getLoggedInUser } from '../utils'
import { render } from '@testing-library/react';

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { loading } = this.props;

      return (
        loading
        ? <LoadingSpinner />
        : <WrappedComponent {...this.props} />
      )
    };
  }
}

export const addLoggedInUser = (WrappedComponent) => {
  return class extends Component {
    render() {
      let { user, ...passThroughProps } = this.props;
      user = getLoggedInUser();

      return (
        <WrappedComponent user={user} {...passThroughProps} />
      )
    }
  }
}

export const withSort = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { books } = this.props;

      books.sort((a, b) => {
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
        
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

      return (
        <WrappedComponent books={books} />
      )
    }
  }
}