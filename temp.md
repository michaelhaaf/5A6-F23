1. How was navigation handled in the Rally app *before* your codelab changes?

2. Where should the `NavController` be placed in the composable hierarchy of an Android application? Why?

3. What are some of the flags we can provide the `NavOptionsBuilder`, and how do they effect app behavior? In Step 5, there are several flags to try -- test a few of theme and explain the differences, using concepts like "back stack state" to make your explanations clear.

4. Explain how navigation arguments make the SingleAccountScreen able to display the correct information for different account types.

5. What are deep links? What are implicit deep links? What do you need to do to enable exposing deep links to external apps?


For the first two questions, read through the [UI State production](https://developer.android.com/topic/architecture/ui-layer/state-production) notes

1. Why is it a good practise to immutable vs mutable?

2. What does it mean for state production pipelines to be "Lifecycle aware"? I.e., under what conditions should the code that "checks" the current state of your variables run? Compare, for instance, a "naïve" way to manage state, where you create an independent thread that "sleeps" for some time and checks state later. What are the benefits of Lifecycle aware state updates, and how are they implemented in Jetpack Compose?

2. suggestedDestinations updated by updatePeople button, collectAsStateWithLifecycle, dependency between CraneHomeContent and MainViewModel, _suggestedDestinations vs suggestedDestinations in MainViewModel

3. 
context: onTimeout is a lambda, i.e. a thing that needs to happen. One "thing" you could have happen is to set a boolean to false after some delay, another "thing" you could have happen is to load any database data and update composables. These different lambdas may not be in sync, may cause "recomposition" and therefore the delay would start again.

LandingScreen that displays while background data is being loaded. First implementation, LaunchedEffect side effect in background, onTimeout for finish. Wrong, why? callers to this composable function may pass a different onTimeout lambda, that'd make the delay start again and you wouldn't be meeting the requirements. Instead use global constant key to ensure recomposition doesn't take place (all timeouts in sync). But, what if onTimeout changes? Use rememberUpdatedState API. That way if LandingScreen recomposes or onTimeout changes, the delay shouldn't start again

You should use rememberUpdatedState when a long-lived lambda or object expression references parameters or values computed during composition, which might be common when working with LaunchedEffect.

state for showLandingScreen, state 

4. A side-effect in Compose is a change to the state of the app that happens outside the scope of a composable function. For example, opening a new screen when the user taps on a button, or showing a message when the app doesn't have Internet connection.

5. To call suspend functions safely from inside a composable, use the LaunchedEffect API, which triggers a coroutine-scoped side-effect in Compose.

Suspend functions, in addition to being able to run asynchronous code, also help represent concepts that happen over time. As opening the drawer requires some time, movement, and potential animations, that's perfectly reflected with the suspend function, which will suspend the execution of the coroutine where it's been called until it finishes and resumes execution.

6. scaffoldState.drawerState.open() must be called within a coroutine. What can you do? openDrawer is a simple callback function, therefore:

    You cannot simply call suspend functions in it because openDrawer is not executed in the context of a coroutine.
    You cannot use LaunchedEffect as before because we cannot call composables in openDrawer. We're not in the Composition.

7. You want to launch a coroutine; which scope should we use? Ideally, you'd want a CoroutineScope that follows the lifecycle of its call-site. Using the rememberCoroutineScope API returns a CoroutineScope bound to the point in the Composition where you call it. The scope will be automatically canceled once it leaves the Composition. With that scope, you can start coroutines when you're not in the Composition, for example, in the openDrawer callback.

8. Using LaunchedEffect in this case wasn't possible because you needed to trigger the call to create a coroutine in a regular callback that was outside of the Composition.

Looking back at the landing screen step that used LaunchedEffect, could you use rememberCoroutineScope and call scope.launch { delay(); onTimeout(); } instead of using LaunchedEffect?

You could've done that, and it would've seemed to work, but it wouldn't be correct. As explained in the Thinking in Compose documentation, composables can be called by Compose at any moment. 

LaunchedEffect guarantees that the side-effect will be executed when the call to that composable makes it into the Composition. 

If, on the other hand, you use `rememberCoroutineScope` and `scope.launch` in the body of the `LandingScreen`, the coroutine will be executed every time `LandingScreen` is called by Compose regardless of whether that call makes it into the Composition or not. Therefore, you'll waste resources and you won't be executing this side-effect in a controlled environment.

9. Summarize the main differences between LaunchedEffect (Landing screen) and rememberCoroutineScope (navigationDrawer).


10. The Choose Destination button: Replacing the simple textState with a **state holder** class so that the font doesn't get messed up (and the component is more flexible/reusable).

11. The logic to update the textState and determine whether what's been displayed corresponds to the hint or not is all in the body of the CraneEditableUserInput composable. This brings some downsides with it:

    The value of the TextField is not hoisted and therefore cannot be controlled from outside, making testing harder.
    The logic of this composable could become more complex and the internal state could be out of sync more easily.

The class should have the following traits:

- text is a mutable state of type String, just as you have in CraneEditableUserInput. **It's important to use mutableStateOf so that Compose tracks changes to the value and recomposes when changes happen.**
- text is a var, with a private set so it can't be directly mutated from outside the class. Instead of making this variable public, you can expose an event updateText to modify it, which makes the class the **single source of truth**.
- The class takes an initialText as a dependency that is used to initialize text.
- The logic to know if the text is the hint or not is in the isHint property that performs the check on-demand.

If the logic gets more complex in the future, you only need to make changes to one class: EditableUserInputState.

11. remember the stateholder by putting it in the Composition (so they are not recreated, and so that they can recompose when updated)
. However, remember the problem with device rotations? If you only `remember` this state, it won't survive activity recreations. **`remember` vs `rememberSaveable` explanation**, gives us the need to use the `Saver` -> `Saveable` interface.

(context: Bundle is map from String keys to Primitive/Array/objects that implement Parcelable, which does NOT apply to the new class we've created, or put another way, it is simpler to implment Saveable instead of Parcelable since Parcelable is very low level.)

With this, the EditableUserInput remembered state will survive process and activity recreations.


12. A Saver describes how an object can be converted into something which is Saveable. Implementations of a Saver need to override two functions:

    save to convert the original value to a saveable one.
    restore to convert the restored value to an instance of the original class.

For this case, instead of creating a custom implementation of Saver for the EditableUserInputState class, you can use some of the existing Compose APIs such as listSaver or mapSaver (that stores the values to save in a List or Map) to reduce the amount of code that you need to write.

It's a good practice to place Saver definitions close to the class they work with. Because it needs to be statically accessed, add the Saver for EditableUserInputState in a companion object. In the base/EditableUserInput.kt file, add the implementation of the Saver:

12. kotlin companion object for static class objects/methods
that can manage hint logic in a smart way
13. You're going to use EditableUserInputState instead of text and isHint, but you don't want to just use it as an internal state in CraneEditableUserInput as there's no way for the caller composable to control the state. 

Instead, you want to hoist EditableUserInputState so that callers can control the state of CraneEditableUserInput. If you hoist the state, then the composable can be used in previews and be tested more easily since you're able to modify its state from the caller.


14. You've probably noticed that the onInputChanged parameter is not there anymore! Since the state can be hoisted, if callers want to know if the input changed, they can control the state and pass that state into this function.

15. A bit more simply...

replace the "naive" text storage with a class: 
    - that can be saved and be recomposed, 
    - that is single source of truth: any and all changes to it take place ONLY in that class (double check this)
    - that is *hoisted* to CraneEditableUserInput (so that things which can *see* CraneEditableUserInput can call on it and update it)
    - that is not *hoisted too high* that it's coupled with everything else in the FlySearchContent @Composable **(question: what else is in that composable?)**

you need to:
    - 
    - check all the places where it's called to make sure you pass in the appropriate parameters

LOL!!! There are no visual changes in this step of the codelab, but you've improved the quality of this part of the code. If you run the app now, you should see everything is working as it did previously.

In this case, hoisting the state is a good idea since this is a low-level UI component that might be reused in other parts of the app. Therefore, the more flexible and controllable it is, the better. 


16.                                                                                                     java.lang.IllegalArgumentException: androidx.compose.samples.crane.base.EditableUserInputState@99b8314 cannot be saved using the current SaveableStateRegistry. The default implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it to rememberSaveable().

