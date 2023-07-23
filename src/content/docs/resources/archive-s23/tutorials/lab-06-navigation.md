---
title: Lab 5 (Navigation)
description: assignment 2 setup
---

Similar to what we did with the earlier template, go to the following GitHub site

- [https://github.com/AppKickstarter/KMPStarterOS](https://github.com/AppKickstarter/KMPStarterOS)
- Click "Use this Template"
- Select "Create a new repository"
- Get the code clone link from your new repository in your GitHub account
- Start a new project in Android Studio.

1. Create a 'main' folder inside their package.

2. Copy over your assignment components

3. Add a package line to the top of each of those files

- package com.lduboscq.appkickstarter.main
- Or, if the file says @file:OptIn…, then put the package line AFTER that.

4. Copy the theme folder from your old project to the ui folder in the new folder

- Add a package line to the top of each file in the theme folder
- package com.lduboscq.appkickstarter.ui.theme

5. For the main composable (not in App.kt, but the one that App.kt called before), convert it to a "Screen" using the following format:

```kotlin
internal class MainScreen : Screen {
@OptIn(ExperimentalResourceApi::class)
@Composable
override fun Content() {
```

- Make sure to call it MainScreen for consistency with the class.
- Make sure the composable inside is called Content

6. Overwrite the Image.kt file in the folder ui with the following:

```kotlin
package com.lduboscq.appkickstarter.ui
import androidx.compose.foundation.Image
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.DefaultAlpha
import androidx.compose.ui.layout.ContentScale
import com.seiko.imageloader.LocalImageLoader
import com.seiko.imageloader.rememberAsyncImagePainter

@Composable
internal fun Image(url: String, modifier: Modifier = Modifier,
  contentDescription: String? = null,
  alignment: Alignment = Alignment.Center,
  contentScale: ContentScale = ContentScale.Fit,
  alpha: Float = DefaultAlpha,
  colorFilter: ColorFilter? = null) 
{
  CompositionLocalProvider(LocalImageLoader provides generateImageLoader()) {
    Image(
      painter = rememberAsyncImagePainter(url),
      contentDescription = contentDescription,
      modifier = modifier,
      alignment = alignment,
      contentScale = contentScale,
      alpha = alpha,
      colorFilter = colorFilter
    )
  }
}
```

## Images continued

In each file where you used "Image", remove the relevant import line. Add the following import line instead:

- import com.lduboscq.appkickstarter.ui.Image

For each call to Image, replace painter="…" with url="…"

- Find a url of an image to put there.
- The url should be an image format (e.g., .jpg) not a .html.

## Finally, update MainApp

Update MainApp so its function looks like the following. Add the appropriate import lines.

- public fun MainApp() {
- AppTheme {
- Navigator(MainScreen()) { navigator ->
- SlideTransition(navigator)
- }
- }
- }

## Navigate.push put a new Screen on the Stack(This lets the device's back-button work with the Screens)

## Get setup on Macs in Lab

Clone a copy of the project there too.

