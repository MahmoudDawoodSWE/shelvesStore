// useStorage.js
import { useState, useEffect } from "react";

export default function useStorage(storageKey, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(storageKey);
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      console.error("Error retrieving data from storage:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.storageArea === localStorage && event.key === storageKey) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageKey]);

  const setValueInLocalStorage = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;
      setStoredValue(valueToStore);
      localStorage.setItem(storageKey, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting data to storage:", error);
    }
  };

  return [storedValue, setValueInLocalStorage];
}
