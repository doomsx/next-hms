"use client"; // Required for Context in the App Router

import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();
const LINK = process.env.NEXT_PUBLIC_API_LINK;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${LINK}/users`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error, fetchEmployees }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
