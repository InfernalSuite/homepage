---
sidebar_position: 8
---

# Migrating Worlds
Sometimes you may want to migrate your worlds from one loader to another.\
This can be done by using the `migrateWorld` method in the `AdvancedSlimePaperAPI` class.\
**Remember: this is an I/O operation and should be done asynchronously.**

```java
SlimeLoader currentLoader = ...;
SlimeLoader newLoader = ...;
String worldName = "world";

/*
 * worldName - the name of the world to migrate
 * currentLoader - the loader where the world is currently stored
 * newLoader - the loader where the world will be stored after migration       
 */
asp.migrateWorld(worldName, currentLoader, newLoader);
```