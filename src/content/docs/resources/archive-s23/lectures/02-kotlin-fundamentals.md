---
title: Kotlin Fundamentals
description: kotlin fundamentals
---

Kotlin Basics, continued:

Imperative programming:

- Strings
- Arrays
- Lists
- When

Functional programming:

- Loops
- Ranges
- Lambda functions
- .map, .filter, .repeat

Object Oriented programming:

- Classes
- Constructors
- Inheritance
- Null safety
- Data classes

## Imperative programming in Kotlin

### Strings

#### Manipulation

Access string characters using array notation

```kotlin
name = "Jane"
println(name[0]) // output: 'J'
```

#### Creation

Can use triple quotes to assigned any arbitrary text

```kotlin
val text = """
  var age = 5
  // This is a comment
"""
println(text)   // output: all literal characters placed between the """ delimiters
```

#### Interpolation

String templates start with a `$` and can be any value or expression in `{ }`

```kotlin
val name = "Ginger"
println("$name.length is ${name.length} ")
println("Computed number is ${name.length * 2 + 1}")

// output
> Ginger.length is 6
> Computed number is 13
```

#### Comparison

Can use == to compare strings (yay!) This is like .equals() in Java
Also .equals(), .compareTo(), indexOf()
.upperCase(), .lowerCase() and many more
Can also use === (triple equals) to check if two variables are pointing to the same object (i.e., this is like == in Java).

### Arrays

#### Explicit/implicit types

Implicit type declaration

```kotlin
val nums = arrayOf(1, 2, 3, 4) //implicit type declaration
```

Explicit type declaration

```kotlin
val nums = intArrayOf(1, 2, 3, 4)
val nums = arrayOf<Int>(1, 2, 3, 4)
```

#### Initialization

Create an array with a set of default values

```kotlin
var nums = Array<Int>(4, { 0 })
var nums = IntArray(4, { 0 })
var nums = IntArray(4, { it }) // keyword it (short for "iterator")
var nums = IntArray(4, { it + 1})
```

Create an array with mixed types

```kotlin
var nums = arrayOf(2, "s", 4.0,2F)
nums.size   // Get size of array using size property
```

#### Collections

Several types of collections (List, Set, Map, etc.)

