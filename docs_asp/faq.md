---
sidebar_position: 98
---
# FAQ

## Which Spigot versions is this compatible with?

ASP is not compatible with spigot, as it is its own fork.

## Can I override the default world?

Yes, you can!

## Is ASP compatible with Multiverse-Core?

Yes, to a limited extent. Multiverse-Core v5.2 and newer supports importing of existing slime worlds into Multiverse with `/mv import`, which will give access to the typical features expected from a Multiverse world. However, Multiverse cannot create a slime world. Instead, use the equivalent command in SlimeWorldManager to create a new slime world, then add to Multiverse with `/mv import` afterwards. To delete a slime world, do not use `/mv delete` directly with Multiverse. Instead, remove the world from Multiverse knowledge with `/mv remove`, then delete it through SlimeWorldManager or other relevant slime world APIs.

More information is explained in this Multiverse-Core GitHub issue: https://github.com/Multiverse/Multiverse-Core/issues/3302#issuecomment-3123845196

## What's the world size limit?

The Slime Region Format can handle up a 46340x4630 chunk area. That's the maximum size that SWM can _theoretically_ handle, given enough memory. However, having a world so big is not recommended at all.

There's not a specific value that you shouldn't exceed _- except for the theoretical limit, of course_. ASP keeps a copy of all the chunks loaded in memory until the world is unloaded, so the more chunks you have, the bigger the ram usage is. How far you want to go depends on how much ram you are willing to let ASP use. Moreover, the ram usage per chunk isn't a constant value, as it depends on the actual data stored in the chunk.
