import React from 'react';

export const withRedBackground = (WrappedComponent) => {
  return class Enhancer extends WrappedComponent {
    render() {
      let renderTree = super.render();
      renderTree = (
        <button style={{background: 'red'}}></button>
      );
      return renderTree;
    }
  }
};