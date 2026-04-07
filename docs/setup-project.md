# Setting Up Your First Project

##
This page will take you through setting up a project in Unity for the first time. You will install the Unity Editor, which is what you will be using to add elements to your game. You will also create a new game project and add a player character to your game.

## Install the Editor
The Unity Editor is where you will assemble your game. This tutorial will use Unity 6.3 LTS (6000.3.12f1), but this should work on any version of Unity 6+.
!!! warning
    This tutorial will use the legacy input system. The legacy input system is easier to use for beginners, but it will be deprecated in future versions.

1. Open the Unity app

2. Navigate to the **Installs** tab on the left side

3. Click **Install Editor**

4. Install Unity 6.3 LTS under the tab **Official Releases**
???+ info "Version"
    Any official release of Unity 6 will work. The app will recommend Unity 6.4 (6000.4.1f1), but this tutorial will use Unity 6.3 LTS (6000.3.12f1) since it is more stable.

![GIF for installing Unity Editor][install-editor-gif]

<!-- VISUAL STUDIO -->
=== "If you do not have Visual Studio 2022 installed"
    The program will ask you what modules you would like to have installed with the Unity editor. We will need to install **Visual Studio 2022** as well. This tool will help you debug and test your game code. Every other checkbox that is not mentioned can be left untouched.
    
    1. Ensure the Microsoft Visual Studio Community 2022 box is checked
    ![vs-install-check]

    2. Click **continue**

    3. Scroll down and ensure that _Game Development with Unity_ addon is checked under the **Workloads** tab

        ![Game Development with Unity workload checked][vs-unity-workload]

    4. Press the install button

    5. Wait for Editor and Visual Studio downloads to complete

        !!! success
            ![vs-install-success][vs-install-success]

    6. Close the Visual Studio Installer window
    
    This is what your Unity Window should look like at this point when the installations have been complete:
    ![install-success]

=== "If you have Visual Studio 2022 installed"
    Since you already have Visual Studio 2022 installed, Unity will not install it for you. However, you must check if you have the **Game Development with Unity** workload installed. This is an essential addon
    that will let help you debug and test your game code. 

    1. Open the Visual Studio Installer

        ![The visual studio installer][vs-studio-installer]

    1. Click _Modify_ for Visual Studio Community 2022
    
    1. Scroll down and ensure the _Game Development with Unity_ workload checkbox is checked

        !!! success
            ![Game Development with Unity workload checked][vs-unity-workload]

    4. If you had to check the checkbox, press _Modify_



## Create a Project
Great! Now that you have the Editor and Visual Studio installed, we can begin creating your first Unity project.

1. Go to the **Projects** tab on the right side of your Unity Hub window
   
1. Click **+ New Project**
     ![new-project]

1. Select the **Universal 2D Core Template** under the **Core** tab

1. Name your project

1. Choose project location

    !!! info
        This guide will not cover version control. Leave the **Unity Version Control** box unchecked.

1. Click **+ Create Project**

![GIF for Creating a 2D Unity project][create-project-gif]

!!! info
    You should now see the Unity Editor creating your project

    ![Unity Editor creating project loading bar][project-creation-loading-image]

Once it loads, you will see the Unity Editor open up

!!! success
    ![Image of the Unity Editor][default-unity-editor-image]

{++MISSING HERE: Explain the UI: Hierarchy, Inspector, Project Files, Scene View, Game View++}
{++MISSING HERE: Switch to the old input system in Project Settings > Player > Other Settings > Active Input Handling => Both or Input Manager (old)++}

## Navigate Editor UI
This section will explain a few of the most important elements of the user interface. 

Hierarchy 

Inspector 

Project Files 

Scene View 

Game View++



## Switch to Old Input System


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
[vs-install-check]: assets/project-setup/vs-install-check.png
[vs-install-success]: assets/project-setup/vs-install-success.png
[install-success]: assets/project-setup/install-success.png
[new-project]: assets/project-setup/new-project.png

[project-creation-loading-image]: assets/project-setup/project-creation-loading.png

[default-unity-editor-image]: assets/project-setup/default-unity-editor.png
[player-inspector-image]: assets/project-setup/player-inspector.png
[setup-complete-image]: assets/project-setup/setup-complete.png

<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
