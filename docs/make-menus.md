# Make Menus

We now have the core parts of our game. Let's make some menus for the player to use.

## Setup

1. Open the "Scenes" folder in your Project Files.

1. Rename the current scene from `SampleScene` to `Game`.

1. Right click anywhere in your Project files and Create a new Scene called "_Main Menu_":

    > Create > Scene > Scene

1. Open your main menu scene by double-clicking it in the Project Files.

1. Add a label through right clicking in the **Hierarchy** window:

    > UI (Canvas) > Text - TextMeshPro

1. Double-click the canvas button in the **Hierarchy** window.

    This will zoom you out to where you can see the whole of the canvas.

1. Click your canvas.

1. Find the `Canvas Scaler` component.

1. Change the UI Scale Mode to _Scale With Screen Size_.

1. Set your reference resolution to X=1920, Y=1080.

1. Change these settings for the text object.

    | Rect Transform    |           |
    | ---------     | ------    |
    | Pos X         | 0         |
    | Pos Y         | 400       |
    | Width         | 1000      |
    | Height        | 200       |

    | TextMeshPro - Text    |   |
    | ---------     | ------    |
    | Text          | Main Menu |
    | Font Size     | 80px      |
    | Font Style    | **Bold**      |
    | Alignment     | Center|
    
    ???+ success

        !["Main Menu" Label][main-menu-label-image]{ .center }

1. Add a button:

    > UI (Canvas) > Button - TextMeshPro

    This will be the play button on the opening menu.

1. Change these settings for the button object:

    | Rect Transform    |           |
    | ---------     | ------    |
    | Pos X         | 0         |
    | Pos Y         | 0         |
    | Width         | 400       |
    | Height        | 100       |

1. Change these settings for the button's text:

    | TextMeshPro - Text    |   |
    | ---------     | ------    |
    | Text          | Play      |
    | Font Size     | 60px      |
    | Font Style    | **Bold**      |

## Create Scene Transition System

1. Open your `Scripts` folder in the Project files.

1. Create a new MonoBehaviour script called "SceneLoader":
    
    > Create > MonoBehavour Script.

1. Create a new empty object:
    > Create Empty

1. Name it `SceneLoader`.

1. Add the `SceneLoader` script to the SceneLoader game object.

1. Open the `SceneLoader` script.

### Scene Transition

To do scene transitions, you must use the `UnityEngine.SceneManagement` package. Visual Studio will import a package automatically whenever you use a function the requires it.

1. Create a `GoToScene` function that takes in an `int`:

    ```C# linenums="6"
    public void GoToScene(int sceneIndex)
    {
        SceneManager.LoadScene(sceneIndex);
    }
    ```
    
1. Overload the `GoToScene` with a function that takes in a `string`:

    ```C# linenums="6"
    public void GoToScene(string sceneName)
    {
        SceneManager.LoadScene(sceneName);
    }
    ```

1. Save your changes by pressing ++ctrl+s++.

    !!! success
    
        ```C# linenums="1"
        using UnityEngine;
        using UnityEngine.SceneManagement;

        public class SceneLoader : MonoBehaviour
        {
            public void GoToScene(int sceneIndex)
            {
                SceneManager.LoadScene(sceneIndex);
            }

            public void GoToScene(string sceneName)
            {
                SceneManager.LoadScene(sceneName);
            }
        }
        ```

### Linking Buttons

1. Minimize Visual Studio.

1. Select your play button and scroll down in the **Inspector**.

    At the very bottom of the `Button` component, you'll see an empty list with the header "On Click ()".
    This is an event. You give it a list of functions that will execute when the `OnClick()` event occurs.

1. Hit the "+" button under the list.

1. Drag and drop your SceneLoader object into the empty `GameObject` slot.

    You will see a dropdown that says "No Function".

1. Open the dropdown and select your `GoToScene` function that takes in a string:

    > Scene Loader > GoToScene (string)

    An empty field will appear under the dropdown. That is the parameter value.

