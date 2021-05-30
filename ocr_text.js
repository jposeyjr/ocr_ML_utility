const { createWorker } = require('tesseract.js');
const fs = require('fs');
const imgFolder = './Stats';
const path = require('path');
const worker = createWorker();

// function importAll(r) {
//   return r.keys().map(r);
// }

// const img_folder = importAll(
//   require.context('./Stats', false, /\.(png|jpe?g|svg)$/)
// );
const img_folder = [];
fs.readdirSync(imgFolder).forEach((file) => {
  const filePath = path.join(imgFolder, file);
  img_folder.push(filePath);
  //   console.log(filePath);
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  for (const img_file of img_folder) {
    const {
      data: { text },
    } = await worker.recognize(img_file);
    fs.appendFile('stats.txt', text, function (err) {
      if (err) throw err;
      console.log('text saved');
    });
    console.log(text);
  }
  await worker.terminate();
})();
