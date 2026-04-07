# Make A 2D Game Scene

## Prepare the stage

It would be boring if there was nothing but a floor, right? So let's add some platforms and walls

1. Add rectangles to make some platforms

    !!! tip
        Use ++ctrl+d++ to duplicate the platforms in the scene and save time.

    ![GIF of placing the platforms][place-platforms-gif]

1. Add rectangles as walls so the player doesn't run outside the camera's view

    ???+ note "Reminder on the Camera View"
        The camera view is represented by a white rectangle in the scene view.

    ![GIF of placing the walls][place-walls-gif]

    !!! success
        ![Game scene with walls and platforms][platforms-and-walls-image]

Now hit the *Play* button. You will notice nothing really happens. That's because all we've done is add the objects to the scene.


### Add a **Rigidbody2D** to the player
Unity has a built-in 2D physics system. We can use it to control the player through a **Rigidbody2D** component. It also takes care of other things for us, like momentum and gravity.

1. Add a **Rigidbody2D** to the player

    ???+ question "How to add a component?"
        Click _Add Component_ in the inspector, under the existing components

        ![Adding a component][add-component-gif]{ style="width: 650px;", .center }

1. In the Rigidbody2D component, freeze the player's Z rotation by checking _Freeze Rotation Z_ to true

    > Rigidbody2D > Constraints > Freeze Rotation > :white_check_mark: Z

1. Press the *Play* button

    You will see the Player now falls as if there was gravity.
    You will also notice the player falls through the stage. That's because the **Rigidbody2D** doesn't know the floor is supposed to be solid. For that we need a Collider.

### Add colliders to rectangles

1. Select all your platforms, walls, the floor and the player by holding ++shift++ when you select each of them

1. Add a **BoxCollider2D** component to all of them.
    
    Now if you hit *Play* again, the player will fall and land on the floor.

Now lets work on moving the player

## Player Movement

### Legacy Input System
Before we start, we need to enable the legacy input system. It is easier for beginners, but less versatile than the new one. Since the old one is deprecated, it is not active by default. Let's fix that.

1. Open project settings

1. Go to player

1. Other settings

1. Active Input Handler: Both

Unity will ask to restart the editor, then the legacy input system will be active.

### Movement time!

1. Create a Scripts folder in the Project files

1. Add a new MonoBehaviour Script called `PlayerMovement` to the _Scripts_ folder
    
    > Create > MonoBehaviour Script

    ??? question "What is a MonoBehavour"
        MonoBehaviour is a base class in Unity that allows you to create scripts that can be attached to GameObjects

1. Add the `PlayerMovement` component to your player

1. Open your `PlayerMovement` script by double-clicking it

    !!! success
        This is what the empty script will look like

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

1. Setup variables before the functions

    ```C# linenums="5"
    public Rigidbody2D rb;

    public float speed = 8f;
    public float jumpForce = 8f;

    private float xMovement;
    private bool isJumping;
    ```


1. Create a function to read the player input

    ```C# linenums="1"
    private void GetMovementInput()
    {
        xMovement = Input.GetAxis("Horizontal");
        isJumping = Input.GetKeyDown(KeyCode.Space);
    }
    ```

1. Call your new input function in `Update()`

    ```C# linenums="1" hl_lines="4"
    // Update is called once per frame
    void Update()
    {
        GetMovementInput();
    }
    ```

1. Create a function to move the player depending on input

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
        Unity recommends using `FixedUpdate()` whenever we are dealing with the physics system. Unlike `Update()`, which runs every frame possible, `FixedUpdate()` will only run 30 times per second.

    ```C# linenums="1" hl_lines="3"
    private void FixedUpdate()
    {
        MovePlayer();
    }
    ```

1. Create a function to calculate your jump

    ```C# linenums="1"
    private void Jump()
    {
        if (isJumping)
        {
            rb.linearVelocity = new Vector2(rb.linearVelocityX, jumpForce);
        }
    }
    ```

1. Add your new jump function to `Update()`
    
    ```C# linenums="1" hl_lines="5"
    // Update is called once per frame
    void Update()
    {
        GetMovementInput();
        Jump();
    }
    ```

And that's it for the player movement script

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

### In the editor

1. Save your changes by pressing ++ctrl+s++

1. Minimize Visual Studio

1. Save your Unity project by pressing ++ctrl+s++

Before hitting _Play_ though, we have to assign a value to the `Rigidbody2D` variable

1. In the inspector, drag and drop the `Rigidbody2D` component to the corresponding field in `PlayerMovement`

    ![Assigning a value to Rigidbody2D rb variable][assign-rb-gif]{ .center }

1. Now hit play and try it out!

    Feel free to change the `speed` and `jumpForce` variable values, as well as the `Rigidbody2D`'s gravity scale in the inspector to your liking

    !!! tip
        You can change your script variable values directly from the inspector

        ![PlayerMovement public variables][public-vars-image]{ .center }

## Add a goal

### Coins
1. Add a circle sprite
    > 2D Object > Sprite > Circle

1. Change it to a golden color

1. Rename the circle to "_Coin_"

1. By duplicating that coin, place 2 coins on top of each platform.

    !!! tip
        Use ++ctrl+d++ to duplicate the platforms in the scene and save time.

    !!! success
        ![Coins on each platform][coins-image]
    
    The win condition for the game will be to collect all the coins

### Coins UI

