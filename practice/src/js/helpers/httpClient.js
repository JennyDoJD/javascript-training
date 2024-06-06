class HttpClient {
  constructor(options = {}) {
    this.baseURL = options.baseURL || '';
    this.headers = options.headers || {};
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
      headers: this.headers,
    });

    if (!response.ok) throw new Error(response.statusText);

    if (!options.parseResponse && response.status !== 204)
      return response.json();

    return undefined;
  }

  /**
   * Set a header for the request.
   * @param {string} key - The name of the header.
   * @param {string} value - The value of the header.
   * @returns {HttpClient} - Returns the HttpClient object itself for chaining.
   */
  setHeader(key, value) {
    this.headers[key] = value;
    return this;
  }

  /**
   * Get the header set for the request.
   * @param {string} key - The name of the header.
   * @returns {string | undefined} - Returns the value of the header if exists, otherwise returns undefined.
   */
  getHeader(key) {
    this.headers[key];
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
