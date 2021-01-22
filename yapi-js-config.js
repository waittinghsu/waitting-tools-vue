const path = require('path');

let loadJson = {};
try {
  loadJson = require(path.resolve(process.cwd(), `src/codegen/${process.env.npm_lifecycle_event.split(':').pop()}_json2service.json` ))
  const url = new URL(loadJson.remoteUrl);
  loadJson.token = url.searchParams.get('token');
  loadJson.token = url.searchParams.get('pid');
  loadJson.token = url.origin;
  loadJson.d = process.env.npm_lifecycle_event.split(':');
}

const server = loadJson.server || 'https://wyapi.hw.codes';
const token = loadJson.token || 'ab6d3e94bd7e990d40cc50b1876e8551d0735090c8fc912d07bad592a54aa1df';
const projectId = loadJson.id || '73';

const globalCode = '';

const methodName = (apipath, method) => {
  const apipaths = apipath.replace(/-/g, '/').split('/').filter(Boolean);
  let name = [];
  name.push(method.toLowerCase());
  const filterString = ['{', '}', 'api', 'v1', 'mock', ':'];
  
  if (apipaths.length > 1) {
    name.api.Paths.reduce((acc, path) => {
      filterString.some(str => path.includes(str)) || acc.push(path);
      return acc;
    }, []);
  } else if (apipaths.length === 1) {
    name = [].concat(name, [apipaths[0]]);
  }
  name = name.map(str => {
    let tempStr = '';
    // eslint-disable-next-line no-useless-escape
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
