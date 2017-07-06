# A Weex+Vue+Vuex sample application

## 1. Install the Weex environment

    npm install -g weex
    npm install -g weexpack (Weex client cli)

## 2. Download the project

    git clone https://github.com/seawind8888/weex-v2ex
    cd v2ex_demo
    npm install

## 3. Start the project

### --web

    npm run dev
    npm run serve
    open http://localhost:8010

### --android

    npm run dev
    weexpack platform add android
    weexpack run android

### --ios

    npm run dev
    weexpack platform add ios
    cd platform/ios
    pod install
    # Need to install CocoaPods environment, 
    # and the Podfile ATSDK-weex changed to ATSDK!
    weexpack run ios
    # The error can be used to run directly xcode

### --debugging

    npm install -g weex-toolkit
    # Install the debugging tool
    weex debug dist/app.weex.js
    # Use the official platform client to scan two-dimensional code

## 4. Tips

After installing the official platform, you need to modify the project gradle applicationId, otherwise it will not be able to install the IOS project in the Podfile successfully. Need to ATSDK-weex -> ATSDK.

## 5. Run

### --web

 ![image](https://github.com/seawind8888/weex-v2ex/blob/master/screenshot/v2ex-weex-web.gif) 

### --android

 ![image](https://github.com/seawind8888/weex-v2ex/blob/master/screenshot/v2ex-weex-android.gif)

### --ios

 ![image](https://github.com/seawind8888/weex-v2ex/blob/master/screenshot/v2ex-weex-ios.gif)  
