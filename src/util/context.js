import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q=";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("business");
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    setLoading(true)
    axios
      .get(`${url}${searchTerm.split(" ").join('+')}&maxResults=40`)
      .then((response) => {
        setBooks(response.data.items);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  };

  useEffect(() => {
    const book = fetchBooks();
    return () => book;
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, books, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useBookSearch = () => {
  return useContext(AppContext);
};
