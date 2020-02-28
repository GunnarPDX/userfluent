# User Fluent
![Image for app](https://res.cloudinary.com/dmqtrnawm/image/upload/v1576203002/uf/uf-1_elx5re.png)
## About
UserFluent is a UI/UX testing platform for developers.  Developers can post 
projects and pay testers to conduct user experience reviews.  
## LICENSE
UserFluent™ Incorporated All Rights Reserved.

NOTICE:  All information contained herein this repository is, and remains
the property of UserFluent™ Incorporated.  The intellectual and technical
concepts contained herein are proprietary to UserFluent™ Incorporated and
may be covered by U.S. and Foreign Patents, patents in process, and are
protected by trade secret or copyright law. Dissemination of this
information or reproduction of this material is strictly forbidden unless
prior written permission is obtained from UserFluent™ Incorporated.

Written by C. Gunnar Rosenberg <gunnarrosenberg@gmail.com>, Jan 1st 2020
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
#### Percent completed till launch 
[10/63] |==========-----------------------------------------------------| %
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
### Comments
- [ ] Add comments!
- [ ] Add CSS classes
### Input Validation
- [ ] Add input validation to new post form -> ensure all fields are filled
### Pricing and Product-Packages
- [x] Add packages/pricing to form
- [x] Add Add Ons to form
- [ ] Add 'public pricing' page
### Write tests
- [x] Make new post form redirect to post
- [ ] Make tests for models !!!
### Auth Tokens
- [ ] Make tokens update every API call
### Custom Form Builder ?
- [ ] Create custom form builder for 'new post'
- [ ] Create form page for testers that is submittable
- [ ] Create design crit tools for tester
### New Home Page
- [ ] Add new home page
- [ ] Change old root to 'explore'
- [ ] Create stylish landing
- [ ] Add new nav to home
### User Agreements
- [x] Add 'user agreement' component
- [ ] Add legal boilerplate for registration and products
### Account Improvements
- [ ] Add tester/developer to user accounts
- [ ] Add ability to follow to user accounts
- [ ] Add ability to flag content or remove
### Profile Improvements
- [ ] Fix styling on user profile pages
- [ ] Add Bio to user profile
- [ ] Add user type to profiles
### User Dashboard
- [ ] Create tester dashboard
- [ ] Create developer dashboard
### Admin Accounts
- [ ] Add Admin Accounts
- [ ] Add Add admin dash
- [ ] Add ability to moderate content
### Write tests
- [ ] Make tests for models !!!
### Tester Approval
- [ ] Add tester approval to admin dash
- [ ] Add product MGMT. dash with additional approval to admin
### Form Improvements
- [ ] Fix InputValidation.js regex, refactor, etc...
- [ ] Add Character limit to text fields
- [ ] Fix border-radius on bulma dropdowns 4px --> 3px
### Nav Improvements
- [ ] Add separate nav options for testers vs developers
- [ ] Add alerts functionality
- [ ] Add search functionality or remove it
### CSS improvements
- [ ] Convert stuff to flexbox
- [ ] Change image ratios to better ones
### Image hosting
- [ ] Migrate to imagekit from cloudinary
- [ ] Add SVG library to frontend app
### Add Mailer
- [ ] Add mailer
- [ ] Account verification
### Write tests
- [ ] Make more tests for models !!!
### Integrate Payments
- [ ] Stripe payments?
- [ ] Payment page? devs and users
- [ ] Account balance on dash
- [ ] Payment confirmation
- [ ] Payment Mailer
- [ ] Handle outgoing payments
- [ ] integrate taxjar?
### Write tests
- [ ] Make tests for models !!!
### UX Test results (product not code tests)
- [ ] Add test result approval to admin
- [ ] Add test notification when finished
### Project Review
- [ ] Review the current state of the project
- [ ] Create pre-launch improvement plan
- [ ] Create post-launch improvement plan
- [ ] Finish pre-launch improvements
- [ ] Launch!
- [ ] Find clients
- [ ] ...
