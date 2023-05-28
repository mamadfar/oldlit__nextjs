## <u>Old Literature</u>

---

| Version            |
|:-------------------|
| [`0.3.0`](#v0.3.0) |
| [`0.2.0`](#v0.2.0) |
| [`0.1.0`](#v0.1.0) |


### <a id="v0.3.0"/>`0.3.0`

- Added [`books api`](./src/app/api/books/route.ts) to handle the `GET` request to get the all books.
- Added [`db.util.ts`](./src/utils/db.util.ts) to use fake data in the APIs.
- Added [`API`](./src/config/API.ts) file to handle my requests through `axios`.
- Added [`types`](./src/types) folder to handle data models in the app.
- Added [`services`](./src/services) to handle dependency injection with services in the app.
- Created [`Book`](./src/components/pages/Book.tsx) component to show the list of books in the home page.
- Added `tw-elements` package to use created tailwind components in the app.
- Added max width for the app to not mess up when screen zoom out.

### <a id="v0.2.0"/>`0.2.0`

- Added `react-icons`, `axios`, `sass`, and [`.nvmrc`](./.nvmrc) to the project.
- Completed the **header** and **navbar** section.
- Added [`DarkMode`](./src/components/layout/DarkMode.tsx) to handle the dark mode.
- Added [`ActiveLink`](./src/components/common/ActiveLink.tsx) to handle the active link UI.
- Added [`Container`](./src/components/common/Container.tsx) to wrap each section for align them in a fix UI.

### <a id="v0.1.0"/>`0.1.0`

- Initialized the app and removed unnecessary codes.
- Added [`CHANGE-LOG.md`](./CHANGE-LOG.md) to the app.
- Changed the dark mode option in [`tailwind.config.js`](./tailwind.config.js) to use later.