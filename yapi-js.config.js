const path = require('path');

const server = 'https://wyapi.hw.codes';
const token = 'ab6d3e94bd7e990d40cc50b1876e8551d0735090c8fc912d07bad592a54aa1df';
const projectId = '73';

const globalCode = '';

const methodName = (apipath, method) => {
  // console.log('api name: ', apipath);
  const apipaths = apipath.replace(/-/g, '/').split('/');
  let name = [];
  name.push(method.toLowerCase());
  if (apipaths.length > 1) {
    for (let i = 1; i <= apipaths.length; i++) {
      if (
        apipaths.length - i > 1 &&
        !apipaths[i + 1].includes('{') &&
        !apipaths[i + 1].includes('}') &&
        !apipaths[i + 1].includes('deleted') &&
        !apipaths[i + 1].includes(projectId) &&
        !apipaths[i + 1].includes('mock')
      ) {
        name.push(apipaths[i + 1]);
      }
    }
    // console.log('apipaths', apipaths);
    // console.log('name', name);
  } else if (apipaths.length === 1) {
    name = [].concat(name, [apipaths[0]]);
  }
  name = name.map((str, index) => {
    let tempStr = '';
    // eslint-disable-next-line no-useless-escape
    tempStr = str.replace(/[^a-zA-Z0-9\_]+/g, '');
    if (index !== 0) {
      tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
    }
    return tempStr;
  });
  return name.join('');
};

const template = '';

const moduleMode = true;

const distFile = null;

const distFolder = path.resolve(process.cwd(), 'src/api');

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
