const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const fsAsync = {
  readFile: promisify(fs.readFile),
  writeFile: promisify(fs.writeFile),
  exists: promisify(fs.exists),
  unlink: promisify(fs.unlink)
};

/**
 *
 * @param {string} fileName
 * @returns JSON
 */
const csvToJson = async (fileName) => {
  const result = await readCsvFile(fileName);
  return JSON.stringify(result, null, 4);
};

/**
 *
 * @param {string} fileName
 * @param {string} outputName
 * @returns void
 */
const csvToJsonFile = async (fileName, outputName) => {
  const result = await readCsvFile(fileName);
  return await writeJsonFile(result, outputName);
};

/**
 *
 * @param {string} fileName
 * @returns array
 */
const readCsvFile = async (fileName) => {
  try {
    let data = [];
    const csv = await fsAsync.readFile(`${fileName}.csv`, 'utf-8');
    const result = csv.split(/[\r\n]/g).map((item) => item.split(','));

    const headers = result[0];
    result.shift();

    for (const [, register] of result.entries()) {
      if (register.filter(Boolean).length) {
        let output = {};

        for (const [index, header] of headers.entries()) {
          output[header] = register[index];
        }
        data.push(output);
      }
    }

    return data;
  } catch (error) {
    handleError(error, 'readCsvFile');
  }
};

/**
 *
 * @param {array} data
 * @param {string} fileName
 * @returns Promise
 */
const writeJsonFile = async (data, fileName) => {
  let route = path.join(__dirname, `${fileName}.json`);

  let fileExits = await fsAsync.exists(route);
  if (fileExits) await fsAsync.unlink(route);

  return fsAsync.writeFile(route, JSON.stringify(data, null, 4), 'utf8');
};

/**
 *
 * @param {error} error
 * @param {string} process
 * @returns void
 */
const handleError = (error, process) => {
  const newError = {
    status: 'error',
    name: error.name,
    message: error.message,
    process,
    date: new Date()
  };

  console.log(JSON.stringify(newError, null, 2));
};

(async () => {
  console.log(await csvToJson('example'));
  csvToJsonFile('example', 'exampleJson');
})();
