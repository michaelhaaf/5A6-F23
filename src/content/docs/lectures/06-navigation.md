---
title: Navigation
description: A guide in my new Starlight docs site.
---

Navigating Multiple Screens

Sealed Classes

Navigation Bar

### Goals

We'd like to build an app that contains multiple screens. We need to be able to load a particular screen when we want to perform a corresponding action (e.g., on a button click, open a page, etc.)

We need to be able to hook our screen changes into the system's back button to provide a normal app experience. We need to be able to pass data to the screen when calling it

We'd like the screen to be easy to use in our Composable UI. We'd like to be able to share state across screens (e.g., darkmode, user information, etc.)

We'd like to share layouts

### Challenges in Multiplatform

Normal Jetpack Compose navigation does not work on iOS

- So, be careful looking at online documentation since most of it won't work for Compose Multiplatform.

One 3rd party package, called Decompose, is recommended, but is hard to use and understand, and difficult to get working with iOS.

- [https://github.com/arkivanov/Decompose](https://github.com/arkivanov/Decompose)

So, we'll use another 3rd party package, called Voyager, that appears to be easy to use and full featured.

- Of course, setting it up from scratch has issues (sigh…)

BUT, there is a nice starting template available that is integrated with KMM and Compose Multiplatform for iOS and Android (!)

Main site: [https://voyager.adriel.cafe/](https://voyager.adriel.cafe/)

Blog: [https://appkickstarter.com/blog/multiplatform-navigation-with-voyager/](https://appkickstarter.com/blog/multiplatform-navigation-with-voyager/)

Template: [https://github.com/AppKickstarter/KMPStarterOS](https://github.com/AppKickstarter/KMPStarterOS)

## Sealed Classes

Sealed classes are used for representing restricted class hierarchies, when a value can have one of the types from a limited set, but cannot have any other type.

Often we need to represent a limited set of possibilities; a web request either succeeds or fails, a User can only be a Pro-User or a standard user.

We could use an enum, but they are limited.

- E.g., can only allow a single instance of each value
- Can't encode more information on each type.

You could use an abstract class, but this loses the restricted set of types advantage of enums.

Kotlin provides **sealed classes ** to allow the best of both worlds: The freedom of representation of abstract classes with the restricted set of types of enums.

To declare a sealed class or interface, put the **sealed** modifier before its name

No other subclasses may appear outside the module and package within which the sealed class is defined.

- For example, third-party clients can't extend your sealed class in their code.

Like abstract classes, sealed classes allow you to represent hierarchies.

Sealed classes cannot have public constructors (private by default)

The child classes can be any type of class: a data class, an object, a regular class or even another sealed class. Unlike abstract classes, you have to define these hierarchies in the same file or as nested classes.

[https://www.freecodecamp.org/news/how-to-handle-ui-events-in-jetpack-compose/](https://www.freecodecamp.org/news/how-to-handle-ui-events-in-jetpack-compose/)

[https://www.freecodecamp.org/news/how-to-handle-ui-events-in-jetpack-compose/](https://www.freecodecamp.org/news/how-to-handle-ui-events-in-jetpack-compose/)

[https://developer.android.com/jetpack/compose/navigation](https://developer.android.com/jetpack/compose/navigation)

[https://medium.com/androiddevelopers/sealed-with-a-class-a906f28ab7b5](https://medium.com/androiddevelopers/sealed-with-a-class-a906f28ab7b5)

[https://proandroiddev.com/understanding-kotlin-sealed-classes-65c0adad7015](https://proandroiddev.com/understanding-kotlin-sealed-classes-65c0adad7015)

[https://cazimirroman.medium.com/sealed-classes-vs-data-classes-669446e8ed3b](https://cazimirroman.medium.com/sealed-classes-vs-data-classes-669446e8ed3b)

### Sealed class rules

Sealed classes are abstract and can have abstract members.

Sealed classes cannot be instantiated directly.

Sealed classes cannot have public constructors (The constructors are private by default).

Sealed classes can have subclasses, but they must either be in the same file or nested inside of the sealed class declaration.

Sealed classes subclass can have subclasses outside of the sealed class file.

### Sealed Class Example

The below is an example of a sealed class (Result) with two possible subclasses (Success and Error), each of which behaves slightly differently

```kotlin
sealed class Result<out T : Any> {
  data class Success<out T : Any>(val data: T) : Result<T>()
  data class Error(val exception: Exception) : Result<Nothing>()
}
```

Trying to extend the sealed class outside the file it was defined in yields a compile error

When using a sealed class, we can check a result's type similarly to an enum:

```kotlin
when(result) {
  is Result.Success -> { }
  is Result.Error -> { }
}
```

### Hierarchy

We can extend subclasses when defining our sealed class.

```kotlin
sealed class Result<out T : Any> {
  data class Success<out T : Any>(val data: T) : Result<T>()
  sealed class Error(val exception: Exception) : Result<Nothing>() {
    class RecoverableError(exception: Exception) : Error(exception)
    class NonRecoverableError(exception: Exception) : Error(exception)
  }
  object InProgress : Result<Nothing>()
}
```

These can be used as follows, for example:

```kotlin
val action = when (result) {
  is Result.Success -> {}
  is Result.Error.Recoverable -> {}
  is Result.Error.Nonrecoverable -> {}
  Result.InProgress -> {}
}
```

### Comparing sealed vs data vs enum classes

Sealed classes are best for situations where you need to define a fixed set of possible states and want to ensure that your code is correct and easy to understand.

Data classes are better for situations where you just need to hold simple data and don’t need any complex logic.

Sealed class:

```kotlin
sealed class AppState {
  object Loading : AppState()
  data class Success(val data: Data) : AppState()
  data class Error(val message: String, val stackTrace: String) : AppState()
}
```

Data class:

```kotlin
data class AppState(val state: String, val data: Data? = null, val message: String? = null)
```

enum class:

```kotlin
enum class AppState {
  LOADING,
  SUCCESS,
  ERROR
}

```

### Pros/Cons (Sealed Classes)

#### Pros:

- One of the main benefits of using sealed classes is that they can help to ensure that your code is **correct and easy to understand** . Because sealed classes only allow a fixed set of subclasses, you can be sure that any object of a sealed class will be one of the defined subclasses. This makes it easier to reason about your code and can help to reduce the risk of bugs.
- Another advantage of sealed classes is that they can make it easier to write code that **handles different states in a consistent way** . For example, you can use a when expression to handle each of the different states, and the Kotlin compiler will ensure that you have covered all of the possible states. This can make it easier to write correct code and can save you time and effort.

#### Cons:

- However, sealed classes also have some drawbacks. One of the main drawbacks is that they can be **more verbose** than other options, especially if you have a large number of states. Defining a sealed class and all of its subclasses can take more code than using other options, such as data classes or enums.

### Pros/Cons (Data Classes)

#### Pros

- One of the main advantages of data classes is that they are **concise and easy to use** . Data classes are especially useful when you just need to hold a simple data structure and don’t need any complex logic. They allow you to define the data you need in a single line of code and provide automatically generated methods for accessing and modifying that data.
- Another advantage of data classes is that they can be **more flexible than sealed classes** . Because data classes don’t have any restrictions on where they can be subclassed, you can define them in one file and use them in another without any problems. This can be useful if you need to share data between different parts of your codebase.

#### Cons:

- However, data classes also have some drawbacks. One of the main drawbacks is that they **don’t provide the same level of type safety** as sealed classes. Because data classes can be subclassed anywhere, it’s possible for other code to define additional subclasses that you aren’t aware of. This can make it harder to reason about your code and can increase the risk of bugs.

## Navigation Bar

[https://itnext.io/navigation-bar-bottom-app-bar-in-jetpack-compose-with-material-3-c57ae317bd00](https://itnext.io/navigation-bar-bottom-app-bar-in-jetpack-compose-with-material-3-c57ae317bd00)

Let's build a navigation bar, similar to the one in the article above, but using Voyager navigation.
