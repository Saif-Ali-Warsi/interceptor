An Angular Interceptor is a middleware that intercepts outgoing HTTP requests and incoming HTTP responses. It is commonly used for JWT token injection, global error handling, request logging, loading indicators, and modifying requests or responses before they reach the application.


Why throwError(() => error)?

The interceptor performs global error handling, but throwError rethrows the error so that the component can still react to it if needed, such as displaying a specific error message or updating UI state.