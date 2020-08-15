const TICKETS_KEY = "TICKETS_KEY";
const CATEGORIES_KEY = "CATEGORIES_KEY";

export function createCategory(category) {
  const categories = getCategoriesFromLS();
  const newCategory = {
    ...category,
    id: Date.now(),
    archived: false,
  };
  setLocalStorageItem(CATEGORIES_KEY, [...categories, newCategory]);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newCategory);
    }, 1000);
  });
}

export function updateCategory(id, newFields) {
  return new Promise((resolve, reject) => {
    const categories = getCategoriesFromLS();
    const newCategories = categories.map((i) =>
      i.id === id
        ? {
            ...i,
            ...newFields,
          }
        : i
    );
    setLocalStorageItem(CATEGORIES_KEY, newCategories);
    const newCategory = newCategories.find((i) => i.id === id);
    setTimeout(() => {
      resolve(newCategory);
    }, 1000);
  });
}

export function getCategories() {
  return new Promise((resolve, reject) => {
    const categories = getCategoriesFromLS();
    setTimeout(() => {
      resolve(categories);
    }, 10);
  });
}

export function createTicket(ticket) {
  const tickets = getTicketsFromLS();
  const newTicket = {
    ...ticket,
    id: Date.now(),
  };
  setLocalStorageItem(TICKETS_KEY, [...tickets, newTicket]);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newTicket);
    }, 1000);
  });
}

export function updateTicket(id, newFields) {
  return new Promise((resolve, reject) => {
    const tickets = getTicketsFromLS();
    const newTickets = tickets.map((i) =>
      i.id === id
        ? {
            ...i,
            ...newFields,
          }
        : i
    );
    setLocalStorageItem(TICKETS_KEY, newTickets);
    const newTicket = newTickets.find((i) => i.id === id);
    setTimeout(() => {
      resolve(newTicket);
    }, 1000);
  });
}

export function getTickets() {
  return new Promise((resolve, reject) => {
    const tickets = getTicketsFromLS();
    setTimeout(() => {
      resolve(tickets);
    }, 1000);
  });
}

function setLocalStorageItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getTicketsFromLS() {
  const data = localStorage.getItem(TICKETS_KEY);
  return data ? JSON.parse(data) : [];
}
function getCategoriesFromLS() {
  const data = localStorage.getItem(CATEGORIES_KEY);
  return data ? JSON.parse(data) : [];
}
