---
sidebar_position: 99
---

# Migrating from SWM
Since version 1.21.0, the plugin (formerly SlimeWorldManager) has been decoupled from the server (ASP) and is now known as the Slime World Plugin (SWP).

This means, that now the plugin is no longer required to use the API, as it is provided by the server itself.\
**If you want to keep the commands and features that the plugin provided, you can install the [Slime World Plugin](swp/installation) on your server.**

## Migrating the API
The API has undergone rework and the main API class has been renamed from `SlimePlugin` to `AdvancedSlimePaperAPI`.
Please note that **the locking system has been removed**, you now have to handle it yourself.

### What does this mean for me?

If you were using the SWM API before, you will probably have to change most of the parts of your code that interact with the API.
I suggest you **take a look at the [Using the API](api/using.md) page** to see how you can use the new API.\
Pay close attention to the javadocs in the `AdvancedSlimePaperAPI` class, as it can help you to understand the differences between the old and the new API.

**If you have any questions, feel free to ask in the [Discord](https://discord.infernalsuite.com/).**
