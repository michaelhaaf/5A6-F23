---
title: State
description: A guide in my new Starlight docs site.
---

Some refactoring

Passing state to children

Stateless vs Stateful components

Displaying Lists

## Some Refactoring

Now that we have gotten our coding feet wet and figured out some basics, let's start getting into good coding habits

We want to be able to break up our components into separate files.

One simple approach is to have one composable per file

So, take a few minutes to break out your code into separate files.

You can work in your assignment ##1 or in your in-class code from last week.

- You can also start a new project from the Compose Multiplatform template if you wish and copy over code from the Assignment or in-class code as appropriate.

Some of you had asked about setting up a project from scratch. I really don't recommend it, but you can try following the directions at this link (after class)

- [https://medium.com/@dheerubhadoria/compose-multi-platform-login-screen-android-ios-desktop-app-1df1dd424932](https://medium.com/@dheerubhadoria/compose-multi-platform-login-screen-android-ios-desktop-app-1df1dd424932)

## Password Entry…

We really don't want to see the password in the text field…

- Add the following property to TextField:
  - visualTransformation = PasswordVisualTransformation(),

We also don't want the keyboard to reveal what has been typed.

- Add the following property to TextField or OutlinedTextField
  - keyboardOptions = KeyboardOptions(
  - keyboardType = KeyboardType.Password,
  - imeAction = ImeAction.Done
  - ),

Make these changes as part of your refactor (if you had a password request). Otherwise, add a composable with a TextField that requests a password and use this approach.

There are a variety of options with regards to the keyboard thatyou can explore at the following links:

- [https://developer.android.com/reference/kotlin/androidx/compose/foundation/text/KeyboardOptions](https://developer.android.com/reference/kotlin/androidx/compose/foundation/text/KeyboardOptions)
- [https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/input/KeyboardType)

TextField(

value = passwordValue,

onValueChange = { passwordValue = it },

textStyle = TextStyle(textAlign = TextAlign.Center),

label = { Text(text = "Please enter your password") },

visualTransformation = PasswordVisualTransformation(),

keyboardOptions = KeyboardOptions(

keyboardType = KeyboardType.Password,

imeAction = ImeAction.Done

)

)

## Delegate Properties

Using the word 'by' lets you "delegate" the getter and setter for a variable to a separate object.

For our mutable state, this lets us avoid typing ".value" all the time.

To make this change, we use "var" instead of "val" and "by" instead of "="

- val count = remember { mutableStateOf(0) }
- vs
- var count by remember { mutableStateOf(0) }

This will probably give you a redline error. This is because two things need to be imported. You can right-click and choose import to fix (but will need to do that twice). Or copy-and-paste the following into your import list.

- import androidx.compose.runtime.getValue
- import androidx.compose.runtime.setValue

Once you make this change, you can remove all references to \*.value (e.g., count.value become count) in all your composables.

Take a few minutes to make those changes to your code, as appropriate, as part of your continuing refactor.

Use the IDE! Highlight the function, right-click and select Move. Choose "To File". Make sure only one function is checked and that the name of the file is good. Click "Refactor" button to complete the action.

Link with some details on state:

- [https://dev.to/zachklipp/remember-mutablestateof-a-cheat-sheet-10ma](https://dev.to/zachklipp/remember-mutablestateof-a-cheat-sheet-10ma)
- An interesting warning: [https://proandroiddev.com/you-might-be-creating-your-states-wrong-jetpack-compose-b8b1aff1bcd8](https://proandroiddev.com/you-might-be-creating-your-states-wrong-jetpack-compose-b8b1aff1bcd8)

## Sharing State

Now, we quickly run into an issue

- What if we want to pass state information to a child component and have them change it?

We need to pass down the value and a callback function to change the value separately.

- This enables the child to call the callback function to make the desired change.

To pass a function, we usually pass down a lambda function such as:

- childComponent(count, setCount = { count = it})

To accept a function as a parameter, we use this notation

- fun childComponent(count: Int, setCount: (Int) -> Unit)

To pass both the getter and setter from the parent, call:

- childComponent(count, setCount = { count = it})

To accept those parameters in the child, we use this notation

- fun childComponent(count: Int, setCount: (Int) -> Unit)

Inside the child function, we can call the callback (i.e., setCount), and this will cause the state in the parent to change. That change in turn will lead to a recomposition.

Good links on state:

- [https://medium.com/@takahirom/jetpack-compose-state-guideline-494d467b6e76](https://medium.com/@takahirom/jetpack-compose-state-guideline-494d467b6e76)
- [https://www.composables.com/tutorials/state](https://www.composables.com/tutorials/state)

## Passing value and setter

At parent level:

- ImageCard(showImage = showImage, setShowImage = { showImage = it},
- count = count, setCount = { count = it})

At child level:

- fun ImageCard(showImage: Boolean, setShowImage: (Boolean) -> Unit,
- count: Int, setCount: (Int) -> Unit)
- …
- onClick = { setShowImage(!showImage); setCount(count - 1) },
- …
- Text("Clickable ${count} ${showImage}", Modifier.align(Alignment.Center))

## State Hoisting

When writing code with multiple components, it is important to declare the state variable at the highest necessary point in the component tree.

- i.e., if several components in a branch of the component tree need to use a given variable, then that state variable should be defined in their shared ancestor (i.e., the root of the branch they are all part of).

## Stateless vs Stateful Components

Another good design principle is to create stateless components wherever possible.

This lets us separate the logic for displaying the data from the source of the data

- We can do this by hoisting state.

In turn, this lets us

- Re-use the display component for multiple different sources of data.
- "preview" the stateless component
  - @preview to preview in Studio, but can't take any parameters
  - To be discussed later
- Perform easier testing

As you develop reusable Composables, you often want to expose both a Stateful and a Stateless version of the same composable

- This results in pairs of similarly named components. One that holds state and one that doesn't
- One naming technique for a given pair is to use the exact same component name (but parameters will vary).
- Another is to use similar but different names, and be consistent across your components.
- You can also explicitly use the word Stateless or Stateful in the component name for clarity.
  - Note: In Flutter, this is the naming approach used.

Links:

- [https://developer.android.com/jetpack/compose/state##stateful-vs-stateless](https://developer.android.com/jetpack/compose/state#stateful-vs-stateless)
- [https://peterchege.hashnode.dev/stateful-and-stateless-components-in-jetpack-compose](https://peterchege.hashnode.dev/stateful-and-stateless-components-in-jetpack-compose)

## Example: Stateful vs Stateless

/_ Stateful Component _/

@Composable

fun HelloScreen() {

var name by rememberSaveable { mutableStateOf("") }

HelloContent(name = name, onNameChange = { name = it })

}

/_ Stateless Component _/

@Composable

fun HelloContent(name: String, onNameChange: (String) -> Unit) {

Column(modifier = Modifier.padding(16.dp)) {

Text(

text = "Hello, $name",

modifier = Modifier.padding(bottom = 8.dp),

style = MaterialTheme.typography.bodyMedium

)

OutlinedTextField(value = name, onValueChange = onNameChange, label = { Text("Name") })

}

}

## Displaying Lists: LazyColumn and LazyRow

If you need to display a large number of items, or a list of unknown length, then using a layout such as Column can can performance issues

- ALL of the items will be composed and laid out whether or not they are visible on the device screen
- Note: LazyColumn and LazyRow are equivalent to RecyclerView in Android Views, except entirely new composables are created as the user scrolls through the list.

LazyColumn and LazyRow are two components that will only compose and layout those items that are current visible on the screen.

They produce a vertical or horizontal scrolling list.

These two components are a bit different from most other layouts in Compose.

Inside the braces, instead of specifying Composables directly, you specify a sequence of specific commands to describe the item contents.

- Technically this is termed a domain-specific language (DSL)

[https://developer.android.com/jetpack/compose/lists](https://developer.android.com/jetpack/compose/lists)

[https://developer.android.com/reference/kotlin/androidx/compose/foundation/lazy/LazyListScope](https://developer.android.com/reference/kotlin/androidx/compose/foundation/lazy/LazyListScope)

[https://medium.com/@mal7othify/lists-using-lazycolumn-in-jetpack-compose-c70c39805fbc](https://medium.com/@mal7othify/lists-using-lazycolumn-in-jetpack-compose-c70c39805fbc)

## item() and items()

The item() function adds a single items to the layout.

The items(Int) function adds a given number of items to the layout

- LazyColumn {
- // Add a single item
- item {
- Text(text = "First item")
- }
- // Add 5 items
- items(5) { index ->
- Text(text = "Item: $index")
- }
- // Add another single item
- item {
- Text(text = "Last item")
- }
- }

## Display list from state

This example shows use a stateful and stateless component.

- You will need to import androidx.compose.foundation.lazy.items

/_ Stateful _/

@Composable

fun DisplayList() {

val idList = remember { List<String>(100) { "Item $it" } }

DisplayGivenList(idList = idList)

}

/_ Stateless _/

@Composable

fun DisplayGivenList(idList: List<String>) {

LazyColumn {

items(items=idList) { id ->

Text(text = "" + id)

}

}

}

## Exercise

Worth 1%

[https://developer.android.com/codelabs/jetpack-compose-state](https://developer.android.com/codelabs/jetpack-compose-state)
