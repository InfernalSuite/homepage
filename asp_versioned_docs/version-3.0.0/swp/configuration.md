---
sidebar_position: 2
---

# Configuration
This page will guide you through configuring the Slime World Plugin.

## World Configuration
To configure a world, open the `worlds.yml` file inside the plugin config folder.
Here's an example of a `worlds.yml` file:
```yaml
worlds:
  my_great_world:
    source: mongodb
    loadOnStartup: false
    readOnly: true
    spawn: 940, 2, -370
    allowMonsters: false
    allowAnimals: false
    difficulty: peaceful
    pvp: false
    environment: NORMAL
    worldType: default
```

### World Configuration Options
#### `source`
Description: the name of the data source where the world is stored.\
Available options: `file`, `mysql`, `mongodb`. Any other datasources provided by third-party plugins can also be used.\
Defaults to: `file`.

#### `loadOnStartup`
Description: whether the world should be loaded when the server starts up.\
Available options: `true` and `false`.

#### `readOnly`
Description: if true, changes to the world will never be stored. If false, the world will be locked, so no other server can access it without being on read-only mode.\
Available options: `true` and `false`.\
Defaults to: `false`.

#### `spawn`
Description: spawn coordinates for the world.\
Available options: `<x-coord>, <y-coord>, <z-coord>`.\
Defaults to: `0, 255, 0`.

#### `allowMonsters`
Description: whether monsters can spawn on this world.\
Available options: `true` and `false`.\
Defaults to: `true`.

#### `allowAnimals`
Description: whether animals can spawn on this world.\
Available options: `true` and `false`.\
Defaults to: `true`.

#### `difficulty`
Description: the difficulty of the world.\
Available options: `peaceful`, `easy`, `normal` and `hard`.\
Defaults to: `peaceful`.

#### `pvp`
Description: if true, PvP will be allowed on this world.\
Available options: `true` and `false`.\
Defaults to: `true`.

#### `environment`
Description: sets the world environment.\
Available options: `normal`, `nether`, `the_end`.\
Defaults to: `normal`.

#### `worldType`
Description: sets the level type.\
Available options: `default`, `flat`, `large_biomes`, `amplified`, `customized`, `debug_all_block_states`, `default_1_1`.\
Defaults to: `default`.

## Data Source Configuration
Before using the database to store your worlds, you've got to configure it.
To do so, navigate to the `sources.yml` file in the plugin's folder and edit it to your liking.
Here's an example of a `sources.yml` file:
```yaml
file:
    # The path to the directory where slime worlds are stored
    path: slime_worlds
mysql:
    enabled: true
    host: 127.0.0.1
    port: 3306
    username: my_mysql_username
    password: my_mysql_password
    database: slimeworldmanager
mongodb:
    enabled: true
    host: 127.0.0.1
    port: 27017
    username: my_mongo_username
    password: my_mongo_password
    auth: admin
    database: slimeworldmanager
    collection: worlds
```

**Remember to enable MySQL and/or MongoDB if you are going to use them!**
