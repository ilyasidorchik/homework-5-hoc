import React, { Component } from 'react';

export const withDisplayName = (WrappedComponent) => {
  class WithDisplayName extends Component {
    render() {
      return (
        <WrappedComponent />
      )
    };
  };

  WithDisplayName.displayName = `HOC${getDisplayName(WrappedComponent)}`;

  return WithDisplayName;
}

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || 'Component';
}