import axios from "axios";

const getSessionId = () => {
  return localStorage.getItem("session_id");
}

const getAll = () => {
  const session_id = getSessionId();

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
    }
  });

  const config = {
    method: 'POST',
    url: '/api/empresas_contratadoras/getAll',
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data
  };

  return axios(config);
};

const get = id => {
  const session_id = getSessionId();

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
    }
  });

  const config = {
    method: 'POST',
    url: `/api/empresas_contratadoras/get/${id}`,
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data
  };

  return axios(config);
};

const findByEmpresa = empresa => {
  const session_id = getSessionId();

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
      "data": {
        "empresa": empresa
      }
    }
  });

  const config = {
    method: 'POST',
    url: `/api/empresas_contratadoras/findByEmpresa`,
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data
  };

  return axios(config);
};

const create = data => {
  const session_id = getSessionId();

  var data_to_send = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
      "data": {
        "name":data.name,
        "empresa": data.empresa,
        "contrato": data.contrato,
        "pago":data.pago,
        "horas":data.horas,
        "description":data.description
      }
    }
  });

  var config = {
    method: 'POST',
    url: '/api/empresas_contratadoras/create',
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data_to_send
  };

  return axios(config);
};

const update = (id, data) => {
  const session_id = getSessionId();

  var data_to_send = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
      "data": {
        "name":data.name,
        "empresa": data.empresa,
        "contrato": data.contrato,
        "pago":data.pago,
        "horas":data.horas,
        "description":data.description
      }
    }
  });

  var config = {
    method: 'POST',
    url: `/api/empresas_contratadoras/update/${id}`,
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data_to_send
  };

  return axios(config);
};

const remove = id => {
  const session_id = getSessionId();

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
    }
  });

  var config = {
    method: 'POST',
    url: `/api/empresas_contratadoras/remove/${id}`,
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data
  };

  return axios(config);
};

const removeAll = () => {
  const session_id = getSessionId();

  const data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
    }
  });

  var config = {
    method: 'POST',
    url: `/api/empresas_contratadoras/removeAll`,
    headers: {
      'Content-Type': 'application/json',
      "X-Openerp-Session-Id": session_id,
    },
    data: data
  };

  return axios(config);
};

const initSession = () => {

  var data = JSON.stringify({
    "jsonrpc": "2.0",
    "params": {
      "db": process.env.REACT_APP_ODOO_DB,
      "login": process.env.REACT_APP_ODOO_LOGIN,
      "password": process.env.REACT_APP_ODOO_PASSWORD
    }
  });
  
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_ODOO_BASEURL}/web/session/authenticate`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios(config);
};

const Empresas_contratadorasService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByEmpresa,
  initSession
};

export default Empresas_contratadorasService;
