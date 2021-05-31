const fs = require('fs');

const data = fs.readFileSync(`./clean_txt.txt`, 'utf-8');
const remove_arrow = /\s>\s/gm;
const remove_space = / +?/g;

const regex = /breastfed;\d\dm;|breastfed;\dm;/gm;
const newData = data.replace(regex, 'breastfed;');

//Needed to flip data as all data went in reverse
// const lines = data.split('\n');
// let reverseTxt = '';

// for (let i = 0; i < lines.length; i++) {
//   reverseTxt = lines[i] + '\n' + reverseTxt;
// }

// fs.writeFileSync('./clean_txt2.txt', reverseTxt);
