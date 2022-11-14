import ApiListBook from "./ApiListBook";
const dataApi = ApiListBook.books;
export const getCategory = () => [...new Set([...dataApi]?.map(el => el.category))];
 