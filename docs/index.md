# Intro
Hey! :wave: This documentation will guide you through setting up a project in the [Unity Game Engine][unity-url]. The objective is to learn how to navigate through Unity's basic functions and setup of your first game. 

## Intended Users
This documentation is designed for users who want to start learning basic game development in Unity. This guide is designed for Windows, but could work for MacOS and Linux. A dedicated graphics card is not recommended, but not required.

## Prerequisite Knowledge
- Working knowledge of programming data types (e.g. string, int, float). You are expected to know what data types are, and what they represent in programming languages.  

This doc assumes the following

- You have made a Unity account
- You have the Unity Hub installed
- You have Visual Studio with the "Game development with Unity" workload installed
- You have an [itch.io][itch-url] account

## Software Requirements
Before beginning, ensure you have the following installed:

- Unity Hub installed
- Unity 6+ editor
- Visual Studio with "Game development with Unity" workload installed

## Objectives 
1. Navigate through Unity 
2. Setup a Unity Project
4. Create a character and move them around
5. Create a main and pause menu
6. Finalize game (includes complete goal e.g. collect 4 coins)

## Typographical Conventions

### Abbreviation
Unity uses C# which uses OOP

### Code block
```C#
void Start()
{
    Debug.Log("Hello World");
}
```

### Code annotation
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

### Keyboard shortcuts
++ctrl+shift+s++

### Alternates
=== "C Script"
    ```js
    int main() {
        printf("Hello World");
        return 0;
    }
    ```

=== "Python File"
    ```py
    def main():
        print("Hello World")
    ```

### Image
![Unity Hub Image][]

## Notes and Warning Messages
We will use message blocks to inform you of additional relevant information. Here are each possible message block, from most important to least important. 

!!! danger
    Indicates an action that could cause an error or application to crash

!!! warning
    Indicates specific information that should be read before proceeding

!!! success
    Indicates what success looks like

!!! failure
    Specifies actions that may lead to unexpected behaviour.

!!! info 
    Indicates additional information or tips

!!! bug
    Specifies actions that may cause an error.

???+ note "Collapsible Note"
    Yippee

???+ info "Collapsible Info"
    Yippee

???+ question "Collapsible Question"
    Yippee

<!-- Glossary definitions at the bottom -->
*[OOP]: Object-Oriented Programming



<!-- Hyperlinks -->
[unity-url]: https://unity.com/
[itch-url]: https://itch.io

<!-- Images -->
[Unity Hub Image]: assets/empty-unity-hub.png