// eslint-disable-next-line import/no-nodejs-modules
import fs from 'fs'

class FileData {
  constructor(content) {
    this.content = content
  }

  static fromFile(file) {
    return new FileData(new Blob([file]))
  }

  fileContentAsString() {
    return new Response(this.content).text()
  }
}

let txtFileContent = 'test.txt'
let file = fs.readFileSync(txtFileContent, 'utf8')
const configData = FileData.fromFile(file, 'file1')

console.log(configData) // FileData Blob
console.log(await configData.fileContentAsString()) // 'File content'
