import React, { Component } from 'react';

function HOCMockComponent(WrappedComponent) {
  return class extends Component {
    static displayName = 'MockComponent';

    render() {
      return (
        <WrappedComponent />
      )
    };
  };
}

class Stateless extends Component {
  render() {
    return <p>Text</p>;
  }
}

Stateless = HOCMockComponent(Stateless);

export const withDisplayName = (HOCMockComponent) => {}