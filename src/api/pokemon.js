import { API_HOST } from "../utils/constants";

/**
 * Here are the functions that will communicate with the API to
 * call them in our components
 */

export const getPokemonsApi = async () => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`; // The url is built
    const response = await fetch(url); // HTTP request to the server is executed
    const resolve = await response.json(); // The data is retrieved in a json
    return resolve;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
