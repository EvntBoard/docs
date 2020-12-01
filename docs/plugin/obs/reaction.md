---
id: reaction    
title: Reaction
---

## General

### getVersion

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getversion).

###### Example

```javascript
module.exports = async (data, services) => {
  const version = await services.plugin('obs', 'getVersion')
  console.log(version)
}
```

### getStats

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getstats).

###### Example

```javascript
module.exports = async (data, services) => {
  const stats = await services.plugin('obs', 'getStats')
  console.log(stats)
}
```

### getInfo

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getVideoInfo).

###### Example

```javascript
module.exports = async (data, services) => {
  const info = await services.plugin('obs', 'getInfo')
  console.log(info)
}
```

## Scene

### sceneGetCurrent

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getcurrentscene).

###### Example

```javascript
module.exports = async (data, services) => {
  const currentScene = await services.plugin('obs', 'sceneGetCurrent')
  console.log(currentScene)
}
```

### sceneSetCurrent

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setcurrentscene).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sceneSetCurrent', 'Scene 1')
}
```

## Source

### sourceGetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getsourcesettings).

###### Example

```javascript
module.exports = async (data, services) => {
  const sceneSettings = await services.plugin('obs', 'sourceGetSettings', 'Scene 1')
  console.log(sceneSettings)
}
```

### sourceSetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| settings  | object  | :heavy_check_mark:  | none  | Your new source settings |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsourcesettings).

###### Example

```javascript
module.exports = async (data, services) => {
  const newSourceSettings = await services.plugin('obs', 'sourceSetSettings', 'Scene 1', { visibility: false })
  console.log(newSourceSettings)
}
```

### sourceGetVolume

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| useDecibel  | boolean  | :heavy_check_mark:  | false  | Output volume in decibels of attenuation instead of amplitude/mul. |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getvolume).

###### Example

```javascript
module.exports = async (data, services) => {
  const volume = await services.plugin('obs', 'sourceGetVolume', 'Audio / Mix')
  console.log(volume)
}
```

### sourceSetVolume

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| volume  | number  | :heavy_check_mark:  | none  | Desired volume. Must be between 0.0 and 1.0 for mul, and under 0.0 for dB. |
| useDecibel  | boolean  | :heavy_check_mark:  | false  | Output volume in decibels of attenuation instead of amplitude/mul. |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setvolume).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceSetVolume', 'Audio / Mix', 1)
}
```

### sourceGetMute

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getmute).

###### Example

```javascript
module.exports = async (data, services) => {
  const sourceMuteState = await services.plugin('obs', 'sourceGetMute', 'Audio / Mix')
  console.log(sourceMuteState)
}
```

### sourceSetMute

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| mute  | boolean  | :heavy_check_mark:  | none  | Desired mute status |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setmute).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceSetMute', 'Audio / Mix', true)
}
```

### sourceMuteToggle

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#togglemute).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceMuteToggle', 'Audio / Mix')
}
```

## Text

### textGDIGetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#gettextgdiplusproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  const textSettings = await services.plugin('obs', 'textGDIGetSettings', 'A sample Text')
  console.log(textSettings)
}
```

### textGDISetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| settings  | [TextGDIPlusProperties](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#settextgdiplusproperties)  | :heavy_check_mark:  | none  | Your source settings |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#settextgdiplusproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'textGDISetSettings', 'A sample Text', { text: 'COUCOU' })
}
```

### textFreeGetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#gettextfreetype2properties).

###### Example

```javascript
module.exports = async (data, services) => {
  const textSettings = await services.plugin('obs', 'textFreeGetSettings', 'A sample Text')
  console.log(textSettings)
}
```

### textFreeSetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| settings  | [TextFreeType2Properties](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#settextfreetype2properties)  | :heavy_check_mark:  | none  | Your source settings |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#settextfreetype2properties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'textFreeSetSettings', 'A sample Text', { text: 'COUCOU' })
}
```

## Filter

### filterGetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| filter  | string  | :heavy_check_mark:  | none  | Your filter name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getsourcefilterinfo).

###### Example

```javascript
module.exports = async (data, services) => {
  const version = await services.plugin('obs', 'filterGetSettings', 'camera', 'sepia')
  console.log(version)
}
```

### filterSetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| filter  | string  | :heavy_check_mark:  | none  | Your filter name |
| settings  | [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsourcefiltersettings)  | :heavy_check_mark:  | none  | Your new filter settings |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsourcefiltersettings).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'filterSetSettings', 'camera', 'sepia', { noidear: true })
}
```

### filterSetVisibility

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| filter  | string  | :heavy_check_mark:  | none  | Your filter name |
| visibility  | boolean | :heavy_check_mark:  | none  | Your new filter visibility |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsourcefiltervisibility).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'filterSetVisibility', 'camera', 'sepia', true)
}
```

### filterToggleVisibility

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| source  | string  | :heavy_check_mark:  | none  | Your source name |
| filter  | string  | :heavy_check_mark:  | none  | Your filter name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsourcefiltervisibility).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'filterToggleVisibility', 'camera', 'sepia')
}
```

## Scene Items

### sourceItemGetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  const sceneItemSettings = await services.plugin('obs', 'sourceItemGetSettings', 'scene 1', 'camera')
  console.log(sceneItemSettings)
}
```

### sceneItemSetSettings

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |
| settings  | [SceneItemProperties](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties)  | :heavy_check_mark:  | none  | Your new scene item settings |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sceneItemSetSettings', 'scene 1', 'camera', { visible: true })
}
```

### sourceItemSetVisibility

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |
| visibility  | boolean  | :heavy_check_mark:  | none  | Your new item visibility |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceItemSetVisibility', 'scene 1', 'camera', true)
}
```

### sourceItemVisibilityToggle

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceItemVisibilityToggle', 'scene 1', 'camera')
}
```

### sourceItemSetScale

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |
| x  | number  | :heavy_check_mark:  | none  | Your new item X scale |
| y  | number  | :heavy_check_mark:  | none  | Your new item Y scale |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceItemSetScale', 'scene 1', 'camera', 0.5, 0.5)
}
```

### sourceItemSetPosition

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |
| x  | number  | :heavy_check_mark:  | none  | Your new item X position |
| y  | number  | :heavy_check_mark:  | none  | Your new item Y position |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceItemSetPosition', 'scene 1', 'camera', 500, 100)
}
```

### sourceItemSetRotation

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| scene  | string  | :heavy_check_mark:  | none  | Your scene name |
| item  | string  | :heavy_check_mark:  | none  | Your item name |
| rotation  | number  | :heavy_check_mark:  | none  | Your new item rotation |

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#setsceneitemproperties).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'sourceItemSetRotation', 'scene 1', 'camera', 360)
}
```

## Streaming

### streamingGetStatus

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getstreamingstatus).

###### Example

```javascript
module.exports = async (data, services) => {
  const streamingStatus = await services.plugin('obs', 'streamingGetStatus')
  console.log(streamingStatus)
}
```

### streamingToggle

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#startstopstreaming).

###### Example

```javascript
module.exports = async (data, services) => {
 await services.plugin('obs', 'streamingToggle')
}
```

### streamingStart

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#startstreaming).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'streamingStart')
}
```

### streamingStop

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#stopstreaming).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'streamingStop')
}
```

## Recording

### recordingGetStatus

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#getstreamingstatus).

###### Example

```javascript
module.exports = async (data, services) => {
  const recordingStatus = await services.plugin('obs', 'recordingGetStatus')
  console.log(recordingStatus)
}
```

### recordingToggle

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#startstoprecording).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'recordingToggle')
}
```

### recordingStart

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#startrecording).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'recordingStart')
}
```

### recordingStop

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#stoprecording).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'recordingStop')
}
```

### recordingPause

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#pauserecording).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'recordingPause')
}
```

### recordingResume

###### Return

Return a **Promise** who resolve with [this](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#resumerecording).

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('obs', 'recordingResume')
}
```