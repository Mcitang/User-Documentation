# Intro
Hey! :wave: This documentation will guide you through setting up a project in the [Unity Game Engine](https://unity.com/). The objective is to learn how to navigate through Unity's basic functions and setup of your first game. 

## Intended Users
This documentation is designed for users who want to start learning basic game development in Unity. This guide is designed for Windows, but could work for MacOS and Linux. 

## Prerequisite Knowledge
- Working knowledge of programming data types (e.g. string, int, float). You are expected to know what data types are, and what they represent in programming lanugages.  

This doc assumes the following

- You have made a Unity account
- You have the Unity Hub installed
- You have Visual Studio with the "Game development with Unity" workload installed
- You have an [itch.io](https://itch.io/) account

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

### Code block
```C#
void Start()
{
    Debug.Log("Hello World");
}
```

### Code annotation
```C#
void start()
{
    Debug.Log("Hello World"); // (1)
}
```
1. This is a tooltip to help explain what the code is doing
(doesnt work yet)

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

## Notes and Warning Messages
We will use message blocks to inform you of additional relevant information. Here are each possible message block, from most important to least important. 

!!! danger
    Indicates an action that could cause an error or application to crash 

[comment]: <> (!!! failure)

[comment]: <> (    Specifies actions that may lead to unexpected behaviour.)

[comment]: <> (!!! bug)

[comment]: <> (    Specifies actions that may cause an error.)

!!! warning
    Indicates specific information that should be read before proceeding 

!!! info 
    Indicates additional information or tips 

!!! success
    Indicates what success looks like 

???+ note "Note"
    Yippee

???+ info "Info"
    Yippee

???+ question "Question"
    Yippee