# Install the Editor

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

    1. Click **Modify** for Visual Studio Community 2022.
    
    1. Scroll down and ensure the _Game Development with Unity_ workload checkbox is checked.

        ![Game Development with Unity workload checked][vs-unity-workload]

    1. Press **Modify** if you had to check the checkbox.

    1. Close Visual Studio after the changes apply.

!!! success
    When the install completes, you should see the editor in the **Installs** tab.

    ![Editor in the Installs tab][install-success]


## Create a Project
Great! Now that you have the Editor and Visual Studio installed, you can begin creating your first Unity project which will be a simple platform game.

1. Go to the **Projects** tab on the left side of your Unity Hub window.
   
1. Click **+New Project**.
     <!-- ![+New Project Button][new-project] -->

1. Select the **Universal 2D Core Template** under the **Core** tab.

1. Name your project.

1. Choose project location.

1. Click **+Create Project**.

    ![GIF for Creating a 2D Unity project][create-project-gif]

!!! success
    You should now see the Unity Editor creating your project.

    ![Unity Editor creating project loading bar][project-creation-loading-image]

Once it loads, you will see the Unity Editor open up.

## Conclusion
Great! You should now have the Unity Editor installed.

See below for what your screen should look like after completing this section:

!!! success
    ![Image of the Unity Editor][default-unity-editor-image]
<!-- Glossary -->
*[LTS]: Long-Term Support, meaning it is a stable version maintained for an extended period with minimal changes.
[lts-glossary]: glossary.md#LTS



<!-- Hyperlinks -->
[itch-assets-url]: https://itch.io
[sprite-glossary]: glossary.md

<!-- Images -->
[vs-studio-installer]: assets/project-setup/vs-studio-installer.png "The visual studio installer"
[vs-unity-workload]: assets/project-setup/vs-unity-workload.png "Game Development with Unity workload checked"
[vs-install-check]: assets/project-setup/vs-install-check.png "Visual Studio installation checked box"
[vs-install-success]: assets/project-setup/vs-install-success.png "Visual Studio installed successfully"
[install-success]: assets/project-setup/install-success.png "Editor in the Installs tab"
[new-project]: assets/project-setup/new-project.png "+New Project Button"
[project-creation-loading-image]: assets/project-setup/project-creation-loading.png "Unity Editor creating project loading bar"
[default-unity-editor-image]: assets/project-setup/default-unity-editor.png "Image of the Unity Editor"
<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
[add-floor]: assets/project-setup/add-floor.gif