# Error and Status Mapping

Derived from `ebl/error_handler.py`.

| Exception Type | Handler | HTTP Status Behavior |
|---|---|---|
| `Exception` | `unexpected_error` | 500 Internal Server Error |
| `AlignmentError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `DispatchError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `LemmatizationError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `NotFoundError` | `not_found_error` | 404 Not Found |
| `DuplicateError` | `duplicate_error` | 409 Conflict |
| `DataError` | `unprocessable_entity` | 422 Unprocessable Entity |
| `falcon.HTTPError` | `http_error` | passthrough |
| `falcon.HTTPStatus` | `http_error` | passthrough |
