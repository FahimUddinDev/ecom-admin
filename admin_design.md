# Admin Panel - Page List

Use this page list to quickly navigate to requirements for each backend module processed by the admin panel.

- [Address](#admin-panel---address-module-requirements)
- [Auth](#admin-panel---auth-module-requirements)
- [User](#admin-panel---user-module-requirements)
- [Verification](#admin-panel---verification-module-requirements)
- [Wishlist](#admin-panel---wishlist-module-requirements)
- [Cart](#admin-panel---cart-module-requirements)
- [Category](#admin-panel---category-module-requirements)
- [SubCategory](#admin-panel---subcategory-module-requirements)
- [ChildCategory](#admin-panel---childcategory-module-requirements)
- [Products](#admin-panel---products-module-requirements)
- [AdditionalInfo](#admin-panel---additionalinfo-module-requirements)
- [Variant](#admin-panel---variant-module-requirements)
- [Blog](#admin-panel---blog-module-requirements)
- [Blog Category](#admin-panel---blog-category-module-requirements)
- [Blog Comment](#admin-panel---blog-comment-module-requirements)
- [Comments](#admin-panel---comments-module-requirements)
- [Email Template](#admin-panel---email-template-module-requirements)
- [SMTP](#admin-panel---smtp-module-requirements)
- [Offer](#admin-panel---offer-module-requirements)
- [Coupon](#admin-panel---coupon-module-requirements)
- [Orders](#admin-panel---order-module-requirements)
- [Reviews](#admin-panel---reviews-module-requirements)

---

## Shared UI Patterns & Consistency

To ensure a premium and consistent experience, all modules should follow these standardized patterns:

### 1. List View Pattern

- **Header**: Page Title with a primary action button (e.g., "Create New").
- **Search & Filter Bar**: A sticky bar below the header containing a global search and relevant dropdown filters.
- **Data Table**: Standardized columns, status badges, and an "Actions" column with dropdowns.
- **Pagination**: Fixed bottom bar with page selection and results-per-page toggle.

### 2. Form & Edit Pattern

- **Layout**: Single or double column layout depending on complexity.
- **Validation**: Inline error messages and disabled submit button until requirements are met.
- **Media**: Standardized file upload zones with drag-and-drop and image previews.

### 3. Detail View Pattern

- **Information Architecture**: Use `Cards` to group related data (e.g., "Customer Info", "Order Items").
- **Status Timeline**: For process-heavy modules like Orders or Returns.
- **Quick Actions**: Top-level buttons for common tasks (e.g., "Print Invoice").

---

## Admin Panel - Address Module Requirements

### Pages (page name + what should be on the page)

#### Address List page

- **Page name:** Address List (or Addresses)
- **Purpose:** Browse/search/filter all addresses and perform actions (view/edit/delete).
- **Must include:**
  - Table/grid of addresses with at least: `id`, `userId`, `street`, `city`, `state`, `country`, `postalCode`, `status`
  - Global search input (text) that searches across address fields
  - Filters: user, city, state, country, status (active/inactive)
  - Sorting controls (e.g., by id, city, country)
  - Pagination controls (page, page size)
  - Row actions: view details, edit, delete

#### Address Detail page

- **Page name:** Address Detail
- **Purpose:** Show full address record with all fields.
- **Must include:**
  - Display all returned fields: `id`, `userId`, `street`, `city`, `state`, `country`, `postalCode`, `latitude`, `longitude`, `addressLine`, `status`
  - Action buttons: edit, delete, back to list

#### Address Create / Edit page

- **Page name:** Create Address / Edit Address
- **Purpose:** Create a new address or update an existing one.
- **Must include:**
  - Form fields: `street`, `city`, `state`, `country`, `addressLine`, optional `postalCode`, `latitude`, `longitude`
  - Client-side validation matching API rules (min length, format, latitude/longitude ranges)
  - Submit button and cancel/back button

### 1) API Overview (endpoint summary)

All Address routes live under:

- **Base URL:** `/address`

#### Endpoints

| Method | Path             | Auth    | Purpose                                 |
| ------ | ---------------- | ------- | --------------------------------------- |
| GET    | `/address`       | ❌ none | List addresses (supports query filters) |
| GET    | `/address/:slug` | ❌ none | Get one address by `id`                 |
| POST   | `/address`       | ✅ yes  | Create new address                      |
| PUT    | `/address/:slug` | ✅ yes  | Update existing address                 |
| DELETE | `/address/:slug` | ✅ yes  | Delete address (soft/hard delete logic) |

> **Auth note:** Create/Update/Delete require `authenticate` middleware (logged-in user).

---

### 2) Address Payload Schema (what fields UI must send/expect)

#### Required fields (create/update)

- `street` (string, min 5)
- `city` (string, min 2)
- `state` (string, min 2)
- `country` (string, min 3)
- `addressLine` (string, min 3)

#### Optional fields

- `postalCode` (string; letters/numbers/spaces/hyphens allowed)
- `latitude` (number; -90 → 90)
- `longitude` (number; -180 → 180)

#### Response / Returned fields

- `id`
- `userId`
- `street`
- `city`
- `state`
- `country`
- `postalCode`
- `latitude`
- `longitude`
- `addressLine`

---

### 3) Search + Filtering (current backend support)

#### ✅ Supported filter today

- Filter by user: `GET /address?userId=123`
  - Returns only addresses where `status = true` (active addresses).

#### 🔧 Recommended admin panel filters (needs backend support)

To build a complete admin experience, you can add support for:

- Free-text search across address fields (`search`)
- Filter by `city`, `state`, `country`
- Filter by `status` (active / inactive)
- Pagination (`page`, `limit`)
- Sorting (`sortBy`, `order`)

---

### 4) Admin Panel UI Requirements

#### List view (table/grid)

- Search box (text)
- Filters: user, city, state, country, status
- Sorting (e.g., by `id`, `city`, `country`)
- Pagination (page / limit)

**API call**
`GET /address?userId=...&search=...&city=...&state=...&country=...&status=...&page=...&limit=...`

#### View detail

**API call**
`GET /address/{id}`

#### Create address

**API call**
`POST /address`

Body: `{ street, city, state, country, addressLine, postalCode?, latitude?, longitude? }`

#### Edit address

**API call**
`PUT /address/{id}`

Body: same as create (partial updates allowed)

#### Delete address

**API call**
`DELETE /address/{id}`

**Deletion logic**

- If address is used in any **active** orders → error (cannot delete)
- If address is used in **past orders** → soft delete (`status=false`)
- If address is never used in orders → hard delete

---

### 5) Naming conventions (API / UI)

- Model: `Address`
- API base: `/address`
- Resource ID param: `id` (called `slug` in routes, but it’s numeric)
- Fields: `street`, `city`, `state`, `country`, `addressLine`, `postalCode`, `latitude`, `longitude`, `userId`

---

### 6) Next Step (extend filtering / search)

If you want full “search + all filter types + pagination” support, you can extend the backend to accept query params for `search`, `city`, `state`, `country`, `status`, `page`, `limit`, etc. Let me know and I can provide the exact code changes.

---

## Admin Panel - Auth Module Requirements

### Pages (page name + what should be on the page)

#### Login page

- **Page name:** Login
- **Purpose:** Authenticate an admin (or user) via email/password or Google.
- **Must include:**
  - Email input
  - Password input
  - Remember me checkbox (optional)
  - Submit button
  - Google sign-in button (calls `/auth/google`)
  - Show API error messages (invalid credentials, inactive account, unverified account)

#### Reset Password page

- **Page name:** Reset Password
- **Purpose:** Allow a logged-in user to change their password.
- **Must include:**
  - New password input (min 6 characters)
  - Submit button
  - Success / error feedback

### 1) API Overview (endpoint summary)

All Auth routes live under:

- **Base URL:** `/auth`

#### Endpoints

| Method | Path           | Auth    | Purpose                               |
| ------ | -------------- | ------- | ------------------------------------- |
| POST   | `/auth`        | ❌ none | Login with email/password             |
| POST   | `/auth/google` | ❌ none | Login with Google token               |
| POST   | `/auth/reset`  | ✅ yes  | Reset password for authenticated user |

> **Auth note:** `POST /auth/reset` requires `authenticate` middleware (valid token).

### 2) Auth Payload Schema (what fields UI must send/expect)

#### Login (email/password)

- `email` (string, must be a valid email)
- `password` (string, min 6 characters)
- `isRemember` (boolean, optional)

#### Google login

- `token` (string, Google ID token)

#### Reset password

- `newPassword` (string, min 6 characters)

### 3) Expected API responses

#### Successful login (email/password or Google)

- `token` (JWT)
- `id`
- `firstName`
- `lastName`
- `email`
- `createdAt`
- `role`
- `avatar`
- `kyc` (if present)

#### Reset password

- `{ message: "Password reset successfully" }`

---

### 4) Search + Filter notes (none currently)

The auth module does not expose list endpoints for searching/filtering users; it only provides login and reset endpoints. If you need an admin user list and filtering, the backend must be extended with user management endpoints (e.g. `GET /users`, `PATCH /users/:id`, `DELETE /users/:id`).

---

## Admin Panel - User Module Requirements

### Pages (page name + what should be on the page)

#### Users list page

- **Page name:** Users
- **Purpose:** Browse, search, filter, and manage user accounts (view/edit/delete).
- **Must include:**
  - Table/grid with fields: `id`, `firstName`, `lastName`, `email`, `role`, `status`, `verified`, `kyc status`, `createdAt`
  - Global search input (search across `firstName`, `lastName`, `email`)
  - Filters: role, status, verified, kyc status, created date range
  - Sorting controls (createdAt desc default, plus role, status, email)
  - Pagination controls (page / limit)
  - Row actions: view detail, edit, delete

#### User detail page

- **Page name:** User Detail
- **Purpose:** View a single user record and perform management actions.
- **Must include:**
  - Display all returned fields: `id`, `firstName`, `lastName`, `email`, `role`, `status`, `verified`, `kyc status`, `avatar`, `createdAt`
  - Action buttons: edit, delete, back to list

#### Create / Edit user page

- **Page name:** Create User / Edit User
- **Purpose:** Create a new user or update an existing user profile.
- **Must include:**
  - Form fields: `firstName`, `lastName`, `email`, `password` (create only), `role`, `status`, `verified`, `kyc` (boolean), `avatar` (file upload)
  - Client-side validation matching API rules (required fields, email format, password min length)
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All User routes live under:

- **Base URL:** `/users`

#### Endpoints

| Method | Path         | Auth     | Purpose                                           |
| ------ | ------------ | -------- | ------------------------------------------------- |
| GET    | `/users`     | ✅ yes\* | List users (supports filtering/search/pagination) |
| GET    | `/users/:id` | ✅ yes   | Get a single user by id or email                  |
| POST   | `/users`     | ❌ none  | Register a new user                               |
| PUT    | `/users/:id` | ✅ yes   | Update a user (authenticated)                     |
| DELETE | `/users/:id` | ✅ yes   | Delete a user (admins or owner)                   |

> **Auth note:**
>
> - `POST /users` is public (registration).
> - `PUT /users/:id` and `DELETE /users/:id` require authentication. The backend enforces that non-admin users can only delete their own account; it does not strongly restrict updates by role.

---

### 2) User Payload Schema (what fields UI must send/expect)

#### Create / Register user

- `firstName` (string, required)
- `lastName` (string, required)
- `email` (string, required, valid email)
- `password` (string, required, min 6 characters)
- `role` (string, optional; one of `user`, `admin`, `seller`)
- `status` (boolean, optional)
- `verified` (boolean, optional)

#### Update user

- `firstName` (string, optional)
- `lastName` (string, optional)
- `role` (string, optional; one of `user`, `admin`, `seller`)
- `status` (boolean, optional)
- `verified` (boolean, optional)
- `kyc` (boolean, optional)
- `avatar` (string, optional)
- `password` (string, optional; min 6 characters)

#### Response / Returned fields

- `id`
- `firstName`
- `lastName`
- `email`
- `role`
- `status`
- `verified`
- `avatar`
- `createdAt`
- `kyc` (object with `status` field)

---

### 3) Search + Filtering (backend-supported)

#### Supported filters (via query params on `GET /users`)

- `page` (number)
- `limit` (number)
- `search` (text; searches `firstName`, `lastName`, `email`)
- `role` (string)
- `status` (boolean)
- `verified` (boolean)
- `kyc` (boolean)
- `createdAt` (date or range via `createdAt=2026-03-09` or `createdAt[from]=...&createdAt[to]=...`)
- `orderBy` (`asc` or `desc` controls sort by `createdAt`)

### 4) Example API calls (admin UI wiring)

**List users (with filters/pagination)**
`GET /users?page=1&limit=25&search=john&role=admin&status=true&verified=true&kyc=true&orderBy=desc`

**Get a single user**
`GET /users/{id}`

**Create/register user**
`POST /users`

Body:
`{ firstName, lastName, email, password, role?, status?, verified? }`

**Update user**
`PUT /users/{id}`

Body:
`{ firstName?, lastName?, role?, status?, verified?, kyc?, avatar?, password? }`

**Delete user**
`DELETE /users/{id}`

---

### Naming conventions (API / UI)

- Model: `User`
- API base: `/users`
- Resource ID param: `id`
- Fields: `id`, `firstName`, `lastName`, `email`, `role`, `status`, `verified`, `avatar`, `createdAt`, `kyc`

---

## Admin Panel - Verification Module Requirements

### Pages (page name + what should be on the page)

#### Verification / Support tool page

- **Page name:** Verification Tools
- **Purpose:** Allow support/admin staff to trigger verification codes, verify codes on behalf of users, and handle password reset verification codes.
- **Must include:**
  - Form to send a verification code: `userId`
  - Form to verify a code: `userId`, `code`
  - Form to verify a forgot-password code: `userId`, `code`
  - Informational alerts for success/failure (code invalid, expired)

#### KYC Requests list page

- **Page name:** KYC Requests
- **Purpose:** Monitor and manage KYC submissions from users.
- **Must include:**
  - Table/grid with fields: `id`, `userId`, `title`, `status`, `createdAt`
  - Search input (text search by title)
  - Filters: status (pending/approved/rejected), created date range
  - Sorting controls (createdAt desc default, plus status)
  - Pagination controls (page / limit)
  - Row actions: view details

#### KYC detail page

- **Page name:** KYC Request Detail
- **Purpose:** View details of a single KYC submission.
- **Must include:**
  - Display fields: `id`, `userId`, `title`, `status`, `document` (URL/file download), `createdAt`
  - Back to list

### 1) API Overview (endpoint summary)

All Verification routes live under:

- **Base URL:** `/verification`

#### Endpoints

| Method | Path                            | Auth    | Purpose                                                       |
| ------ | ------------------------------- | ------- | ------------------------------------------------------------- |
| PUT    | `/verification`                 | ❌ none | Verify a code (user sign-up/email verification)               |
| POST   | `/verification`                 | ❌ none | Send a verification code to user (e.g., sign-up, resend)      |
| POST   | `/verification/forgot-password` | ❌ none | Verify a password-reset code and return a reset token         |
| POST   | `/verification/kyc`             | ✅ yes  | Create a new KYC request (file upload)                        |
| GET    | `/verification/kyc`             | ✅ yes  | List KYC requests (admin only, supports filtering/pagination) |
| GET    | `/verification/kyc/:id`         | ✅ yes  | Get KYC request(s) for a user (admin or owner)                |

> **Auth note:**
>
> - KYC endpoints require authentication (`authenticate` middleware).
> - Listing all KYC requests (`GET /verification/kyc`) is restricted to admins.
> - Fetching a single user’s KYC (`GET /verification/kyc/:id`) is allowed for the user themselves and admins.

---

### 2) Verification Payload Schema (what fields UI must send/expect)

#### Send verification code

- `userId` (number, required)

#### Verify code (signup/email verify)

- `userId` (number, required)
- `code` (string, required, 6 digits)

#### Verify forgot-password code

- `userId` (number, required)
- `code` (string, required, 6 digits)

---

### 3) KYC Payload Schema (what fields UI must send/expect)

#### Create KYC request

- `title` (string, required)
- `document` (string, required; file upload in multipart/form-data, allowed extensions: pdf/jpg/jpeg/png)

#### KYC response fields (list / detail)

- `id`
- `userId`
- `title`
- `status` (string)
- `document` (string URL)
- `createdAt`

---

### 4) Search + Filtering (backend-supported)

#### Supported filters (via query params on `GET /verification/kyc`)

- `page` (number)
- `limit` (number)
- `search` (text; searches `title`)
- `status` (string)
- `createdAt` (date or range via `createdAt=2026-03-09` or `createdAt[from]=...&createdAt[to]=...`)
- `orderBy` (`asc` or `desc` controls sort by `createdAt`)

#### Recommended admin panel enhancements (optional)

- Add filtering by `userId` to find KYC requests for a specific user.
- Add sorting by `status`.

---

### 5) Example API calls (admin UI wiring)

**Send a verification code**
`POST /verification`

Body:
`{ userId }`

**Verify a code (sign-up/email verification)**
`PUT /verification`

Body:
`{ userId, code }`

**Verify a forgot-password code**
`POST /verification/forgot-password`

Body:
`{ userId, code }`

**List KYC requests (admin)**
`GET /verification/kyc?page=1&limit=25&search=passport&status=pending&orderBy=desc`

**Get a user’s KYC request(s)**
`GET /verification/kyc/{userId}`

**Create a KYC request**
`POST /verification/kyc`

Body (multipart/form-data):

- `title`
- `document` (file)

---

### Naming conventions (API / UI)

- Model: `Verification` / `Kyc`
- API base: `/verification`
- Resource ID param: `id` (used for `GET /verification/kyc/:id`)
- Fields: `id`, `userId`, `title`, `status`, `document`, `createdAt`

---

## Admin Panel - Wishlist Module Requirements

### Pages (page name + what should be on the page)

#### Wishlist list page

- **Page name:** Wishlists
- **Purpose:** Browse wishlist entries across users and products.
- **Must include:**
  - Table/grid with fields: `id`, `userId`, `userName` (first+last), `productId`, `productName`, `createdAt`
  - Filters: user, product
  - Sorting controls (createdAt desc default)
  - Pagination controls (page / limit)
  - Row actions: view detail, delete

#### Wishlist detail page

- **Page name:** Wishlist Detail
- **Purpose:** View a single wishlist entry and related user/product info.
- **Must include:**
  - Display fields: `id`, `userId`, `userName`, `userEmail`, `productId`, `productName`, `productSellerId`, `createdAt`
  - Back to list

#### Create wishlist entry page (optional)

- **Page name:** Add to Wishlist
- **Purpose:** Add a product to the authenticated user’s wishlist.
- **Must include:**
  - Form fields: `productId`
  - Submit button

### 1) API Overview (endpoint summary)

All Wishlist routes live under:

- **Base URL:** `/wishlist`

#### Endpoints

| Method | Path            | Auth    | Purpose                                      |
| ------ | --------------- | ------- | -------------------------------------------- |
| GET    | `/wishlist`     | ❌ none | List wishlists (supports filters/pagination) |
| GET    | `/wishlist/:id` | ❌ none | Get a single wishlist entry                  |
| POST   | `/wishlist`     | ✅ yes  | Create a wishlist entry (authenticated)      |
| DELETE | `/wishlist/:id` | ✅ yes  | Delete a wishlist entry (owner only)         |

> **Auth note:**
>
> - Creating and deleting require authentication and enforce ownership (a user can only delete their own wishlist item).

---

### 2) Wishlist Payload Schema (what fields UI must send/expect)

#### Create wishlist entry

- `productId` (number, required)

#### Response / Returned fields

- `id`
- `userId`
- `productId`
- `createdAt`
- `user` (nested object with `id`, `firstName`, `lastName`, `email`)
- `product` (nested object with `id`, `sellerId`, plus other product fields if returned)

---

### 3) Search + Filtering (backend-supported)

#### Supported filters (via query params on `GET /wishlist`)

- `page` (number)
- `limit` (number)
- `userId` (number)
- `productId` (number)

#### Recommended admin panel enhancements (optional)

- Add text search across product name or user email (requires backend support).
- Add sorting options such as `userId`, `productId`.

---

### 4) Example API calls (admin UI wiring)

**List wishlists (with filters/pagination)**
`GET /wishlist?page=1&limit=25&userId=123&productId=456`

**Get a single wishlist entry**
`GET /wishlist/{id}`

**Create a wishlist entry**
`POST /wishlist`

Body:
`{ productId }`

**Delete a wishlist entry**
`DELETE /wishlist/{id}`

---

### Naming conventions (API / UI)

- Model: `Wishlist`
- API base: `/wishlist`
- Resource ID param: `id`
- Fields: `id`, `userId`, `productId`, `createdAt`, `user`, `product`

---

## Admin Panel - Cart Module Requirements

### Pages (page name + what should be on the page)

#### Cart list page

- **Page name:** Cart (or Cart Items)
- **Purpose:** Browse cart items across users and manage stock/quantities.
- **Must include:**
  - Table/grid of cart items with fields: `id`, `userId`, `productId`, `productName` (if available), `variantId`, `quantity`, `createdAt`
  - Filters: user, product, date range (createdAt)
  - Sorting controls (createdAt desc by default, plus quantity, userId)
  - Pagination (page / limit)
  - Row actions: view item details, edit quantity (if acting as that user), delete
  - Bulk actions: delete selected items

> ⚠️ Note: The backend enforces that modifications (update/delete/clear) are allowed only for the authenticated user’s own cart items. To support true admin impersonation, the backend would need an admin-specific override.

#### Cart item detail page

- **Page name:** Cart Item Detail
- **Purpose:** Show full cart item details and allow quantity update or removal.
- **Must include:**
  - Display fields: `id`, `userId`, `productId`, `quantity`, `variantId`, `createdAt`, plus product/variant details where available
  - Update quantity input (requires auth as the cart owner)
  - Delete button (requires auth as the cart owner)
  - Back to list

#### Add to cart / Bulk add page (optional)

- **Page name:** Add to Cart
- **Purpose:** Allow an authenticated user to add items to their cart (or bulk-add multiple items).
- **Must include:**
  - Single add form: `productId`, optional `variantId`, `quantity`
  - Bulk add form: list of items with the same fields
  - Submit button

### 1) API Overview (endpoint summary)

All Cart routes live under:

- **Base URL:** `/cart`

#### Endpoints

| Method | Path          | Auth    | Purpose                                        |
| ------ | ------------- | ------- | ---------------------------------------------- |
| GET    | `/cart`       | ❌ none | List cart items (supports filters, pagination) |
| GET    | `/cart/:id`   | ❌ none | Get a single cart item                         |
| POST   | `/cart`       | ✅ yes  | Add item to cart                               |
| POST   | `/cart/bulk`  | ✅ yes  | Add multiple items to cart                     |
| PATCH  | `/cart/:id`   | ✅ yes  | Update cart quantity (owner only)              |
| DELETE | `/cart/:id`   | ✅ yes  | Remove a cart item (owner only)                |
| DELETE | `/cart/bulk`  | ✅ yes  | Delete multiple cart items by ids (owner only) |
| DELETE | `/cart/clear` | ✅ yes  | Clear cart for authenticated user              |

> **Auth note:** Add/update/delete/clear require a logged-in user; modifications are restricted to the cart owner.

### 2) Cart Payload Schema (what fields UI must send/expect)

#### Add to cart

- `productId` (number, required)
- `variantId` (number, optional)
- `quantity` (number, required, min 1)

#### Bulk add to cart

- `items` (array of objects with the same fields as Add to Cart)

#### Update cart item

- `quantity` (number, required, min 1)

#### Bulk delete

- `ids` (array of cart item ids)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /cart`)

- `page` (number, optional)
- `limit` (number, optional)
- `userId` (number, optional)
- `productId` (number, optional)

#### Recommended admin panel filters (optional enhancements)

- Text search across product name / user email (requires API support)
- Date range (createdAt)
- Quantity range

### 4) Example API calls (admin UI wiring)

**List cart items (with optional filters/pagination)**
`GET /cart?page=1&limit=25&userId=123&productId=456`

**Get a single cart item**
`GET /cart/{id}`

**Add item to cart**
`POST /cart`

Body:
`{ productId, variantId?, quantity }`

**Bulk add items**
`POST /cart/bulk`

Body:
`{ items: [{ productId, variantId?, quantity }, ...] }`

**Update cart item quantity (owner only)**
`PATCH /cart/{id}`

Body:
`{ quantity }`

**Delete cart item (owner only)**
`DELETE /cart/{id}`

**Bulk delete cart items (owner only)**
`DELETE /cart/bulk`

Body:
`{ ids: [123, 456] }`

**Clear cart for the authenticated user**
`DELETE /cart/clear`

---

## Admin Panel - Category Module Requirements

### Pages (page name + what should be on the page)

#### Category list page

- **Page name:** Categories
- **Purpose:** Manage categories (view, create, edit, delete) with thumbnail support.
- **Must include:**
  - Table/grid of categories with at least: `id`, `name`, `thumbnail`, number of `subCategories` (if available)
  - Search box (text search by name)
  - Filters (if added in backend): status/active, has thumbnail
  - Sorting (name, createdAt)
  - Pagination (page / limit)
  - Row actions: view, edit, delete

#### Category detail page

- **Page name:** Category Detail
- **Purpose:** Show category detail and nested subcategories.
- **Must include:**
  - Display fields: `id`, `name`, `thumbnail`
  - Subcategories + child categories list (from response)
  - Edit button, delete button, back to list

#### Create / Edit category page

- **Page name:** Create Category / Edit Category
- **Purpose:** Create or update a category and upload a thumbnail.
- **Must include:**
  - Form fields: `name`, `thumbnail` (file upload)
  - Client-side validation: name required (min length 3)
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All Category routes live under:

- **Base URL:** `/categories`

#### Endpoints

| Method | Path                | Auth    | Purpose                                          |
| ------ | ------------------- | ------- | ------------------------------------------------ |
| GET    | `/categories`       | ❌ none | List all categories (incl. nested subcategories) |
| GET    | `/categories/:slug` | ❌ none | Get category by id or name                       |
| POST   | `/categories`       | ✅ yes  | Create new category                              |
| PUT    | `/categories/:slug` | ✅ yes  | Update category (admin only)                     |
| DELETE | `/categories/:slug` | ✅ yes  | Delete category (admin only, checks refs)        |

> **Auth note:** Create/Update/Delete require `authenticate` middleware (admin role enforced in service).

### 2) Category Payload Schema (what fields UI must send/expect)

#### Create / Update category

- `name` (string, required, min 3)
- `thumbnail` (string, optional; will be uploaded via multipart/form-data)

### 3) Filtering / Search (current backend support)

#### Supported today

- List all categories: `GET /categories` (no filter params)
- Get by id or name: `GET /categories/:slug` (`slug` is numeric id or category name)

#### Recommended admin panel filters (requires backend changes)

- Search by name (query param `search`)
- Active/inactive status filter (if status field is added)
- Pagination (`page`, `limit`)
- Sorting (name, createdAt)

### 4) Example API calls (admin UI wiring)

**List categories**
`GET /categories`

**Get a single category**
`GET /categories/{idOrName}`

**Create category**
`POST /categories`

Body (multipart/form-data):

- `name`
- `thumbnail` (file)

**Update category**
`PUT /categories/{id}`

Body (multipart/form-data):

- `name`
- `thumbnail` (file)

**Delete category**
`DELETE /categories/{id}`

---

## Admin Panel - SubCategory Module Requirements

### Pages (page name + what should be on the page)

#### SubCategory list page

- **Page name:** SubCategories
- **Purpose:** Manage subcategories (view/create/edit/delete) under a parent category.
- **Must include:**
  - Table/grid of subcategories with fields: `id`, `name`, `categoryId`, `thumbnail`, number of `childCategories` (if available)
  - Search box (text search by name)
  - Filters: categoryId (parent), has thumbnail
  - Sorting (name, createdAt)
  - Pagination (page / limit)
  - Row actions: view, edit, delete

#### SubCategory detail page

- **Page name:** SubCategory Detail
- **Purpose:** Show subcategory detail and nested child categories.
- **Must include:**
  - Display fields: `id`, `name`, `thumbnail`, `categoryId`
  - Child categories list (from response)
  - Edit button, delete button, back to list

#### Create / Edit subcategory page

- **Page name:** Create SubCategory / Edit SubCategory
- **Purpose:** Create or update a subcategory and upload a thumbnail.
- **Must include:**
  - Form fields: `name`, `categoryId`, `thumbnail` (file upload)
  - Client-side validation: name required (min length 3), categoryId required
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All SubCategory routes live under:

- **Base URL:** `/sub-categories`

#### Endpoints

| Method | Path                    | Auth    | Purpose                                           |
| ------ | ----------------------- | ------- | ------------------------------------------------- |
| GET    | `/sub-categories`       | ❌ none | List all subcategories (supports category filter) |
| GET    | `/sub-categories/:slug` | ❌ none | Get subcategory by id                             |
| POST   | `/sub-categories`       | ✅ yes  | Create new subcategory                            |
| PUT    | `/sub-categories/:slug` | ✅ yes  | Update subcategory (admin only)                   |
| DELETE | `/sub-categories/:slug` | ✅ yes  | Delete subcategory (admin only)                   |

> **Auth note:** Create/Update/Delete require `authenticate` middleware (admin role enforced in service).

### 2) SubCategory Payload Schema (what fields UI must send/expect)

#### Create subcategory

- `name` (string, required, min 3)
- `categoryId` (number, required)
- `thumbnail` (string, optional; will be uploaded via multipart/form-data)

#### Update subcategory

- `name` (string, required, min 3)
- `thumbnail` (string, optional; file upload)

### 3) Filtering / Search (current backend support)

#### Supported today

- `GET /sub-categories` supports `categoryId` query parameter (returns only those subcategories)
- `GET /sub-categories/:id` returns a single subcategory by id

#### Recommended admin panel filters (requires backend changes)

- Text search by name (`search`)
- Status (active/inactive)
- Pagination (`page`, `limit`)
- Sorting (name, createdAt)

### 4) Example API calls (admin UI wiring)

**List subcategories (filter by category)**
`GET /sub-categories?categoryId=123`

**Get a single subcategory**
`GET /sub-categories/{id}`

**Create subcategory**
`POST /sub-categories`

Body (multipart/form-data):

- `name`
- `categoryId`
- `thumbnail` (file)

**Update subcategory**
`PUT /sub-categories/{id}`

Body (multipart/form-data):

- `name`
- `thumbnail` (file)

**Delete subcategory**
`DELETE /sub-categories/{id}`

---

### Naming conventions (API / UI)

- Model: `Category`
- API base: `/categories`
- Resource ID param: `slug` (accepts numeric id or category name)
- Fields: `id`, `name`, `thumbnail`, `subCategories` (with `childCategories`)

---

## Admin Panel - ChildCategory Module Requirements

### Pages (page name + what should be on the page)

#### ChildCategory list page

- **Page name:** ChildCategories
- **Purpose:** Manage child categories (view/create/edit/delete) under a parent subcategory.
- **Must include:**
  - Table/grid of child categories with fields: `id`, `name`, `subCategoryId`, `thumbnail`
  - Search box (text search by name)
  - Filters: subCategoryId (parent), has thumbnail
  - Sorting (name, createdAt)
  - Pagination (page / limit)
  - Row actions: view, edit, delete

#### ChildCategory detail page

- **Page name:** ChildCategory Detail
- **Purpose:** Show child category detail.
- **Must include:**
  - Display fields: `id`, `name`, `thumbnail`, `subCategoryId`
  - Edit button, delete button, back to list

#### Create / Edit child category page

- **Page name:** Create ChildCategory / Edit ChildCategory
- **Purpose:** Create or update a child category and upload a thumbnail.
- **Must include:**
  - Form fields: `name`, `subCategoryId`, `thumbnail` (file upload)
  - Client-side validation: name required (min length 3), subCategoryId required
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All ChildCategory routes live under:

- **Base URL:** `/child-categories`

#### Endpoints

| Method | Path                      | Auth    | Purpose                                                 |
| ------ | ------------------------- | ------- | ------------------------------------------------------- |
| GET    | `/child-categories`       | ❌ none | List all child categories (supports subCategory filter) |
| GET    | `/child-categories/:slug` | ❌ none | Get child category by id                                |
| POST   | `/child-categories`       | ✅ yes  | Create new child category                               |
| PUT    | `/child-categories/:slug` | ✅ yes  | Update child category (admin only)                      |
| DELETE | `/child-categories/:slug` | ✅ yes  | Delete child category (admin only)                      |

> **Auth note:** Create/Update/Delete require `authenticate` middleware (admin role enforced in service).

### 2) ChildCategory Payload Schema (what fields UI must send/expect)

#### Create child category

- `name` (string, required, min 3)
- `subCategoryId` (number, required)
- `thumbnail` (string, optional; will be uploaded via multipart/form-data)

#### Update child category

- `name` (string, required, min 3)
- `thumbnail` (string, optional; file upload)

### 3) Filtering / Search (current backend support)

#### Supported today

- `GET /child-categories` supports `subCategoryId` query parameter (returns only those child categories)
- `GET /child-categories/:id` returns a single child category by id

#### Recommended admin panel filters (requires backend changes)

- Text search by name (`search`)
- Status (active/inactive)
- Pagination (`page`, `limit`)
- Sorting (name, createdAt)

### 4) Example API calls (admin UI wiring)

**List child categories (filter by subcategory)**
`GET /child-categories?subCategoryId=123`

**Get a single child category**
`GET /child-categories/{id}`

**Create child category**
`POST /child-categories`

Body (multipart/form-data):

- `name`
- `subCategoryId`
- `thumbnail` (file)

**Update child category**
`PUT /child-categories/{id}`

Body (multipart/form-data):

- `name`
- `thumbnail` (file)

**Delete child category**
`DELETE /child-categories/{id}`

---

## Admin Panel - Products Module Requirements

### Pages (page name + what should be on the page)

#### Products list page

- **Page name:** Products
- **Purpose:** Browse/search/filter products and perform actions (view/edit/delete). This is the main product management page.
- **Must include:**
  - Table/grid of products with fields: `id`, `name`, `slug`, `sellerId`, `price`, `stockQuantity`, `category`, `subCategory`, `childCategory`, `status`, `createdAt`
  - Search input (search across name/description/tags)
  - Filters: category, subCategory, childCategory, sellerId, price range, in-stock, rating, tags, created date range
  - Sorting controls (price, createdAt, stockQuantity, rating)
  - Pagination controls (page / page size)
  - Row actions: view details, edit, delete

#### Product detail page

- **Page name:** Product Detail
- **Purpose:** Show full product data including variants and additional info.
- **Must include:**
  - Display fields: all product fields returned by API (`id`, `name`, `slug`, `price`, `currency`, `sku`, `stockQuantity`, `category`, `subCategory`, `childCategory`, `hasVariants`, `images`, `thumbnail`, `tags`, `additionalInfo`, `variants`, `averageRating`, `reviews`, `createdAt`, `updatedAt`, seller info)
  - Edit button, delete button, back to list

#### Create / Edit product page

- **Page name:** Create Product / Edit Product
- **Purpose:** Create or update a product (incl. images + thumbnail + metadata).
- **Must include:**
  - Form fields: `name`, `shortDescription`, `description`, `price`, `currency`, `sku`, `stockQuantity`, `categoryId`, `subCategoryId`, `childCategoryId`, `hasVariants`, `tags` (array), `images` (upload multiple), `thumbnail` (upload)
  - Pro tip: allow removing existing images (`imagesToRemove` list) and adding new
  - Client-side validation: required fields, min values, etc.
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All Products routes live under:

- **Base URL:** `/products`

#### Endpoints

| Method | Path            | Auth    | Purpose                                              |
| ------ | --------------- | ------- | ---------------------------------------------------- |
| GET    | `/products`     | ❌ none | List products (supports filtering/search/pagination) |
| GET    | `/products/:id` | ❌ none | Get product by id or slug                            |
| POST   | `/products`     | ✅ yes  | Create new product                                   |
| PUT    | `/products/:id` | ✅ yes  | Update product                                       |
| DELETE | `/products/:id` | ✅ yes  | Delete product (draft if orders exist)               |

> **Auth note:** Create/Update/Delete require `authenticate` middleware; service enforces seller/admin permissions.

### 2) Product Payload Schema (what fields UI must send/expect)

#### Create product

- `sellerId` (number, optional; admin can set on behalf of seller)
- `name` (string, required)
- `shortDescription` (string, required)
- `description` (string, required)
- `price` (number, required)
- `currency` (string, required)
- `sku` (string, required)
- `stockQuantity` (number, required)
- `categoryId` (number, required)
- `subCategoryId` (number, required)
- `childCategoryId` (number, optional)
- `hasVariants` (boolean, required)
- `tags` (array of strings)
- `images` (array of strings, uploaded via multipart)
- `thumbnail` (string, uploaded via multipart)

#### Update product

- Any subset of the create fields (partial updates allowed)
- `imagesToRemove` (array of strings) to remove existing images

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /products`)

- `page` (number)
- `limit` (number)
- `search` (text search across name/description/tags)
- `category` (id)
- `subCategory` (id)
- `childCategory` (id)
- `sellerId` (id)
- `priceRange[min/max]`
- `inStock=true` (stockQuantity > 0)
- `rating` (minimum average rating)
- `tags` (comma-separated)
- `createdAt` (exact date or range via `createdAt[from]`, `createdAt[to]`)
- `sortBy` (comma-separated fields)
- `orderBy` (`asc` or `desc`)

### 4) Example API calls (admin UI wiring)

**List products (with filters/pagination)**
`GET /products?page=1&limit=25&search=phone&category=3&inStock=true&sortBy=price&orderBy=asc`

**Get a single product**
`GET /products/{idOrSlug}`

**Create product**
`POST /products`

Body (multipart/form-data):

- `name`
- `shortDescription`
- `description`
- `price`
- `currency`
- `sku`
- `stockQuantity`
- `categoryId`
- `subCategoryId`
- `childCategoryId` (optional)
- `hasVariants`
- `tags` (array)
- `images` (file[])
- `thumbnail` (file)

**Update product**
`PUT /products/{id}`

Body (multipart/form-data):

- any of the create fields (partial update allowed)
- `imagesToRemove` (array of image URLs to delete)

**Delete product**
`DELETE /products/{id}`

---

## Admin Panel - AdditionalInfo Module Requirements

### Pages (page name + what should be on the page)

#### Additional info list page

- **Page name:** Additional Info
- **Purpose:** Manage product metadata fields (key/value pairs) attached to a product.
- **Must include:**
  - Table/grid with fields: `id`, `productId`, `name`, `value`, `createdAt`
  - Filters: productId, search by name
  - Sorting (createdAt, name)
  - Pagination (page / limit)
  - Row actions: view, edit, delete

#### Additional info detail page

- **Page name:** Additional Info Detail
- **Purpose:** View a specific additional info record.
- **Must include:**
  - Display fields: `id`, `productId`, `name`, `value`
  - Edit button, delete button, back to list

#### Create / Edit additional info page

- **Page name:** Create Additional Info / Edit Additional Info
- **Purpose:** Create or update additional info entries for a product.
- **Must include:**
  - Form fields: `productId`, `name`, `value`
  - Client-side validation: all fields required
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All AdditionalInfo routes live under:

- **Base URL:** `/additional-info`

#### Endpoints

| Method | Path                   | Auth    | Purpose                                     |
| ------ | ---------------------- | ------- | ------------------------------------------- |
| GET    | `/additional-info`     | ❌ none | List additional infos (filters, pagination) |
| GET    | `/additional-info/:id` | ❌ none | Get a single additional info                |
| POST   | `/additional-info`     | ✅ yes  | Create additional info                      |
| PATCH  | `/additional-info`     | ✅ yes  | Bulk create additional infos                |
| PUT    | `/additional-info/:id` | ✅ yes  | Update additional info                      |
| DELETE | `/additional-info/:id` | ✅ yes  | Delete additional info                      |

> **Auth note:** Create/Update/Delete require `authenticate` middleware; seller/admin guards are enforced by the service.

### 2) AdditionalInfo Payload Schema (what fields UI must send/expect)

#### Create additional info

- `productId` (number, required)
- `name` (string, required)
- `value` (string, required)

#### Bulk create additional infos

- `productId` (number, required)
- `additionalInfos` (array of `{ name, value }`)

#### Update additional info

- `productId` (number, optional)
- `name` (string, optional)
- `value` (string, optional)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /additional-info`)

- `page` (number)
- `limit` (number)
- `search` (text search on `name`)
- `productId` (number)
- `createdAt` (date or range)
- `sortBy` / `orderBy`

### 4) Example API calls (admin UI wiring)

**List additional infos**
`GET /additional-info?page=1&limit=25&search=color&productId=123`

**Get a single additional info**
`GET /additional-info/{id}`

**Create additional info**
`POST /additional-info`

Body:
`{ productId, name, value }`

**Bulk create additional infos**
`PATCH /additional-info`

Body:
`{ productId, additionalInfos: [{ name, value }, ...] }`

**Update additional info**
`PUT /additional-info/{id}`

Body:
`{ productId?, name?, value? }`

**Delete additional info**
`DELETE /additional-info/{id}`

---

## Admin Panel - Variant Module Requirements

### Pages (page name + what should be on the page)

#### Variant list page

- **Page name:** Variants
- **Purpose:** Manage product variants (view/create/edit/delete) for products that use variants.
- **Must include:**
  - Table/grid with fields: `id`, `productId`, `name`, `price`, `currency`, `sku`, `stockQuantity`, `createdAt`
  - Filters: productId, sellerId, price range, inStock, search by name
  - Sorting (price, stockQuantity, createdAt)
  - Pagination (page / limit)
  - Row actions: view, edit, delete

#### Variant detail page

- **Page name:** Variant Detail
- **Purpose:** Show variant details and allow edits.
- **Must include:**
  - Display fields: `id`, `productId`, `name`, `price`, `currency`, `sku`, `stockQuantity`, `images`, `thumbnail`, `createdAt`, `updatedAt`
  - Edit button, delete button, back to list

#### Create / Edit variant page

- **Page name:** Create Variant / Edit Variant
- **Purpose:** Create or update a variant (including images/thumbnails).
- **Must include:**
  - Form fields: `productId`, `price`, `currency`, `sku`, `stockQuantity`, `name`, `images` (file[]), `thumbnail` (file), `type`
  - Client-side validation for required fields
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All Variant routes live under:

- **Base URL:** `/variants`

#### Endpoints

| Method | Path            | Auth    | Purpose                            |
| ------ | --------------- | ------- | ---------------------------------- |
| GET    | `/variants`     | ❌ none | List variants (filters/pagination) |
| GET    | `/variants/:id` | ❌ none | Get a single variant               |
| POST   | `/variants`     | ✅ yes  | Create variant                     |
| PUT    | `/variants/:id` | ✅ yes  | Update variant                     |
| DELETE | `/variants/:id` | ✅ yes  | Delete variant                     |

> **Auth note:** Create/Update/Delete require `authenticate`; service enforces permission checks.

### 2) Variant Payload Schema (what fields UI must send/expect)

#### Create variant

- `sellerId` (number, optional)
- `productId` (number, required)
- `price` (number, required)
- `currency` (string, required)
- `sku` (string, required)
- `stockQuantity` (number, required)
- `name` (string, required)
- `type` (string, required)
- `images` (array of strings, uploaded via multipart)
- `thumbnail` (string, uploaded via multipart)

#### Update variant

- Any subset of create fields
- `imagesToRemove` (array of strings) to remove existing images

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /variants`)

- `page` (number)
- `limit` (number)
- `search` (text search by name)
- `sellerId` (number)
- `productId` (number)
- `priceRange[min/max]`
- `inStock=true` (stockQuantity > 0)
- `createdAt` (date or range)
- `sortBy` / `orderBy`

### 4) Example API calls (admin UI wiring)

**List variants**
`GET /variants?page=1&limit=25&productId=123&inStock=true&search=red`

**Get a single variant**
`GET /variants/{id}`

**Create variant**
`POST /variants`

Body (multipart/form-data):

- `productId`
- `price`
- `currency`
- `sku`
- `stockQuantity`
- `name`
- `type`
- `images` (file[])
- `thumbnail` (file)

**Update variant**
`PUT /variants/{id}`

Body (multipart/form-data):

- Any of the create fields
- `imagesToRemove` (array)

**Delete variant**
`DELETE /variants/{id}`

---

## Admin Panel - Blog Module Requirements

### Pages (page name + what should be on the page)

#### Blog list page

- **Page name:** Blog Posts
- **Purpose:** Manage blog posts (view/search/filter/publish/unpublish/delete).
- **Must include:**
  - Table/grid with fields: `id`, `title`, `slug`, `category`, `status`, `createdAt`, `author`
  - Search input (search across title/description/slug)
  - Filters: categoryId, status (active/inactive/draft), date range, author
  - Sorting controls (createdAt, title)
  - Pagination controls (page / limit)
  - Row actions: view/edit, set status, delete

#### Blog detail page

- **Page name:** Blog Detail
- **Purpose:** Show blog post content and metadata.
- **Must include:**
  - Display fields: `id`, `title`, `description`, `slug`, `thumbnail`, `category`, `status`, `seoTitle`, `seoDescription`, `createdAt`, `updatedAt`, `author`
  - Action buttons: edit, set status, delete, back to list

#### Create / Edit blog page

- **Page name:** Create Blog / Edit Blog
- **Purpose:** Create or update a blog post (including thumbnail + SEO fields).
- **Must include:**
  - Form fields: `title`, `description`, `categoryId`, `thumbnail` (file upload), `slug` (optional), `seoTitle` (optional), `seoDescription` (optional), `status` (active/inactive/draft)
  - Client-side validation: required fields, min lengths
  - Submit + cancel/back buttons

#### Blog comments page (optional)

- **Page name:** Blog Comments
- **Purpose:** View comments for a post and moderate them.
- **Must include:**
  - List of comments with user, content, createdAt, replies
  - Ability to delete or hide comments (not currently in API)

### 1) API Overview (endpoint summary)

All Blog routes live under:

- **Base URL:** `/blogs`

#### Endpoints

| Method | Path                    | Auth    | Purpose                                                 |
| ------ | ----------------------- | ------- | ------------------------------------------------------- |
| GET    | `/blogs`                | ❌ none | List active blogs (supports search/category/pagination) |
| GET    | `/blogs/:slug`          | ❌ none | Get public blog post by slug                            |
| GET    | `/blogs/:slug/comments` | ❌ none | Get comments for a blog post                            |
| POST   | `/blogs/:slug/comments` | ✅ yes  | Create a comment (authenticated user)                   |
| POST   | `/blogs`                | ✅ yes  | Create blog post (admin only)                           |
| PUT    | `/blogs/:id`            | ✅ yes  | Update blog post (admin only)                           |
| DELETE | `/blogs/:id`            | ✅ yes  | Delete blog post (admin only)                           |
| PATCH  | `/blogs/:id/status`     | ✅ yes  | Set blog post status (admin only)                       |

> **Auth note:** Creating/updating/deleting blogs and comments requires `authenticate` middleware. Blog create/update/delete/status is restricted to admin role.

### 2) Blog Payload Schema (what fields UI must send/expect)

#### Create blog

- `thumbnail` (string, required; uploaded via multipart)
- `title` (string, required, min 3)
- `description` (string, required, min 10)
- `categoryId` (number, required)
- `slug` (string, optional, autogenerated if missing)
- `seoTitle` (string, optional)
- `seoDescription` (string, optional)
- `status` (string, optional; one of `active`, `inactive`, `draft`)

#### Update blog

- Any subset of create fields

#### Set status

- `status` (string, required; one of `active`, `inactive`, `draft`)

#### Create blog comment

- `content` (string, required)
- `parentId` (number, optional for threaded replies)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /blogs`)

- `page` (number)
- `limit` (number)
- `search` (text search across title/description/slug)
- `categoryId` (number)

#### Recommended admin panel filters (requires backend changes)

- Status filter (active/inactive/draft)
- Author filter
- Date range (createdAt)
- Sorting (createdAt, title)

### 4) Example API calls (admin UI wiring)

**List blog posts**
`GET /blogs?page=1&limit=25&search=launch&categoryId=5`

**Get a single blog post**
`GET /blogs/{slug}`

**Create blog post**
`POST /blogs`

Body (multipart/form-data):

- `thumbnail` (file)
- `title`
- `description`
- `categoryId`
- `slug` (optional)
- `seoTitle` (optional)
- `seoDescription` (optional)
- `status` (optional: active/inactive/draft)

**Update blog post**
`PUT /blogs/{id}`

Body (multipart/form-data):

- any of the create fields

**Delete blog post**
`DELETE /blogs/{id}`

**Set blog status**
`PATCH /blogs/{id}/status`

Body:
`{ status: "active" | "inactive" | "draft" }`

**List comments for a blog post**
`GET /blogs/{slug}/comments`

**Create a comment**
`POST /blogs/{slug}/comments`

Body:
`{ content, parentId? }`

---

---

## Admin Panel - Blog Category Module Requirements

### Pages (page name + what should be on the page)

#### Blog Category list page

- **Page name:** Blog Categories
- **Purpose:** Manage blog post categories (view, create, edit, delete).
- **Must include:**
  - Table/grid with fields: `id`, `name`, `slug`, `thumbnail`, `postCount`, `createdAt`
  - Search box (text search by name)
  - Sorting (name, postCount, createdAt)
  - Pagination (page / limit)
  - Row actions: view, edit, delete

#### Create / Edit blog category page

- **Page name:** Create Blog Category / Edit Blog Category
- **Purpose:** Create or update a blog category and upload a thumbnail.
- **Must include:**
  - Form fields: `name`, `thumbnail` (file upload), `slug` (optional)
  - Client-side validation: name required (min length 3)
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All Blog Category routes live under:

- **Base URL:** `/blog-categories`

#### Endpoints

| Method | Path                     | Auth    | Purpose                               |
| ------ | ------------------------ | ------- | ------------------------------------- |
| GET    | `/blog-categories`       | ❌ none | List all blog categories              |
| GET    | `/blog-categories/:slug` | ❌ none | Get blog category by id or slug       |
| POST   | `/blog-categories`       | ✅ yes  | Create new blog category (admin only) |
| PUT    | `/blog-categories/:id`   | ✅ yes  | Update blog category (admin only)     |
| DELETE | `/blog-categories/:id`   | ✅ yes  | Delete blog category (admin only)     |

---

## Admin Panel - Blog Comment Module Requirements

### Pages (page name + what should be on the page)

#### Blog Comments list page

- **Page name:** Blog Comments
- **Purpose:** Manage and moderate blog comments (search, filter, hide/unhide, delete).
- **Must include:**
  - Table/grid with fields: `id`, `post` (title/slug), `user` (name/email), `content`, `isHidden`, `deletedAt`, `createdAt`
  - Search input (text search across comment content)
  - Filters: `postId`, hidden status (hidden/visible), deleted status (deleted/active)
  - Sorting controls (createdAt desc by default, plus by post, user)
  - Pagination controls (page / limit) — **backend does not currently support pagination; consider adding `page`/`limit` support**
  - Row actions: edit comment, hide/unhide, delete

#### Blog Comment detail / moderation panel

- **Page name:** Comment Detail
- **Purpose:** Inspect comment details and moderate (edit/hide/delete).
- **Must include:**
  - Display fields: `id`, `post` (title + slug), `user` (id + name + email), `content`, `isHidden`, `deletedAt`, `createdAt`
  - Editable textarea for comment content (admin or owner)
  - Toggle for visibility (hidden/visible) — admin only
  - Delete button (soft delete), with confirmation
  - Back to list

### 1) API Overview (endpoint summary)

All Blog Comment routes live under:

- **Base URL:** `/blog-comments`

#### Endpoints

| Method | Path                            | Auth   | Purpose                                        |
| ------ | ------------------------------- | ------ | ---------------------------------------------- |
| GET    | `/blog-comments/admin`          | ✅ yes | List comments (admin only, supports filtering) |
| PUT    | `/blog-comments/:id`            | ✅ yes | Update comment (owner only)                    |
| DELETE | `/blog-comments/:id`            | ✅ yes | Delete comment (owner or admin)                |
| PATCH  | `/blog-comments/:id/visibility` | ✅ yes | Set comment visibility (admin only)            |

> **Auth note:** All endpoints require `authenticate` middleware. List and visibility only work for admin. Update/delete work for the comment owner or an admin.

---

### 2) Blog Comment Payload Schema (what fields UI must send/expect)

#### Update comment

- `content` (string, required, min 1)

#### Set visibility (admin only)

- `isHidden` (boolean, required)

### 3) Search + Filtering (backend-supported)

#### Supported filters (via query params on `GET /blog-comments/admin`)

- `postId` (number) — filter comments for a specific blog post
- `search` (text) — searches content (case-insensitive contains)
- `hidden` (`true|false`) — filter by `isHidden`
- `deleted` (`true|false`) — filter by soft-deleted comments (`deletedAt != null`)

#### Recommended admin panel filters (backend already supports most)

- Date range (createdAt)
- Comment author (user id/email)
- Pagination (`page`, `limit`) and sorting (currently fixed to `createdAt desc`)

### 4) Example API calls (admin UI wiring)

**List blog comments**
`GET /blog-comments/admin?postId=123&search=spam&hidden=false&deleted=false`

**Update a comment (owner only)**
`PUT /blog-comments/{id}`

Body:
`{ content: "Updated comment text" }`

**Delete a comment (owner or admin)**
`DELETE /blog-comments/{id}`

**Set comment visibility (admin only)**
`PATCH /blog-comments/{id}/visibility`

Body:
`{ isHidden: true }`

---

### Naming conventions (API / UI)

- Model: `BlogComment`
- API base: `/blog-comments`
- Resource ID param: `id`
- Fields: `id`, `postId`, `userId`, `content`, `isHidden`, `deletedAt`, `createdAt`, `updatedAt`, `post`, `user`

---

### Notes / Backend gaps (optional enhancements)

- The list endpoint (`/admin`) currently does not support pagination or sorting parameters; adding `page`, `limit`, `sortBy`, `orderBy` would improve scalability.
- A dedicated endpoint to fetch a single comment by id would simplify the detail view (`GET /blog-comments/:id`).

---

## Admin Panel - Comments Module Requirements

### Pages (page name + what should be on the page)

#### Comments list page

- **Page name:** Product Comments
- **Purpose:** Browse, search, filter, and moderate comments posted on products.
- **Must include:**
  - Table/grid of comments with fields: `id`, `product` (name/id), `user` (name/email or "Anonymous"), `content`, `images` (if any), `createdAt`, `updatedAt`
  - Search input (text search across comment content)
  - Filters: `productId`, `userId`, parent comment (top-level vs replies), date range (createdAt)
  - Sorting controls (createdAt desc by default, plus product or user)
  - Pagination controls (page / limit)
  - Row actions: view comment, edit, delete, reply

#### Comment detail page

- **Page name:** Comment Detail
- **Purpose:** Show full comment details and allow edits or moderation.
- **Must include:**
  - Display fields: `id`, `product` (id/name), `user` (id/name/email), `content`, `images`, `parentId` (if reply), `createdAt`, `updatedAt`
  - Editable content textarea (owner or admin)
  - Image thumbnails (if present)
  - Reply button (if user is allowed to reply)
  - Delete button (owner or admin)
  - Back to list

#### Reply to comment page (optional)

- **Page name:** Reply to Comment
- **Purpose:** Allow permitted users to reply to existing comments (seller, admin, or user replying to seller).
- **Must include:**
  - Reply content textarea
  - Optional image upload
  - Submit button

### 1) API Overview (endpoint summary)

All Comments routes live under:

- **Base URL:** `/comments`

#### Endpoints

| Method | Path                  | Auth      | Purpose                                                |
| ------ | --------------------- | --------- | ------------------------------------------------------ |
| GET    | `/comments`           | ❌ none   | List comments (supports pagination/filter)             |
| GET    | `/comments/:id`       | ❌ none   | Get a single comment                                   |
| POST   | `/comments`           | ❌ none\* | Create a comment (anonymous or logged in)              |
| PATCH  | `/comments/:id`       | ✅ yes    | Update a comment (owner only)                          |
| DELETE | `/comments/:id`       | ✅ yes    | Delete a comment (owner or admin)                      |
| POST   | `/comments/:id/reply` | ✅ yes    | Create a reply to a comment (with authorization rules) |

> **Auth note:**
>
> - Posting a new comment is allowed anonymously (no auth header required).
> - Updates/deletes require authentication. Owners can update/delete their own comments; admins may delete any comment.
> - Creating replies requires authentication and enforces seller/admin reply rules.

---

### 2) Comment Payload Schema (what fields UI must send/expect)

#### Create comment (anonymous or logged in)

- `productId` (number, required)
- `content` (string, required)
- `images` (array of strings, optional, max 5)
- `parentId` (number, optional, for replies)

#### Update comment (owner only)

- `content` (string, optional)
- `images` (array of strings, optional, max 5)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /comments`)

- `page` (number, optional)
- `limit` (number, optional)
- `productId` (number, optional)
- `userId` (number, optional)
- `parentId` (number, optional) — to fetch replies or top-level comments

#### Recommended admin panel filters (optional enhancements)

- Text search on `content`
- Filtering by `createdAt` date range
- Filtering by user email/name (requires API support)

### 4) Example API calls (admin UI wiring)

**List comments (with optional filters/pagination)**
`GET /comments?page=1&limit=25&productId=123&userId=456&parentId=null`

**Get a single comment**
`GET /comments/{id}`

**Create a comment (anonymous or logged in)**
`POST /comments`

Body:
`{ productId, content, images?, parentId? }`

**Update a comment (owner only)**
`PATCH /comments/{id}`

Body:
`{ content?, images? }`

**Delete a comment (owner or admin)**
`DELETE /comments/{id}`

**Reply to a comment (authenticated)**
`POST /comments/{id}/reply`

Body:
`{ content, images? }`

---

### Naming conventions (API / UI)

- Model: `Comment`
- API base: `/comments`
- Resource ID param: `id`
- Fields: `id`, `productId`, `userId`, `content`, `images`, `parentId`, `createdAt`, `updatedAt`, `user`, `product`, `replies`

---

### Notes / Backend gaps (optional enhancements)

- The comment list endpoint always returns top-level comments (`parentId=null`) by default. To fetch replies for a comment, use `parentId=<commentId>`.
- Search by content or user details requires backend support.
- Admin-level comment moderation filters (hidden/flagged) are not currently implemented.

---

## Admin Panel - Email Template Module Requirements

### Pages (page name + what should be on the page)

#### Email Templates list page

- **Page name:** Email Templates
- **Purpose:** Manage all email templates used for transactional and notification emails.
- **Must include:**
  - Table/grid with fields: `id`, `name`, `subject`, `createdAt`, `updatedAt`
  - Search input (text search by template name or subject)
  - Filters: name, subject (partial match)
  - Sorting controls (createdAt, name)
  - Pagination controls (page / limit)
  - Row actions: view/edit, delete

#### Email Template detail / edit page

- **Page name:** Email Template Detail
- **Purpose:** View and edit the template content.
- **Must include:**
  - Display fields: `id`, `name`, `subject`, `body`, `createdAt`, `updatedAt`
  - Editable fields: `name`, `subject`, `body` (support HTML / template syntax as needed)
  - Save button, cancel/back button

### 1) API Overview (endpoint summary)

All Email Template routes live under:

- **Base URL:** `/email-templates`

#### Endpoints

| Method | Path                   | Auth    | Purpose                     |
| ------ | ---------------------- | ------- | --------------------------- |
| GET    | `/email-templates`     | ❌ none | List all email templates    |
| GET    | `/email-templates/:id` | ❌ none | Get a single email template |
| POST   | `/email-templates`     | ✅ yes  | Create email template       |
| PUT    | `/email-templates/:id` | ✅ yes  | Update email template       |
| DELETE | `/email-templates/:id` | ✅ yes  | Delete email template       |

> **Auth note:** Create/Update/Delete are expected to be protected (admin users). If API is not yet protected, implement authentication/authorization at the route layer.

---

### 2) Email Template Payload Schema (what fields UI must send/expect)

#### Create template

- `name` (string, required)
- `subject` (string, required)
- `body` (string, required)

#### Update template

- Any subset of create fields (name/subject/body)

### 3) Filtering / Search (backend-supported)

**Current backend behavior:**

- `GET /email-templates` returns all templates (no query parameters supported today)

#### Recommended admin panel filters (requires backend changes)

- Text search by `name` and `subject` (query params like `search` or `name`)
- Pagination (`page`, `limit`)
- Sorting (`sortBy`, `orderBy`)

### 4) Example API calls (admin UI wiring)

**List templates**
`GET /email-templates`

**Get a single template**
`GET /email-templates/{id}`

**Create a template**
`POST /email-templates`

Body:
`{ name, subject, body }`

**Update a template**
`PUT /email-templates/{id}`

Body:
`{ name?, subject?, body? }`

**Delete a template**
`DELETE /email-templates/{id}`

---

### Naming conventions (API / UI)

- Model: `EmailTemplate`
- API base: `/email-templates`
- Resource ID param: `id`
- Fields: `id`, `name`, `subject`, `body`, `createdAt`, `updatedAt`

---

### Notes / Backend gaps (optional enhancements)

- The list endpoint currently does not support filtering, search, pagination, or sorting.
- If template body is HTML or contains templating syntax, the admin UI should provide a code editor field (with syntax/HTML support) and preview mode.

---

---

## Admin Panel - SMTP Module Requirements

### Pages (page name + what should be on the page)

#### SMTP Settings page

- **Page name:** SMTP Settings (or System Settings -> Email)
- **Purpose:** Configure the platform's email sending service.
- **Must include:**
  - Form fields: `host`, `port`, `user`, `pass`, `secure` (SSL/TLS toggle), `fromName`, `fromEmail`
  - Action buttons: Save Settings, Send Test Email (opens a modal to enter recipient address)
  - Success/Error alerts for connection tests

### 1) API Overview (endpoint summary)

All SMTP routes live under:

- **Base URL:** `/settings/smtp` (conceptually)

#### Endpoints

| Method | Path                  | Auth   | Purpose                            |
| ------ | --------------------- | ------ | ---------------------------------- |
| GET    | `/settings/smtp`      | ✅ yes | Get current SMTP configuration     |
| PUT    | `/settings/smtp`      | ✅ yes | Update SMTP settings               |
| POST   | `/settings/smtp/test` | ✅ yes | Send a test email to verify config |

---

## Admin Panel - Offer Module Requirements

### Pages (page name + what should be on the page)

#### Offers list page

- **Page name:** Offers
- **Purpose:** Manage promotional offers (view, create, edit, delete) across products and variants.
- **Must include:**
  - Table/grid with fields: `id`, `name`, `offerType`, `discountType`, `discountValue`, `status`, `startDate`, `endDate`, `sellerId`, `createdAt`
  - Search input (text search across name)
  - Filters: `sellerId`, `offerType`, `discountType`, `status`, date range (startDate/endDate)
  - Sorting controls (createdAt desc default, plus startDate, endDate, discountValue)
  - Pagination controls (page / limit)
  - Row actions: view, edit, delete

#### Offer detail page

- **Page name:** Offer Detail
- **Purpose:** Show full offer data including attached products/variants.
- **Must include:**
  - Display fields: `id`, `name`, `sellerId`, `offerType`, `discountType`, `discountValue`, `status`, `startDate`, `endDate`, `productIds`, `variantIds`, `createdAt`, `updatedAt`
  - Lists: attached products and variants (id + name)
  - Edit button, delete button, back to list

#### Create / Edit offer page

- **Page name:** Create Offer / Edit Offer
- **Purpose:** Create or update an offer and associate it with products/variants.
- **Must include:**
  - Form fields:
    - `name` (required)
    - `sellerId` (admin only; optional for sellers)
    - `offerType` (required; `all|product|variant`)
    - `discountType` (required; `percentage|fixed`)
    - `discountValue` (required)
    - `status` (optional; `active|inactive|draft`)
    - `startDate` (required)
    - `endDate` (required)
    - `productIds` (array, optional)
    - `variantIds` (array, optional)
  - Client-side validation (required fields, correct types, date ordering)
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All Offer routes live under:

- **Base URL:** `/offer`

#### Endpoints

| Method | Path         | Auth    | Purpose                                          |
| ------ | ------------ | ------- | ------------------------------------------------ |
| GET    | `/offer`     | ❌ none | List offers (supports filters/search/pagination) |
| GET    | `/offer/:id` | ❌ none | Get a single offer                               |
| POST   | `/offer`     | ✅ yes  | Create a new offer (admin/seller)                |
| PUT    | `/offer/:id` | ✅ yes  | Update an existing offer (admin/seller)          |
| DELETE | `/offer/:id` | ✅ yes  | Delete offer (admin/seller)                      |

> **Auth note:** Creating/updating/deleting offers requires authentication; sellers may only manage their own offers.

### 2) Offer Payload Schema (what fields UI must send/expect)

#### Create offer

- `name` (string, required)
- `sellerId` (number, optional; admin only)
- `offerType` (string, required; one of `all`, `product`, `variant`)
- `discountType` (string, required; one of `percentage`, `fixed`)
- `status` (string, optional; one of `active`, `inactive`, `draft`)
- `discountValue` (number, required)
- `startDate` (string/date, required)
- `endDate` (string/date, required)
- `productIds` (array of numbers, optional)
- `variantIds` (array of numbers, optional)

#### Update offer

- Any subset of create fields (partial updates allowed)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /offer`)

- `page` (number)
- `limit` (number)
- `search` (text search on `name`)
- `sellerId` (number)
- `sortBy` (comma-separated fields)
- `orderBy` (`asc` or `desc`)
- `createdAt` (date or range: `createdAt[from]`, `createdAt[to]`)
- `startDate` (date or range)
- `endDate` (date or range)

### 4) Example API calls (admin UI wiring)

**List offers (with filters/pagination)**
`GET /offer?page=1&limit=25&search=holiday&sellerId=123&status=active&sortBy=startDate&orderBy=asc`

**Get a single offer**
`GET /offer/{id}`

**Create offer**
`POST /offer`

Body:
`{ name, sellerId?, offerType, discountType, status?, discountValue, startDate, endDate, productIds?, variantIds? }`

**Update offer**
`PUT /offer/{id}`

Body:
`{ name?, sellerId?, offerType?, discountType?, status?, discountValue?, startDate?, endDate?, productIds?, variantIds? }`

**Delete offer**
`DELETE /offer/{id}`

---

### Naming conventions (API / UI)

- Model: `Offer`
- API base: `/offer`
- Resource ID param: `id`
- Fields: `id`, `name`, `sellerId`, `offerType`, `discountType`, `discountValue`, `status`, `startDate`, `endDate`, `productIds`, `variantIds`, `createdAt`, `updatedAt`

---

### Notes / Backend gaps (optional enhancements)

- Offer list supports date range filtering + sorting, but does not yet support filtering by product/variant id; you could add `productId` / `variantId` query params and join filters.
- The current API trusts the client for `productIds` / `variantIds` associations; you may want to validate ownership (e.g., seller can only attach products they own).

---

---

## Admin Panel - Coupon Module Requirements

### Pages (page name + what should be on the page)

#### Coupons list page

- **Page name:** Coupons Builder
- **Purpose:** Manage discount coupons and track their usage.
- **Must include:**
  - Table/grid with fields: `id`, `code`, `type` (Percentage/Fixed), `value`, `minPurchase`, `expiry`, `usageCount`, `status`
  - Search input (search by coupon code)
  - Filters: status (active/inactive), type
  - Sorting: expiry date, value
  - Row actions: view, edit, delete

#### Create / Edit coupon page

- **Page name:** Create Coupon / Edit Coupon
- **Purpose:** Create a new discount code or update existing ones.
- **Must include:**
  - Form fields: `code` (string), `type` (fixed/percentage), `value` (number), `minPurchase` (number), `startDate` (date), `endDate` (date), `usageLimit` (number), `status` (active/inactive)
  - Submit + cancel/back buttons

### 1) API Overview (endpoint summary)

All Coupon routes live under:

- **Base URL:** `/coupons`

#### Endpoints

| Method | Path           | Auth   | Purpose                                |
| ------ | -------------- | ------ | -------------------------------------- |
| GET    | `/coupons`     | ✅ yes | List coupons (supports filters/search) |
| POST   | `/coupons`     | ✅ yes | Create new coupon                      |
| PUT    | `/coupons/:id` | ✅ yes | Update coupon                          |
| DELETE | `/coupons/:id` | ✅ yes | Delete coupon                          |

---

## Admin Panel - Order Module Requirements

### Pages (page name + what should be on the page)

#### Orders list page

- **Page name:** Orders
- **Purpose:** Manage orders for customers (view, filter, update status, and process returns).
- **Must include:**
  - Table/grid with fields: `id`, `orderNumber`, `user` (name/email), `status`, `totalAmount`, `paymentMethod`, `deliveryAddress`, `pickupAddress`, `createdAt`
  - Filters: `status`, `paymentMethod`, `userId`, `orderNumber`, date range (createdAt)
  - Sorting controls (createdAt desc default, plus status, totalAmount)
  - Pagination controls (page / limit)
  - Row actions: view order details, update status, cancel, initiate return

#### Order detail page

- **Page name:** Order Detail
- **Purpose:** Show full order details, including line items, addresses, payments, and status updates.
- **Must include:**
  - Display fields: `id`, `orderNumber`, `user`, `status`, `paymentMethod`, `subTotal`, `discountAmount`, `shippingFee`, `totalAmount`, `notes`, `createdAt`, `updatedAt`
  - Sections:
    - Billing / delivery address
    - Pickup address
    - Line items (product, variant, quantity, price, total, status)
    - Coupon and discounts (if applied)
  - Actions:
    - Update order status (admin/seller)
    - Cancel order (user/admin)
    - Create return request (user)

#### Order returns page

- **Page name:** Returns
- **Purpose:** Manage return requests (view requests, update return statuses).
- **Must include:**
  - Table/grid with fields: `id`, `orderId`, `orderItemId`, `user`, `product`, `status`, `createdAt`
  - Filters: `status`, `userId`, date range (createdAt)
  - Sorting (createdAt desc)
  - Row actions: view details, update return status

### 1) API Overview (endpoint summary)

All Order routes live under:

- **Base URL:** `/order`

> **Auth note:** All endpoints require authentication (`authenticate` middleware). Role-based access is enforced in services (user/seller/admin).

#### Endpoints

| Method | Path                        | Auth | Purpose                                             |
| ------ | --------------------------- | ---- | --------------------------------------------------- |
| GET    | `/order`                    | ✅   | List orders (user/seller/admin scoped)              |
| POST   | `/order`                    | ✅   | Create order (authenticated user)                   |
| GET    | `/order/:id`                | ✅   | Get a specific order (scoped to user/seller/admin)  |
| PATCH  | `/order/:id`                | ✅   | Update order status (seller/admin)                  |
| POST   | `/order/:id/cancel`         | ✅   | Cancel an order (user only, pending orders)         |
| POST   | `/order/:id/return`         | ✅   | Submit return request (user only, delivered orders) |
| GET    | `/order/returns/all`        | ✅   | List return requests (user/seller/admin scoped)     |
| PATCH  | `/order/returns/:id/status` | ✅   | Update return request status (seller/admin)         |
| PATCH  | `/order/items/:id/status`   | ✅   | Update order item status (seller/admin)             |

### 2) Order Payload Schema (what fields UI must send/expect)

#### Create order

- `deliveryAddressId` (number, required)
- `pickupAddressId` (number, required)
- `paymentMethod` (string, required; one of `cash_on_delivery`, `stripe`, `sslcommerz`)
- `couponCode` (string, optional)
- `notes` (string, optional)
- `items` (array of objects, required):
  - `productId` (number, required)
  - `variantId` (number, optional)
  - `quantity` (number, required, min 1)

#### Update order status (seller/admin)

- `status` (string, required; one of `pending`, `processing`, `shipped`, `delivered`, `cancelled`, `returned`)

#### Cancel order (user)

- `reason` (string, optional)

#### Return order (user)

- `orderItemId` (number, required)
- `reason` (string, required)
- `images` (array of strings, optional)

#### Update return status (seller/admin)

- `status` (string, required; one of the `ReturnStatus` enum)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /order`)

- `page` (number)
- `limit` (number)

> **Note:** Current implementation scopes results by role but does not apply additional filters (status, date, etc.).

#### Return requests listing (via `GET /order/returns/all`)

- `page` (number)
- `limit` (number)

#### Recommended admin panel filters (requires backend changes)

- Order status (`status`)
- Payment method (`paymentMethod`)
- Date range (`createdAt`, `updatedAt`)
- Order number search (`orderNumber`)
- Customer name/email search

### 4) Example API calls (admin UI wiring)

**List orders (paged)**
`GET /order?page=1&limit=25`

**Get a single order**
`GET /order/{id}`

**Create an order**
`POST /order`

Body:
`{ deliveryAddressId, pickupAddressId, paymentMethod, couponCode?, notes?, items: [{ productId, variantId?, quantity }] }`

**Update order status**
`PATCH /order/{id}`

Body:
`{ status }`

**Cancel order (user)**
`POST /order/{id}/cancel`

Body:
`{ reason? }`

**Create return request (user)**
`POST /order/{id}/return`

Body:
`{ orderItemId, reason, images? }`

**List return requests**
`GET /order/returns/all?page=1&limit=25`

**Update return status**
`PATCH /order/returns/{id}/status`

Body:
`{ status }`

**Update order item status**
`PATCH /order/items/{id}/status`

Body:
`{ status }`

---

### Naming conventions (API / UI)

- Model: `Order` / `OrderItem` / `ReturnOrder`
- API base: `/order`
- Resource ID param: `id`
- Fields (Order): `id`, `orderNumber`, `userId`, `status`, `paymentMethod`, `subTotal`, `discountAmount`, `shippingFee`, `totalAmount`, `couponId`, `notes`, `createdAt`, `updatedAt`
- Fields (OrderItem): `id`, `orderId`, `productId`, `variantId`, `quantity`, `price`, `total`, `status`
- Fields (Return): `id`, `orderId`, `orderItemId`, `reason`, `images`, `status`, `createdAt`

---

### Notes / Backend gaps (optional enhancements)

- Order listing endpoint is currently limited to pagination and role scoping; it lacks status/date/search filters.
- Return listing also only supports pagination; adding status / user filters would improve admin workflows.
- Status updates are restricted to seller/admin; ensure UI only exposes allowed actions.

---

## Admin Panel - Reviews Module Requirements

### Pages (page name + what should be on the page)

#### Reviews list page

- **Page name:** Reviews
- **Purpose:** Browse and moderate product reviews (search, filter, edit, delete).
- **Must include:**
  - Table/grid with fields: `id`, `product` (name/id), `user` (name/email), `rating`, `comment`, `orderId`, `orderItemId`, `createdAt`, `updatedAt`
  - Search input (text search across comment)
  - Filters: `productId`, `userId`, rating, date range (createdAt)
  - Sorting controls (createdAt desc default, plus rating)
  - Pagination controls (page / limit)
  - Row actions: view detail, edit (owner only), delete (owner only)

#### Review detail page

- **Page name:** Review Detail
- **Purpose:** Show review details and allow editing/moderation.
- **Must include:**
  - Display fields: `id`, `product`, `user`, `orderId`, `orderItemId`, `rating`, `comment`, `images`, `createdAt`, `updatedAt`
  - Editable fields: rating, comment, images (owner only)
  - Delete button (owner only)
  - Back to list

### 1) API Overview (endpoint summary)

All Review routes live under:

- **Base URL:** `/review`

#### Endpoints

| Method | Path          | Auth   | Purpose                                    |
| ------ | ------------- | ------ | ------------------------------------------ |
| GET    | `/review`     | ✅ yes | List reviews (supports filters/pagination) |
| GET    | `/review/:id` | ✅ yes | Get a single review                        |
| POST   | `/review`     | ✅ yes | Create a review (authenticated user)       |
| PATCH  | `/review/:id` | ✅ yes | Update review (owner only)                 |
| DELETE | `/review/:id` | ✅ yes | Delete review (owner only)                 |

> **Auth note:** All endpoints require authentication. Create/update/delete actions are restricted to the review owner.

### 2) Review Payload Schema (what fields UI must send/expect)

#### Create review

- `productId` (number, required)
- `orderId` (number, required)
- `orderItemId` (number, required)
- `rating` (number, required)
- `comment` (string, required)
- `images` (array of strings, optional)

#### Update review (owner only)

- Any subset of create fields (partial updates allowed)

### 3) Filtering / Search (backend-supported)

#### Supported filters (via query params on `GET /review`)

- `page` (number)
- `limit` (number)
- `userId` (number)
- `productId` (number)

#### Recommended admin panel filters (requires backend changes)

- Search by `comment` text
- Filter by `rating` (e.g., min/max)
- Date range (createdAt)
- Order number search

### 4) Example API calls (admin UI wiring)

**List reviews**
`GET /review?page=1&limit=25&productId=123&userId=456`

**Get a single review**
`GET /review/{id}`

**Create a review**
`POST /review`

Body:
`{ productId, orderId, orderItemId, rating, comment, images? }`

**Update a review**
`PATCH /review/{id}`

Body:
`{ rating?, comment?, images? }`

**Delete a review**
`DELETE /review/{id}`

---

### Naming conventions (API / UI)

- Model: `Review`
- API base: `/review`
- Resource ID param: `id`
- Fields: `id`, `productId`, `userId`, `orderId`, `orderItemId`, `rating`, `comment`, `images`, `createdAt`, `updatedAt`, `product`, `user`, `order`, `orderItem`

---

### Notes / Backend gaps (optional enhancements)

- Reviews listing currently supports only pagination and basic filtering by product/user; adding rating + full-text search would improve usability.
- Review creation requires the order item to be `delivered` and not yet reviewed (server-enforced).