- [https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/)
- [https://www.geeksforgeeks.org/kotlin-collections/](https://www.geeksforgeeks.org/kotlin-collections/)
  Create a list using listOf():
- [https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/list-of.html](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/list-of.html)
  ArrayList: arrayListOf()
- [https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/array-list-of.html](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/array-list-of.html)

### Loops

#### Kotlin `for-in` vs Java `for`

In Kotlin, there is no traditional `for` loop (e.g., no counting over index values…)
Instead, a `for – in` loop is used.

- Kotlin just calls it a **for** loop. But for – in helps distinguish it from the "usual"
  This is used to iterate over elements in a collection

![](./img/Multiplatform_Day_02_after21.png)

#### Ranges

Kotlin allows you to explicitly express a range of values using the `..` notation

Most often used with for – in loop:

```kotlin
for (x in 1..10) {
}
```

Can use a step function:

```kotlin
for (x in 1..10 step 2) {
}
```

A range may be over characters:

```kotlin
for (c in 'a'..'x') {
  println(c)
}
```

Use **downTo** to specify a range that is decreasing

```kotlin
for (x in 10 downTo 1) {
  // ...
}
```

You can also check whether a value is in a given range using an if statement

```kotlin
if (y in 1..100) {
  // ...
}
```

More information:

- [https://www.baeldung.com/kotlin/ranges](https://www.baeldung.com/kotlin/ranges)
- [https://www.w3schools.com/KOTLIN/kotlin_ranges.php](https://www.w3schools.com/KOTLIN/kotlin_ranges.php)

### Conditionals

#### Kotlin `when` vs Java `switch`

Kotlin does not have a switch statement, but does provide a **when** statement that behaves similarly:

```kotlin
val option = 4
val result = when (option) {
  1 -> "Choice 1"
  2,4 -> "Choice 2 or 4"
  3 -> "Choice 3"
  else -> "Invalid Choice"
}
println(result)   // output: "Choice 2 or 4"
```

Like `switch` in Java, the Kotlin `when` statement can replace branching `if / else-if / else` expressions.

**Unlike** `switch`, you do **not** need a `break` between cases.

More information:

- [Kotlin `when` (w3schools)](https://www.w3schools.com/KOTLIN/kotlin_when.php),
- [replacing switch with when tutorial](https://blog.mindorks.com/replace-switch-with-when-in-kotlin/)

## Functional Programming Techniques

Kotlin allows you to use a variety of functional programming operations on collections

Two common ones are `.filter` and `.map`

- Many others exist
- These exist in other languages such as JavaScript and Swift

The syntax in Kotlin is to call the function on an object and provide it with a lambda expression in curly braces. These operations may be chained together:

```kotlin
val list = listOf(1,2,3,4,5)
// Filter by given predicate and return the list of elements that match the predicate
val selecteditems = list.filter { it < 4 }
// Apply the same operation to each element of the list and return the new list
val transformedItems = list.map { it*it }
// Chain operations together
val selectedAndTransformedItems = list.filter { it < 4 }.map { it*it }
```

### `repeat` loop

Since we can't easily use a for loop for counting, Kotlin provides a simple `.repeat` function that loops a fixed number of times.

It is a function followed by a lambda. Repeats the loop the given `number` of times.

```kotlin
repeat(number) {}
```

[repeat (Kotlinlang docs)](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/repeat.html)

Greets with an index

```kotlin
repeat(3) { index -> println("Hello with index $index") }
```

### Lambda Expressions

Lambda expressions are functions that do not have a name which are defined without the _fun_ keyword

- Used immediately as an expression
- Can help your code be more concise
  They are essentially code inside of curly braces
- { body_of_function }
  They may take variables as arguments
- { argument_list -> body_of_function}
  Special keyword "it"
- Implicit name of a single parameter
- We'll see this later in .filter and .map
  [https://student.cs.uwaterloo.ca/~cs346/1231/learning-kotlin/functional/index.html](https://student.cs.uwaterloo.ca/~cs346/1231/learning-kotlin/functional/index.html)
  [https://www.geeksforgeeks.org/kotlin-lambdas-expressions-and-anonymous-functions/](https://www.geeksforgeeks.org/kotlin-lambdas-expressions-and-anonymous-functions/)
  [https://www.baeldung.com/kotlin/lambda-expressions](https://www.baeldung.com/kotlin/lambda-expressions)

### Store a function in a variable

Use the :: notation to store a function in a variable

```kotlin
fun main() {
  val trickFunction = ::trick
}

fun trick() {
  println("No treats!")
}
```

Or, use a lambda expression to define the function. Store that lambda in a variable.

```kotlin
fun main() {
  val trickFunction = trick
  trick()
  trickFunction()
}

val trick = {
  println("No treats!")
}
```

More information: [Kotlin compose (android tutorials)](https://developer.android.com/codelabs/basic-android-kotlin-compose-function-types-and-lambda#2)

## OOP in Kotlin

A basic class in Kotlin is similar to one in Java

```kotlin
class Car {
    var brand = ""
    var model = ""
    var year = 0
    fun updateModel(newmodel: String){...}
        ...
    }
```

### Terminology

- "Fields" (from Java) are generally called **properties**
- "Methods" (from Java) are called **class functions**
- visibility is **public** by default

:::tip
`public` (default) - visible across entire project

`private` – only visible in that file

`internal` – visible within same module

`protected` - visible inside that class AND that it is also visible in subclasses

[https://www.baeldung.com/kotlin/visibility-modifiers](https://www.baeldung.com/kotlin/visibility-modifiers)
:::

### Constructors

For a simple class, we can just define a constructor

We don't have to explicitly define all the fields, etc.

```kotlin
class Car(var brand: String, var model: String, var year: Int)
```

Constructor arguments can have default values:

```kotlin
class Car(var brand: String,
          var model: String = "Unknown",
          var year:Int = 2022)
```

When calling a constructor in Kotlin, we don't use the 'new' keyword:

```kotlin
val c1 = Car("Ford", "Mustang", 1969)
```

Multiple constructors are possible (self-study).

#### Sample class with constructor & functions

```kotlin
class Car(var brand: String, var model: String, var year: Int) {
    // Class function
    fun drive() {
        println("Wrooom!")
    }
    // Class function with parameters
    fun speed(maxSpeed: Int) {
        println("Max speed is: " + maxSpeed)
    }
}
```

### Getter/Setter

Unlike java the getter and setter for a property of a class simply uses the name of the property; i.e. not `getX()` `setX()` etc..

```kotlin
val car = Car("Honda", "Camry", 2023)
println(car.brand)      // Access with .<property name>
car.model = "Civic"     // Set with .<property name>
println(civis.name)
```

#### No `static`

Kotlin does not have the `static` keyword.

If you want to create the equivalent to a static method in Kotlin, you can use [companion objects](#).

Companion objects are the singleton objects whose properties and functions are tied to a class but not to the instance of that class. Hence, we can access them just like a static method of the class.

Note that only one companion class is allowed per class. More than one companion object per class will lead to a runtime error in Kotlin.

```kotlin
class MyClass {
    companion object{
        fun myStaticMethod(): String{
            return "This method can be called without object"
        }
    }
}

fun main(args: Array<String>) {
    println(MyClass.myStaticMethod())
}
```

More information: [Kotlin: static member fields and singletons](https://medium.com/@waqarul/kotlin-static-member-fields-and-singletons-b79fd65aaf9b)

### Inheritance

To allow a class to be subclassed, it must be defined with the keyword `open`. A class extends another using the colon syntax below:

```kotlin
// Superclass
open class MyParentClass {
    val x = 5
}
// Subclass
class MyChildClass: MyParentClass() {
    fun myFunction() {
        println(x) // x is now inherited from the superclass
    }
}
```

If the parent has constructor values, must also pass the appropriate constructor values when subclassing.

```kotlin
// Superclass
open class MyClass(var value:Int)

// Subclass
class SubClass(var value:Int, var otherValue:String): MyClass(value)
```

#### Overriding Functions

A function of a parent class cannot be overridden in a subclass unless the function in the parent is declared open.
The override keyword must also be used when defining the overridden function.

```kotlin
open class MyClass(var value:String) {
    open fun myFunction() {
        println(value)
    }
}

class SubClass(var value:String, var otherValue:String): MyClass(value) {
    override fun myFunction() {
        println(otherValue);
    }
}
```

Elsewhere:

```kotlin
val x = MyClass("Hi")
val y = SubClass("Hi", "Bye")
x.myFunction()
y.myFunction()
Should print out "Hi" then "Bye"
```

### Data classes

Kotlin offers different types of classes, e.g.,

- data classes
- enum classes
- sealed classes
  Data classes are a very useful concise way to define a class whose purpose is to store data.
- E.g., Similar to a "POJO" – plain old Java object or JavaBean
  [https://antonioleiva.com/data-classes-kotlin/](https://antonioleiva.com/data-classes-kotlin/)

![](./img/Multiplatform_Day_02_after22.png)

![](./img/Multiplatform_Day_02_after23.png)

![](./img/Multiplatform_Day_02_after24.png)

![](./img/Multiplatform_Day_02_after25.png)

## Null safety

Kotlin is designed as a null safe language. By default, variables in Kotlin cannot be set to `null`.

Instead, there is a [special nullable type](https://medium.com/mobile-app-development-publication/swift-optional-and-kotlin-nullable-a-comparison-773227f277c3) which allows you to use `null` subject to certain rules.

### `null` assignment rules

```kotlin
var str: String = "xyz"
str = null // Compile-time error
```

vs.

```kotlin
var str: String? = "xyz"
str = null // OK
```

### Nullable parameter handling

```kotlin
fun getLength(str: String?): Int? {
    return str.length // Compile-time error
}
```

Since str could be `null`, checking its length opens you up to the possibility of a null pointer error. Instead:

```kotlin
fun getLength(str: String): Int? {
    return str.length // OK
}
```

We can also **explicitly** check for null ("old-school" way)

```kotlin
fun getLength(str: String?): Int? {
    if (str != null) {
        return str.length // OK
    }
    return 0
}
```

Or can use the [safe call operator](#) `?`.

```kotlin
fun getLength(str: String?): Int? {
    return str?.length // OK
}
```

This returns null if the given _str_ string is null

### Java vs. Kotlin Example

Java

```kotlin
public ZipCode getZipCode(User user) {
  if (user != null) {
    if (user.getAddress() != null)
      return user.getAddress().getZipCode();
    }
    return null;
  }
}
```

Kotlin

```kotlin
fun getZipCode(user: User?): ZipCode? {
  return user?.address?.zipCode;
}
```

Or, even more concisely

```kotlin
fun getZipCode(user: User?): ZipCode? = user?.address?.zipCode
```

## Exercises

### Imperative programming

Spend 20 minutes creating and calling different functions that use parameters, variables, types, strings, arrays and lists in different ways.

- Goal: Become familiar with the new syntax
  Explore [https://www.w3schools.com/KOTLIN/kotlin_examples.php](https://www.w3schools.com/KOTLIN/kotlin_examples.php)
- Up to "Kotlin For Loop" (skip When)
  CodeLabs to Explore:
- Functions: [https://developer.android.com/codelabs/basic-android-kotlin-compose-functions##0](https://developer.android.com/codelabs/basic-android-kotlin-compose-functions#0)
- Collections: [https://developer.android.com/codelabs/basic-android-kotlin-compose-collections##0](https://developer.android.com/codelabs/basic-android-kotlin-compose-collections#0)
  - Up to end of Lists

### Functional programming

Spend 20 minutes exploring when, ranges, lambda functions, functional programming, etc. in detail

- Goal: Become familiar with the new syntax
  Explore [https://www.w3schools.com/KOTLIN/kotlin_examples.php](https://www.w3schools.com/KOTLIN/kotlin_examples.php)
- When and Ranges
  CodeLab to Explore:
- Lambdas: [https://developer.android.com/codelabs/basic-android-kotlin-compose-function-types-and-lambda##3](https://developer.android.com/codelabs/basic-android-kotlin-compose-function-types-and-lambda#3)

### Object Oriented programming

Spend 20 minutes exploring Kotlin OOP in detail

- Goal: Become familiar with the new syntax
  Explore [https://www.w3schools.com/KOTLIN/kotlin_examples.php](https://www.w3schools.com/KOTLIN/kotlin_examples.php)
- Classes section
  Details at:
- [https://docs.google.com/presentation/d/1FSZwOeSwL-XNkMXnKDy-YPMEpCPKyb29RlpekSzzJDY/edit##slide=id.gb9961b3fa0_0_433](https://docs.google.com/presentation/d/1FSZwOeSwL-XNkMXnKDy-YPMEpCPKyb29RlpekSzzJDY/edit#slide=id.gb9961b3fa0_0_433)
  CodeLab to Explore:
- [https://developer.android.com/codelabs/basic-android-kotlin-compose-classes-and-objects##0](https://developer.android.com/codelabs/basic-android-kotlin-compose-classes-and-objects#0)
