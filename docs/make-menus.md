# Making The Menus

## Setup

1. Find the current scene, called _SampleScene_ in your Project files, inside the "Scenes" folder

1. Right-click it, then rename it to "_Game_"

1. Create a new Scene, call it "_Main Menu_"

    > Create > Scene > Scene

1. Add a label

    > UI (Canvas) > Text - TextMeshPro

1. Double-click your Canvas in the hierarchy.

    This will zoom you out to where you can see your canvas

1. Click your canvas

1. Find the `Canvas Scaler` component

1. Change the UI Scale Mode to _Scale With Screen Size_

1. Set your reference resolution to X=1920, Y=1080

1. Change these settings for the text object

    | TRANSFORM     |           |
    | ---------     | ------    |
    | Pos X         | 0         |
    | Pos Y         | 400       |
    | Width         | 1000      |
    | Height        | 200       |

    | TEXTMESHPRO - TEXT    |   |
    | ---------     | ------    |
    | Text          | Main Menu |
    | Font Size     | 80px      |
    | Font Style    | Bold      |
    | Alignment     | Justify center, vertical align center |
    
    ???+ success
        !["Main Menu" Label][main-menu-label-image]

1. Add a button
    > UI (Canvas) > Button - TextMeshPro

1. Change these settings for the button

    | TRANSFORM     |           |
    | ---------     | ------    |
    | Pos X         | 0         |
    | Pos Y         | 0         |
    | Width         | 400       |
    | Height        | 100       |

    The button has a child Text object

    | TEXTMESHPRO - TEXT    |   |
    | ---------     | ------    |
    | Text          | Play      |
    | Font Size     | 60px      |
    | Font Style    | Bold      |

## Create scene transition system

1. Create a new MonoBehaviour script called "SceneLoader"

1. Create a new empty object
    > Create Empty

1. Name it "SceneLoader"

1. Add the `SceneLoader` script to the SceneLoader game object

1. Open the `SceneLoader` script

### Scene Transition

To do scene transitions, you must use the `UnityEngine.SceneManagement` package. Visual Studio will import a package automatically whenever you use a function the requires it.

1. Create a `GoToScene` function that takes in an `int`

    ```C# linenums="6"
    public void GoToScene(int sceneIndex)
    {
        SceneManager.LoadScene(sceneIndex);
    }
    ```
    
1. Overload the `GoToScene` with a function that takes in a `string`

    ```C# linenums="6"
    public void GoToScene(string sceneName)
    {
        SceneManager.LoadScene(sceneName);
    }
    ```

1. Select your play button and scroll down in the inspector

    At the very bottom of the `Button` component, you'll see an empty list with the header "On Click ()".
    This is an event. You give it a list of functions that will execute when the `OnClick()` event occurs.

1. Hit the "+" button under the list

1. Drag and drop your SceneLoader object into the empty `GameObject` slot

    You will see a dropdown that says "No Function"

1. Open the dropdown and select your `GoToScene` function th at takes in a string.

    > Scene Loader > GoToScene (string)

    An empty field will appear under the dropdown. That is the parameter value.

1. Type "Game" into the parameter field

### Add scenes to your build's scene list

1. Open your Build Profiles

    > File > Build Profiles
    
    or hit ++ctrl+shift+b++

    ???+ success
        ![The Build Profiles menu][build-profiles-image]

1. Press _Open Scene List_

1. Drag and drop all the scenes into the Scene List

    !!! tip
        To select multiple things at a time, hold ++shift++ while selecting each of them

    ![Scene List with Main Menu and Game][scene-list-gif]

1. Test your menu

## Return to Main Menu after winning

1. Go back to the Game scene by double-clicking it in the Project Files

1. 

1. Back in the Game Scene, add a "Back to Menu" button on win state

1. Add a Pause Menu with a Resume and Back to Menu buttons



<!-- Glossary -->



<!-- Hyperlinks -->

<!-- Images -->
[main-menu-label-image]: assets/make-menu/main-menu-label.png
[build-profiles-image]: assets/make-menu/build-profiles.png

<!-- GIFs -->
[scene-list-gif]: assets/make-menu/scene-list.gif