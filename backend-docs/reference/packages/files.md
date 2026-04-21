# Package Reference: ebl/files

- Files: 8
- Total lines: 122

## File-Level API Summary

### `ebl/files/__init__.py`

- Lines: 0

### `ebl/files/application/__init__.py`

- Lines: 0

### `ebl/files/application/file_repository.py`

- Lines: 42
- Imports: abc.ABC, abc.abstractmethod, ebl.common.domain.scopes.Scope, ebl.errors.NotFoundError, ebl.users.domain.user.User, typing.Any, typing.Mapping
- Classes: File, FileRepository
- Methods in File: metadata, length, content_type, read, close, can_be_read_by
- Methods in FileRepository: query_by_file_name, query_if_file_exists

### `ebl/files/infrastructure/__init__.py`

- Lines: 0

### `ebl/files/infrastructure/grid_fs_file_repository.py`

- Lines: 52
- Imports: attr, ebl.errors.NotFoundError, ebl.files.application.file_repository.File, ebl.files.application.file_repository.FileRepository, gridfs.GridFS, gridfs.GridOut, pymongo.database.Database, typing.Any, typing.Mapping, typing.Optional
- Classes: GridFsFile, GridFsFileRepository
- Methods in GridFsFile: metadata, length, content_type, read, close
- Methods in GridFsFileRepository: __init__, query_by_file_name

### `ebl/files/web/__init__.py`

- Lines: 0

### `ebl/files/web/bootstrap.py`

- Lines: 9
- Imports: ebl.context.Context, ebl.files.web.files.PublicFilesResource, falcon
- Functions: create_files_route

### `ebl/files/web/files.py`

- Lines: 19
- Imports: ebl.files.application.file_repository.FileRepository, ebl.users.domain.user.Guest, falcon.Response, falcon_auth.NoneAuthBackend
- Classes: PublicFilesResource
- Methods in PublicFilesResource: __init__, on_get

