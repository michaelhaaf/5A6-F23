# Related Technologies for Multiplatform Applications

![](img/Multiplatform_Day_06_rev0.jpg)

# 420-731-AB
Instructor: Talib Hussain

Day 6: Navigation

# Objectives

Navigating Multiple Screens

Sealed Classes

Navigation Bar

# Navigation

* We'd like to build an app that contains multiple screens
* We need to be able to load a particular screen when we want to
  * E\.g\.\, on a button click\, etc\.
* We need to be able to hook our screen changes into the system's back button to provide a normal app experience\.
* We need to be able to pass data to the screen when calling it
* We'd like the screen to be easy to use in our Composable UI
* We'd like to be able to share state across screens
  * E\.g\.\, darkmode\, user information\, etc\.
* We'd like to share layouts

# Bit of a challenge in Multiplatform

* Normal Jetpack Compose navigation does not work on iOS
  * So\, be careful looking at online documentation since most of it won't work for Compose Multiplatform\.
* One 3rd party package\, called Decompose\, is recommended\, but is hard to use and understand\, and difficult to get working with iOS\.
  * [https://github\.com/arkivanov/Decompose](https://github.com/arkivanov/Decompose)
* So\, we'll use another 3rd party package\, called Voyager\, that appears to be easy to use and full featured\.
  * Of course\, setting it up from scratch has issues \(sigh…\)
* BUT\, there is a nice starting template available that is integrated with KMM and Compose Multiplatform for iOS and Android \(\!\)
  * Last updated 3 weeks ago
  * It works\!
  * We get image loading on iOS too \(\!\!\)
* Main site: [https://voyager\.adriel\.cafe/](https://voyager.adriel.cafe/)
* Blog: [https://appkickstarter\.com/blog/multiplatform\-navigation\-with\-voyager/](https://appkickstarter.com/blog/multiplatform-navigation-with-voyager/)
* Template: [https://github\.com/AppKickstarter/KMPStarterOS](https://github.com/AppKickstarter/KMPStarterOS)

# Getting Started

* Similar to what we did with the earlier template\, go to the following GitHub site
  * [https://github\.com/AppKickstarter/KMPStarterOS](https://github.com/AppKickstarter/KMPStarterOS)
  * Click "Use this Template"
  * Select "Create a new repository"
  * Get the code clone link from your new repository in your GitHub account
  * Start a new project in Android Studio\.

# Now, transfer over your Assignment #1

* We're going to get you setup for Assignment \#2
* 1\. Create a 'main' folder inside their package\.
* 2\. Copy over your assignment components
* 3\. Add a package line to the top of each of those files
  * package com\.lduboscq\.appkickstarter\.main
  * But\, if the file says @file:OptIn…\, then put the package line AFTER that\.
* 4\. Copy the theme folder from your old project to the ui folder in the new folder
  * Add a package line to the top of each file in the theme folder
  * package com\.lduboscq\.appkickstarter\.ui\.theme
* 5\. For the main composable \(not in App\.kt\, but the one that App\.kt called before\)\, convert it to a "Screen" using the following format:
  * internal class MainScreen : Screen \{
  * @OptIn\(ExperimentalResourceApi::class\)
  * @Composable
  * override fun Content\(\) \{
  * Make sure to call it MainScreen for consistency with the class\.
  * Make sure the composable inside is called Content

# Finally, configure support for Images properly

* 6\. Overwrite the Image\.kt file in the folder ui with the following:
  * package com\.lduboscq\.appkickstarter\.ui
  * import androidx\.compose\.foundation\.Image
  * import androidx\.compose\.runtime\.Composable
  * import androidx\.compose\.runtime\.CompositionLocalProvider
  * import androidx\.compose\.ui\.Alignment
  * import androidx\.compose\.ui\.Modifier
  * import androidx\.compose\.ui\.graphics\.ColorFilter
  * import androidx\.compose\.ui\.graphics\.DefaultAlpha
  * import androidx\.compose\.ui\.layout\.ContentScale
  * import com\.seiko\.imageloader\.LocalImageLoader
  * import com\.seiko\.imageloader\.rememberAsyncImagePainter
  * @Composable
  * internal fun Image\(url: String\, modifier: Modifier = Modifier\,
  * contentDescription: String? = null\,
  * alignment: Alignment = Alignment\.Center\,
  * contentScale: ContentScale = ContentScale\.Fit\,
  * alpha: Float = DefaultAlpha\,
  * colorFilter: ColorFilter? = null
  * \) \{
  * CompositionLocalProvider\(
  * LocalImageLoader provides generateImageLoader\(\)\,
  * \) \{
  * Image\(
  * painter = rememberAsyncImagePainter\(url\)\,
  * contentDescription = contentDescription\,
  * modifier = modifier\,
  * alignment = alignment\,
  * contentScale = contentScale\,
  * alpha = alpha\,
  * colorFilter = colorFilter
  * \)
  * \}
  * \}

# Images continued

* In each file where you used "Image"\, remove the relevant import line\.  Add the following import line instead:
  * import com\.lduboscq\.appkickstarter\.ui\.Image
* For each call to Image\, replace painter="…" with url="…"
  * Find a url of an image to put there\.
  * The url should be an image format \(e\.g\.\, \.jpg\) not a \.html\.

# Finally, update MainApp

* Update MainApp so its function looks like the following\.  Add the appropriate import lines\.
  * public fun MainApp\(\) \{
  * AppTheme \{
  * Navigator\(MainScreen\(\)\) \{ navigator \->
  * SlideTransition\(navigator\)
  * \}
  * \}
  * \}

# Navigate.push put a new Screen on the Stack(This lets the device's back-button work with the Screens)

# Get setup on Macs in Lab

Clone a copy of the project there too\.

# Sealed Classes

* Sealed classes are used for representing restricted class hierarchies\, when a value can have one of the types from a limited set\, but cannot have any other type\.
* Often we need to represent a limited set of possibilities; a web request either succeeds or fails\, a User can only be a Pro\-User or a standard user\.
* We could use an enum\, but they are limited\.
  * E\.g\.\, can only allow a single instance of each value
  * Can't encode more information on each type\.
* You could use an abstract class\, but this loses the restricted set of types advantage of enums\.
* Kotlin provides  __sealed classes __ to allow the best of both worlds: The freedom of representation of abstract classes with the restricted set of types of enums\.

* To declare a sealed class or interface\, put the  __sealed__  modifier before its name
* No other subclasses may appear outside the module and package within which the sealed class is defined\.
  * For example\, third\-party clients can't extend your sealed class in their code\.
* Like abstract classes\, sealed classes allow you to represent hierarchies\.
* Sealed classes cannot have public constructors \(private by default\)
* The child classes can be any type of class: a data class\, an object\, a regular class or even another sealed class\. Unlike abstract classes\, you have to define these hierarchies in the same file or as nested classes\.
* [https://www\.freecodecamp\.org/news/how\-to\-handle\-ui\-events\-in\-jetpack\-compose/](https://www.freecodecamp.org/news/how-to-handle-ui-events-in-jetpack-compose/)
* [https://www\.freecodecamp\.org/news/how\-to\-handle\-ui\-events\-in\-jetpack\-compose/](https://www.freecodecamp.org/news/how-to-handle-ui-events-in-jetpack-compose/)
* [https://developer\.android\.com/jetpack/compose/navigation](https://developer.android.com/jetpack/compose/navigation)
* [https://medium\.com/androiddevelopers/sealed\-with\-a\-class\-a906f28ab7b5](https://medium.com/androiddevelopers/sealed-with-a-class-a906f28ab7b5)
* [https://proandroiddev\.com/understanding\-kotlin\-sealed\-classes\-65c0adad7015](https://proandroiddev.com/understanding-kotlin-sealed-classes-65c0adad7015)
* [https://cazimirroman\.medium\.com/sealed\-classes\-vs\-data\-classes\-669446e8ed3b](https://cazimirroman.medium.com/sealed-classes-vs-data-classes-669446e8ed3b)

# Sealed class rules

Sealed classes are abstract and can have abstract members\.

Sealed classes cannot be instantiated directly\.

Sealed classes cannot have public constructors \(The constructors are private by default\)\.

Sealed classes can have subclasses\, but they must either be in the same file or nested inside of the sealed class declaration\.

Sealed classes subclass can have subclasses outside of the sealed class file\.

# Sealed Class Example

* The below is an example of a sealed class \(Result\) with two possible subclasses \(Success and Error\)\, each of which behaves slightly differently
  * sealed class Result\<out T : Any> \{
  * data class Success\<out T : Any>\(val data: T\) : Result\<T>\(\)
  * data class Error\(val exception: Exception\) : Result\<Nothing>\(\)
  * \}
* Trying to extend the sealed class outside the file it was defined in yields a compile error
* When using a sealed class\, we can check a result's type similarly to an enum:
  * when\(result\) \{
  * is Result\.Success \-> \{ \}
  * is Result\.Error \-> \{ \}
  * \}

# Hierarchical

* We can extend subclasses when defining our sealed class\.
  * sealed class Result\<out T : Any> \{
  * data class Success\<out T : Any>\(val data: T\) : Result\<T>\(\)
  * sealed class Error\(val exception: Exception\) : Result\<Nothing>\(\) \{
  * class RecoverableError\(exception: Exception\) : Error\(exception\)
  * class NonRecoverableError\(exception: Exception\) :
  * Error\(exception\)
  * \}
  * object InProgress : Result\<Nothing>\(\)
  * \}
* These can be used as follows\, for example:
  * val action = when \(result\) \{
  * is Result\.Success \-> \{ \}
  * is Result\.Error\.Recoverable \-> \{ \}
  * is Result\.Error\.Nonrecoverable \-> \{\}
  * Result\.InProgress \->
  * \}

# Pro/Con Sealed Classes

* Pros:
  * One of the main benefits of using sealed classes is that they can help to ensure that your code is  __correct and easy to understand__ \. Because sealed classes only allow a fixed set of subclasses\, you can be sure that any object of a sealed class will be one of the defined subclasses\. This makes it easier to reason about your code and can help to reduce the risk of bugs\.
  * Another advantage of sealed classes is that they can make it easier to write code that  __handles different states in a consistent way__ \. For example\, you can use a when expression to handle each of the different states\, and the Kotlin compiler will ensure that you have covered all of the possible states\. This can make it easier to write correct code and can save you time and effort\.
* Cons:
  * However\, sealed classes also have some drawbacks\. One of the main drawbacks is that they can be  __more verbose__  than other options\, especially if you have a large number of states\. Defining a sealed class and all of its subclasses can take more code than using other options\, such as data classes or enums\.

# Comparing sealed vs data vs enum classes

Sealed classes are best for situations where you need to define a fixed set of possible states and want to ensure that your code is correct and easy to understand\.

Data classes are better for situations where you just need to hold simple data and don’t need any complex logic\.

// Using a sealed class

sealed class AppState \{

object Loading : AppState\(\)

data class Success\(val data: Data\) : AppState\(\)

data class Error\(val message: String\, val stackTrace: String\) : AppState\(\)

\}

// Using a data class

data class AppState\(val state: String\, val data: Data? = null\, val message: String? = null\)

// Using an enum

enum class AppState \{

LOADING\,

SUCCESS\,

ERROR

\}

# Pro/Con Data Classes

* Pros
  * One of the main advantages of data classes is that they are  __concise and easy to use__ \. Data classes are especially useful when you just need to hold a simple data structure and don’t need any complex logic\. They allow you to define the data you need in a single line of code and provide automatically generated methods for accessing and modifying that data\.
  * Another advantage of data classes is that they can be  __more flexible than sealed classes__ \. Because data classes don’t have any restrictions on where they can be subclassed\, you can define them in one file and use them in another without any problems\. This can be useful if you need to share data between different parts of your codebase\.
* Cons:
  * However\, data classes also have some drawbacks\. One of the main drawbacks is that they  __don’t provide the same level of type safety__  as sealed classes\. Because data classes can be subclassed anywhere\, it’s possible for other code to define additional subclasses that you aren’t aware of\. This can make it harder to reason about your code and can increase the risk of bugs\.

# Navigation Bar

[https://itnext\.io/navigation\-bar\-bottom\-app\-bar\-in\-jetpack\-compose\-with\-material\-3\-c57ae317bd00](https://itnext.io/navigation-bar-bottom-app-bar-in-jetpack-compose-with-material-3-c57ae317bd00)

Let's build a navigation bar\, similar to the one in the article above\, but using Voyager navigation\.

# Misc Info

# MongoDb

[https://www\.mongodb\.com/developer/products/realm/getting\-started\-kmm\-flexiable\-sync/\#building\-a\-more\-complex\-app](https://www.mongodb.com/developer/products/realm/getting-started-kmm-flexiable-sync/#building-a-more-complex-app)

# List of items

Need to import the right thing

import androidx\.compose\.foundation\.lazy\.items

@Composable

fun ListContent\(onItemClick: \(String\) \-> Unit\) \{

val items = remember \{ List\(100\) \{ "Item $it" \} \}

LazyColumn \{

items\(items\) \{ item \->

Text\(

text = item\,

modifier = Modifier

\.clickable \{ onItemClick\(item\) \}

\.fillMaxWidth\(\)

\.padding\(16\.dp\)

\)

\}

\}

\}

# Mutable List

[https://medium\.com/geekculture/add\-remove\-in\-lazycolumn\-list\-aka\-recyclerview\-jetpack\-compose\-7c4a2464fc9f](https://medium.com/geekculture/add-remove-in-lazycolumn-list-aka-recyclerview-jetpack-compose-7c4a2464fc9f)

Caution: Using mutable objects such as ArrayList\<T> or mutableListOf\(\) as state in Compose causes your users to see incorrect or stale data in your app\. Mutable objects that are not observable\, such as ArrayList or a mutable data class\, are not observable by Compose and don't trigger a recomposition when they change\. Instead of using non\-observable mutable objects\, the recommendation is to use an observable data holder such as State\<List<T>> and the immutable listOf\(\)\.

# Layout Inspector

[https://developer\.android\.com/jetpack/compose/tooling/layout\-inspector](https://developer.android.com/jetpack/compose/tooling/layout-inspector)

# Grids (LazyGrid)

[https://developer\.android\.com/jetpack/compose/lists](https://developer.android.com/jetpack/compose/lists)

# protected

* protected visibility is available as in Java for members of a class
  * protected means that the member is visible inside that class AND that it is also visible in subclasses\.

# More on Forms

[https://www\.section\.io/engineering\-education/jetpack\-compose\-forms/](https://www.section.io/engineering-education/jetpack-compose-forms/)

# Kotlin Koans

* For small exercises focused on Kotlin language\,
  * [https://play\.kotlinlang\.org/koans/overview](https://play.kotlinlang.org/koans/overview)

# Snackbar

* Side\-effects
  * [https://developer\.android\.com/jetpack/compose/side\-effects](https://developer.android.com/jetpack/compose/side-effects)
* [https://medium\.com/@jurajkunier/how\-to\-show\-snackbar\-in\-jetpack\-compose\-3f2d81891f87](https://medium.com/@jurajkunier/how-to-show-snackbar-in-jetpack-compose-3f2d81891f87)
* [https://developer\.android\.com/reference/kotlin/androidx/compose/material3/SnackbarHostState](https://developer.android.com/reference/kotlin/androidx/compose/material3/SnackbarHostState)
* [https://www\.devbitsandbytes\.com/configuring\-snackbar\-jetpack\-compose\-using\-scaffold\-with\-bottom\-navigation/](https://www.devbitsandbytes.com/configuring-snackbar-jetpack-compose-using-scaffold-with-bottom-navigation/)
* [https://developer\.android\.com/jetpack/compose/layouts/material](https://developer.android.com/jetpack/compose/layouts/material)

# More on Text Styling

[https://semicolonspace\.com/jetpack\-compose\-text/](https://semicolonspace.com/jetpack-compose-text/)

# Enum classes

[https://blog\.logrocket\.com/kotlin\-enum\-classes\-complete\-guide/](https://blog.logrocket.com/kotlin-enum-classes-complete-guide/)

[https://kotlinlang\.org/docs/enum\-classes\.html](https://kotlinlang.org/docs/enum-classes.html)

# Misc Kotlin

* Returning multiple values from functions
  * [https://www\.baeldung\.com/kotlin/returning\-multiple\-values](https://www.baeldung.com/kotlin/returning-multiple-values)
* Destructuring declarations
  * [https://www\.tutorialspoint\.com/kotlin/kotlin\_destructuring\_declarations\.htm](https://www.tutorialspoint.com/kotlin/kotlin_destructuring_declarations.htm)
* Concurrency and coroutines
  * [https://kotlinlang\.org/docs/multiplatform\-mobile\-concurrency\-and\-coroutines\.html\#multithreaded\-coroutines](https://kotlinlang.org/docs/multiplatform-mobile-concurrency-and-coroutines.html#multithreaded-coroutines)
* Architecture
  * [https://proandroiddev\.com/building\-modern\-apps\-using\-the\-android\-architecture\-guidelines\-3238fff96f14](https://proandroiddev.com/building-modern-apps-using-the-android-architecture-guidelines-3238fff96f14)
* Misc
  * [https://proandroiddev\.com/zero\-to\-hero\-in\-kmm\-with\-compose\-and\-swiftui\-d8951f7d80b7](https://proandroiddev.com/zero-to-hero-in-kmm-with-compose-and-swiftui-d8951f7d80b7)
* Delegated Properties
  * [https://kotlinlang\.org/docs/delegated\-properties\.html\#delegating\-to\-another\-property](https://kotlinlang.org/docs/delegated-properties.html#delegating-to-another-property)

# Misc Compose Multiplatform

* Tutorials
  * [https://github\.com/JetBrains/compose\-multiplatform/tree/master/tutorials/Image\_And\_Icons\_Manipulations\#loading\-images\-from\-device\-storage\-or\-network\-asynchronously](https://github.com/JetBrains/compose-multiplatform/tree/master/tutorials/Image_And_Icons_Manipulations#loading-images-from-device-storage-or-network-asynchronously)

# Compose Multiplatform Examples

* [https://github\.com/JetBrains/compose\-multiplatform/blob/master/examples/README\.md](https://github.com/JetBrains/compose-multiplatform/blob/master/examples/README.md)
* Kotlin Multiplatform Example
  * [https://github\.com/android/kotlin\-multiplatform\-samples](https://github.com/android/kotlin-multiplatform-samples)
* Room with a View exercise
  * [https://developer\.android\.com/codelabs/android\-room\-with\-a\-view\-kotlin\#0](https://developer.android.com/codelabs/android-room-with-a-view-kotlin#0)

# Pokedex app in Compose Multiplatform

* Interesting application that may have useful capabilities to draw inspiration from
  * [https://www\.reddit\.com/r/Kotlin/comments/11pph1p/kotlin\_multiplatform\_app\_with\_shared\_ui\_for/](https://www.reddit.com/r/Kotlin/comments/11pph1p/kotlin_multiplatform_app_with_shared_ui_for/)
  * [https://github\.com/MohamedRejeb/Pokedex/blob/main/shared/src/commonMain/kotlin/com/mocoding/pokedex/ui/comingsoon/AsyncImage\.kt\#L18](https://github.com/MohamedRejeb/Pokedex/blob/main/shared/src/commonMain/kotlin/com/mocoding/pokedex/ui/comingsoon/AsyncImage.kt#L18)

# Nice link on State

[https://www\.kodeco\.com/30172122\-managing\-state\-in\-jetpack\-compose](https://www.kodeco.com/30172122-managing-state-in-jetpack-compose)

# More on Hoisted State

[https://developer\.android\.com/jetpack/compose/state](https://developer.android.com/jetpack/compose/state)

State that is hoisted this way has some important properties:

Single source of truth: By moving state instead of duplicating it\, we're ensuring there's only one source of truth\. This helps avoid bugs\.

Encapsulated: Only stateful composables can modify their state\. It's completely internal\.

Shareable: Hoisted state can be shared with multiple composables\. If you wanted to read name in a different composable\, hoisting would allow you to do that\.

Interceptable: callers to the stateless composables can decide to ignore or modify events before changing the state\.

Decoupled: the state for the stateless ExpandingCard may be stored anywhere\. For example\, it's now possible to move name into a ViewModel\.

