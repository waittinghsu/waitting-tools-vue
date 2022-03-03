const path = require('path');

let loadJson = {};

try {
  loadJson = require(path.resolve(process.cwd(), `src/codegen/${process.env.npm_lifecycle_event.split(':').pop()}_json2service.json` ));
  const url = new URL(loadJson.remoteUrl);
  loadJson.token = url.searchParams.get('token');
  loadJson.token = url.searchParams.get('pid');
  loadJson.token = url.origin;
  loadJson.d = process.env.npm_lifecycle_event.split(':');
} catch (e){

}

const server = loadJson.server || 'http://localhost:40001';

const token = loadJson.token || '97aa3627b0bb1f4f4980ad2b36a99439fa280fab3028873ec260f1dd91c934b1';

const projectId = loadJson.id || '11';

const methodName = (apipath, method) => {
  const apipaths = apipath.replace(/:(\w+)/g, 'by-$1').replace(/{\w+}/g, 'by-$1').replace(/[-_]/g, '/').split('/').filter(Boolean);
  const filterString = ['{',
    '}',
    'api',
    'v1',
    'mock',
    ':'];

  let name = [];

  if (apipaths.length > 1) {
    name = apipaths.reduce((acc, path) => {
      filterString.some(str => path.includes(str)) || acc.push(path);
      return acc;
    }, []);
  } else if (apipaths.length === 1) {
    name = [].concat(name, [apipaths[0]]);
  }
  name = name.map(str => {
    let tempStr = '';

    tempStr = str.replace(/[^a-zA-Z0-9\_]+/g, '');
    tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
    return tempStr;
  });
  name = [method.toLowerCase(), ...name];
  return name.join('');
};

const globalCode = '';

const template = '';

const moduleMode = true;

const distFile = null;

const distFolder = path.resolve(process.cwd(), process.env.API_GEN_FOLDER || 'src/apiService');

const useCustomHttpRequest = true;

const httpRequestPath = '@';

module.exports = {
  server,
  token,
  projectId,
  globalCode,
  methodName,
  template,
  moduleMode,
  distFile,
  distFolder,
  useCustomHttpRequest,
  httpRequestPath,
};
