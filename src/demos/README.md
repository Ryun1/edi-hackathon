# Demos Mock wallet 

This is a mock wallet, based on [Nami](https://github.com/berry-pool/nami) created to speed up the creation of the Voltaire Voting App.


## To Develop

1. Move to correct directory

```bash
cd src/mock-wallet/demos/
```

### Create secret files

1. Make development secrets file, from testing secrets template.

```bash
cat secrets.testing.js > secrets.development.js
```

2. Make production secrets file, from testing secrets template.

```bash
cat secrets.testing.js > secrets.production.js
```

3. Go to [Blockfrost](https://blockfrost.io/auth/signin) and make a free workspace key. You can make one free workspace for one network that can do 50K requests a day. I just made one for PreProd network.

4. Open `secrets.development.js` and `secrets.production.js` and paste in your correct key from Blockfrost. 
   
**DON'T place keys into `secrets.testing.js` because this is not ignored by git!**

```bash
code secrets.development.js secrets.production.js
```

### Start Dev Env

1. Install modules

```bash
sudo npm install
```

2. Try to start


```bash
sudo npm start
```

2. Fight with node and install any missing packages :)

I had to do:

```bash
sudo npm install --save-dev webpack-dev-server

sudo npm audit fix

sudo npm rebuild node-sass
```

## To Test Wallet

### Build wallet

Build a chrome extension from the `/src` code.

```bash
sudo npm run build
```

### Load into Chrome (for first time)

1. In chrome go to `chrome://extensions/`, in the top right enable developer mode.

2. Then press `Load unpacked` and select your `/build` folder.

### Load into Chrome (refresh for new build)

1. In chrome go to `chrome://extensions/`, and on the mock-wallet press the reload button to refresh it.
