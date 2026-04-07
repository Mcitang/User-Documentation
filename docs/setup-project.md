# Setting Up Your First Project

##
This page will take you through setting up a project in Unity for the first time. You will install the Unity Editor, which is what you will be using to add elements to your game. You will also create a new game project and add a player character to your game.

## Install the Editor
This tutorial will use Unity 6.3 LTS (6000.3.12f1), but this should work on any version of Unity 6. If you use the new input system, it should work in future versions.
!!! warning
    This tutorial will use the legacy input system. The legacy input system is easier to use for beginners, but it will be deprecated in future versions.

1. Go to the Installs tab

2. Click Install Editor

3. Install whichever version you want
???+ info "Version"
    Any official release of Unity 6 will work. This tutorial will use Unity 6.3 LTS (6000.3.12f1).

![GIF for installing Unity Editor][install-editor-gif]

<!-- VISUAL STUDIO -->
=== "If you have Visual Studio 2022 installed"
    Since you already have Visual Studio 2022 installed, Unity will not install it for you. However, you must check if you have the _Game Development with Unity_ workload installed.

    1. Open the Visual Studio Installer

        ![The visual studio installer][vs-studio-installer]

    1. Click _Modify_ for Visual Studio Community 2022
    
    1. Scroll down and ensure the _Game Development with Unity_ workload checkbox is checked

        !!! success
            ![Game Development with Unity workload checked][vs-unity-workload]

    4. If you had to check the checkbox, press _Modify_

=== "If you do not have Visual Studio 2022 installed"
    After installing the editor, Unity will also automatically begin installing Visual Studio 2022. When the installation begins, Visual Studio will open a window

    {--[I forget what happens here]--}
    
    1. Scroll down and click the _Game Development with Unity_ workload checkbox so it is checked

        !!! success
            ![Game Development with Unity workload checked][vs-unity-workload]

    1. Press the install button

    1. Continue waiting until the Editor and Visual Studio downloads to complete

## Create a Project

1. Click **+ New Project**

1. Select the Universal 2D Core Template

1. Name your project

!!! info
    This project will not cover Unity Version Control.

1. Click **+ Create Project**

![GIF for Creating a 2D Unity project][create-project-gif]

!!! success
    You should now see the Unity Editor creating your project

    ![Unity Editor creating project loading bar][project-creation-loading-image]

Once it loads, you will see the Unity Editor open up

![Image of the Unity Editor][default-unity-editor-image]

{++MISSING HERE: Explain the UI: Hierarchy, Inspector, Project Files, Scene View, Game View++}
{++MISSING HERE: Switch to the old input system in Project Settings > Player > Other Settings > Active Input Handling => Both or Input Manager (old)++}

## Set Up Project

1. Add a square sprite to the scene.
> 2D Objects > Sprites > Square

    ??? question "How to add objects to the scene?" 
        Right-click the hierarchy and press right-click to open the context menu.

2. In the inspector, rename the square to "_Player_"

3. In the inspector, change the sprite's color to <span style="color: red">red</span>

    !!! success
        ![The player object's inspector tab][player-inspector-image]

4. Add another square sprite to the scene
> 2D Objects > Sprites > Square

5. Name this one "_Floor_"

6. In the scene view, stretch it using your cursor.

{++[add gif here]++}

!!! success
    ![What your editor should look like after completing the project setup][setup-complete-image]

<!-- Glossary -->
*[LTS]: Long-Term Support, meaning it is a stable version maintained for an extended period with minimal changes.
*[context menu]: A pop-up menu that appears typically by right-clicking



<!-- Hyperlinks -->
[itch-assets-url]: https://itch.io

<!-- Images -->
[vs-studio-installer]: assets/project-setup/vs-studio-installer.png
[vs-unity-workload]: assets/project-setup/vs-unity-workload.png

[project-creation-loading-image]: assets/project-setup/project-creation-loading.png

[default-unity-editor-image]: assets/project-setup/default-unity-editor.png
[player-inspector-image]: assets/project-setup/player-inspector.png
[setup-complete-image]: assets/project-setup/setup-complete.png

<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
