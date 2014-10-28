# Simple mobile example and backend

A simple frontend with ionic and a backend in rails. The backend is responsible for login (with devise) and a basic api for displaying files to the user. It stores files per user to S3. The ionic framework is just an interface which communicates with the backend and after the successful login, it shows user's files where you can download them.

### Usage

Changes to work for backend: Change the carrierwave initializer with your credentials, create db, create user (with admin, check seeds.rb).
Changes for frontend: Change app.js, set the url to your heroku or locally to test how it works. Change icon, build and voila!