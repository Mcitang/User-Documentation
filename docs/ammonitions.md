??? failure "My build failed"
    The most common reason a build fails is one of your scripts has imports that you are not using aside from `System` and `System.Collections`. Open each script and make sure there are no unused imports at the top of any of them.

??? failure "Pink Textures or Missing Shaders"
    If objects in your scene appear bright pink, it usually means the shader is incompatible with your current Render Pipeline (URP).
    
    Select the material and go to

    > Edit > Render Pipeline > Universal Render Pipeline > Upgrade Selected Materials to URP.

???+ question "How to add a component?"
    Click _Add Component_ in the inspector, under the existing components

    ![Adding a component][add-component-gif]{ style="width: 650px;", .center }



<!-- Glossary -->



<!-- Hyperlinks -->

<!-- Images -->

<!-- GIFs -->
[add-component-gif]: assets/make-game/add-component.gif