import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer autoClose={2000} />;
      </>
    );
  }
}
