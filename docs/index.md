# Intro
Hey! :wave: This documentation will guide you through setting up a project in the [Unity Game Engine][unity-url]. You will learn how to navigate through some of Unity's basic functions and use those functions to setup your first game.

## What is Unity?
Unity is a game engine that is used to develop 2D, 3D, VR and AR experiences. While mainly used for game development, it is also widely used in the film, automotive design and architecture industries. This guide will focus on the gaming functionalities of Unity.


## Intended Users
This documentation is designed for beginning developers who want to start learning basic game development in Unity. This guide does not expect you to have any experience in game development.

## Prerequisites
- Working knowledge of programming data types strings, ints and floats - you are expected to know what these data types are, and what they represent in programming languages.

- Experience with statically typed programming languages such as Java or C - you are expected to know how to write a small class with a name, fields, a constructor and methods.

- A computer with Windows operating system.

- Knowledge of keyboard and gaming terminologies.

## Software Requirements
Before beginning, please ensure you have the following accounts and programs:

- A [Unity] [unity-url] account
- An [itch.io][itch-url] account
- [Unity Engine Hub][unity-hub-url] downloaded and installed
- A way to zip and unzip a folder in your computer


## Objectives
1. Install Unity Editor
1. Set up a Unity Project
1. Create a platformer character
1. Add a game win condition
1. Create a main menu
1. Create a win menu
1. Build the game for Windows
1. Upload it to [itch.io][itch-url]


## Typographical Conventions

| **Convention**      |  **Example**   |
|-----------    |------------------------------------   |
| Hover over underlined words for further explanation |   context menu |
| Menu and Button Sequence. The > symbol indicates the flow of menu or button click actions. | > 2D Object > Sprites > Square |
| Clickable buttons and sections within Unity are bolded |    **Hierarchy** window |
| Commands and file names are formatted in monospace font | `Canvas Scaler` |
| Glossary defined terms have a link to the glossary page | [sprite] [sprite-glossary] |

- Terms that are defined in the glossary will have a link

### Code Blocks
This syntax denotes a section of code that would be put into the Unity editor.

```C#
void Start()
{
    Debug.Log("Hello World");
}
```

### Code Annotation
The 'plus' symbol at the right of these lines of code denotes an explanation tooltip that will give further information on the line of code. Left-click on it to have the explanation appear.

```C# linenums="1" hl_lines="5"
void start()
{
    Debug.Log("Hello"); // (1)
    Debug.Log("Hello"); // (2)
    Debug.Log("World"); // (3)
}
```

1. Explanation tooltip 1
2. Explanation tooltip 2
3. Did you notice the numbered lines?

### Keyboard Shortcuts
++ctrl+shift+s++

## Notes and Warning Messages
We will use message blocks to inform you of additional relevant information. Here are each possible message block.

!!! warning
    Indicates specific information that should be read before proceeding

!!! success
    Indicates what success looks like

!!! failure
    Specifies actions that may lead to unexpected behaviour.

!!! info 
    Indicates additional information

!!! tip
    Indicates useful knowledge, such as keyboard shortcuts

!!! bug
    Specifies actions that may cause an error.

<!-- Glossary definitions at the bottom -->
*[OOP]: Object-Oriented Programming
*[context menu]: A pop-up menu that appears to offer additional information when you hover over them.


<!-- Hyperlinks -->
[unity-url]: https://unity.com/
[itch-url]: https://itch.io
[unity-hub-url]: https://unity.com/products/unity-engine
[sprite-glossary]: glossary.md

<!-- Images -->
[Unity Hub Image]: assets/index/empty-unity-hub.png