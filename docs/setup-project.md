# Setting Up Your First Project

This page will take you through setting up a project in Unity for the first time. You will install the Unity Editor, which is what you will be using to add elements to your game. You will also create a new game project and add a player character and a floor to your game.

## Install the Editor
The Unity Editor is where you will assemble your game. This tutorial will use Unity 6.3 [LTS][lts-glossary] (6000.3.12f1), but this should work on any version of Unity 6+.

1. Open the Unity app.

2. Navigate to the **Installs** tab on the left side.

3. Click **Install Editor** on the right side.

4. Install Unity 6.3 [LTS][lts-glossary] under the tab **Official Releases**.

!!! info "Version"
    Any official release of Unity 6 will work. The Unity Hub will recommend version 6.4 (6000.4.1f1), but this tutorial will use Unity 6.3 LTS (6000.3.12f1) since it is more stable and will be supported for longer.

![GIF for installing Unity Editor][install-editor-gif]

<!-- VISUAL STUDIO -->
=== "If you do not have Visual Studio 2022 installed"
    The program will ask you what modules you would like to have installed with the Unity editor.
    
    1. Ensure the **Microsoft Visual Studio Community 2022** box is checked.

        ![Visual Studio installation checked box][vs-install-check]

        Every other checkbox that is not mentioned can be left untouched.

    1. Click **Continue**.

    1. Wait for Visual Studio to ask which Workloads you want to install with it.

    1. Scroll down and ensure that _Game Development with Unity_ addon is checked under the **Workloads** tab.

        ![Game Development with Unity workload checked][vs-unity-workload]

    1. Press the **install** button.

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
    When the install completes, you should see the editor in the **Installs** tab.

    ![Editor in the Installs tab][install-success]


## Create a Project
Great! Now that you have the Editor and Visual Studio installed, we can begin creating your first Unity project which will be a simple platform game.

1. Go to the **Projects** tab on the left side of your Unity Hub window.
   
1. Click **+New Project**.
     <!-- ![new-project] -->

1. Select the **Universal 2D Core Template** under the **Core** tab.

1. Name your project.

1. Choose project location.

1. Click **+Create Project**.

    ![GIF for Creating a 2D Unity project][create-project-gif]

!!! success
    You should now see the Unity Editor creating your project.

    ![Unity Editor creating project loading bar][project-creation-loading-image]

Once it loads, you will see the Unity Editor open up.

!!! success
    ![Image of the Unity Editor][default-unity-editor-image]

## Enabling the Legacy Input System
There is one more thing we need to do before adding anything. We will activate the legacy input system.

!!! warning
    The legacy input system is easier to use for beginners, but it will be deprecated in future versions. Once you get more comfortable with the engine, switching to the new input system is strongly recommended.

1. In the menu bar, select **Project Settings**.

    > Edit > Project Settings

1. Search for "Input" using the searchbar in the top-right corner of **Project Settings**.

1. In the left-hand sidebar of the **Project Settings** window, select the **Player** category.

1. Scroll down and open the **Other Settings** dropdown.

1. Scroll down to the **Other Settings** section to find the section labeled as Active Input Handling.

1. Look for the Configuration subheading to find the Active Input Handling dropdown menu.

1. Click the dropdown and select **Both**.

    Unity will prompt you to restart the editor to apply these changes.

1. Click _Apply_ to restart the editor.

## Create the Player and Floor

Now we can start adding objects. This section will guide you through shapes to your game. You will add 2 squares, one representing the player, and another representing the floor. Ensure that the editor is on the **Scene** view instead of the **Game** view. We will start with the player first.

### Player

1. Add a square [sprite] [sprite-glossary] to the scene from the **Hierarchy** tab's **+** button:
> 2D Objects > Sprites > Square

    ![add-square-sprite]

2. Rename the square to "_Player_" in the **Inspector** tab on the right.

3. Change the sprite's color to red in the **Inspector** tab.

    !!! success
        ![The player object's inspector tab][player-inspector-image]

4. Add another square sprite to the scene.

### Floor
Now that we have a player character, we will add a floor for them to stand on.

4. Add another square sprite to the scene.
> 2D Objects > Sprites > Square

5. Name the second sprite "_Floor_" in the **Inspector** tab.

6. In the scene view, stretch it using your cursor into a rectangle shape.

![add-floor]

!!! success
    ![What your editor should look like after completing the project setup][setup-complete-image]



<!-- Glossary -->
*[LTS]: Long-Term Support, meaning it is a stable version maintained for an extended period with minimal changes.
[lts-glossary]: glossary.md#LTS



<!-- Hyperlinks -->
[itch-assets-url]: https://itch.io
[sprite-glossary]: glossary.md

<!-- Images -->
[vs-studio-installer]: assets/project-setup/vs-studio-installer.png
[vs-unity-workload]: assets/project-setup/vs-unity-workload.png
[vs-install-check]: assets/project-setup/vs-install-check.png
[vs-install-success]: assets/project-setup/vs-install-success.png
[install-success]: assets/project-setup/install-success.png
[new-project]: assets/project-setup/new-project.png
[backends-warning]: assets/project-setup/backends-warning.png
[add-square-sprite]: assets/project-setup/add-square-sprite.png

[project-creation-loading-image]: assets/project-setup/project-creation-loading.png

[default-unity-editor-image]: assets/project-setup/default-unity-editor.png
[player-inspector-image]: assets/project-setup/player-inspector.png
[setup-complete-image]: assets/project-setup/setup-complete.png

<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
[add-floor]: assets/project-setup/add-floor.gif
