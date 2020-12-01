---
id: event    
title: Events
---

### obs-load

Fires when obs plugin is loaded

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-unload

Fires when obs plugin is unloaded

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-open

Fires when obs is connected

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-close

Fires when obs is disconnected

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-error

Fires when obs is connected

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.error  | Error | Error throw |

### obs-switch-scenes

Fires when obs current scene change.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [SwitchScenes](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#switchscenes) | Data of the event |

### obs-stream-starting

Fires when obs stream starting

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-stream-started

Fires when obs stream started

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-stream-stopping

Fires when obs stream stopping

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-stream-stopped

Fires when obs stream stopped

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-stream-status

Fires every second when obs stream i started

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [StreamStatus](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#streamstatus) | Data of the event |

### obs-recording-starting

Fires when obs recording starting

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-recording-started

Fires when obs recording started

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-recording-stopping

Fires when obs recording stopping

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-recording-stopped

Fires when obs recording stopped

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-recording-paused

Fires when obs recording paused

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-recording-resumed

Fires when obs recording resumed

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### obs-source-volume-changed

Fires when obs source volume changed

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [SourceVolumeChanged](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#sourcevolumechanged) | Data of the event |

### obs-source-mute-changed

Fires when obs source mute changed

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [SourceMuteStateChanged](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#sourcemutestatechanged) | Data of the event |

### obs-filter-visibility-changed

Fires when obs filter visibility changed

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [SourceFilterVisibilityChanged](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#sourcefiltervisibilitychanged) | Data of the event |

### obs-sceneitem-visibility-changed

Fires when obs scene item visibility changed

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [SceneItemVisibilityChanged](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#sceneitemvisibilitychanged) | Data of the event |

### obs-sceneitem-transform-changed

Fires when obs scene item transform changed



| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | [SceneItemVisibilityChanged](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#sceneitemtransformchanged) | Data of the event |