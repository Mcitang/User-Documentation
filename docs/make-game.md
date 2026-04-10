# Make A 2D Game Scene
You now have a player character and the floor. This section will continue adding elements to the game scene, such as platforms and walls. You will learn how to add movement to the player character, allowing the player to jump and move around. 

You will also add a goal for the player to achieve, which will be collecting coins on the platforms. Finally, you will learn how to write small scripts so the coins can be collected and so that the total amount of coins collected will be displayed at the top left of the screen.

## Prepare the Stage

It would be boring if there was nothing but a floor, right? So let's add some platforms and walls!

1. Add 3 more squares and stretch them out.

    !!! tip
        Use ++ctrl+d++ to duplicate the platforms in the scene and save time.

    ![GIF of placing the platforms][place-platforms-gif]

    These will be the platforms for the game.

1. Add 2 squares and stretch them out vertically on both sides of the scene.

    ???+ note "Reminder on the Camera View"
        The camera view is represented by a white rectangle in the scene view.

    ![GIF of placing the walls][place-walls-gif]

    !!! success
        ![Game scene with walls and platforms][platforms-and-walls-image]

    These rectangles will act as walls for this section of the game.


### Add Physics to the Player
Unity has a built-in 2D physics system. We can use it to control the player through a **[Rigidbody2D][rb2d-glossary]** component. It also takes care of other things for us, like momentum and gravity.

1. Add a **[Rigidbody2D][rb2d-glossary]** component to the red square player sprite.

    ???+ question "How to add a component?"
        Click _Add Component_ in the inspector, under the existing components

        ![Adding a component][add-component-gif]{ style="width: 650px;", .center }

1. Check the player's [**Freeze Rotation Z**][z-rotation-glossary] checkbox in the **[Rigidbody2D][rb2d-glossary]** component settings.

    > Rigidbody2D > Constraints > Freeze Rotation > :white_check_mark: Z

    ![Rigidbody2D Freeze Rotation Z set to true][freeze-rotation]

    This will ensure that the player character from rolling or spinning when they collide with objects or move around.

1. Press the **Play** button.

    You will see the Player now falls as if there was gravity. They should fall right through the stage.
    That's because the **[Rigidbody2D][rb2d-glossary]** doesn't know the floor is supposed to be solid. For that we will need a Collider.

### Add Colliders to Rectangles

1. Select all your platforms, walls, the floor and the player by holding ++shift++ when you select each of them.

1. Add a **BoxCollider2D** component to all of them.
    
    Now if you hit *Play* again, the player will fall and land on the floor.

Now lets work on moving the player.

## Player Movement

### Add Movement

1. Create a Scripts folder by right clicking anywhere in the Project files section.
> Create > Folder

1. Name the folder as `Scripts`.

1. Enter the `Scripts` folder by double clicking on it.

1. Add a new [MonoBehaviour][Monobehaviour-glossary] Script called `PlayerMovement` to the `Scripts` folder.
    
    > Create > MonoBehaviour Script

1. Add the `PlayerMovement` component to your player.

1. Open your `PlayerMovement` script by double-clicking it.

    !!! info
        This action should open Microsoft Visual Studio if you have it correctly installed.

    !!! success
        This is what the empty script will look like.

        ```C# linenums="1"
        using UnityEngine;

        public class PlayerMovement : MonoBehaviour
        {
            // Start is called once before the first execution of Update after the MonoBehaviour is created
            void Start()
            {
                
            }

            // Update is called once per frame
            void Update()
            {
                
            }
        }
        ```

1. Place these variables before the functions.

    ```C# linenums="5"
    public Rigidbody2D rb;

    public float speed = 8f;
    public float jumpForce = 8f;

    private float xMovement;
    private bool isJumping;
    ```


1. Create a function to read the player input.

    ```C# linenums="1"
    private void GetMovementInput()
    {
        xMovement = Input.GetAxis("Horizontal");
        isJumping = Input.GetKeyDown(KeyCode.Space);
    }
    ```

1. Call your new input function in `Update()`.

    ```C# linenums="1" hl_lines="4"
    // Update is called once per frame
    void Update()
    {
        GetMovementInput();
    }
    ```

1. Create a function to move the player depending on input.

    ```C# linenums="1"
    private void MovePlayer()
    {
        float x = xMovement * speed;
        rb.linearVelocity = new Vector2(x, rb.linearVelocityY); // (1)
    }
    ```

    1. `rb.linearVelocity` is the velocity of the object

