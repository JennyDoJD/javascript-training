class HttpClient {
  constructor(options = {}) {
    this.baseURL = options.baseURL || '';
  }

  /**
   * Send requests and receive JSON from the server.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  async fetchJSON(endpoint, options = {}) {
    const response = await fetch(this.baseURL + endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    if (!options.parseResponse && response.status !== 204) {
      return await response.json();
    }

    return undefined;
  }

  /**
   * Sends a GET request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  async get(endpoint, options = {}) {
    try {
      return await this.fetchJSON(endpoint, {
        ...options,
        method: 'GET',
      });
    } catch (error) {
      throw new Error('Error during GET request:', error);
    }
  }

  /**
   * Sends a POST request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} body - The request body (data).
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  async post(endpoint, body, options = {}) {
    try {
      return await this.fetchJSON(endpoint, {
        ...options,
        body: body ? JSON.stringify(body) : undefined,
        method: 'POST',
      });
    } catch (error) {
      throw new Error('Error during POST request:', error);
    }
  }

  /**
   * Sends a PUT request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} body - The request body (data).
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  async put(endpoint, body, options = {}) {
    try {
      return await this.fetchJSON(endpoint, {
        ...options,
        body: body ? JSON.stringify(body) : undefined,
        method: 'PUT',
      });
    } catch (error) {
      throw new Error('Error during PUT request:', error);
    }
  }

  /**
   * Sends a DELETE request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  async delete(endpoint, options = {}) {
    try {
      return await this.fetchJSON(endpoint, {
        ...options,
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error('Error during DELETE request:', error);
    }
  }
}

export { HttpClient };
