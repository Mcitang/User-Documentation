# Setting Up Your First Project

##
This page will take you through setting up a project in Unity for the first time. You will install the Unity Editor, which is what you will be using to add elements to your game. You will also create a new game project and add a player character to your game.

## Install the Editor
The Unity Editor is where you will assemble your game. This tutorial will use Unity 6.3 LTS (6000.3.12f1), but this should work on any version of Unity 6+.

1. Open the Unity app.

2. Navigate to the **Installs** tab on the left side.

3. Click **Install Editor**.

4. Install Unity 6.3 LTS under the tab **Official Releases**.

???+ info "Version"
    Any official release of Unity 6 will work. The Unity Hub will recommend version 6.4 (6000.4.1f1), but this tutorial will use Unity 6.3 LTS (6000.3.12f1) since it is more stable and will be supported for longer.

![GIF for installing Unity Editor][install-editor-gif]

<!-- VISUAL STUDIO -->
=== "If you do not have Visual Studio 2022 installed"
    The program will ask you what modules you would like to have installed with the Unity editor.
    
    1. Ensure the **Microsoft Visual Studio Community 2022** box is checked.

        ![Visual Studio installation checked box][vs-install-check]

        Every other checkbox that is not mentioned can be left untouched.

    1. Click **Continue**.

    1. Wait for Visual Studio to popup asking for which Workloads you want to install with it.

    1. Scroll down and ensure that _Game Development with Unity_ addon is checked under the **Workloads** tab.

        ![Game Development with Unity workload checked][vs-unity-workload]

    1. Press the install button.

    1. Wait for Editor and Visual Studio downloads to complete.

        !!! success
            ![Visual Studio installed successfully][vs-install-success]

    1. Close the Visual Studio Installer window.

=== "If you have Visual Studio 2022 installed"
    Since you already have Visual Studio 2022 installed, Unity will not install it for you. However, you must check if you have the **Game Development with Unity** workload installed. This is an essential addon
    that will let help you debug and test your game code. 

    1. Open the Visual Studio Installer.

        ![The visual studio installer][vs-studio-installer]

    1. Click _Modify_ for Visual Studio Community 2022.
    
    1. Scroll down and ensure the _Game Development with Unity_ workload checkbox is checked.

        ![Game Development with Unity workload checked][vs-unity-workload]

    1. If you had to check the checkbox, press _Modify_.

    1. After the changes apply, close Visual Studio.

!!! success
    When the install completes, you should see the editor in the **Installs** tab

    ![Editor in the Installs tab][install-success]


## Create a Project
Great! Now that you have the Editor and Visual Studio installed, we can begin creating your first Unity project.

1. Go to the **Projects** tab on the right side of your Unity Hub window
   
1. Click **+ New Project**
     <!-- ![new-project] -->

1. Select the **Universal 2D Core Template** under the **Core** tab

1. Name your project

1. Choose project location

1. Click **+ Create Project**

    ![GIF for Creating a 2D Unity project][create-project-gif]

!!! success
    You should now see the Unity Editor creating your project

    ![Unity Editor creating project loading bar][project-creation-loading-image]

Once it loads, you will see the Unity Editor open up

!!! success
    ![Image of the Unity Editor][default-unity-editor-image]

## Navigate the Editor UI
This section will explain a few of the most important elements of the Editor's user interface. 

The _Hierarchy_ section on the left of the screen is a dedicated window that displays every _GameObject_ currently present in the active _Scene_. It allows you to organize your objects and control how they interact with each other.

![hierarchy] 

The _Inspector_ section on the right of the screen is a panel that is used to view and edit the properties, components and settings of objects and assets. 
    
    !!! tip
        To find an object in your scene quickly, select the object in your hierarchy by pressing left-click, then press ++F++ to find it in the _Scene View_.

![inspector]


The _Project Files_ at the bottom of the screen is a window that is the central hub for navigating, organizing and managing all files, assets and folders in the game project.

![project-files]

The _Scene View_ at the center of the screen is an interactive sandbox used to help you construct, arrange and edit the game world.

You can left-click on objects to select them, and hold right-click and drag to move around the scene
![scene-view]

The _Game View_ tab when selected, appears at the center of the screen and is the window that simulates and renders the final output of the project, showing what a player will see when the game is played. It currently shows a blue screen which is expected.
![game-view]

## Enabling the Legacy Input System
There is one more thing we need to do before adding anything. We will activate the legacy input system.

!!! warning
    The legacy input system is easier to use for beginners, but it will be deprecated in future versions. Once you get more comfortable with the engine, switching to the new input system is strongly recommended.

1. In the menu bar, select **Edit > Project Settings**.

1. In the left-hand sidebar of the **Project Settings** window, select the **Player** category.

1. Scroll down and open the **Other Settings** dropdown.

1. Find Active Input Handling: Scroll down to the Other Settings section (you may need to expand it).

1. Look for the Configuration subheading to find the Active Input Handling dropdown menu.

1. Click the dropdown and select **Both**.

    Unity will prompt you to restart the editor to apply these changes.

1. Click _Yes_ to restart the editor.

    {++Add gif++}


## Set Up Project

1. Add a square sprite to the scene
> 2D Objects > Sprites > Square

    ???+ question "How to add objects to the scene?" 
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
[hierarchy]: assets/project-setup/hierarchy.png
[inspector]: assets/project-setup/inspector.png
[project-files]: assets/project-setup/project-files.png
[scene-view]: assets/project-setup/scene-view.png
[game-view]: assets/project-setup/game-view.png

[project-creation-loading-image]: assets/project-setup/project-creation-loading.png

[default-unity-editor-image]: assets/project-setup/default-unity-editor.png
[player-inspector-image]: assets/project-setup/player-inspector.png
[setup-complete-image]: assets/project-setup/setup-complete.png

<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
