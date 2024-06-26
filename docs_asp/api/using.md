---
sidebar_position: 1
---

# Using the API
This page quickly explains how to obtain the API instance and start using it in your project.

## Add the API artifact

Firstly, you need to add the API artifact to your project. You can do this by adding the following Maven or Gradle dependencies:

### Maven
```xml
<!-- InfernalSuite RELEASE -->
<repositories>
  <repository>
    <id>is-releases</id>
    <url>https://repo.infernalsuite.com/repository/maven-releases/</url>
  </repository>
</repositories>

<!-- InfernalSuite SNAPSHOT -->
<repositories>
  <repository>
    <id>is-snapshots</id>
    <url>https://repo.infernalsuite.com/repository/maven-snapshots/</url>
  </repository>
</repositories>
```

```xml
<dependencies>
  <dependency>
    <groupId>com.infernalsuite.aswm</groupId>
    <artifactId>api</artifactId>
    <version>3.0.0</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

### Gradle
```groovy
repositories {
    maven { url = 'https://repo.infernalsuite.com/repository/maven-snapshots/' }
}

dependencies {
    compileOnly 'com.infernalsuite.aswm:api:3.0.0'
}
```

**If you run into any Flow-NBT errors when building your project, add the additional repository: `https://repo.rapture.pw/repository/maven-releases/`**

## Getting the API instance
Now that you've added the API artifact to your project, you can get the API instance by calling `AdvancedSlimePaperAPI.instance()`.

```java
AdvancedSlimePaperAPI asp = AdvancedSlimePaperAPI.instance();

// Do stuff
```

## Javadocs
You can find the Javadocs for the API [here](https://docs.infernalsuite.com/).
Most of the methods are documented, or the method names are self-explanatory.

## Examples
See the other articles, or check the source code of the [SlimeWorldPlugin](https://github.com/InfernalSuite/AdvancedSlimePaper/tree/main/plugin) which uses the API.
