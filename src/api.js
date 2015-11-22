import dtHttp from 'dtHttp';

// const api = new dtHttp(`http://api-dev.kancolle.io/api/`);
const api = new dtHttp(`http://192.168.1.83:8000/api/`);
api.setHeader(`Accept`, `application/json`);
api.setHeader(`Content-Type`, `application/json`);

export default api;
