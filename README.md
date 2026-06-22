# Angular Interceptors & JWT Authentication

## Overview

This project demonstrates how Angular Interceptors can be used to handle JWT authentication, global error handling, loading indicators, and refresh token workflows. It also covers important RxJS concepts used in real-world Angular applications.

---

## Topics Covered

### Auth Interceptor

Adds the JWT access token to every outgoing HTTP request automatically. This eliminates the need to manually attach authorization headers in each API call.

### Error Interceptor

Provides centralized handling for API errors such as 401, 403, 404, and 500 responses. Helps maintain consistent error handling across the application.

### Loader Interceptor

Displays a global loading indicator while HTTP requests are in progress and hides it when requests complete or fail using the `finalize()` operator.

### JWT Authentication

Implements token-based authentication where users receive an access token after successful login and use it to access protected resources.

### Refresh Token Flow

Automatically requests a new access token when the current token expires and retries the original failed request without requiring the user to log in again.

### Request Cloning

Uses `req.clone()` to modify HTTP requests because Angular HTTP requests are immutable and cannot be changed directly.

### Interceptor Execution Order

Understands how requests flow from top to bottom through registered interceptors and responses return in reverse order.

### RxJS Observer

Learned how Observables emit values through `next`, handle failures through `error`, and notify completion through `complete`.

### switchMap

Used to switch from one Observable to another, making it ideal for refresh token implementations and dependent API calls.

### catchError

Captures errors inside the RxJS pipeline and allows custom error handling or recovery logic before propagating the error further.

### throwError

Re-throws errors after processing so that components can still respond to failures when needed.

### finalize

Executes cleanup logic regardless of success or failure, making it useful for hiding loaders after API requests complete.

### BehaviorSubject vs Signals

Compared traditional RxJS state management using BehaviorSubject with Angular Signals for managing reactive UI state.

### Auth Guard vs Interceptor

Learned that Auth Guards protect application routes, while Interceptors protect and modify HTTP requests.

---

## Key Learnings

* Implemented JWT authentication using Angular Interceptors.
* Added authorization headers automatically to API requests.
* Handled API errors globally using a centralized interceptor.
* Implemented loader management using RxJS operators.
* Understood the complete refresh token workflow.
* Learned practical usage of `switchMap`, `catchError`, `throwError`, and `finalize`.
* Explored Angular Signals and RxJS Observables in real-world scenarios.

---

## Architecture

```text
Login
  ↓
Access Token
  ↓
Auth Interceptor
  ↓
Protected API

401 Unauthorized
  ↓
Refresh Token API
  ↓
New Access Token
  ↓
Retry Original Request
```
