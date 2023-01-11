export enum StatusCodes {
  /**
   * The request succeeded. The result meaning of "success" depends on the HTTP method:
   *
   * GET: The resource has been fetched and transmitted in the message body.
   * PUT or POST: The resource describing the result of the action is transmitted in the message body.
   * */
  OK = 200,
  /**
   * The request succeeded, and a new resource was created as a result. This is typically the
   * response sent after POST requests, or some PUT requests.
   * */
  CREATED = 201,

  /**
   The server cannot or will not process the request due to something that is perceived to be a client
   error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
   * */
  BAD_REQUEST = 400,

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   * That is, the client must authenticate itself to get the requested response.
   * */
  UNAUTHORIZED = 401,

  /**
   * The client does not have access rights to the content; that is, it is unauthorized, so the server is
   * refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
   * */
  FORBIDDEN = 403,

  /**
   * The server cannot find the requested resource. In the browser, this means the URL is not recognized.
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
   * Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client.
   * This response code is probably the most well known due to its frequent occurrence on the web.
   * */
  NOT_FOUND = 404,

  /**
   * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
   * */
  INTERNAL_SERVER_ERROR = 500,
}
