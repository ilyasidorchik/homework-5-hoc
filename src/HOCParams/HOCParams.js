import React, { Component } from 'react';

export const withGivenProps = ({data}) => (WrappedComponent) => {
  return class extends Component {
    render() {
        return (
            <WrappedComponent data={data} {...this.props} />
        )
    }
  }
};