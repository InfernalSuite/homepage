---
sidebar_position: 5
---
# Loading Worlds

After we have obtained an instance of a `SlimeLoader` in the previous section, we can now use it to load worlds.\
Unlike the old SWM API, this process is split into two stages:
- Reading the world from the loader (can be done asynchronously)
- Loading the world into the server (must be done synchronously)

## Reading the World
Firstly we need to read the world from the `SlimeLoader` into memory and deserialize it.\
This can be done by calling the `readWorld` method in the `AdvancedSlimePaperAPI` class.\
**Remember: this is an I/O operation and should be done asynchronously.**

```java
/*
 * loader - the loader to read the world from
 * "world" - the name of the world to read
 * false - whether this world will be read-only
 * new SlimePropertyMap() - the properties to apply to the world
 */
SlimeWorld world = asp.readWorld(loader, "world", false, new SlimePropertyMap());
// Now we have a deserialized -in-memory- representation of the world
```

*What's the `SlimePropertyMap` for? Check out the [Properties](properties) page to learn more.*

## Loading the World
After we have read the world from the loader, we can now load it into the server.\
This can be done by calling the `loadWorld` method in the `AdvancedSlimePaperAPI` class.\
**Remember: we are directly interacting with the server meaning this must be done synchronously.**

```java
/*
 * world - the deserialized world to load, obtained from the previous step
 * true - whether to call the bukkit org.bukkit.event.world.WorldLoadEvent
 */
SlimeWorld mirror = asp.loadWorld(world, true);
// Now the world is loaded into the server and can be interacted with
```

*What's the `mirror`? It's a unique instance of the loaded world.*

Fantastic! You have now successfully loaded a world into the server.\
You can try to teleport to it, interact with it, or do whatever you want with it.