# Building and Uploading Your Game

1. Open the **Build menu**.

    > File > Build Profiles

1. Open your **Scene List**.

1. Rearrange your scenes so the Main Menu is at the top.

    ???+ info
        We put the Main Menu at the top, because that is the scene Unity opens when the game is run.

    !!! success
        ![Scene List with Main Menu at the top][rearranged-scene-list]{ .center }

1. Return to the **Windows** tab in Platforms.

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

1. Test your build by hitting **play**.

1. Zip your Build into a compressed zip file.

1. Go to [itch.io][itch-url].

1. Press the arrow in the top-right corner, next to your profile picture.

    This will show a little dropdown.

1. Select "Upload New Project".

1. Give your game any title you want.

1. Set "Kind of Project" to **Downloadable**.

    ???+ info "About Web Builds"
        For games meant to be played in browser, you should select _HTML_ instead of _Downloadable_.

1. Press upload files and select your build zip folder.

1. Check the box next to the Windows logo so others know the target platform.

1. Scroll down and set your project's visibility.

    - **Draft:**
    Only editors can view the page

    - **Restricted:**
    Allows users with download keys and/or a password to view the page

    - **Public:**
    Anyone can view the page

1. Press **Save**.

And you're done! You can share that with whoever you want and they will be able to download from [itch.io][itch-url] and play it.

<!-- Glossary -->



<!-- Hyperlinks -->
[itch-url]: https://itch.io

<!-- Images -->
[rearranged-scene-list]: assets/build-game/build-scene-list.png

<!-- GIFs -->