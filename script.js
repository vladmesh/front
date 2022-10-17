console.log('start requests')

queryData();
setInterval(() => {
  queryData();
}, 60 * 1000)

function queryData() {
  axios.get('http://0.0.0.0:5000')
    .then(function (response) {
      const data = response.data;
      console.log(data);
      writeTree(data);
    })
    .catch(e => { throw e });
}
function writeTree(data) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  fillRecursively(container, data);
}

function fillRecursively(container, data) {
  for (let node in data) {
    const nodeElement = document.createElement('div');
    nodeElement.innerText = node;
    nodeElement.className = data[node] ? 'folder' : 'file';
    container.appendChild(nodeElement);

    if (data[node] && Object.keys(data[node]).length !== 0) {
      fillRecursively(nodeElement, data[node]);
    }
  }
}