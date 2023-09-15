*These notes are, in part, adapted from [Lesson 3: Classes and Objects](https://developer.android.com/courses/pathways/android-development-with-kotlin-3) by [Google Developers](https://developer.android.com/). There may be some mistakes -- let me know if there is something here that doesn't make sense.*

## About this lesson

* Lesson 3: Classes and objects
  * [Classes]
  * [Inheritance]
  * [Extension functions]
  * [Special classes]
  * [Organizing your code]
  * [Summary]

---

In this lesson, we’re going to be talking about object oriented programming concepts in Kotlin including classes and inheritance. You may already know about object oriented programming from other languages, so some of these concepts may be familiar to you. We’ll also cover unique aspects of the Kotlin language like extension functions and special classes, which make it easier for you to write your code as a developer. 

## Classes

## Class

Object instances

Classes are blueprints for objects

Classes define methods that operate on their object instances

---

Classes are blueprints for objects. Each class can contain properties and methods to operate on the object. You can have different classes for different types of objects. In this example, we have a class (or blueprint) for a House. From the blueprint, we can create actual House object instances. Each House object instance has all the fields and methods listed in the definition of the class.

The definition of a class is written in a Kotlin file. 


## Class versus object instance

House Class

Data

House color (String)

Number of windows (Int)

Is for sale (Boolean)

Behavior

updateColor()

putOnSale()

Object Instances

![](img/Lesson%203%20Classes%20and%20objects2.png)

![](img/Lesson%203%20Classes%20and%20objects3.png)

![](img/Lesson%203%20Classes%20and%20objects4.png)

---

The House class contains a blueprint of what goes into a House. It has properties like color (which is a String), number of windows (an Int), and whether or not the house is for sale (a Boolean).

The House class also contains methods like updating the house color or putting the house on sale.

We use the class to create object instances of the class. On the right are 3 different House object instances that have different attributes. They have different colors and one is even for sale.


## Define and use a class

Create New Object Instance

Class Definition

class  House {

val  color: String =  "white"

val  numberOfWindows: Int =  2

val  isForSale: Boolean =  false

fun  updateColor(newColor: String){...}

...

}

val  myHouse = House()

println(myHouse)

---

Transition: 1 click

Let’s look at the code for how to define and use a class. To define a class, use the keyword class followed by the name of the class, which is House in this case. Then use curly braces around the class body. Inside this class definition, we see 3 properties and 1 function.

Use the syntax on the right to create a new object instance of the House class. Use the class name followed by parentheses. In other languages, you might use the “new” keyword to create new object instances, but in Kotlin there is no “new” keyword. Another reason why Kotlin is a more concise language! 

Resource:
Classes and Inheritance

## Constructors

When a constructor is defined in the   class header,   it can contain:

No parameters

* Parameters
  * Not marked with   var   or   val   → copy exists only within scope of the constructor
* class B(x: Int)   
  * Marked   var   or   val   → copy   exists in all instances of the class
* class C(val y: Int)

---

Transition: 1 click

A class declaration consists of the class name, the class header (specifying its type parameters, the primary constructor, etc.) and the class body, surrounded by curly braces. Both the header and the body are optional; if the class has no body, curly braces can be omitted, as shown in the example above.. 

A class in Kotlin can have a primary constructor and one or more secondary constructors. The primary constructor is part of the class header: it appears after the class name (and optional type parameters).



## Constructor examples

class A

class B(x: Int)

class C(val y: Int)

val  aa = A()

val  bb = B( 12 )

println(bb.x)

=> compiler error unresolved reference

val  cc = C( 42 )

println(cc.y)

=> 42

---

These are different examples of how you can define constructors with or without parameters.

The constructor for class A has no parameters. 

The constructor for class B has 1 input parameter: x which is an Int. Because the parameter is not marked as a var or val, the variable x does not exist outside the scope of the constructor. Hence, if we create an object instance called bb, and we try to call the property x on it, we will get a compiler error. The property x does not exist on the object.

In the third case, we have a constructor for class C with 1 input parameter: a val called y. If you create an object instance called cc, you can access the property y which has the value of 42 in this case. 

To summarize, you can define the properties directly within the constructor, using var or val (as seen in the third example).

## Default parameters

Class instances can have default values.

Use default values to reduce the number of constructors needed

Default parameters can be mixed with required parameters

More concise (don’t need to have multiple constructor versions)

class   Box(  val   length: Int,    val    width:Int =    20   ,    val    height:Int =    40   )

val   box1 = Box(  100  ,   20  ,   40  )

val   box2 = Box(length =   100  )

val   box3 = Box(length =   100  , width =   20  , height =   40  )

---

Transition: 1 click

Similar to how we learned about default parameters in functions in Lesson 2, we can have default parameters for constructors. 

That means, parameters can have default values and don’t need to be specified when the object is initialized. If no default value is provided, then the parameter is required in the constructor. You can mix default and required parameters in a constructor. 

For this class declaration of Box, width and height have default values. No default value is provided for length, so specifying the length is required when creating a new Box object. Because these three parameters are marked with val, we know these are member variables of the Box class.

Underneath the class declaration, we have three examples of how you would create new Box objects. Even though they specify the constructor arguments in different ways, the three Box objects are equivalent.


## Primary constructor

Declare the primary constructor within the class header.

class  Circle (i: Int)  {

init {

...

}

}

This is technically equivalent to:

class  Circle {

constructor(i: Int) {

...

}

}

---

Transition: 1 click

For all examples we’ve seen so far, the constructor is within the class header. This is called the primary constructor. 

This syntax makes Kotlin more concise when it comes to defining classes.

Technically, the first code snippet is equivalent to the second one (which is more verbose). The second code snippet looks more like how you would define a class in another language, where the constructor is explicitly defined by itself. 

But in Kotlin, write your code according to the first code snippet. Notice the init block? Let's take a look at that.

## Initializer block

Any required initialization code is run in a special  init  block

Multiple init blocks are allowed

init blocks become the body of the primary constructor

---

In Kotlin, you can’t put any code inside a primary constructor, so put any initialization code in an init block - also known as an initializer block. You can have more than 1 init block in your class definition. The blocks just get executed in the order that they appear in the code. These init blocks essentially become the body of the primary constructor. 

## Initializer block example

Use the init keyword:

class  Square( val  side: Int) {

 init   {

println(side *  2 )

}

}

val  s = Square( 10 )

=> 20

---

In this example, we have a Square class where the primary constructor has 1 input parameter: the side length as an Int. We want to do some work in the constructor of the Square class, so we setup an init block. Within it, we have a println statement.

Outside of the class definition, we can create a new Square object instance with a side of 10. As soon as it is initialized, the init block is executed and the print statement gets printed to the output. 

## Multiple constructors

* Use the constructor keyword to define secondary constructors
* Secondary constructors must call:
  * The primary constructor using this keyword
  * Another secondary constructor that calls the primary constructor
* Secondary constructor body is not required

---

What if we need multiple constructors? In addition to the primary constructor, a class can have one or more secondary constructors. Use the constructor keyword to declare them.

A secondary constructor must call the primary constructor using the this keyword. Or it must call another secondary constructor that calls the primary constructor. 

Warning: Using multiple constructors leads to more code paths and issues with testing. Before writing a secondary constructor, consider whether a factory function would work instead, to keep the class definition clean.

Resource:
Classes and Inheritance


## Multiple constructors example

class   Circle(  val   radius:Double) {

       constructor   (name:String) :   this  (  1.0  )

       constructor   (diameter:Int) :   this  (diameter /   2.0  ) {

        println(  "in diameter constructor"  )

    }

      init   {

        println(  "Area:   ${  Math  .  PI   *   radius   *   radius  }  "  )

    }

}

val   c = Circle(  3  )

---

In the Circle class, we have a primary constructor (that takes a double radius value as input) and 2 secondary constructors. 

To define a secondary constructor, start with the constructor keyword followed by parameters, a colon, and a call to the default constructor with this (which takes the radius as input). For classes with multiple constructors like this one, the init block runs before any code in the secondary constructor. Hence, the println statement will be executed before any of the code within the secondary constructors. 

## Properties

Define properties in a class using val or var

Access these properties using  dot   .   notation with property name

Set these properties using  dot   .   notation with property name (only if declared a   var  )

---

Define properties in a class using val or var, as you learned earlier. Access these properties by using the object name followed by "." and the property name. If the property was declared a var, then you can also set the property using dot notation. You can’t modify an object’s property if it was declared a val. You will get an error that the val cannot be reassigned. 

## Person class with name property

class  Person(  var    name : String)

fun  main() {

val  person = Person( "Alex" )

println( person.name )                 Access with . <property name>

person.name  =  "Joey"                  Set with .<property name>

println(person.name)

}

---

In this example, we create a Person class with a name property. In the main function, create a Person object instance. Then access and set its name property with dot notation. Because name is a var, we can change the name property with the setter. If it was declared with a val in the constructor of the Person class, we would not be able to change it.

## Custom getters and setters

If you don’t want the default   get  /  set   behavior:

Override get() for a property

Override     set()     for a property (if defined as a   var  )

Format:     var   propertyName: DataType = initialValue

          get  () = ...

          set  (value) { 

           ...

 } 

---

If you don’t want the default get/set behavior for a property, then you can customize your own getter or setter for a property. Again, you can only override set() if the property was defined as var.

This is what the general format would look like for declaring a mutable property in a class. Declare it with var and then the property name. Use a colon followed by the data type. Then set it equal to an initial value (this can be an expression). Then you can optionally override the get() or set() function for the property. 

Resource:
Properties

## Custom getter

class  Person( val  firstName: String,  val  lastName:String) {

val  fullName:String

 get   ()   {

               return       "$firstName $lastName" 

        }

}

val   person = Person(  "John"  ,   "Doe"  )

println(  person.fullName  )

=> John Doe

---

Let’s look at an example in the Person class. Define a variable called fullName, with a custom getter function that combines the first and last name into a single String. You can access fullName like a property (using person.fullName in the example), and the get() function gets executed on the fly.

var  fullName:String = ""

get () = " $firstName $lastName "

 set   (value) {

           val    components = value.split(" ")

        firstName = components[   0   ]

        lastName = components[   1   ]

        field = value

    }

person.fullName =     "Jane Smith"

---

For that same property, you can also define a custom setter function that takes in a single string and splits it into first name and last name components. You can set fullName like a property, using person.fullName = <the new name>, which is “Jane Smith” in the example. The underlying set() function would get called.


## Member functions

* Classes can also contain functions
* Declare functions as shown in  Functions  in Lesson 2
  * fun keyword
  * Can have default or required parameters
  * Specify return type (if not Unit)

---

In addition to constructors and properties, classes can also have member functions. Declare functions according to the rules we discussed in "Functions" in Lesson 2. 

Resource:
Member Functions

## Inheritance

---

Classes are very useful, and you can receive even more benefit from them by inheriting properties and behavior from other classes. Let’s talk about inheritance in Kotlin next.

Kotlin has single-parent class inheritance

Each class has exactly one parent class, called a superclass

Each subclass inherits all members of its superclass including ones that the superclass itself has inherited

If you don't want to be limited by only inheriting a single class, you can define an interface since you can implement as many of those as you want.

---

Inheriting the properties and capabilities from parent class to child class is called Inheritance.

Kotlin has a single-parent class inheritance structure, should you need multiple class features to be inherited in your class, consider using Interfaces.

Resource:
Inheritance

## Interfaces

Provide a contract all implementing classes must adhere to

Can contain method signatures and property names

Can derive from other interfaces

Format:   interface  NameOfInterface { interfaceBody }

## Interface example

 interface   Shape {

fun  computeArea() : Double

}

class  Circle(val radius:Double)  : Shape  {

override   fun  computeArea() = Math.PI * radius * radius

}

val c = Circle(3.0)

println(c.computeArea())

=> 28.274333882308138

---

Transition: 1 click

We defined an interface called Shape that has a single function computeArea(). Any class that implements that interface must override the function as shown in the example with Circle.

This is how you would create a new Circle object instance, call its computeArea() method, and prints the result to the output.

## Extending classes

To extend a class:

Create a new class that uses an existing class as its core (subclass)

Add functionality to a class without creating a new one (extension functions)

## Creating a new class

Kotlin classes by default are not subclassable

Use open keyword to allow subclassing

Properties and functions are redefined with the override keyword

## Classes are final by default

Declare a class

class  A

Try to subclass A

class  B : A

=>Error: A is final and cannot be inherited from

---

In Kotlin, classes are final by default, meaning that they cannot be inherited. To make a class inheritable, you need to use the open keyword, as explained on the next slide.

Resource:
Inheritance

## Use open keyword

Use open to declare a class so that it can be subclassed.

Declare a class

    open    class   C

Subclass from C

   class   D : C()

---

By using the open keyword to declare class C, we can successfully define class D as a subclass of C.

Because superclasses need to have one of their constructors used, even a no-arg one, you can easily determine which are classes and which are interfaces by the lack of parentheses. 

## Overriding

Must use open for properties and methods that can be overridden (otherwise you get compiler error)

Must use override when overriding properties and methods

Something marked override can be overridden in subclasses (unless marked final)

## Abstract classes

Class is marked as abstract

Cannot be instantiated, must be subclassed

Similar to an interface with the added the ability to store state

Properties and functions marked with abstract must be overridden

Can include non-abstract properties and functions

---

Abstract classes do not need to be marked with the open keyword because it’s implied that they will be subclassed.

## Example abstract classes

abstract     class   Food {

      abstract     val   kcal : Int

      abstract     val   name : String

      fun   consume() = println(  "I'm eating   ${  name  }  "  )

}

class   Pizza() : Food() {

      override     val   kcal =   600

      override     val   name =   "Pizza"

}

fun   main() {

    Pizza().consume()      // "I'm eating Pizza"

}

---

Abstract classes share some commonality with interfaces: that is, you can’t directly instantiate an abstract class, and there can be functions that you must override in your subclasses. They differ from interfaces in that abstract classes can provide implementations of functions and properties. For interfaces, all declared properties are by default abstract and must be provided by the subclasses. In our Pizza example, we inherited the consume() function, but had to override the properties kcal and name. 

Resource:

Abstract classes
Classes and Inheritance

## When to use each

Defining a broad spectrum of behavior or types? Consider an interface.

Will the behavior be specific to that type? Consider a class.

Need to inherit from multiple classes? Consider refactoring code to see if some behavior can be isolated into an interface.

Want to leave some properties / methods abstract to be defined by subclasses? Consider an abstract class.

You can extend only one class, but implement one or more interfaces.

## Extension functions

Add functions to an existing class that you cannot modify directly.

Appears as if the implementer added it

Not actually modifying the existing class

Cannot access private instance variables

Format:   fun  ClassName.functionName( params ) { body }

## Why use extension functions?

Add functionality to classes that are not open

Add functionality to classes you don’t own

Separate out core API from helper methods for classes you own

Define extension functions in an easily discoverable place such as in the same file as the class, or a well-named function.

## Extension function example

Add isOdd() to Int class:

fun   Int.isOdd(): Boolean {   return     this   %   2   ==   1   }

Call isOdd() on an Int:

Extension functions are very powerful in Kotlin!

## Special classes

## Data class

Special class that exists just to store a set of data

Mark the class with the data keyword

Generates getters for each property (and setters for vars too)

Generates toString(), equals(), hashCode(), copy() methods, and destructuring operators

Format:   data class  <NameOfClass>( parameterList )

---

Resource:
Data Classes


## Data class example

Define the data class:

 data      class   Player(  val   name: String,   val   score: Int)

Use the data class:

val   firstPlayer = Player(  "Lauren"  ,   10  )

println(firstPlayer)

=> Player(name=Lauren, score=10)

Data classes make your code much more concise!

---

The data class version of Player displays the member variables without needing to implement a toString() method explicitly.

## Pair and Triple

Pair and Triple are predefined data classes that store2 or 3 pieces of data respectively

Access variables with .first, .second, .third respectively

Usually named data classes are a better option(more meaningful names for your use case)

---

Resource:
Collections

## Pair and Triple examples

val   bookAuthor =    Pair   (  "Harry Potter"  ,   "J.K. Rowling"  )

println(bookAuthor)

=> (Harry Potter, J.K. Rowling)

val   bookAuthorYear =    Triple   (  "Harry Potter"  ,   "J.K. Rowling"  ,   1997  )

println(bookAuthorYear)

println(bookAuthorYear.third)

=> (Harry Potter, J.K. Rowling, 1997)

    1997

---

Note that the first, second, and third values can be of different types, as shown in the example for bookAuthorYear.

## Pair to

Pair's special to variant lets you omit parentheses and periods (infix function).

It allows for more readable code

val   bookAuth1 =   "Harry Potter"  .to(  "J. K. Rowling"  )

val   bookAuth2 =   "Harry Potter"     to     "J. K. Rowling"

=> bookAuth1 and bookAuth2 are Pair (Harry Potter, J. K. Rowling)

Also used in collections like Map and HashMap

val   map = mapOf(  1     to     "x"  ,   2     to     "y"  ,   3     to     "zz"  )

=> map of Int to String {1=x, 2=y, 3=zz}

---

Transition: 1 click

## Enum class

User-defined data type for a set of named values

Use this to require instances be one of several constant values

The constant value is, by default, not visible to you

Use enum before the class keyword

Format:   enum   class  EnumName { NAME1, NAME2, … NAMEn }

Referenced via EnumName.<ConstantName>

## Enum class example

Define an enum with red, green, and blue colors.

 enum      class   Color(  val   r: Int,   val   g: Int,   val   b: Int) {

   RED(  255  ,   0  ,   0  ), GREEN(  0  ,   255  ,   0  ), BLUE(  0  ,   0  ,   255  )

}

println(  ""   + Color.RED.r +   " "   + Color.RED.g +   " "   + Color.RED.b)

=> 255 0 0

## Object/singleton

Sometimes you  only  want one instance of a class to ever exist

Use the object keyword instead of the class keyword

Accessed with NameOfObject.<function or variable>

---

In other languages, you’d use some for of getInstance and making things private.

## Object/singleton example

 object    Calculator {

      fun   add(n1: Int, n2: Int): Int {

          return   n1 + n2

    }

}

println(Calculator.add(  2  ,  4  ))

=> 6

## Companion objects

Lets all instances of a class share a single instance of a set of variables or functions

Use companion keyword

Referenced via ClassName.PropertyOrFunction

---

Members of companion objects may look like static members from other languages, but they are part of real object instances. For example, you can use companion objects when defining constants in a class, when you want it closely coupled to the class, and when you only need one instance of it. 

Resource:
Companion Objects


## Companion object example

class   PhysicsSystem {

       companion         object    WorldConstants {

          val   gravity =   9.8

          val   unit =   "metric"

          fun   computeForce(mass: Double, accel: Double): Double {

              return   mass * accel

        }

    }

}

println(PhysicsSystem.WorldConstants.gravity)

println(PhysicsSystem.WorldConstants.computeForce(  10.0  ,   10.0  ))

=> 9.8100.0

---

Note: Companion objects can implement an interface and are real objects.

Resource:
Companion Objects


## Organizing your code

## Single file, multiple entities

Kotlin DOES NOT enforce a single entity (class/interface)       per file convention

You can and should group related structures in the same file

Be mindful of file length and clutter

---

The defining line of when you should split into a new file is somewhat a matter of personal preference.

## Packages

Provide means for organization

Identifiers are generally lower case words separated by periods

Declared in the first non-comment line of code in a file following the package keyword

package org.example.game

---

In program source code, packages are used to group related program elements such as classes, variables, and functions. In Kotlin, these elements are declared in files with a package declaration at the top of the file. To use elements that are part of a package in another package, you import the package. The package name customarily contains only lowercase letters (no underscores) and separating dots and has to be globally unique. For example: package org.example.game. 

At time of writing, package private has not been implemented in Kotlin, so the package doesn’t limit visibility as it would in other languages.

## Example class hierarchy

org.example.vehicle

org.example.vehicle.car

org.example.vehicle.moped

---

If the Moped class and its subclasses aren’t too long, it’s fine to put them in the same class. Same with the Car and its descendants.

## Visibility modifiers

Use visibility modifiers to limit what information you expose.

public means visible outside the class. Everything is public by default, including variables and methods of the class.

private means it will only be visible in that class (or source file if you are working with functions).

protected is the same as private, but it will also be visible to any subclasses.

---

Classes, objects, interfaces, constructors, functions, properties, and their setters can have visibility modifiers

Use visibility modifiers to limit the API you expose.

In other languages, you have to explicitly specify “public”. But in Kotlin, if you don’t specify a visibility modifier, it is public by default. 

Resource:
Visibility Modifiers



## Summary

In Lesson 3, you learned about:

[Classes]  [, constructors, and getters and setters]

[Inheritance, interfaces, and how to extend classes]

[Extension functions]

[Special classes: data classes, enums, object/singletons, companion objects]

[Packages]

[Visibility modifiers]

## Pathway

![](img/Lesson%203%20Classes%20and%20objects5.png)

Practice what you’ve learned bycompleting the pathway:

[Lesson 3: Classes and objects](https://developer.android.com/courses/pathways/android-development-with-kotlin-3)

