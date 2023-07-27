---
title: Documentation
description: A guide in my new Starlight docs site.
---

Work on Projects

Code Documentation

## Documentation

Your main responsibility as a software developer is to create a product that is useful to others

This means more than just "it must work"

As a GOOD, PROFESSIONAL software developer, your product must also be understandable, maintainable and usable by others.

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

> I get 10 times more traffic from [Google][1] than from
> [Yahoo][2] or [MSN][3].
>
> <footer>
>  [Google][1], [Yahoo][2], [MSN][3]
> </footer>

[1]: http://google.com/ "Google"
[2]: http://search.yahoo.com/ "Yahoo Search"
[3]: http://search.msn.com/ "MSN Search"

However, there are several "others"

- Clients
- Users
- Other team members (designers, developers, testers)
- Your managers/bosses
- Current and future developers of the product itself
- Current and future developers using/working with your product
- In short, all current and future stakeholders and users.

Thus, there are a variety of types of documentation that may be needed for a product

- "External documentation" is documentation that accompanies your code. These document the product in a variety of ways for different users and different purposes. E.g., 14 different types: [https://www.indeed.com/career-advice/career-development/documentation-for-software-development](https://www.indeed.com/career-advice/career-development/documentation-for-software-development)
- "Internal/code documentation" is documentation that is added to the code itself. At a minimum, this includes a Readme file (usually stored at the top level of your project), documentation of each class and documentation of each method. It should also include pertinent detailed documentation of particular lines of code or key variables where needed to clarify code meaning.

## Internal Documentation

A key part of your responsibility as a coder is to ensure that your code is understandable and maintainable. And, for any code that will be called by other code, usable.

This means that other developers must be able to quickly determine what your code does, why it does what it does, how it does it and how to use it.

To achieve this requires appropriate internal documentation of your classes and methods.

Myth: "My code is self-documenting" or "It's obvious – just read the code"

- Reality: Your perspectives on what is obvious and easy to understand are not universal
- Reality: Your code can't capture the _why_
- Reality: Your code often can't capture its role in the larger context
- Reality: Your assumptions are often not indicated in the code

What your code does -> The purpose of / operation performed by the code should be apparent to another coder.

Why it does what it does -> The role of the code in relation to the rest of the code should be identified clearly where relevant. This is especially true for any business logic or code that is part of a larger process.

How it does it -> Often it is important to understand the type of solution that the code is applying. This is particularly true for operations where efficiency is important (e.g., linear vs quadratic code, small vs large memory footprint), where there is a dependency on 3rd party software, where different cases are handled differently, and/or where assumptions are made.

How to use it -> What does a coder need to know when calling a method or using a particular object of a class (e.g., inputs, outputs, use cases).

Some links

- [https://dev.to/digvijayjadhav98/code-documentation-a-guide-for-beginners-4cj7](https://dev.to/digvijayjadhav98/code-documentation-a-guide-for-beginners-4cj7)
- [https://www.jetbrains.com/help/idea/working-with-code-documentation.html](https://www.jetbrains.com/help/idea/working-with-code-documentation.html)

### 1. What your code does

The purpose of / operation performed by the code should be apparent.

A lot of this can be accomplished using good naming for your class names, method names and parameter names.

- Bad naming:

  ```kotlin
    // What the heck is this for?
    class MyClass { boolean MyMethod(x,y) {…} }
  ```

- Ambiguous naming:

  ```kotlin
    // What does a true result mean?
    class Operations { boolean checkDigits(int num1, int num2) {…} }
  ```

- Better naming:

  ```kotlin
    // Pretty clear...
    class MathOperations { boolean isLargerThan(int numberChecking, int numberComparedTo) {…}
  ```

But often names are not enough on their own or naming alone becomes unwieldy

- Really???: `class IntegerAndWholeNumberMathOperations { boolean isWholeNumberLargerThanAndThrowAnInvalidWholeNumberExceptionIfEitherNumberIsNegative(int wholeNumberChecking, int wholeNumberComparedTo) {…}`

Class and/or Method documentation provides a way for you to clearly indicate the purpose of your classes and methods.

```kotlin
/** Class containing math operations for integer and whole numbers. All methods are static. **/
class MathOperations {

  /** public boolean isLargerThan(int numberChecking, int numberCompared)
    Method that compares the value of two whole numbers to see if the first one, numberChecking,
    is larger than the second, numberComparedTo

    @param int numberChecking: Value being checked. It is an integer that must be a whole number
    @param int numberComparedTo: Value being compared against. It is integer that must be a whole number
    @returns true if numberChecking is larger than numberComparedTo. Returns false otherwise.
    @throws InvalidWholeNumberException if either parameter is negative
  **/
  public static boolean isLargerThan(int numberChecking, int numberComparedTo) {…}
```

### 2. Why it does what it does

Your documentation should capture the role of your code in context.

- This is especially true for any business logic or code that is part of a larger process.

Sometimes class documentation can provide a lot of high-level information about the purpose of the objects that it represents.

Well-designed methods are often concise and focused. But, the method may still serve a key role or apply key business logic

A sentence or two is often enough to capture this

- E.g., This method applies validation rules that ensure that passwords meet the following guidelines: xxx, yyy, zzz
- E.g., This method sanitizes a given string to ensure to remove the following types of potential injection attacks: xxx, yyy, zzz
- E.g., This method should be called before a new employee is assigned a parking space. It ensures that the employee is authorized for a space and that a space is available for their category of employment.
- E.g., This is a support function that may be called at anytime to determine whether a user is authorized
- E.g., This function must be called at the beginning of the application before any database operations are performed. It must be called exactly once or there will be a risk of duplicate database handles and dropped data.

### 3. How it does it

This is the level of documentation that tries to capture the thing that is often nearest-and-dearest to a developer's heart (but they often don't document at all, ironically).

- What technique are they using?
- What algorithm are they applying?
- What cool approach are they adopting?

But, it is also the level of documentation that needs to capture all the things that are "unwritten".

- Assumptions regarding inputs
- Limitations or conditions influencing outputs
- Different edge cases handled or not handled

This level of documentation is accomplished with a mix of high-level and low-level documentation

- High-level: Class or method documentation that is not "in" the block of code.
- Low-level: Single or multi-line documentation that is inside the block of code. A given comment typically refers to the line(s) right after it, or in some cases, the line it is on (if the comment is at the end of a line).

Algorithm:

- If the entire method applies a specific algorithm, mention the type of algorithm or efficiency properties of that algorithm in the high-level documentation, and in the low-level documentation identify the specifics of that algorithm as appropriate. E.g.:
  - High-level: Performs search in O(log n) time
  - Low-level: Use binary search on a sorted tree.

Edge Cases: Usually, each edge case is documented using low-level documentation.

```kotlin
boolean collisionCheck() {
  if (aaa) {
    // Screen boundary case
  } else if (bbb) {
    // Wall collision case
  } else {
    // No collision case
  }
}
```

3rd Party dependencies should generally be documented in high-level documentation at th class or method level as appropriate.

- Broad dependencies are captured at the class level (e.g., This repository implementation uses MySql).
- Use of a specific library for a particular support function may be best documented at the method level (e.g., Uses the XXX validation library). The reason for documenting here instead of just at a low-level is that the 3rd party function may return unexpected outputs or throw unexpected errors that a developer wants to be aware of without looking at your code.

### 4. How to Use It

This is the level of code that most developers actually do, but often at a shallow or pro-forma level

What does a coder need to know when calling a method or using a particular object of a class?

At a minimum, you should indicate what are the expected valid inputs and types of outputs (including exceptions)

But also, is there a particular way to use to it

- e.g., always call this method to validate inputs)
- E.g., is there a design pattern at play (e.g., a singleton, a factory method).

Or is there a particular situation in which to use it

- When to use this method instead of a different (similar) one?
- Methods or objects in a framework often have particular roles to play.

Examples are worth a thousand words

- Sometimes, no amount of verbal description of how to use a method will make things clear, while a very simple example of calling the method will make it really apparent.
- This is particularly true when in the early stages of development when you and your teammates are not "experts" in using your own code.
- It is still true when your code is stable.
- Sadly, most developers don't do this!

## Talib's Recommendation: Document-First Approach

Instead of documentation being the "red-headed stepchild", make it the superstar.

Before writing a single line of code for a class, write the documentation of what the class is for and what you plan to include in that class.

- Your mind will be moving from "design" mode to "implement" mode. This is the ideal time to capture design thoughts and how you plan to approach things.
- It is ok if it will change. This is a first cut and will help frame and focus your coding effort.

Before writing a single line of code for a method, write the method documentation of what the method is for, how the method with work and any assumptions you are making.

This initial documentation does not have to be pretty

It should take a very short amount of time (1 to 3 minutes ideally, at most 5 if you are still figuring the design out).

Then, start writing the code.

If at any point in time you need to switch to a different task or have too many thoughts in your mind, include a note in the documentation about what you have in mind for later. This can be a "TODO: Don't forget to…", "TODO: Didn't finish testing xxx", "Note-to-self: Is yyy the right method to use?"

Once you have written a good first cut at the code (possibly with a couple iterations), look at your documentation and tweak it a bit to reflect any changes you made in your design or assumptions

Once you feel confident in your code working, revisit the documentation and make sure it is formatted properly.

- If you still have anything left to do later, include an explicit "TODO"

### Help yourself and your teammates

The most likely "developer-user" of the code you write will be your future self.

The next most likely "developer-user" will be your teammates.

So, code to make sure your future self will remember why you did what you did.

- The first time you code something, there is often a lot "in your head" – assumptions, what "way" you're using, why you're doing it "this way", what you're planning to do next, how you're planning to use "this" code in "that" code, what is "temporary" while you figure things out, what is "crucial", what is "not really that important", and much more.
- You're going to forget a lot of this… even a day or two later… but especially months or years later when you come back to your code to fix a bug (maybe because you left an undocumented "temporary" something in there???)

Code to make sure your teammates will understand what you did and why

- Do you really want them coming back to you with a lot of questions? Anticipate those questions and put the answers in the code documentation

Code for your future self

- Include appropriate "notes-to-self", "TODO"s and so on to ensure that when you come back to this code, your will quickly be able to remember what you had in mind earlier.
- Remember to clean these up as you go if they are addressed or become obsolete, overtaken-by-events, irrelevant, etc.

### Some challenges

Obsolete documentation

- As code changes and evolves, as new bug fixes are made, as code is refactored, etc., it is important to make sure that the documentation reflects the latest implementation
  - Sometimes it is also important to capture older approaches (e.g., to avoid old bugs reappearing)

Poorly formatted, hard-to-read, unprofessional

- Documentation is intended to be readable and professional. Use full sentences, not brief notes. Use capitalization and punctuation. Spell properly! Use proper language and not slang. Be clear about any issues. Use whitespace appropriately to space things out for maximum readability.
- this doc is bad - no ass.incl. make sure use right variable, has expectation easy understand, eh? has errors-sucks

Capturing changes

- Who put this line here and why??!
- In a team environment, you may be tasked to fix a bug in code that a teammate wrote originally. It is important to flag the changes you make with the reason you made them.
  - e.g., // Added name validity check to resolve bug reported in task 238

There's more documentation than code!! This documentation is trivial!!

- You can "overdo" it with documentation. Either by simply repeating what the code is "obviously" doing, by providing a lot of extra details that really belong to other code, or simply by being excessively verbose.
- Aim to be efficient in your use of words while providing the essential extra "meaning" needed to augment the raw code.

Consistency

- If many different coding styles are used in a codebase, it can be confusing and misleading within a team. Aim to be consistent in the formatting used, the amount of expected detail provided, and, if possible, the type of wording used.

Well-formatted, well-written, but not useful…

- You can spend a lot of time writing documentation that in the end doesn't provide any "value-add" or, worse, hinders understanding.
- E.g., provides a lot of notes-to-self: "this could also be done this other way…"
- E.g., does not make it clear how to call the method. Examples here are most useful.
- Sadly, a lot of JavaDoc provided in official and 3rd party libraries is like this.

### Excuses, Excuses….

I don't/didn't have time

I'll do it later

- No you won't

It takes too much time

- Does that 3 to 5 minutes really take more time than **ANY** single future bug ever caused by your lack of documentation? Remember those HOURS of frustration!!! (Why didn't they just say so!!!!)
- Pay it forward.

Don't like to write

- It's not an essay
- I'm sure you like things that are pertinent, relevant and useful.

Language is a problem for me (for non-English-native)

- But I'm sure you have even more problems when others don't document their code

I hate documentation

- Not when you are using someone else's code you don't!

I put something, ok, stop (de-)bugging me

```// kotlin
method that adds
public int add(int x, int y)
```

Do I have to (whine)?

- Ummmm… professional much?

But no one else does it

- Yes, I agree, let's all be part of the problem!

But no one told me I had to

- I just did… 

Bottom line:

- No/poor documentation = Future confusion and future bugs.
- Waste of your time and team's time when your PR fails.
- Leaves a bad, unprofessional impression/reputation

## Conventions

Language-specific

- [https://dart.dev/effective-dart/documentation](https://dart.dev/effective-dart/documentation)

Team-specific

Community-specific

- [https://pub.dev/](https://pub.dev/)

Required (e.g., by Client)

### Readme

A proper Readme file is documentation with guidelines on how to use a project.

Usually it will have instructions on how to install and run the project.

As with all documentation, it should be written clearly using proper sentences, language, etc.

An ideal Readme should have

Project title

Project description

- Clarify purpose. Often there is external documentation that can be referred to, but often these days this is the only project-level documentation (e.g., as is the case for many packages/plugins)

How to install and run the project

- Clarify 3rd party dependencies

Folder structure explanation and challenges

Known issues and credits

- In some settings, indicating the development team is good, in other cases the team wants some anonymity.

License and versioning

### Tools & tricks

Some IDEs, in some languages, offer support for auto-generating some simple formatting for code documentation

- E.g., Android Studio in Java
- Sadly, not for Dart/Flutter

Writing understandable, maintainable code also involves a variety of other good coding habits:

- Good file organization (folders/sub-folders named well)
- Good packaging
- Appropriate separation of concerns
- Minimizing redundancy
- Maximizing reusability

## Exercises

## Additional resources
