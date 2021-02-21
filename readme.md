## Django Vue Login

#### VUE

vue create frontend > Manually > Add Router > Y > Lint on save > In package.json > N

cd frontend 

npm install --save axios loadash qs vue-router vuex
 
npm install --save-dev webpack-bundle-tracker@0.4.3    

npm install --save countup.js vue-countup-v2


### Dj-rest-auth endpoints

/dj-rest-auth/registration/ (POST)

/dj-rest-auth/registration/verify-email/ (POST)

/dj-rest-auth/login/ (POST) 
 
/dj-rest-auth/logout/ (POST)

/dj-rest-auth/password/reset/ (POST)

/dj-rest-auth/password/reset/confirm/ (POST)

/dj-rest-auth/user/ (GET, PUT, PATCH)

/dj-rest-auth/facebook/ (POST)

    access_token
    code
    
    
/dj-rest-auth/twitter/ (POST)

    access_token
    token_secret


#### Enabling Active Directory

1. Get python_ldap‑3.3.1+sasl‑cp37‑cp37m‑win_amd64.whl

    https://www.lfd.uci.edu/~gohlke/pythonlibs/#python-ldap
    
2. pip install django-auth-adfs  
    
