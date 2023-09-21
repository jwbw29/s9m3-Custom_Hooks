import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  return [darkMode, setDarkMode];
}
