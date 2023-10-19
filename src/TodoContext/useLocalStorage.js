import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems = [];

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setItem(parsedItems);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem, loading, error, openModal, setOpenModal };
}

export { useLocalStorage };
