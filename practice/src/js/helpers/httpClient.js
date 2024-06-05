class HttpClient {
  constructor(options = {}) {
    this._baseURL = options.baseURL || '';
    this._headers = options._headers || {};
  }

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

  setHeader(key, value) {
    this._headers[key] = value;
    return this;
  }

  getHeader(key) {
    this._headers[key];
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  post(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'POST',
    });
  }

  put(endpoint, body, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: 'PUT',
    });
  }

  delete(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }
}

export { HttpClient };
