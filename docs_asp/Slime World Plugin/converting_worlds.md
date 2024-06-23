---
sidebar_position: 4
---

# Converting Worlds

To be able to load a world with SWP, you have to convert it to the SRF.
## Using the in-game command

1. Place your world inside your server's root directory.
2. Make sure the world is unloaded. Loaded worlds cannot be converted.
3. Run the command `/swp import <your-world-folder> <data-source> [new-world-name]`. If you want the world to have the same name as the world folder, simply ignore the _[new-world-name]_ argument.
4. Done! The world is now inside the data source you've provided.

## Using the standalone importer tool

1. Download the latest version of the importer tool *(download links will be added later)*.
2. Run the tool with the command:\
`java -jar asp-importer.jar <path-to-world-folder> [--accept] [--print-error]`
3. Done! The world is now saved as a .slime world inside the same folder as the importer tool.