import React from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';

export default class App extends React.Component {
  state = {
    imageName: '',
  };
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />;
        <ToastContainer autoClose={3000} />;
      </>
    );
  }
}
