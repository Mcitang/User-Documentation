| **Symptoms** | **Probable Cause** | **Action** |
| ------------ | ------------------ | ---------- |
| Objects in the scene appear bright pink | The shader is incompatible with the [Universal Render Pipeline (URP)][urp-glossary]. | Select the material and go to **Edit > Render Pipeline > Universal Render Pipeline > Upgrade Selected Materials to URP**. |
| Game build fails | Unused imports in your C# scripts. | Open each script and ensure there are no unused imports at the top (aside from `System` and `System.Collections`). |
| Quit button does nothing during testing | You are trying to test the functionality inside the Unity Editor. | `Application.Quit()` only works in the final game build; it will not close the Editor during play mode. |
| Game starts on the wrong scene | The Main Menu is not at the top of the Scene List. | Open **File > Build Profiles**, go to your **Scene List**, and drag the Main Menu scene to the very top (index 0). |
| Unable to find an object in the Scene View | The object is selected but out of the current camera focus. | Select the object in the **Hierarchy** window and press ++f++ to frame it in the **Scene View**. |
| Input handling is not working | The legacy input system is not activated. | Go to **Edit > Project Settings > Player > Other Settings** and change **Active Input Handling** to **Both**. |
| UI elements look blurry or are the wrong size | The Canvas is not set to scale with the screen resolution. | Select your **Canvas**, find the **Canvas Scaler**, set **UI Scale Mode** to **Scale With Screen Size**, and set the resolution to 1920x1080. |
| Console says "You win!" but the win screen doesn't appear | The Scene Loader function is not assigned to the [UI][ui-glossary] event. | Check the **On Click ()** list in the button's **Inspector** and ensure the `GoToScene` function from your `SceneLoader` script is selected. |



<!-- Glossary -->
[ui-glossary]: glossary.md#ui
[urp-glossary]: glossary.md#urp