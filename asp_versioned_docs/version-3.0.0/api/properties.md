---
sidebar_position: 4
---

# Properties
The properties are a way to customize the behavior of your world when loaded.
To use them, you need to create an instance of `SlimePropertyMap` and add the properties you want to apply to the world.\
See the example below:

```java
// create a new and empty property map
SlimePropertyMap properties = new SlimePropertyMap();

properties.setValue(SlimeProperties.DIFFICULTY, "normal");
properties.setValue(SlimeProperties.SPAWN_X, 123);
properties.setValue(SlimeProperties.SPAWN_Y, 112);
properties.setValue(SlimeProperties.SPAWN_Z, 170);
properties.setValue(SlimeProperties.ALLOW_ANIMALS, false);
properties.setValue(SlimeProperties.ALLOW_MONSTERS, false);
properties.setValue(SlimeProperties.DRAGON_BATTLE, false);
properties.setValue(SlimeProperties.PVP, false);
properties.setValue(SlimeProperties.ENVIRONMENT, "normal");
properties.setValue(SlimeProperties.WORLD_TYPE, "DEFAULT");
properties.setValue(SlimeProperties.DEFAULT_BIOME, "minecraft:plains");
// add as many as you would like
```

After you have created the property map, don't forget to pass it to the `readWorld` method when loading the world.\
See the [Loading Worlds](loading_worlds) page for more information on how to read and load worlds.
