import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css';
import { shuffle, sample } from 'underscore';

const authors = [

    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/mark-twain.jpg',
        imageSource: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/400px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/joseph-conrad.png',
        imageSource: 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Joseph_Conrad.PNG/350px-Joseph_Conrad.PNG',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jk-rowling.jpg',
        imageSource: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/440px-J._K._Rowling_2010.jpg',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephen-king.jpg',
        imageSource: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charles-dickens.jpg',
        imageSource: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/440px-Dickens_Gurney_head.jpg',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/william-shakespeare.jpg',
        imageSource: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/500px-Shakespeare.jpg',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }

];
function getTurnData(authors){
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  } , []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
        author.books.some((title) =>
            title === answer))
  };

}

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(
    <AuthorQuiz {...state}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
