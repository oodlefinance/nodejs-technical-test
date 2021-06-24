import { gql } from 'apollo-server';

const Book = gql`
  type Book {
    title: String
    author: String
  }
`;

export { Book };