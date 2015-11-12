import dtHttp from 'dtHttp';

const api = new dtHttp(`http://kancolle.io:8000/v1/`);
api.setHeader(`Content-Type`, `application/json`);

export default api;
