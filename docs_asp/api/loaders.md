---
sidebar_position: 2
---

# Loaders
Unlike the old SWM API, **the new API does not manage the loaders for you**. You have to create and manage them yourself.
This allows you to have more control over the loaders and how they work.
You can either create your own loader by implementing the `SlimeLoader` interface or use the reference ones provided by us. 
This page will focus on the latter option.

## Obtaining the reference loaders
Out of the box there are the following loaders available:
- `file-loader`: Read/write to disk
- `mongo-loader`: Read/write to a MongoDB database
- `mysql-loader`: Read/write to a MySQL database
- `redis-loader`: Read/write to a Redis database
- `api-loader` - Allows you to load worlds from a http api

You can also import all default loaders by importing the `loaders` BOM package. In order to use the loaders,
you need to shade the loaders into your plugin. You can do this by adding the following Maven or Gradle dependencies:

### Maven
```xml
<dependencies>
  <dependency>
    <groupId>com.infernalsuite.asp</groupId>
    <artifactId>{loader name}</artifactId>
    <version>4.0.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```

### Gradle
```groovy
dependencies {
    implementation 'com.infernalsuite.asp:{loader name}:4.0.0-SNAPSHOT'
}
```
*Replace `{loader name}` with one of the available loaders*

Don't forget that the reference loaders are not included with the server; **you have to shade them into your plugin**.

## Using the reference loaders

I personally recommend instantiating the loader in your plugin's `onEnable` method and storing it in a field.
This way, you can access the loader from anywhere in your plugin.
For example:

```java
public class MyPlugin extends JavaPlugin {
    private SlimeLoader loader;
    private final AdvancedSlimePaperAPI asp = AdvancedSlimePaperAPI.instance();

    @Override
    public void onEnable() {
        loader = new FileLoader("slime_worlds");
    }
    
    public void doSomething() {
        SlimeWorld world = asp.readWorld(loader, "world", false, new SlimePropertyMap());
        
        // Do stuff with the world
    }
}
```