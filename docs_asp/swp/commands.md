---
sidebar_position: 3
---

# Commands & Permissions

This pages contains all the commands inside ASWM, alongside their respective permissions and usages. Arguments within angle brackets are required, and the ones within square brackets are optional.

The `swm.*` permission will grant access to all commands.

## General commands

### /swp help
Permission required: none.\
Usage: `/swp help`\
Description: Shows the plugin's help page, containing only the commands you have access to.

### /swp version
Permission required: none.\
Usage: `/swp version`\
Description: Shows the plugin version.

### /swp reload
Permission required: `swm.reload`
Usage: `/swp reload`\
Since version: 1.1.0.\
Description: Reloads the config files.

### /swp goto
Permission required: `swm.goto`\
Usage: `/swp goto <world> [player]`\
Description: Teleports yourself to a world. If you want to teleport someone else, you can specify it by using the _player_ argument.

**This command also works for traditional worlds, not just SRF worlds.**

## World Listing commands

### /swp list
Permission required: `swm.worldlist`\
Usage: `/swp list [slime] [page]`\
Description: Lists all worlds, including loaded non-SRF worlds. If you use the `slime` argument, only SRF worlds will be shown.

### /swp dslist
Permission required: `swm.dslist`\
Usage: `/swp list <data-source> [page]`\
Since version: 2.0.0.\
Description: Lists all worlds contained inside a specified data source. Note that this command doesn't just list the worlds that are inside the config file, but every world inside the data source.

## World Creation and Loading commands

### /swp import
Permission required: `swm.importworld`\
Usage: `/swp import <path-to-world> <data-source> [new-world-name]`\
Since version: 1.1.0.\
Description: Converts a world into the SRF and stores it inside the provided data source. You can check out [this page](https://github.com/Grinderwolf/Slime-World-Manager/wiki/Converting-traditional-worlds-into-the-SRF) for more information on how to use this command.

### /swp load
Permission required: `swm.loadworld`\
Usage: `/swp load <world>`\
Description: Loads a world from the config file. Remember to configure the world after converting it to the SRF. More on that [here](https://github.com/Grinderwolf/Slime-World-Manager/wiki/Configuring-worlds).

### /swp load-template
Permission required: `swm.loadworld.template`\
Usage: `/swp load-template <template-world> <world>`\
Since version: 2.0.0.\
Description: Creates a clone of the provided template world. This can be used to create many copies of the same world.

**Cloned template worlds are temporary, and they will never be actually stored anywhere, so any changes to them will be lost once the server is shut down.**

### /swp clone
Permission required: `swm.cloneworld`\
Usage: `/swp clone <template-world> <world> [new-data-source]`\
Since version: 2.2.0.\
Description: Creates a clone of the provided template world. If not provided, SWM will use the data source of the template world to save the clone.

### /swp create
Permission required: `swm.createworld`\
Usage: `/swp create <world> <data-source>`\
Since version: 1.1.0.\
Description: Creates an empty world and stores it in the provided data source. This command will also automatically save the world in the config file.

### /swp unload
Permission required: `swm.unloadworld`\
Usage: `/swp unload <world>`\
Description: Unloads a world from the server.

**This command also works for traditional worlds, not just SRF worlds.**

## World Management commands

### /swp migrate
Permission required: `swm.migrate`\
Usage: `/swp migrate <world> <new-data-source>`\
Description: Transfers a world from the current data source it's stored in to the specified.

### /swp save
Permission required: `swm.saveworld`\
Usage: `/swp save <world>`\
Description: Saves a world.

### /swp setspawn
Permission required: `swm.setspawn`\
Usage: `/swp setspawn <world> <x> <y> <z> <yaw> <pitch>`\
Description: Set the spawnpoint of a world based on your location or one provided.

### /swp delete
Permission required: `swm.deleteworld`\
Usage: `/swp delete <world> [data-source]`\
Description: Completely deletes a world. If a data source is not provided, the one specified in the config file will be used.

**This action is permanent, and there's no way to go back once the world is deleted.** To make sure you are not doing this by mistake, you'll have to type the command twice.