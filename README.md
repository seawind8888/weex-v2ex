
# Weex高仿v2ex三端客户端
基于weex+vue+vuex搭建的3端一致的v2ex高仿客户端

## 1.安装weex环境
```
1.npm install -g weex

2.npm install -g weexpack
# weex客户端cli

```
## 2.下载项目
```
1.git clone https://github.com/seawind8888/weex-v2ex

2.cd v2ex_demo

3.npm install

```
## 3.启动项目

### web
```
1.npm run dev

2.npm run serve

3.open http://localhost:8010

```

### android
```
1.npm run dev

2.weexpack platform add android

3.weexpack run android

```

### ios
```
1.npm run dev

2.weexpack platform add ios

3.cd platform/ios

4.pod install
# 需安装CocoaPods环境,并且将Podfile ATSDK-weex 改为 ATSDK，不然会报错！

5.weexpack run ios
# 如报错可使用xcode直接运行
```

### 调试
```
1.npm install -g weex-toolkit
# 调试工具

2.weex debug dist/app.weex.js

3.使用官方platform客户端扫描二维码

```
## 4.Tips

- 安装官方platform后需修改项目gradle的applicationId，否则会无法安装成功

## 5.运行效果 
<br/>

 ![image](https://github.com/seawind8888/v2ex_demo/blob/master/screenshot/v2ex_app1.gif) 
 ![image](https://github.com/seawind8888/v2ex_demo/blob/master/screenshot/v2ex_app2.gif) 
 ![image](https://github.com/seawind8888/v2ex_demo/blob/master/screenshot/v2ex_app3.gif) 


