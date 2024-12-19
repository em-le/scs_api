export const DEBUGGER_HTTP_FORMAT =
  "'[:date[iso]]' - 'HTTP/:http-version' - '[:status]' - ':method' - ':url' - 'Request Params :: :req-params' - 'Request Body :: :req-body' - 'Response Header :: :res[header]' - 'Response Body :: :res-body' - ':response-time ms' - ':referrer' - ':user-agent'";
export const DEBUGGER_HTTP_NAME = 'http';

export const LEVELS = {
  error: 0,
  info: 1,
  debug: 2,
  postgres: 3,
  oracle: 4,
  client: 5,
};
