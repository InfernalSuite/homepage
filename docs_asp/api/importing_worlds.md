---
sidebar_position: 6
---

# Importing Worlds

The ASP API provides a way to import Minecraft worlds (in the anvil format) into slime worlds.\
This is useful if you have a world that you want to use with the ASP API, but it is not a slime world yet.\
Similar to loading worlds, this process is split into multiple stages:
- Importing the world from the anvil format to the slime format (can be done asynchronously)
- Saving the world into the loader (must be done asynchronously)
- Loading the world into the server (must be done synchronously)

## Reading the World
Firstly, we need to read the world from the anvil format into memory and deserialize it.\
To read an anvil world, you need to use the `readVanillaWorld` method in the `AdvancedSlimePaperAPI` class.\
**Remember: this is an I/O operation and should be done asynchronously.**

```java
/*
 * new File(".") - the directory where the world is located
 * "world" - the name of the world to read
 * loader - the loader where the world will be stored when saved, or null if it is read-only
 */ 
SlimeWorld world = asp.readVanillaWorld(new File("."), "world", loader);
// Now we have a deserialized -in-memory- representation of the world
```

## Saving the World
After we have read the world from the anvil format, we can now save it into the loader (assuming we supplied one in the previous step).\
To save a world, you need to use the `saveWorld` method in the `AdvancedSlimePaperAPI` class.\
**Remember: this is an I/O operation and should be done asynchronously.**

```java
/*
 * world - the deserialized world to save, obtained from the previous step
 */
asp.saveWorld(world);
```

## Loading the World
After we have saved the world into the loader, we can now load it into the server.\
This process is the same as in the [Loading Worlds](loading_worlds#loading-the-world) page.