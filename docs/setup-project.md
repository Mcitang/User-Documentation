# Set Up Project
Now that you have the editor installed, there are just a few more things to set up before you can add elements to your game.

## Enabling the Legacy Input System
First, you need to activate the legacy input system.

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

Now you can start adding objects. This section will guide you through adding shapes to your game. You will add 2 squares, one representing the player, and another representing the floor. Ensure that the editor is on the **Scene** view instead of the **Game** view. We will start with the player first.

### Player

1. Add a square [sprite][sprite-glossary] to the scene from the **Hierarchy** tab's **+** button:
> 2D Objects > Sprites > Square

    ![Context Menu for adding a square Sprite][add-square-sprite]

2. Rename the square to "_Player_" in the **Inspector** tab on the right.

3. Change the sprite's color to red in the **Inspector** tab.

    !!! success
        ![The player object's inspector tab][player-inspector-image]

4. Add another square sprite to the scene.

### Floor
Now that you have a player character, you will add a floor for them to stand on.

4. Add another square sprite to the scene.
> 2D Objects > Sprites > Square

5. Name the second sprite "_Floor_" in the **Inspector** tab.

6. In the scene view, stretch it using your cursor into a rectangle shape.

![add-floor]

## Conclusion
You have now learned how to add shapes to your project, with the red square representing the player character and the white rectangle at the bottom representing the floor.

See below for what your screen should look like after completing this section:

!!! success
    ![Unity Editor after completing the project setup instructions][setup-complete-image]



<!-- Glossary -->



<!-- Hyperlinks -->
[itch-assets-url]: https://itch.io
[sprite-glossary]: glossary.md#sprite

<!-- Images -->
[add-square-sprite]: assets/project-setup/add-square-sprite.png "Context Menu for adding a square Sprite"
[player-inspector-image]: assets/project-setup/player-inspector.png "The player object's inspector tab"
[setup-complete-image]: assets/project-setup/setup-complete.png "Unity Editor after completing the project setup instructions"

<!-- GIFs -->
[install-editor-gif]: assets/project-setup/install-editor.gif
[create-project-gif]: assets/project-setup/create-project.gif
[add-floor]: assets/project-setup/add-floor.gif