1. Add a label to the scene

    > UI (Canvas) > Text - TextMeshPro

    You'll get a pop-up to download TMP essentials

1. Click _Import TMP Essentials_

1. We don't need the examples and extras, so close the TMP Importer window

    !!! success
        You will see a _TextMesh Pro_ folder in your Project Files
        ![TMP folder in your project files][tmp-files-image]

1. Since our platforms and walls are white, change the text color to black in the inspector

    The best way to preview how the UI looks is through Game view

1. Switch to the Game view

1. In the top of the Game view, change the preview resolution from "Free Aspect" to "16:9 Aspect"

1. Change back to Scene view

1. Click your canvas

1. Find the `Canvas Scaler` component

1. Change the UI Scale Mode to _Scale With Screen Size_

1. Set your reference resolution to X=1920, Y=1080

    ???+ success
        ![Canvas Scaler component with 1920x1080 reference resolution][canvas-scaler-res-image]

1. Double-click your Canvas in the hierarchy.

    This will zoom you out to where you can see your canvas

1. Drag the text object you made to the top-left corner of the canvas

    !!! success
        If you go to Game View, this is what it should look like

        ![The game view with a text label in the top-left corner][canvas-setup-image]

    Now we're ready to dynamically count the score

## Track the score

1. Give all coins a `BoxCollider2D`

    !!! tip
        You can add a component to many objects at once by holding shift when selecting the items and then adding the component

1. Turn the collider into a Trigger by checking _Is Trigger_ in all the coins' `BoxCollider2D`

    ![Trigger BoxCollider2D][trigger-image]

1. Create a new empty object

1. Name your empty object "CoinManager"

1. Drag and drop all coins into the CoinManager object

    !!! success
        ![CoinManager with Coins inside][coin-manager-image]{ style="height: 250px;", .center }

## CoinManager script

1. Go into your "Scripts" folder in your Project files

1. Create a MonoBehaviour script called `CoinManager`

    > Create > MonoBehavour Script

1. Add the `CoinManager` component to the CoinManager object

1. Delete the `Update()` function since we won't need it

1. Declare the variables we will need

    ```C# linenums="5"
    private int score;
    private int totalCoins;
    ```

1. Dynamically get the amount of coins

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

1. Save your changes by pressing ++ctrl+s++

1. Minimize Visual Studio

1. Save your Unity project by pressing ++ctrl+s++

## Coin script

1. Go into your "Scripts" folder in your Project files

1. Create a MonoBehaviour script called `Coin`

    > Create > MonoBehavour Script

1. Add the `Coin` script to all the coins

    !!! tip
        You can add a component to many objects at once by holding shift when selecting the items and then adding the component

1. Delete the `Update()` method from `Coin`

1. Assign the `CoinManager` to `Coin` in the `Start()` method

    ```C# linenums="7"
    void Start()
    {
        coinManager = transform.parent.GetComponent<CoinManager>();
    }
    ```

1. Add a variable to hold the CoinManager

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

1. Add a function to add to score in the `CoinManager` script

    ```C# linenums="14"
    public void addToScore(int add = 1)
    {
        score += add;
        Debug.Log("Score: " + score);
    }
    ```

1. Create an `OnTriggerEnter2D` function

    ```C# linenums="12"
    private void OnTriggerEnter2D(Collider2D collision)
    {
        
    }
    ```

1. When the player enters the coin trigger, increase the score in `CoinManager` and kill the coin.

    ```C# linenums="12" hl_lines="3-4"
    private void OnTriggerEnter2D(Collider2D collision)
    {
        coinManager.addToScore();
        Destroy(gameObject);
    }
    ```

1. Save your changes by pressing ++ctrl+s++

    !!! success
        Completed coin script

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
    
    
1. When the score is equal to the amount of coins, the player collected them all and they win!

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

1. Save your changes by pressing ++ctrl+s++

Now your game can be won! Let's update the UI to show the score.


1. Declare a public `TextMeshProUGUI` variable

    ```C# linenums="4"
    public TextMeshProUGUI scoreLabel;
    ```

1. Update the addScore function to update the score

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

1. Save your changes by pressing ++ctrl+s++

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

1. Minimize Visual Studio

1. Drag and drop the text label in your scene's canvas into the "Score Label" slot in the `CoinManager` component, in the inspector


    !!! success
        ![Score Label variable][score-label-image]{ .center }

1. Save your Unity project by pressing ++ctrl+s++



<!-- Glossary -->
*[Collider]: Bounds around an object that prevent other bounds from intersecting with it.



<!-- Hyperlinks -->

<!-- Images -->
[platforms-and-walls-image]: assets/make-game/platforms-walls-scene.png
[public-vars-image]: assets/make-game/public-vars.png
[coins-image]: assets/make-game/coins.png
[tmp-files-image]: assets/make-game/tmp-files.png
[canvas-scaler-res-image]: assets/make-game/canvas-scaler-res.png
[canvas-setup-image]: assets/make-game/canvas-setup.png
[trigger-image]: assets/make-game/trigger.png
[coin-manager-image]: assets/make-game/coin-manager.png
[score-label-image]: assets/make-game/score-label.png

<!-- GIFs -->
[place-platforms-gif]: assets/make-game/place-platforms.gif
[place-walls-gif]: assets/make-game/place-walls.gif
[add-component-gif]: assets/make-game/add-component.gif
[assign-rb-gif]: assets/make-game/assign-rb.gif