1. Call your new movement function in `FixedUpdate()`.

    ???+ info "Fixed Update"
        Unity recommends using `FixedUpdate()` whenever we are dealing with the physics system. Unlike `Update()`, which runs every frame possible, `FixedUpdate()` will only run 30 times per second. This function is meant to work alongside `Update()`.

    ```C# linenums="1" hl_lines="3"
    private void FixedUpdate()
    {
        MovePlayer();
    }
    ```

1. Create a function to calculate your jump.

    ```C# linenums="1"
    private void Jump()
    {
        if (isJumping)
        {
            rb.linearVelocity = new Vector2(rb.linearVelocityX, jumpForce);
        }
    }
    ```

1. Add your new jump function to `Update()`.
    
    ```C# linenums="1" hl_lines="5"
    // Update is called once per frame
    void Update()
    {
        GetMovementInput();
        Jump();
    }
    ```

That's all for the player movement script. This is what the completed file should look like:

???+ success "PlayerMovement script"

    ```C#
    using System;
    using UnityEngine;

    public class PlayerMovement : MonoBehaviour
    {
        public Rigidbody2D rb;

        public float speed = 8f;
        public float jumpForce = 8f;

        private float xMovement;
        private bool isJumping;

        // Start is called once before the first execution of Update after the MonoBehaviour is created
        void Start()
        {
            
        }

        // Update is called once per frame
        void Update()
        {
            GetMovementInput();
            Jump();
        }

        private void FixedUpdate()
        {
            MovePlayer();
        }

        private void GetMovementInput()
        {
            xMovement = Input.GetAxis("Horizontal");
            isJumping = Input.GetKeyDown(KeyCode.Space);
        }

        private void MovePlayer()
        {
            float x = xMovement * speed;
            rb.linearVelocity = new Vector2(x, rb.linearVelocityY);
        }

        private void Jump()
        {
            if (isJumping)
            {
                rb.linearVelocity = new Vector2(rb.linearVelocityX, jumpForce);
            }
        }
    }
    ```

### Test Your Movement Script

1. Save your changes in Visual Studio by pressing ++ctrl+s++.

1. Minimize Visual Studio.

1. Save your Unity project by pressing ++ctrl+s++.

Before testing the movement, we have to assign a value to the `Rigidbody2D rb` variable

1. In the inspector, drag and drop the `[Rigidbody2D][rb2d-glossary]` component to the corresponding field in `PlayerMovement`

    ![Assigning a value to Rigidbody2D rb variable][assign-rb-gif]{ .center }

1. Hit _Play_ and try moving the player around!

    !!! info
        Use ++space++ to jump and use the arrow keys or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> to move around.

    Feel free to change the `speed` and `jumpForce` variable values, as well as the `Rigidbody2D`'s gravity scale in the inspector to your liking.

    !!! tip
        You can change your script variable values directly from the inspector

        ![PlayerMovement public variables][public-vars-image]{ .center }

 1. Pause the _Play_  button before moving on to the next step.

## Add a Goal
Every game has a goal or victory condition that means the player has won once they have achieve that. Let's add that now. We will create coins that players can collect. Once they have collected every coin, they win the game.

### Create Coins
1. Add a circle sprite to the scene. 
> 2D Object > Sprite > Circle

1. Change it to a golden color in the coin's **Inspector** window.

1. Rename the circle to "_Coin_".

1. Duplicate the coins until there are 2 on top of each platform.

    !!! tip
        Use ++ctrl+d++ to duplicate the platforms in the scene and save time.

    !!! success
        ![Coins on each platform][coins-image]

### Create Coins User Interface (UI)

1. Add a text object to the scene by right clicking in the **Hierarchy** window.

    > UI (Canvas) > Text - TextMeshPro

    You will get a pop-up to download [TextMeshPro (TMP)] [textmesh-glossary] essentials.

1. Click **Import TMP Essentials**.

1. Close the TMP Importer window without importing the examples and extras.

    !!! success
        You should see a _TextMesh Pro_ folder in your Project Files.
        ![TMP folder in your project files][tmp-files-image]

1. Change the default text color to black in the **Inspector**.
    Since the walls and platforms are white, black will contrast well with them.

    !!! tip
        The best way to preview how the UI looks is through the **Game** view instead of the **Scene** view.

1. Switch to the **Game** view.

1. Change the preview resolution from "Free Aspect" to "16:9 Aspect" at the top of the **Game** view.
    
    This will force the display to a standard widescreen format, allowing you to view how the game would look on modern displays.

1. Change back to **Scene** view.

1. Click the [**Canvas**][canvas-glossary] button in the **Hierarchy** window.

1. Find the `Canvas Scaler` component in the **Inspector** window.

1. Change the UI Scale Mode from **Constant Pixel Size** to **Scale With Screen Size**.

