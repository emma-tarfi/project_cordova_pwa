# project_cordova_pwa
Master's degree 2 [Expert in web development] - University project - Top list creation mobile application for Android and PWA


## Links
- Documentation - Apache Cordova : https://cordova.apache.org/docs/en/10.x/
- Download Android Studio : https://developer.android.com/studio
- Download JDK : https://www.oracle.com/fr/java/technologies/javase/javase8-archive-downloads.html
- OneSignal (For notifications) : https://onesignal.com/
- Plugins : https://cordova.apache.org/docs/en/10.x/guide/hybrid/plugins/index.html


## Installation

Windows

```bash
$ npm install -g cordova
```

MacOS/Linux

```bash
$ sudo npm install -g cordova
```


## Create Cordova project

```bash
$ cordova create myProject [id [name]] [options]
$ cd myProject
```


## Build 

- First configure environment variables $JAVA_HOME, $ANDROID_HOME, $ANDROID_HOME_ROOT :

```bash
ANDROID_HOME: C:\Users\{user}\AppData\Local\Android\SDK
ANDROID_HOME_ROOT: C:\Users\{user}\AppData\Local\Android\SDK
JAVA_HOME: C:\Program Files\Java\{jdk_v}
```

- In Path :

```bash
C:\Program Files\Java\{jdk_v}\bin
C:\Gradle\gradle-7.0.2\bin
```

- Create folder Gradle in (C:). 

Download gradle here https://gradle.org/next-steps/?version=7.0.2&format=all and extract it into the Gradle's folder.

- Open a terminal in your project and execute this :

```bash
$ cordova platform add android@8.1.0
$ cordova platform add browser
```


## Android Studio

- Add sdk in settings
- Add an emulator and run it


## Emulate

once the emulator is launched, execute this :

For Android on android studio :
```bash
$ cordova emulate android
```

For Browser :
```bash
$ cordova emulate browser
```

In each modification :
```bash
$ cordova build android
or
$ cordova build browser
```


## Plugins

For screen orientation :
```bash
cordova plugin add cordova-plugin-screen-orientation
```

For battery status :
```bash
cordova plugin add cordova-plugin-battery-status
```

For open link in app browser :
```bash
cordova plugin add cordova-plugin-inappbrowser
```

For network information :
```bash
cordova plugin add cordova-plugin-network-information
```