1. Type "Game" into the parameter field

    !!! warning
        Strings are case-sensitive, make sure you write "Game" exactly like that.

    ???+ success
        ![On Click () event function call list for the Play button][play-button-onclick-image]{ .center }

1. Save your Unity project by pressing ++ctrl+s++.
        

### Add Scenes to Scene List

1. Open your Build Profiles.

    > File > Build Profiles
    
    or hit ++ctrl+shift+b++.

    ???+ success
        ![The Build Profiles menu][build-profiles-image]

1. Press _Open Scene List_.

1. Drag and drop all the scenes from your Project files into the Scene List.

    !!! tip
        To select multiple things at a time, hold ++shift++ while selecting each of them.

    ![Scene List with Main Menu and Game][scene-list-gif]

1. Close the Build Profiles menu.

1. Save your Unity project by pressing ++ctrl+s++.

1. Hit the play button to test your menu and ensure that you can proceed to the game after the menu screen. 

## Return to Main Menu After Winning

1. Go back to the Game scene by double-clicking it in the Project Files.

1. Right-click the Canvas in the **Hierarchy** window and create an Empty Game Object.

    > Create Empty

    ???+ bug
        If you create the empty object without right-clicking the Canvas, the next steps will not work.

        Be sure your empty object has a Rect Transform component.

        ![Rect Transform][rect-transform-image]{ .center}

1. Name it "WinScreen".

1. Right-click the WinScreen object and add an Image object:

    > UI (Canvas) > Image

1. Change the image color to black in the **Inspector** tab.

1. Right-click the WinScreen object again and add a Text object:

    > UI (Canvas) > Text - TextMeshPro

1. Select the text object, image object and WinScreen at the same time.

1. In the rect transform, click the Anchor Presets in the left side of the component.

1. Hold ++alt+shift++ to set the pivot and position as well, then select furthest bottom right preset.

    ![Set Rect Transform anchors][rect-transform-anchor-gif]{ .center}

    !!! success
        Your game view should be covered by the black image, with text in the top-left corner.

        ![Win Screen Skeletopn game view][win-screen-skeleton-view-image]{ .center}

    ???+ failure "I can't see the text"
        If you can't see the text, your image is most likely covering it. Make sure the items inside WinScreen are in this exact order from top to bottom.

        ![Win Screen in the hierarchy][win-screen-hierarchy-image]{ .center}

1. Right-click WinScreen and create a Button:

    > UI (Canvas) > Button - TextMeshPro

1. Change these settings for the text inside WinScreen:

    | TextMeshPro - Text    |   |
    | ---------     | ------    |
    | Text          | You win!  |
    | Font Size     | 100px     |
    | Font Style    | **Bold**      |
    | Vertex Color  | Yellow    |
    | Alignment     | Justify center<br>Vertical align center |

1. Change these settings for the button in WinScreen:

    | Transform     |           |
    | ---------     | ------    |
    | Pos X         | 0         |
    | Pos Y         | -150      |
    | Width         | 400       |
    | Height        | 75        |
    
1. Change these settings for the text inside the button in WinScreen:

    | TextMeshPro - Text    |   |
    | ---------     | ------    |
    | Text          | Back To Menu  |
    | Font Size     | 40px      |
    | Font Style    | **Bold**      |

1. Change these settings for the image in WinScreen:

    | Image     |           |
    | ---------     | ------    |
    | Color         | Alpha (A): 200    |


## Win Screen Logic

### Set up SceneLoader

1. Create an empty object in the **Hierarchy** tab:
    
    > Create Empty

1. Rename it to "SceneLoader".

1. Add the `SceneLoader` component.

1. Add the `GoToScene` function that takes in a string to the "Back To Menu" button's On Click () function list.

1. Type "MainMenu" into the parameter field.

    !!! warning
        Make sure your scene name matches what you type into the `GoToScene` string parameter. If it doesn't it will be unable to find the scene and it will not work.

    ???+ success
        ![On Click () event function call list for the Back To Menu button][menu-button-onclick-image]{ .center }

