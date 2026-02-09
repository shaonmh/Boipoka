const getStoredBooks = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  } else {
    return [];
  }
};
const addToStoredDB = (id) => {
  const storedBookData = getStoredBooks();

  if (storedBookData.includes(id)) {
    alert(`Book with ID ${id} is already in the read list.`);
    return;
  } else {
    storedBookData.push(id);
    console.log(storedBookData);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoredBooks };
