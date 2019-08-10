import React, { Component } from 'react';

export const wrapWithAbsolutePosition = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div style={{position: 'absolute'}}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};