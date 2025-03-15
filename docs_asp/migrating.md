---
sidebar_position: 99
---

# Migrating from older versions

## Migrating from ASP 3.0
With the release of version 4.0, we've introduced a series of small changes aimed at optimizing and enhancing the API. Server owners will only need to update their server jar and the ASP plugin, while plugin developers will need to make a few adjustments in their code.

### Migrating the API
The most impactful change between previous versions is the package name change from `com.infernalsuite.aswm.api` to `com.infernalsuite.asp.api`. This means that you will have to update your imports.

Additionally, the NBT library has been switched from FlowNBT to Kyori NBT. As a result, you can remove the repository `https://repo.rapture.pw/repository/maven-releases/` unless
you still need it for something else. If you're not using any additional Slime API methods or accessing extra data, there should be no changes needed.
However, if you do, you'll need to adapt to the new Kyori NBT library. It's worth noting that Kyori NBT is immutable, so when you modify data (e.g. extra data), you'll need to update your code accordingly.

Another change is in how you get the Bukkit world. Instead of using `Bukkit#getWorld(String)`, you can now obtain the world through the `SlimeWorldInstance` now returned when calling `AdvancedSlimePaperAPI#loadWorld(SlimeWorld, boolean)`, using the method `SlimeWorldInstance#getBukkitWorld()`.

#### Slime Loaders
Slime Loaders have been seperated into different maven packages, so you can choose what loaders you want to bundle with your plugin:
 - `com.infernalsuite.asp:loaders` - Contains a BOM package of all default loaders, like previously
 - `com.infernalsuite.asp:api-loader` - The HTTP api loader
 - `com.infernalsuite.asp:file-loader` - The file loader
 - `com.infernalsuite.asp:mysql-loader` - The MySQL loader
 - `com.infernalsuite.asp:redis-loader` - The Redis loader
 - `com.infernalsuite.asp:mongo-loader` - The MongoDB loader

Custom loaders implementing the `UpdatableLoader` class no longer have to implement the loaders package as it is now implemented in the API itself. The `NewerDatabaseException` of the updatable loader has also been changed to `NewerStorageException` and its field `currentVersion` is now `implementationVersion` and `databaseVersion` is now `storageVersion` so its wording applies to more than just databases.

#### Events
In API 3.0 there were also a few events that were never actually called, so they have been removed:
 - `AsyncPostCreateEmptyWorldEvent`
 - `AsyncPostGetWorldEvent`
 - `AsyncPostImportWorldEvent`
 - `AsyncPostLoadWorldEvent`
 - `AsyncPostMigrateWorldEvent`
 - `AsyncPreCreateEmptyWorldEvent`
 - `AsyncPreGetWorldEvent`
 - `AsyncPreImportWorldEvent`
 - `AsyncPreLoadWorldEvent`
 - `PreGenerateWorldEvent`

#### Exceptions
The `InvalidVersionException` exception has been removed as it was never thrown.

## Migrating from SWM
Since version 1.21.0, the plugin (formerly SlimeWorldManager) has been decoupled from the server (ASP) and is now known as the Slime World Plugin (SWP).

This means, that now the plugin is no longer required to use the API, as the API is provided by the server itself.\
**If you want to keep the commands and features that the plugin provided, you can install the [Slime World Plugin](swp/installation) on your server.**

### Migrating the API
The API has undergone rework and the main API class has been renamed from `SlimePlugin` to `AdvancedSlimePaperAPI`.
Please note that **the locking system has been removed**, you now have to handle locking the worlds yourself.

#### What does this mean for me?

If you were using the SWM API before, you will probably have to change most of the parts of your code that interact with the API.
I suggest you **take a look at the [Using the API](api/using.md) page** to see how you can use the new API.\
Pay close attention to the javadocs in the `AdvancedSlimePaperAPI` class, as it can help you to understand the differences between the old and the new API.

**If you have any questions, feel free to ask in the [Discord](https://discord.infernalsuite.com/).**
