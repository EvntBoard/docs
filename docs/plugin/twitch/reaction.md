---
id: reaction    
title: Reaction
---

## General

### say

###### Return

Return a **Promise** void who resolve when message is recieved.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'say', 'Hello world')
}
```

### me

###### Return

Return a **Promise** void who resolve when message is recieved.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'me', 'Hello world')
}
```

### whisper

###### Return

Return a **Promise** void who resolve when message is recieved.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'whisper', 'evandikt', 'Hello world')
}
```

## Bits

### Bits Leaderboard

###### Return

Return a **Promise** with [this](https://d-fischer.github.io/twitch/reference/classes/HelixBitsLeaderboard.html)

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'bitsGetLeaderboard')
}
```

## Clips

### Create a clip

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'clipsCreateClip')
}
```

### clipsGetClipById

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'clipsGetClipById', -1)
}
```

### clipsGetClipsForBroadcaster

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'clipsGetClipById', {})
}
```

## Games

### gamesGetGameById

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'gamesGetGameById', 652)
}
```

### gamesGetGameByName

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'gamesGetGameByName', 'SMITE')
}
```

### gamesGetTopGames

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'gamesGetTopGames', 1)
}
```

## Moderation

### moderationCheckUserBan

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'moderationCheckUserBan', 'evandikt')
}
```

### moderationCheckUserMod

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'moderationCheckUserMod', 'evandikt')
}
```

## Users

### usersGetFollows

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'usersGetFollows', {})
}
```

### usersGetMe

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'usersGetMe')
}
```

### usersGetUserByName

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'usersGetUserByName', 'evandikt')
}
```

## Ads

### Run Commercial

###### Return

Return a **Promise** who resolve when sound is finished.

###### Example

```javascript
module.exports = async (data, services) => {
  await services.plugin('twitch', 'runCommercial', 10000)
}
```