import AWS from 'aws-sdk'

const s3 = new AWS.S3()

async function uploadFile (bucket: string, key: string, data: any) {
  try {
    const parts = data.split(';')
    const ident = parts[0].split(':')[1]
    const pos = data.indexOf(',')
    const bufferString = data.substr(pos + 1)
    const file_type = ident
    const base64Data = Buffer.from(bufferString, 'base64')
    return new Promise((resolve, reject)=>{
      s3.upload({
        Bucket: bucket,
        ContentEncoding: 'base64',
        ContentType: file_type,
        Body: base64Data,
        Key: key
      })
        .promise()
        .catch(err => {
          reject(err)
        })
        .then(result => {
          resolve(result)
        })
    })
  } catch (error) {
    throw new Error('Error to send file to S3')
  }
}

export { uploadFile }