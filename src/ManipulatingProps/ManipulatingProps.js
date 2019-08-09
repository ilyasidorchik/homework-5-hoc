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

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/


export const addLoggedInUser = () => {}

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = () => {}
