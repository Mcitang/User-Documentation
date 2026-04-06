# Building and Uploading Your Game

1. Open the Build menu

    > File > Build Profiles

1. Open your Scene List

1. Rearrange your scenes so the Main Menu is at the top

    ???+ info
        We put the Main Menu at the top, because that is the scene Unity opens when the game is run.

    !!! success
        ![Scene List with Main Menu at the top][rearranged-scene-list]{ .center }

1. Go back to the Windows tab in Platforms

    !!! warning
        Windows is the default target platform when building. If for some reason it is not active, change your target platform to Windows.

1. Press _Build_

    This will open the project's folder in the explorer and ask you for a target location

1. Create a new folder called "Build"

1. Select your new Build folder as the target location

1. Wait for the Build to complete

    ???+ failure "My build failed"
        The most common reason a build fails is one of your scripts has imports that you are not using aside from `System` and `System.Collections`. Open each script and make sure there are no unused imports at the top of any of them.

    Proceed when the build is complete

1. Test your build

1. Zip your Build

1. Go to itch.io, hit the arrow in the top right then select "Upload New Project"

1. Set "Kind of Project" to Downloadable *(WARNING: If you have a web builds, you should select HTML)*

1. Hit upload files and select your build.zip

    !!! warning
        There is a 1Gb file limit. To increase the file size limit you must [contact itch.io][itch-contact]

1. Set visibility

    - **Draft:**
    Only editors can view the page

    - **Restricted:**
    Allows users with download keys and/or a password to view the page

    - **Public:**
    Anyone can view the page



<!-- Glossary -->



<!-- Hyperlinks -->

<!-- Images -->
[rearranged-scene-list]: assets/build-game/build-scene-list.png

<!-- GIFs -->