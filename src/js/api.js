import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/';

/**
 * Gets the reviews from the server
 * @returns {Promise<Array>} promise with reviews data.
 * @throws {Error} if there's an error during fetching.
 */

export const getReviews = async () => {
  try {
    const { data } = await axios.get('/reviews');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Posts user's request to the server
 * @param {object} userData object containing user email and comment
 * @param {string} userData.email user's email
 * @param {string} userData.comment user's comment
 * @returns {Promise<object>} object containing title and message to display in UI
 * @throws {Error} if there's an error during fetching
 */

export const postRequest = async userData => {
  try {
    const { data } = await axios.post('/requests', userData);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
