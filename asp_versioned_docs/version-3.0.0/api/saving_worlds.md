---
sidebar_position: 6
---

# Saving Worlds

All slime worlds are saved when the server is shut down, but sometimes we may want to save them manually.\
Currently there are two approaches to saving worlds manually:

## Using the ASP API (recommended)
We recommend using the ASP API to save worlds manually, as unlike the other approach, the method blocks until the world is saved.\
This method works for both loaded and unloaded worlds.\
This can be done by calling the `saveWorld` method in the `AdvancedSlimePaperAPI` class.\
**Remember: this is an I/O operation and should be done asynchronously.**

```java
/*
 * world - the world to save
 */
asp.saveWorld(world); // Blocks until the world is saved
// Now we can assume that the world is saved
```

## Using the Bukkit API
If the world is loaded and, you can save it manually by calling the `save` method in the `World` class.\
The difference between this and the ASP API is that this method is asynchronous and only schedules the save operation.\
**Remember: we are directly interacting with the server meaning this must be done synchronously.**

```java
World world = Bukkit.getWorld("worldName");
world.save(); // Returns almost immediately and schedules the save operation
// At this point, the world has most likely not been saved yet
```
