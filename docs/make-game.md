# Make A 2D Game Scene

## Prepare the stage

It would be boring if there was nothing but a floor, right? So let's add some platforms and walls

1. Add rectangles to make some platforms

1. Add rectangles as walls so the player doesn't run outside the camera's view

    ???+ note "Reminder on the Camera View"
        The camera view is represented by a white rectangle in the scene view.

    !!! success
        ![Game scene with walls and platforms][platforms-and-walls-image]

Now hit the *Play* button. You will notice nothing really happens. That's because all we've done is add the objects to the scene.
Let's add the player logic.

## Let's add the Player logic

Unity has a built-in 2D physics system called **Rigidbody2D**. We will control the player through it. It also takes care of other things for us, like momentum and gravity.

1. Add a **Rigidbody2D** to the player

    ???+ How do I add a component
        Click "Add Component" in the inspector, under the already put components

    Press the *Play* button and you will see the Player now falls as if there was gravity.
    You will also notice the player falls through the stage. That's because the **Rigidbody2D** doesn't know the floor is supposed to be solid. For that we need a Collider

1. Add colliders to rectangles

    Select all your rectangles by holding ++shift++ as you select them, and add a **BoxCollider2D** component to all of them.
    
    Now if you *Play*, the player will fall and land on the floor.

## Let's write our own scripts

Before that, let's add a Scripts folder.

1. Add a new folder to the Project files, and name it Scripts

> Create > Folder

With that out of the way, we can start scripting.

### Player Movement

1. Add a new MonoBehaviour Script to your Scripts folder called `PlayerMovement`

    ??? question "What is a MonoBehavour"
        MonoBehaviour is a base class in Unity that allows you to create scripts that can be attached to GameObjects

1. Add the `PlayerMovement` component to your player.

1. Setup variables

    {++Player Movement code here++}


1. Add player jump logic

    {++Player Jump code here++}

1. Increase Gravity in Project Settings


??? note "`PlayerMovement` script draft"
    ```c#
    using System;
    using UnityEngine;

    public class PlayerMovement : MonoBehaviour
    {
        public Rigidbody2D rb;

        public float speed = 15f;

        public float jumpForce = 15f;
        public float fallForce = -3f;

        private float xMovement;

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
        }

        private void MovePlayer()
        {
            float x = xMovement * speed;
            rb.linearVelocity = new Vector2(x, rb.linearVelocityY);
        }

        private void Jump()
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                Debug.Log("Jump");
                rb.linearVelocity = new Vector2(rb.linearVelocityX, jumpForce);
            }

            if (Input.GetKeyUp(KeyCode.Space))
            {
                rb.linearVelocity = new Vector2(rb.linearVelocityX, fallForce);
            }
        }
    }
    ```

### Add a goal

1. Add some golden circles

1. Rename them to coins

1. Create score UI

1. Increase score when coin is collected

    {++Script here++}

1. If all coins are collected, you win!



<!-- Glossary -->
*[Collider]: Bounds around an object that prevent other bounds from intersecting with it.


<!-- Hyperlinks -->

<!-- Images -->
[platforms-and-walls-image]: assets/make-game/platforms-walls-scene.png

<!-- GIFs -->