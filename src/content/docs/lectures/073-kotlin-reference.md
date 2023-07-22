---
title: Kotlin Reference
description: A guide in my new Starlight docs site.
---

## General

### Kotlin Koans

For small exercises focused on Kotlin language,

- [https://play.kotlinlang.org/koans/overview](https://play.kotlinlang.org/koans/overview)

### More on Text Styling

[https://semicolonspace.com/jetpack-compose-text/](https://semicolonspace.com/jetpack-compose-text/)

### Enum classes

[https://blog.logrocket.com/kotlin-enum-classes-complete-guide/](https://blog.logrocket.com/kotlin-enum-classes-complete-guide/)

[https://kotlinlang.org/docs/enum-classes.html](https://kotlinlang.org/docs/enum-classes.html)

### Returning multiple values from functions

- [https://www.baeldung.com/kotlin/returning-multiple-values](https://www.baeldung.com/kotlin/returning-multiple-values)


## Components

### List of items

```kotlin
import androidx.compose.foundation.lazy.items
@Composable
fun ListContent(onItemClick: (String) -> Unit) {
    val items = remember { List(100) { "Item $it" } }
    LazyColumn {
        items(items) { 
            item -> Text(text = item,
                         modifier = Modifier.clickable{onItemClick(item)}
                                            .fillMaxWidth()
                                            .padding(16.dp))
        }
    }
}
```

### Mutable List

[https://medium.com/geekculture/add-remove-in-lazycolumn-list-aka-recyclerview-jetpack-compose-7c4a2464fc9f](https://medium.com/geekculture/add-remove-in-lazycolumn-list-aka-recyclerview-jetpack-compose-7c4a2464fc9f)

Caution: Using mutable objects such as `ArrayList<T>` or `mutableListOf()` as state in Compose causes your users to see incorrect or stale data in your app. Mutable objects that are not observable, such as `ArrayList` or a mutable data class, are not observable by Compose and don't trigger a recomposition when they change. Instead of using non-observable mutable objects, the recommendation is to use an observable data holder such as `State<List<T>>` and the immutable `listOf().`

### More on Forms

[https://www.section.io/engineering-education/jetpack-compose-forms/](https://www.section.io/engineering-education/jetpack-compose-forms/)

### Snackbar

Side-effects

- [https://developer.android.com/jetpack/compose/side-effects](https://developer.android.com/jetpack/compose/side-effects)

[https://medium.com/@jurajkunier/how-to-show-snackbar-in-jetpack-compose-3f2d81891f87](https://medium.com/@jurajkunier/how-to-show-snackbar-in-jetpack-compose-3f2d81891f87)

[https://developer.android.com/reference/kotlin/androidx/compose/material3/SnackbarHostState](https://developer.android.com/reference/kotlin/androidx/compose/material3/SnackbarHostState)

[https://www.devbitsandbytes.com/configuring-snackbar-jetpack-compose-using-scaffold-with-bottom-navigation/](https://www.devbitsandbytes.com/configuring-snackbar-jetpack-compose-using-scaffold-with-bottom-navigation/)

[https://developer.android.com/jetpack/compose/layouts/material](https://developer.android.com/jetpack/compose/layouts/material)

## Layout

### Layout Inspector

[https://developer.android.com/jetpack/compose/tooling/layout-inspector](https://developer.android.com/jetpack/compose/tooling/layout-inspector)

### Grids (LazyGrid)

[https://developer.android.com/jetpack/compose/lists](https://developer.android.com/jetpack/compose/lists)

## Advanced techniques

### Destructuring declarations

- [https://www.tutorialspoint.com/kotlin/kotlin_destructuring_declarations.htm](https://www.tutorialspoint.com/kotlin/kotlin_destructuring_declarations.htm)

### Concurrency and coroutines

- [https://kotlinlang.org/docs/multiplatform-mobile-concurrency-and-coroutines.html##multithreaded-coroutines](https://kotlinlang.org/docs/multiplatform-mobile-concurrency-and-coroutines.html#multithreaded-coroutines)

### Architecture

- [https://proandroiddev.com/building-modern-apps-using-the-android-architecture-guidelines-3238fff96f14](https://proandroiddev.com/building-modern-apps-using-the-android-architecture-guidelines-3238fff96f14)

### Delegated Properties

- [https://kotlinlang.org/docs/delegated-properties.html##delegating-to-another-property](https://kotlinlang.org/docs/delegated-properties.html#delegating-to-another-property)

## Compose Multiplatform

### Tutorials

- [https://github.com/JetBrains/compose-multiplatform/tree/master/tutorials/Image_And_Icons_Manipulations##loading-images-from-device-storage-or-network-asynchronously](https://github.com/JetBrains/compose-multiplatform/tree/master/tutorials/Image_And_Icons_Manipulations#loading-images-from-device-storage-or-network-asynchronously)

### Examples

[https://github.com/JetBrains/compose-multiplatform/blob/master/examples/README.md](https://github.com/JetBrains/compose-multiplatform/blob/master/examples/README.md)

Kotlin Multiplatform Example

- [https://github.com/android/kotlin-multiplatform-samples](https://github.com/android/kotlin-multiplatform-samples)

Room with a View exercise

- [https://developer.android.com/codelabs/android-room-with-a-view-kotlin##0](https://developer.android.com/codelabs/android-room-with-a-view-kotlin#0)

### Pokedex app in Compose Multiplatform

Interesting application that may have useful capabilities to draw inspiration from

- [https://www.reddit.com/r/Kotlin/comments/11pph1p/kotlin_multiplatform_app_with_shared_ui_for/](https://www.reddit.com/r/Kotlin/comments/11pph1p/kotlin_multiplatform_app_with_shared_ui_for/)
- [https://github.com/MohamedRejeb/Pokedex/blob/main/shared/src/commonMain/kotlin/com/mocoding/pokedex/ui/comingsoon/AsyncImage.kt##L18](https://github.com/MohamedRejeb/Pokedex/blob/main/shared/src/commonMain/kotlin/com/mocoding/pokedex/ui/comingsoon/AsyncImage.kt#L18)

### Nice link on State

[https://www.kodeco.com/30172122-managing-state-in-jetpack-compose](https://www.kodeco.com/30172122-managing-state-in-jetpack-compose)

### More on Hoisted State

[https://developer.android.com/jetpack/compose/state](https://developer.android.com/jetpack/compose/state)

State that is hoisted this way has some important properties:

Single source of truth: By moving state instead of duplicating it, we're ensuring there's only one source of truth. This helps avoid bugs.

Encapsulated: Only stateful composables can modify their state. It's completely internal.

Shareable: Hoisted state can be shared with multiple composables. If you wanted to read name in a different composable, hoisting would allow you to do that.

Interceptable: callers to the stateless composables can decide to ignore or modify events before changing the state.

Decoupled: the state for the stateless ExpandingCard may be stored anywhere. For example, it's now possible to move name into a ViewModel.

