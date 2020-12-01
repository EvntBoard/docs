---
id: reaction    
title: Reaction
---

This is used in the file of a Trigger.

## Media

### Sound

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| file  | string  | :heavy_check_mark:  | none  | File in workspace `workspace://` or URL  |
| volume  | number  | :x:  | 1  | Volume between 0 and 1  |

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.player.play("workspace://audio/mario.mp3", 1)
}
```

---

### Voice (TTS)

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| text  | string  | :heavy_check_mark:  | none  | What the voice should say  |
| volume  | number  | :x:  | 1  | Volume between 0 and 1  |

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.media.tts("Coucou, toi !", 0.75)
}
```
---

## OS

### Clipboard

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| text  | string  | :heavy_check_mark:  | none  |  |

###### Return

Return **Promise&lt;void&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.os.toClipboard("waza")
}
```

### External link

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| key  | string  | :heavy_check_mark:  | none  |  |

###### Return

Return **Promise&lt;void&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.os.openExternal("https://evntboard.io/")
}
```

### Beep

###### Return

Return **Promise&lt;void&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.os.beep()
}
```

### Notification

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| title  | string  | :heavy_check_mark:  | none  |  |
| body  | string  | :heavy_check_mark:  | none  |  |

###### Return

Return **Promise&lt;void&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.os.notification("Coucou", "C'est moi")
}
```

## File

### Write

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| file  | string  | :heavy_check_mark:  | none  | |
| data  | string  | :heavy_check_mark:  | none  | |

###### Return

`void`

###### Example

```javascript
module.exports = async (data, services) => {
   services.file.write("monfichier.txt", data)
}
```
---

### Read

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| file  | string  | :heavy_check_mark:  | none  |  |

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   const content = services.file.read("monfichier.txt")
   console.log(content)
}
```
---

### Append

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| file  | string  | :heavy_check_mark:  | none  | |
| data  | string  | :heavy_check_mark:  | none  | |

###### Return

`void`

###### Example

```javascript
module.exports = async (data, services) => {
   services.file.append("monfichier.txt", "\ncoucou")
}
```
---

## Variable

### Get

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| key  | string  | :heavy_check_mark:  | none  |  |

###### Return

Return **Promise&lt;any&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   const valeur = services.variable.get("waza")
   console.log({ valeur })
}
```

### Set

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| key  | string  | :heavy_check_mark:  | none  |  |
| data  | any  | :heavy_check_mark:  | none  |  |

###### Return

Return the value set

###### Example

```javascript
module.exports = async (data, services) => {
   const valeur = services.variable.set("waza", "test")
   console.log({ valeur })
}
```
  
```javascript
module.exports = async (data, services) => {
   const valeur = services.variable.set("waza", 42)
   console.log({ valeur })
}
```
  
```javascript
module.exports = async (data, services) => {
   const valeur = services.variable.set("waza", { test: 42 })
   console.log({ valeur })
}
```

## Utils

### Sleep

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| ms  | number  | :heavy_check_mark:  | none  | A number  |

###### Return

Return **Promise&lt;void&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   await services.utils.sleep(5000)
}
```

---

## Board
  
### Get Image

Get board image at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.board.getImage("id_board")
}
```
  
### Get Color

Get board color at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.board.getColor("id_board")
}
```
  
### Update Image

update board image at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.board.updateImage("id_board", "workspace://image/waza.png")
}
```
  
### Update Color

Update board color at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.board.updateColor("id_board", "rbga")
}
```
  
### Switch board

switch board at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.board.switch("id_board", "emitter")
}
```

---

## Button
  
### Get Image

Get button image at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.button.getImage("id_button")
}
```
  
### Get Color

Get button color at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.button.getColor("id_button")
}
```
  
### Get Text

Get button text at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.button.getColor("id_button")
}
```
  
### Update Image

update button image at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.button.updateImage("id_button", "workspace://image/waza.png")
}
```
  
### Update Color

Update button color at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.button.updateColor("id_button", "rbga")
}
```
  
### Update Text

Update button text at runtime 

###### Return

`string`

###### Example

```javascript
module.exports = async (data, services) => {
   services.button.updateText("id_button", "rbga")
}
```

---

## Event

### New

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| object  | object  | :heavy_check_mark:  | none  | Your event data ! |

###### Return

`void`

###### Example

```javascript
module.exports = async (data, services) => {
   services.event.newEvent('my-event', {
      data: 42
   })
}
```
---

## Plugin

| Field  | Type  | Required  | Default  | Description  |
|---|---|---|---|---|
| plugin-id  | string  | :heavy_check_mark:  | none  | Your plugin id ! |
| plugin-methods  | string  | :heavy_check_mark:  | none  | Your plugin methods ! |
| plugin-params  | any  | :x:  | none  | Your plugin params ! |

###### Return

Return **Promise&lt;any&gt;**.

###### Example

```javascript
module.exports = async (data, services) => {
   services.plugin('plugin-id', 'plugin-methods', 'param1', 'param2', '...')
}
```
---