# Common issues

# Zip file closed/similar errors when shutting down or reloading

Every plugin interacting with the api should unload (and optionally save all) all worlds loaded by the plugin during `JavaPlugin#onDisable()`. Failing to do so can cause errors.

Ideally, users should use the blocking `AdvancedSlimePaperAPI#saveWorld(SlimeWorld)` API to save the world and unload the
world using `Bukkit.unloadWorld(world.getName(), false)`. The "save" boolean parameter in `Bukkit#unloadWorld(String, boolean)` 
can be safely set to false as you should have saved the world with `AdvancedSlimePaperAPI#saveWorld(SlimeWorld)` already. 


:::warning
You should try to avoid using `Bukkit.unloadWorld(world.getName(), true)` with "save" set to true DURING onDisable(), as it saves the world asynchronously and might not complete before the classloader closes. You can safely unload the worlds outside of onDisable() this way though.
:::