### Show Win Screen If All Coins are Collected

1. Open your `CoinManager` script.

1. Add a reference to the WinScreen GameObject:

    ```C# linenums="6"
    public GameObject winScreen;
    ```

1. Hide the win screen on Start:

    ```C# linenums="12" hl_lines="4"
    void Start()
    {
        totalCoins = transform.childCount;
        winScreen.SetActive(false);
    }
    ```

1. Show win screen when the player wins:

    ```C# linenums="18" hl_lines="8"
    public void addToScore(int add = 1)
    {
        score += add;
        scoreLabel.SetText(score.ToString());

        if (score >= totalCoins)
        {
            winScreen.SetActive(true);
        }
    }
    ```

    !!! success

        ```C# linenums="1"
        using TMPro;
        using UnityEngine;

        public class CoinManager : MonoBehaviour
        {
            public GameObject winScreen;
            public TextMeshProUGUI scoreLabel;

            private int score;
            private int totalCoins;

            void Start()
            {
                totalCoins = transform.childCount;
                winScreen.SetActive(false);
            }

            public void addToScore(int add = 1)
            {
                score += add;
                scoreLabel.SetText(score.ToString());

                if (score >= totalCoins)
                {
                    winScreen.SetActive(true);
                }
            }
        }
        ```

1. Test it.

    !!! success
        You are able to go from the Main Menu to the Game, and when you win you can go back to the Main Menu.

        ![Main menu to Game then back to Main Menu][game-loop-gif]

Finally we should add a quit button so people can stop playing the game

### Add Quit Button

1. Go to the main menu.

1. Duplicate your play button by selecting it and pressing ++ctrl+d++.

1. Drag it down in the scene view or set its Y position to -150 so it is visible.

1. Change its text to say "Quit".

1. Open your `SceneLoader` script.

1. Write this quit function:

    ```C# linenums="16"
    public void QuitGame()
    {
        Application.Quit();
    }
    ```

    !!! success

        ```C# linenums="1"
        using UnityEngine;
        using UnityEngine.SceneManagement;

        public class SceneLoader : MonoBehaviour
        {
            public void GoToScene(int sceneIndex)
            {
                SceneManager.LoadScene(sceneIndex);
            }

            public void GoToScene(string sceneName)
            {
                SceneManager.LoadScene(sceneName);
            }

            public void QuitGame()
            {
                Application.Quit();
            }
        }
        ```

1. Go to your quit button's `On Click ()` list.

    It should have the `GoToScene` function from `SceneLoader`

1. Click the function dropdown and change it from `GoToScene` to `QuitGame`:

    > Scene Loader > QuitGame ()

    !!! info "Testing the Quit Button"
        Testing the quit button will do nothing in the Unity Editor, it only works in the game build.

    !!! warning
        Make sure you change the _On Click ()_ function for the quit button and not the play button. Since the inspector looks the same for both buttons, it will be easy to get confused.

And we are done!



<!-- Glossary -->



<!-- Hyperlinks -->

<!-- Images -->
[main-menu-label-image]: assets/make-menu/main-menu-label.png
[build-profiles-image]: assets/make-menu/build-profiles.png
[rect-transform-image]: assets/make-menu/rect-transform.png
[win-screen-hierarchy-image]: assets/make-menu/win-screen-hierarchy.png
[win-screen-skeleton-view-image]: assets/make-menu/winscreen-skeleton-view.png
[play-button-onclick-image]: assets/make-menu/play-button-onclick.png
[menu-button-onclick-image]: assets/make-menu/menu-button-onclick.png

<!-- GIFs -->
[scene-list-gif]: assets/make-menu/scene-list.gif
[rect-transform-anchor-gif]: assets/make-menu/rect-transform-anchor.gif
[game-loop-gif]: assets/make-menu/game-loop.gif