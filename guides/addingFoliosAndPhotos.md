# Adding Folios and Photos with NoSQL Manager for MongoDB

N.B.: Photos are since 2024 normally uploaded with the script [`upload-photos-with-thumbnails.py`](https://github.com/ElectronicBabylonianLiterature/ebl-api-data-preparation/blob/main/scripts/upload-photos-with-thumbnails.py), which compresses them, uploads them, and creates thumbnails. The present guide is therefore of limited use.

The simplest way is to add files is the file manager in NoSql Manager for MongoDB. Remember to check the "Write filenames without the paths."

![](https://github.com/ElectronicBabylonianLiterature/generic-documentation/blob/master/upload_images_collection_name.png?raw=true)

![](https://github.com/ElectronicBabylonianLiterature/generic-documentation/blob/master/upload_images_filenames_without_paths.png?raw=true)

Another option is to use `mongofiles` ([Download Mongo Database Tools](https://www.mongodb.com/try/download/database-tools)). The PowerShell script below will upload all `.jpg` files in the current folder.

```
ls *.jpg -file | % {mongofiles put  -h <HOST> -d ebl -u <USER NAME> -p <PASSWORD> /ssl /sslAllowInvalidCertificates --prefix <BUCKET> --type image/jpeg --replace $_.name}
```

## Photos

Upload photos to the `photos` GridFS bucket. The filename must be in the form `<fragment number>.jpg`.

## Folios

### Scopes

- Create scope in Auth0 (`Authorization > Permissions`)
- Add it to a role (`Authorization > Roles`)
- Add a scope to API (`Applications > APIs > Dictionary`)
- Change frontend code to request new scope

### Upload images

- Upload images to the `folios` GridFS bucket. See https://trello.com/c/Qaw9YsG5 for instructions on uploading. The file name must in the form `<name>_<number>.jpg`.

### Update fragments

- Add folios to fragments (adapt the script as needed):

  ```javascript
  function doit() {
      const folios = [
          { number: '001', accession: '', _id: 'BM.45657' },
          { number: '002', accession: '', _id: 'BM.45727' },
          ...
      ]
      const missing = []
      folios.forEach(({number, _id, accession}) => {
          const query = accession !== '' ? {accession: accession} : {_id: _id}
          if(db.getCollection('fragments').findOne(query)) {
              db.getCollection('fragments').update(
                  query,
                  {$push: {
                      folios: {
                          name: 'WMR',
                          number: number
                      }
                  }}
              )
          } else {
              missing.push({number, accession, _id})
          }
      })
      return missing
  }
  doit()
  ```

- Add record:

  ```javascript
  db.getCollection('fragments').updateMany(
      {
          'folios.name': 'WRM'
      },
      {
          $push: {
              record: {
                  $each: [{
                      user: 'Mayer',
                      type: 'HistoricalTransliteration',
                      date: '1970-01-01/2018-12-31'
                  }],
                  $position: 0
              }
          }
      }
  )
  ```
