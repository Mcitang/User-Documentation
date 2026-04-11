# Intro
Hey! :wave: This documentation will guide you through setting up a project in the [Unity Game Engine][unity-url]. You will learn how to navigate through some of Unity's basic functions and use those functions to setup your first game and upload it online.

## What is Unity?
Unity is a game engine that is used to develop two-dimensional [(2D)][glossary], 3-dimensional [(3D)][glossary] , Virtual Reality [(VR)][glossary] and Alternative Reality [(AR)][glossary] experiences. While mainly used for game development, it is also widely used in the film, automotive design and architecture industries. This guide will focus on the gaming functionalities of Unity.


## Intended Users
This documentation is designed for beginner developers who want to start learning basic game development in Unity. This guide does not expect you to have any experience in game development.

## Prerequisites
- Working knowledge of programming data types strings, ints and floats - you are expected to know what these data types are, and what they represent in programming languages.

- Experience with statically typed programming languages such as Java or C - you are expected to know how to write a small class with a name, fields, a constructor and methods.

- A computer with Windows operating system and internet access.

- Knowledge of keyboard and gaming terminologies.

## Account and Program Requirements
Before beginning, please ensure you have the following accounts and programs:

- A [Unity] [unity-url] account
- An [itch.io][itch-url] account
- [Unity Engine Hub][unity-hub-url] downloaded and installed
- [7zip][7-zip-url] (or any other way to compress files to zip format)


## Objectives
1. Install Unity Editor
1. Navigate the Editor
1. Create a Simple 2D Game
1. Create a Main Menu
1. Build and Upload Game to [itch.io][itch-url]


## Typographical Conventions

| **Convention**      |  **Example**   |
|-----------    |------------------------------------   |
| Clickable buttons and sections within Unity are bolded |    **Hierarchy** window |
| Commands, functions and file names are formatted in monospace font | `Canvas Scaler` |
| Glossary defined terms have a link to the glossary page | [sprite] [sprite-glossary] |
<!-- | Hover over underlined words for further explanation |    [context menu][context-menu-glossary]   | -->

### Menu and Button Sequence
The > symbol indicates the flow of menu or button click actions.
> 2D Object > Sprites > Square

### Tabs
For instruction sections with multiple tabs, you can select the tab that best fits your situation. See an example of this below.
=== "If you do not have Visual Studio 2022 installed"
=== "If you have Visual Studio 2022 installed"

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
    Indicates specific information that should be read before proceeding.

!!! success
    Indicates what success looks like.

!!! failure
    Specifies actions that may lead to unexpected behaviour.

!!! info 
    Indicates additional information.

!!! tip
    Indicates useful knowledge, such as keyboard shortcuts.

!!! bug
    Specifies actions that may cause an error.



<!-- Glossary definitions at the bottom -->
[oop-glossary]: glossary.md#oop
[context-menu-glossary]: glossary.md#context-menu
[glossary]: glossary.md



<!-- Hyperlinks -->
[unity-url]: https://unity.com/
[itch-url]: https://itch.io
[unity-hub-url]: https://unity.com/products/unity-engine
[sprite-glossary]: glossary.md
[7-zip-url]: https://www.7-zip.org/download.html

<!-- Images -->
[Unity Hub Image]: assets/index/empty-unity-hub.png