1. Set your reference resolution to X=1920, Y=1080.

    ???+ success
        ![Canvas Scaler component with 1920x1080 reference resolution][canvas-scaler-res-image]

1. Double-click Canvas in the **Hierarchy** window.

    This will zoom you out to where you can see your whole canvas.

1. Drag the text object you made (Text-tmp under Canvas in the **Hierarchy** window) to the top-left corner of the canvas.

    !!! success
        This is whjat it should look like in the **Game** view.

        ![The game view with a text label in the top-left corner][canvas-setup-image]

    This text will help us dynamically display the player's score.

## Track the Score

1. Give all coins a `BoxCollider2D` component in the **Inspector** tab.

    !!! info
        If your scene view is still zoomed out, the objects you have are in the bottom left corner, zoom there if you want to select your coins from there.

    !!! tip
        You can add a component to many objects at once by holding shift when selecting the items and then adding the component. 

1. Turn the collider into a [Trigger][trigger-glossary] by checking the **Is Trigger** box in all the coins' `BoxCollider2D` component settings.

    ![Trigger BoxCollider2D][trigger-image]

1. Create a new empty object by right-clicking anywhere in the **Hierarchy** window and clicking **Create Empty**.

1. Name your empty object "CoinManager".

1. Drag and drop all coins into the CoinManager object.

    !!! success
        ![CoinManager with Coins inside][coin-manager-image]{ style="height: 250px;", .center }

## Create CoinManager Script

1. Go into your "Scripts" folder in your Project files.

1. Create a MonoBehaviour script called `CoinManager`.

    > Create > MonoBehavour Script

1. Add the `CoinManager` script component to the CoinManager object's **Inspector** window.

1. Open the CoinManager script by double-clicking on it.

1. Delete the `Update()` function since we won't need it.

1. Declare the variables we will need:

    ```C# linenums="5"
    private int score;
    private int totalCoins;
    ```

1. Dynamically get the amount of coins:

    ```C# linenums="8" hl_lines="4"
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        totalCoins = transform.childCount;
    }
    ```

    !!! success

        ```C# linenums="1" hl_lines="5-6"
        using UnityEngine;

        public class CoinManager : MonoBehaviour
        {
            private int score;
            private int totalCoins;

            // Start is called once before the first execution of Update after the MonoBehaviour is created
            void Start()
            {
                totalCoins = transform.childCount;
            }
        }
        ```

1. Save your changes by pressing ++ctrl+s++.

1. Minimize Visual Studio.

1. Save your Unity project by pressing ++ctrl+s++.

## Coin Script

1. Go into your "Scripts" folder in your Project files.

1. Create a MonoBehaviour script called `Coin`.

    > Create > MonoBehavour Script

1. Add the `Coin` script to all the coins.

    !!! tip
        You can add a component to many objects at once by holding shift when selecting the items and then adding the component.

1. Open the `Coin` script file.

1. Delete the `Update()` method from `Coin`.

1. Assign the `CoinManager` to `Coin` in the `Start()` method:
    ```C# linenums="7"
    void Start()
    {
        coinManager = transform.parent.GetComponent<CoinManager>();
    }
    ```

1. Add a variable to hold the CoinManager:

    ```C# linenums="1" hl_lines="5"
    using UnityEngine;

    public class Coin : MonoBehaviour
    {
        public CoinManager coinManager;

        // Start is called once before the first execution of Update after the MonoBehaviour is created
        void Start()
        {
            
        }
    }
    ```

1. Add a function to add to score in the `CoinManager` script:

    ```C# linenums="14"
    public void addToScore(int add = 1)
    {
        score += add;
        Debug.Log("Score: " + score);
    }
    ```

1. Create an `OnTriggerEnter2D` function:

    ```C# linenums="12"
    private void OnTriggerEnter2D(Collider2D collision)
    {
        
    }
    ```

1. When the player enters the coin trigger, increase the score in `CoinManager` and remove the coin:

    ```C# linenums="12" hl_lines="3-4"
    private void OnTriggerEnter2D(Collider2D collision)
    {
        coinManager.addToScore();
        Destroy(gameObject);
    }
    ```

