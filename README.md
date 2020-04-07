# User Fluent
![Image for app](https://res.cloudinary.com/dmqtrnawm/image/upload/v1576203002/uf/uf-1_elx5re.png)

# Visit Site
[link](https://www.userfluent.com/#/)
## About
UserFluent is a UI/UX testing platform for developers.  Developers can post 
projects and pay testers to conduct user experience reviews.  
## Specs
* Ruby version 2.7.0
* Rails version 5.2.4
* React version 16.12.0
* devise_token_auth version 1.1.3
* Axios version 0.19.2
* Postgres version 1.2.2
* Using Yarn not NPM
# Configuration
#### Backend
- $ rvm install 2.7.0 or rbenv install 2.7.0
- $ rvm use 2.7.0 or rbenv local 2.7.0
- $ bundle install
- $ rails db:create
- $ rails db:migrate
#### Frontend
- $ cd client 
- $ yarn
- $ cd ..

#### Starting the dev server
###### if you dont have foreman installed run: $ gem install foreman
- $ foreman start -f Procfile.dev
###### If foreman exits without killing ports 3000/3001 run: $ lsof -ti:3000 | xargs kill

# Deployment instructions
#### (For Heroku)
###### if you dont have heroku cli installed run: $ npm install -g heroku
- $ heroku login
- $ heroku apps:create


- $ heroku buildpacks:add heroku/nodejs --index 1
- $ heroku buildpacks:add heroku/ruby --index 2


- $ git init
- $ git add .
- $ git commit -m "commit changes before deployment"
- $ git push heroku master
- $ heroku run rake db:migrate
- --> visit your deployed app :)

# To-Dos
### Removed
- [x] Old tasks... (removed these to condense this list)
### Discover index
- [x] Add search-filters
- [x] Make post grid responsive
### WYSIWYG form
- [x] Add WYSIWYG form to 'new post'
- [x] Load WYSIWYG in 'show post'
- [x] Finish WYSIWYG styling
### 404
- [ ] Finish 404 page
### Input Validation
- [ ] Add input validation to new post form -> ensure all fields are filled
### Pricing and Product-Packages
- [x] Add packages/pricing to form
- [x] Add Add Ons to form
- [x] Add 'public pricing' page
### Write tests
- [x] Make new post form redirect to post
- [ ] Make tests for models !!!
### Auth Tokens
- [ ] Make tokens update every API call
### Custom Form Builder ?
- [x] Create custom form builder for 'new post'
- [ ] Create form page for testers that is submittable
- [x] Create design crit tools for tester
### New Home Page
- [x] Add new home page
- [x] Change old root to 'explore'
- [x] Create stylish landing
- [x] Add new nav to home
### User Agreements
- [x] Add 'user agreement' component
- [x] Add legal boilerplate for registration and products
### Profile Improvements
- [x] Fix styling on user profile pages
- [x] Add Bio to user profile
### User Dashboard
- [x] Create tester dashboard
- [x] Create developer dashboard
### Admin Accounts - in admin frontend
- [x] Add Admin Accounts
- [x] Add Add admin dash
- [x] Add ability to moderate content
### Write tests
- [x] Make tests for models !!!
### Tester Approval
- [x] Add tester approval to admin dash
- [x] Add product MGMT. dash with additional approval to admin
### Form Improvements
- [ ] Fix InputValidation.js regex, refactor, etc...
- [ ] Add Character limit to text fields
- [x] Fix border-radius on bulma dropdowns 4px --> 3px
### Nav Improvements
- [ ] Add alerts functionality
- [x] Add search functionality or remove it
### CSS improvements
- [x] Convert stuff to flexbox
- [x] Change image ratios to better ones
### Image hosting
- [ ] Migrate to imagekit from cloudinary
- [ ] Add SVG library to frontend app
### Add Mailer
- [ ] Add mailer
- [x] Account verification
### Integrate Payments
- [ ] Stripe payments?
- [ ] Payment page?
- [ ] Account balance on dash
- [ ] Payment confirmation
- [ ] Payment Mailer
### UX Test results (product not code tests)
- [ ] Add test result approval to admin
- [ ] Add test notification when finished
