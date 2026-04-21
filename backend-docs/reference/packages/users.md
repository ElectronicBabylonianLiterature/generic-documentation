# Package Reference: ebl/users

- Files: 7
- Total lines: 187

## File-Level API Summary

### `ebl/users/__init__.py`

- Lines: 0

### `ebl/users/domain/__init__.py`

- Lines: 0

### `ebl/users/domain/user.py`

- Lines: 72
- Imports: abc.ABC, abc.abstractmethod, ebl.common.domain.scopes.Scope, typing.List, typing.Optional, typing.Sequence
- Classes: User, Guest, ApiUser, AtfImporterUser
- Methods in User: profile, ebl_name, has_scope, can_read_folio, can_read_fragment, get_scopes
- Methods in Guest: profile, ebl_name
- Methods in ApiUser: __init__, profile, ebl_name
- Methods in AtfImporterUser: __init__, profile, ebl_name

### `ebl/users/infrastructure/__init__.py`

- Lines: 0

### `ebl/users/infrastructure/auth0.py`

- Lines: 85
- Imports: copy, ebl.common.domain.scopes.Scope, ebl.users.domain.user.User, falcon_auth.JWTAuthBackend, pydash, requests, typing.Any, typing.Callable, typing.List, typing.Optional
- Classes: Auth0User, Auth0Backend
- Methods in Auth0User: __init__, profile, ebl_name, get_scopes, has_scope
- Methods in Auth0Backend: __init__, authenticate
- Functions: fetch_user_profile

### `ebl/users/web/__init__.py`

- Lines: 0

### `ebl/users/web/require_scope.py`

- Lines: 30
- Imports: ebl.common.domain.scopes.Scope, ebl.fragmentarium.web.dtos.parse_museum_number, ebl.users.domain.user.User, falcon
- Functions: require_scope, require_folio_scope, require_fragment_read_scope

