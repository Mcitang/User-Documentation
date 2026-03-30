# Styleguide

## General

Use dashes ('-') for lists to avoid problems with formatting.
4 spaces for markdown, CSS and JavaScript. 2 spaces for YAML

## Hyperlinks

Give hyperlink URLs an alias ending in "-url", then define the alias at the bottom of the file

```MD
Check out [Unity][unity-url]

<!-- Bottom of the document -->
[unity-url]: https://unity.com
```

Check out [Unity][unity-url]

## Images

Give image paths an alias ending in "-image", then define the alias path at the bottom of the file

```MD
![An image of a volleyball][vball-image]

<!-- Bottom of the document -->
[vball-image]: assets/image.png
```

<!-- The additional styles are for this image only, and not a styleguide specification -->

![An image of a volleyball][vball-image]{: style="width: 250px; border: 5px solid black; border-radius: 15px; padding: 25px; background-color: white; ", .center }

<br/><br/>

### Check these out for some mkdocs-material stuff:

1. [https://squidfunk.github.io/mkdocs-material/customization/](https://squidfunk.github.io/mkdocs-material/customization/)
1. [https://squidfunk.github.io/mkdocs-material/plugins/](https://squidfunk.github.io/mkdocs-material/plugins/)



<!-- Hyperlinks -->
[unity-url]: https://unity.com

<!-- Images -->
[vball-image]: assets/vball.png
