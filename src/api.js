import dtHttp from 'dtHttp';

const api = new dtHttp(`http://kancolle.io/api/`);
api.setHeader(`Content-Type`, `application/json`);

export default api;
