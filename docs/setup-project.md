# Navigating And Setting Up Your Project

## Install the Editor
This tutorial will use Unity 6.3 LTS (6000.3.12f1), but this should work on any version of Unity 6. If you use the new input system, it should work in future versions.
!!! warning
    This tutorial will use both the new input system and the legacy input system. The legacy input system is easier to use for beginners, but it will be deprecated in future versions.

1. Go to the Installs tab

2. Click Install Editor

3. Install whichever version you want
???+ info "Version"
    Any official release of Unity 6 will work. This tutorial will use Unity 6.3 LTS (6000.3.12f1).

![GIF for installing Unity Editor][install-editor-gif]

## Create a Project

1. Click **+ New Project**

1. Select the Universal 2D Core Template

1. Name your project

1. Click **+ Create Project**

![GIF for Creating a 2D Unity project][create-project-gif]

!!! info
    You should now see the Unity Editor creating your project

    ![Unity Editor creating project loading bar][project-creation-loading-image]

Once it loads, you will see the Unity Editor open up

![Image of the Unity Editor][default-unity-editor-image]

{++MISSING HERE: Explain the UI: Hierarchy, Inspector, Project Files, Scene View, Game View++}

## Set Up Project

1. Through the context menu, add a square sprite to the scene.
> 2D Objects > Sprites > Square
??? info "How to add objects to the scene?" 
    Right-click the hierarchy and press right-click to open the context menu.

2. In the inspector, rename this square to "_Player_"

3. In the inspector, change the sprite's color to red.

It should look like this
![The player object's inspector tab][player-inspector-image]


<!-- Glossary -->
*[LTS]: Long-Term Support, meaning it is a stable version maintained for an extended period with minimal changes.
*[context menu]: A pop-up menu that appears typically by right-clicking



<!-- Hyperlinks -->
[itch-assets-url]: https://itch.io

<!-- Images -->
[project-creation-loading-image]: assets/project-setup/project-creation-loading.png
[default-unity-editor-image]: assets/project-setup/default-unity-editor.png
[player-inspector-image]: assets/project-setup/player-inspector.png

<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