1. Save your changes by pressing ++ctrl+s++. 

    !!! success
        Completed coin script:

        ```C# linenums="1"
        using UnityEngine;

        public class Coin : MonoBehaviour
        {
            public CoinManager coinManager;

            void Start()
            {
                coinManager = transform.parent.GetComponent<CoinManager>();
            }

            private void OnTriggerEnter2D(Collider2D collision)
            {
                coinManager.addToScore();
                Destroy(gameObject);
            }
        }
        ```


    !!! success
        CoinManager script at this point:
        ```C# linenums="1"
        using UnityEngine;

        public class CoinManager : MonoBehaviour
        {
            private int score;
            private int totalCoins;

            public void addToScore(int add = 1)
            {
                score += add;
                Debug.Log("Score: " + score);

                if (score >= totalCoins)
                {
                    Debug.Log("You win!");
                }
            }

            // Start is called once before the first execution of Update after the MonoBehaviour is created
            void Start()
            {
                totalCoins = transform.childCount;
            }
        }

        ```
    
    
    When the score is equal to the amount of coins, the player collected them all and they win!

    ```C# linenums="16" hl_lines="6-9"
    public void addToScore(int add = 1)
    {
        score += add;
        Debug.Log("Score: " + score);

        if (score >= totalCoins)
        {
            Debug.Log("You win!");
        }
    }
    ```

1. Save your changes in Visual Studio by pressing ++ctrl+s++.

Now your game can be won! Let's update the UI to show the score.

## Update Score UI

1. Declare a public `TextMeshProUGUI` variable at the top of your `CoinManager` script file.

    ```C# linenums="4"
    public TextMeshProUGUI scoreLabel;
    ```

1. Update the `addScore` function to update the score.

    ```C# linenums="16" hl_lines="4"
    public void addToScore(int add = 1)
    {
        score += add;
        scoreLabel.SetText(score.ToString());

        if (score >= totalCoins)
        {
            Debug.Log("You win!");
        }
    }
    ```

1. Save your changes by pressing ++ctrl+s++.

    ???+ success

        ```C# linenums="1"
        using TMPro;
        using UnityEngine;

        public class CoinManager : MonoBehaviour
        {
            public TextMeshProUGUI scoreLabel;

            private int score;
            private int totalCoins;

            void Start()
            {
                totalCoins = transform.childCount;
            }

            public void addToScore(int add = 1)
            {
                score += add;
                scoreLabel.SetText(score.ToString());

                if (score >= totalCoins)
                {
                    Debug.Log("You win!");
                }
            }
        }
        ```

1. Minimize Visual Studio.

1. Drag and drop the text label in your scene's canvas into the `Score Label` slot in the `CoinManager` component, in the **Inspector** window.


    !!! success
        ![Score Label variable][score-label-image]{ .center }

1. Save your Unity project by pressing ++ctrl+s++.

1. Run the game and collect all coins.

    Once you collect all the coins, the console tab at the bottom should say "You win!".

## Conclusion
You should now have platforms and walls for your game scene, with coins on each of the platforms. The player character should be able to move around and jump, and the score at the top left should keep track of how many coins you have. The console log should also print out a message when the player has collected all the coins.

See below for what your game view should look like after completing this section:
!!! success
    ![Game View][game-view]

<!-- Glossary -->
[canvas-glossary]: glossary.md#canvas
[collider-glossary]: glossary.md#collider
[rb2d-glossary]: glossary.md#rigidbody2d
[sprite-glossary]: glossary.md#sprite



<!-- Hyperlinks -->
[Monobehaviour-glossary]: glossary.md
[trigger-glossary]: glossary.md
[z-rotation-glossary]: glossary.md
[textmesh-glossary]: glossary.md
[canvas-glossary]: glossary.md

<!-- Images -->
[platforms-and-walls-image]: assets/make-game/platforms-walls-scene.png "Game scene with walls and platforms"
[public-vars-image]: assets/make-game/public-vars.png "PlayerMovement public variables"
[coins-image]: assets/make-game/coins.png "Coins on each platform"
[tmp-files-image]: assets/make-game/tmp-files.png "TMP folder in your project files"
[canvas-scaler-res-image]: assets/make-game/canvas-scaler-res.png "Canvas Scaler component with 1920x1080 reference resolution"
[canvas-setup-image]: assets/make-game/canvas-setup.png "The game view with a text label in the top-left corner"
[trigger-image]: assets/make-game/trigger.png "Trigger BoxCollider2D"
[coin-manager-image]: assets/make-game/coin-manager.png "CoinManager with Coins inside"
[score-label-image]: assets/make-game/score-label.png "Score Label variable"
[freeze-rotation]: assets/make-game/freeze-rotation.png "Rigidbody2D Freeze Rotation Z set to true"
[game-view]: assets/navigate-editor/game-view.png "Game view at end of section"

<!-- GIFs -->
[place-platforms-gif]: assets/make-game/place-platforms.gif
[place-walls-gif]: assets/make-game/place-walls.gif
[add-component-gif]: assets/make-game/add-component.gif
[assign-rb-gif]: assets/make-game/assign-rb.gif