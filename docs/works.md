---
id: works
title: How it works
---

EvntBoard is an event-based software.

## What is an event?

It is a data that arrives in the software, like a twitch message or a click on a button.

In the software interface it is possible to create small programs that will react to a certain type of event in a certain way.
These small programs are called "triggers".

## Types of triggers

### Classic

Each time an event happens, the trigger executes its reaction.

### Throttle

Each time an event occurs, the trigger executes this reaction if and only if the trigger is not already running.

### Queue

Each time an event arrives, the trigger queues it, and executes the events in order of arrival.

### Queue Lock

Same as Queue except that the queue is shared between triggers.

### Throttle lock

Same as Throttle except that the execution state is shared between triggers
