---
title: Lab 4 (Compose UI)
description: compose ui
---

Worth 0.5%
 
Play around with different display variations
 
  - Colors
  - Color Scheme
  - Text Formatting
  - Scaling
  - Layout using Column, Row, Box
  - Scaffold Layout
  - Different types of buttons
  - Etc.
 
You don't have to do this codelab, but it has some good examples to consult:
 
  - [https://developer.android.com/codelabs/basic-android-kotlin-compose-add-images##0](https://developer.android.com/codelabs/basic-android-kotlin-compose-add-images#0)
 
When you are done, take one or more screenshots showing what you built.
 
 
Zip together all the screenshots and upload to Lea
 

### Examples from Class: BottomBar with Icons

```kotlin
bottomBar = {
  BottomAppBar {
    IconButton(onClick = {}) {
      Icon(Icons.Filled.Menu, contentDescription = "Description.")
    }
    IconButton(onClick = {}) {
      Icon(Icons.Filled.AccountCircle, contentDescription = "Description.")
    }
    IconButton(onClick = {}) {
      Icon(Icons.Filled.AccountBox, contentDescription = "Description.")
    }
    IconButton(onClick = {}) {
      Icon(Icons.Filled.Call, contentDescription = "Description.")
    }
    IconButton(onClick = {}) {
      Icon(Icons.Filled.Add, contentDescription = "Description.")
    }
  }
}
```

### Examples from Class: Checkboxes

```kotlin
items(ingredients.size) { 
  index -> val isChecked = checkedState[index]
  Row {
    Checkbox(
      checked = isChecked,
      onCheckedChange = { 
        checked -> checkedState[index] = checked
        if (checked) {
          selectedIngredients.add(ingredients[index])
        } else {
          selectedIngredients.remove(ingredients[index])
        }
      }
    )
    Text(
      text = ingredients[index],
      style = MaterialTheme.typography.body1,
      modifier = Modifier.padding(start = 16.dp)
    )
  }
}
```


