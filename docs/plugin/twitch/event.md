---
id: event    
title: Events
---

### twitch-load

Fires when twitch plugin is loaded

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### twitch-unload

Fires when twitch plugin is unloaded

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### twitch-open

Fires when twitch is connected

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### twitch-close

Fires when twitch is disconnected

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### twitch-error

Fires when twitch have a connection error

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.error  | Error | Error throw |

### twitch-follow // TODO

Fires when a user follow your channel.

### twitch-message

Fires when a user sends a message to your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user  | string | Data of the event |
| payload.message  | string | Data of the event |
| payload.msg  | [TwitchPrivateMessage](https://d-fischer.github.io/twitch-chat-client/reference/classes/TwitchPrivateMessage.html) | Data of the event |

### twitch-action

Fires when a user sends an action (/me) to your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user  | string | Data of the event |
| payload.message  | string | Data of the event |
| payload.msg  | [TwitchPrivateMessage](https://d-fischer.github.io/twitch-chat-client/reference/classes/TwitchPrivateMessage.html) | Data of the event |

### twitch-ban

Fires when a user is permanently banned from your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user  | string | Data of the event |

### twitch-bits-badge-upgrade

Fires when a user upgrades their bits badge in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatBitsBadgeUpgradeInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatBitsBadgeUpgradeInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-chat-clear

Fires when the chat of your channel is cleared.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | null | Data of the event |

### twitch-community-pay-forward

Fires when a user pays forward a subscription that was gifted to them to the community.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatCommunityPayForwardInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatCommunityPayForwardInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-community-sub

Fires when a user gifts random subscriptions to the community of your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatCommunitySubInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatCommunitySubInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-emote-only

Fires when emote-only mode is toggled in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.enabled  | boolean | Data of the event |

### twitch-follower-only

Fires when followers-only mode is toggled in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.enabled  | boolean | Data of the event |
| payload.delay  | number | Data of the event |

### twitch-gift-paid-upgrade

Fires when a user upgrades their gift subscription to a paid subscription in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatSubGiftUpgradeInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatSubGiftUpgradeInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-host

Fires when your channel hosts another channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.target | string | Data of the event |
| payload.viewers | number | Data of the event |

### twitch-hosted

Fires when your channel you're logged in is being hosted by another channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.channel | string | Data of the event |
| payload.auto | boolean | Data of the event |
| payload.viewers | number | Data of the event |

### twitch-hosts-remaining

Fires when Twitch tells you the number of hosts you have remaining in the next half hour for the channel for which you're logged in as owner after hosting a channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.numberOfHosts | number | Data of the event |

### twitch-join

Fires when a user joins a channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |

### twitch-part

Fires when a user sends a message to a channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |

### twitch-prime-community-gift

Fires when a user gifts a Twitch Prime benefit to the channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatPrimeCommunityGiftInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatPrimeCommunityGiftInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-prime-paid-upgrade

Fires when a user upgrades their Prime subscription to a paid subscription in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatSubUpgradeInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatSubUpgradeInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-r9k

Fires when a user upgrades their Prime subscription to a paid subscription in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.enabled | boolean | Data of the event |

### twitch-raid

Fires when a user raids your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatRaidInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatRaidInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-raid-cancel

Fires when you cancels a raid.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-resub

Fires when a user resubscribes to your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatSubInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatSubInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-reward-gift

Fires when a user gifts rewards during a special event.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatRewardGiftInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatRewardGiftInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-ritual

Fires when a user performs a "ritual" in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatRitualInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatRitualInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-slow

Fires when slow mode is toggled in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.enabled  | boolean | Data of the event |
| payload.delay  | number | Data of the event |

### twitch-standard-pay-forward

Fires when a user pays forward a subscription that was gifted to them to a specific user.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatStandardPayForwardInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatStandardPayForwardInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-sub

Fires when a user subscribes to your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatSubInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatSubInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-sub-extend

Fires when a user extends their subscription using a Sub Token.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatSubExtendInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatSubExtendInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-sub-gift

Fires when a user gifts a subscription to your channel to another user.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.info | [ChatSubGiftInfo](https://d-fischer.github.io/twitch-chat-client/reference/interfaces/ChatSubGiftInfo.html) | Data of the event |
| payload.msg | [UserNotice](https://d-fischer.github.io/twitch-chat-client/reference/classes/UserNotice.html) | Data of the event |

### twitch-subs-only

Fires when sub only mode is toggled in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.enabled | boolean | Data of the event |

### twitch-timeout

Fires when a user is timed out from your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.duration | number | Data of the event |

### twitch-unhost

Fires when host mode is disabled in your channel.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.channel | string | Data of the event |

### twitch-whisper

Fires when receiving a whisper from another user.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | Data of the event |
| payload.message | string | Data of the event |
| payload.msg | object | Data of the event |

### twitch-channel-point-redeem

Fires when a user redeems channel points.

| Field  | Type | Description  |
|---|---|---|
| id  | string | Unique Event ID |
| event  | string | Event type |
| emittedAt  | Date | Date on which the event was emitted |
| emitter  | string | Origin of the event |
| payload  | object | Data of the event |
| payload.user | string | user who claim point |
| payload.title | string | Redemption title |
| payload.message | string | Redemption message |
| payload.msg | [PubSubRedemptionMessage](https://d-fischer.github.io/versions/4.3/twitch-pubsub-client/reference/classes/PubSubRedemptionMessage.html) | Data of the event |