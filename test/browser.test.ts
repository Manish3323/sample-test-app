import { expect } from 'chai'

class FileData {
  private constructor(private readonly content: Blob) {}

  static fromFile(file: File): FileData {
    return new FileData(new Blob([file]))
  }

  fileContentAsString(): Promise<string> {
    return new Response(this.content).text()
  }
}

describe('In browser testing', () => {
  it('reads file data', async () => {
    const configData = FileData.fromFile(new File(['File content'], 'file1'))

    expect(configData).instanceOf(FileData)
    expect(await configData.fileContentAsString()).eq('File content')
  })
})
