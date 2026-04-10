# Building and Uploading Your Game

You have now completed your game! What if you wanted to share it with others? This section will take you through uploading your beautiful game to the internet through itch.io so anyone can access and download your game.  

1. Open the **Build menu**:

    > File > Build Profiles

1. Open your **Scene List**.
    ![Scene List in Build Profile][scene-list]

1. Rearrange your scenes so the Main Menu is at the top.

    !!! warning
        We put the Main Menu at the top, because that is the scene Unity opens when the game is run.

    !!! success
        ![Scene List with Main Menu at the top][rearranged-scene-list]{ .center }

1. Go to the **Windows** tab under the Platforms category in the same **Build** window.

    ![Windows tab in Build Profile][windows]

    !!! warning
        Windows is the default target platform when building. If for some reason it is not active, change your target platform to Windows.

1. Press **Build**.

    This will open the project's folder in the explorer and ask you for a target location.

1. Create a new folder called "Build".

1. Select your new `Build` folder as the target location.

1. Wait for the build to complete.

    ???+ failure "My build failed"
        The most common reason a build fails is one of your scripts has imports that you are not using aside from `System` and `System.Collections`. Open each script and make sure there are no unused imports at the top of any of them.

    Proceed when the build is complete.

1. Test your build by double clicking the executable with the same name as your project in the folder.

    !!! success
        ![Project Build files][build-files]
    
    !!! success
        ![Main Menu from the build][game-start]



1. Zip your Build into a compressed zip file:
>Right click > Compress to > Zip File

You should now have two files: a `Build` folder, and a `Build` zip file.

1. Go to [itch.io][itch-url].

1. Press the arrow in the top-right corner, next to your profile picture.

    This will show a little dropdown.

1. Select "Upload New Project".
    
    ![Upload New Project button][upload-project]

1. Give your game any title you want.

1. Set "Kind of Project" to **Downloadable**.

    !!! info "About Web Builds"
        For games meant to be played in browser, you should select _HTML_ instead of _Downloadable_.

1. Press **Upload files** and select your build zip folder.

    ![Uploaded build file][upload-build]

1. Check the box next to the Windows logo so others know the target platform.

1. Scroll down and set your project's visibility.

    - **Draft:**
    Only editors can view the page

    - **Restricted:**
    Allows users with download keys and/or a password to view the page

    - **Public:**
    Anyone can view the page

1. Press **Save**.

And you're done! You can leave every other field blank. Feel free to upload a cover image for the game if you would like.
You can share the URL that was generated with whoever you want and they will be able to download from [itch.io][itch-url] and play it.


## Conclusion
Congratulations on making it through this tutorial! You now know how to build a simple game in Unity with shapes and components, make small scripts for the player to win the game, make menus for the player to navigate through the game, and how to upload the finished game so that others can play it.

See below for what your page should look like if you copy and paste the URL that itch.io generated for you when you uploading your project:
   !!! success
     ![Itch.io game page][game-page]


<!-- Glossary -->



<!-- Hyperlinks -->
[itch-url]: https://itch.io

<!-- Images -->
[rearranged-scene-list]: assets/build-game/build-scene-list.png "Scene List with Main Menu at the top"
[game-page]: assets/build-game/game-page.png "Itch.io game page"
[upload-build]: assets/build-game/upload-build.png "Uploaded build file"
[upload-project]: assets/build-game/upload-project.png "Upload New Project button"
[build-files]: assets/build-game/build-files.png "Project Build files"
[game-start]: assets/build-game/game-start.png "Main Menu from the build"
[scene-list]: assets/build-game/scene-list.png "Scene List in Build Profile"
[windows]: assets/build-game/windows.png "Windows tab in Build Profile"

<!-- GIFs -->