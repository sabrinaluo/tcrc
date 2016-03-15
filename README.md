# TCRC
### Notes
- no backend interaction
- no local storage, DON'T refresh
- available view: login, student
- user accounts are hardcoded
- available tutors are hardcoded

### Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# start server
npm run start
```
URL: localhost:3000

### Login details
- student
username: student1
password: student1
- tutor
username: tutor1
password: tutor1

### Git Push-To-Deploy
```
git remote add prod ssh://ubuntu@52.68.45.252/home/ubuntu/tcrc_bare
git push prod master
```
