class HttpClient {
  constructor(options = {}) {
    this._baseURL = options.baseURL || '';
    this._headers = options._headers || {};
  }

  /**
   * Send requests and receive JSON from the server.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  async _fetchJSON(endpoint, options = {}) {
    const response = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers,
    });

    if (!response.ok) throw new Error(response.statusText);

    if (options.parseResponse !== false && response.status !== 204)
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
    this._headers[key] = value;
    return this;
  }

  /**
   * Get the header set for the request.
   * @param {string} key - The name of the header.
   * @returns {string | undefined} - Returns the value of the header if exists, otherwise returns undefined.
   */
  getHeader(key) {
    this._headers[key];
  }

  /**
   * Sends a GET request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  /**
   * Sends a POST request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} body - The request body (data).
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  post(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'POST',
    });
  }

  /**
   * Sends a PUT request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} body - The request body (data).
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  put(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'PUT',
    });
  }

  /**
   * Sends a DELETE request to the specified endpoint.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} options - Options for the request.
   * @returns {Promise<any>} - A promise with the response from the server.
   */
  delete(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }
}

export { HttpClient };
