import {Router} from '@reach/router';
import AuthorsTable from './components/AuthorsTabel';
import CreateAuthors from './components/CreateAuthors';
import React, {useState} from 'react';
import UpdatedAuthor from './components/UpdatedAuthor';
import DeleteAuthor from './components/DeleteAuthor';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthorsTable path="/" />
        <CreateAuthors path="/new" />
        <UpdatedAuthor path="author/:id/edit" />
        <DeleteAuthor path="author/:id/delete"/>
      </Router>
    </div>
  );
}

export default App;
