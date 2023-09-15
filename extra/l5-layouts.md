![](img/Lesson%205%20Layouts0.png)

<span style="color:#FAFAFA">Lesson 5: </span>

<span style="color:#FAFAFA">Layouts</span>

# About this lesson

Lesson 5: Layouts

_[Layouts in Android](slide3.xml)_

_[ConstraintLayout](slide10.xml)_

_[Additional topics for ConstraintLayout](slide27.xml)_

_[Data binding](slide35.xml)_

_[Displaying lists with RecyclerView](slide43.xml)_

_[Summary](slide51.xml)_

<span style="color:#FAFAFA"> __Layouts in Android__ </span>

# Android devices

![](img/Lesson%205%20Layouts1.png)

Android devices come in many different form factors\.

More and more pixels per inch are being packed into device screens\.

Developers need the ability to specify layout dimensions that are consistent across devices\.

---

Android devices come in a number of different sizes and form factors spanning mobile phones, tablets, watches, and more. Without an adaptable system to refer to sizes, it would be hard to know what to expect across different devices.

# Density-independent pixels (dp)

Use dp when specifying sizes in your layout\, such as the width or height of views\.

Density\-independent pixels  __\(dp\) __ take screen density into account\.

Android views are measured in density\-independent pixels\.

dp =  _\(width in pixels \* 160\)_                screen density

---

Unlike physical pixels (px), density-independent pixels take screen density (pixels per inch) into account. Using dp and adaptive layouts like ConstraintLayout, which we’ll cover shortly, you ensure that your design and layout will work well across different devices. 
A dp is computed by the formula shown above.

Resource:
Pixel density on Android


# Screen-density buckets

| Density qualifier | Description | DPI estimate |
| :-: | :-: | :-: |
| ldpi (mostly unused) | Low density | ~120dpi |
| mdpi (baseline density) | Medium density | ~160dpi |
| hdpi | High density | ~240dpi |
| xhdpi | Extra-high density | ~320dpi |
| xxhdpi | Extra-extra-high density | ~480dpi |
| xxxhdpi | Extra-extra-extra-high density | ~640dpi |

---

Screens are organized in several density buckets, from low density (~120 dpi), up to extra-extra-extra-high density(~640dpi). Most consumer devices currently fall between hdpi and xxxhdpi, with flagship phones on the high end. Although using dp ensures that your layouts work well in most cases, you should still check your app on devices in different density buckets. You can test multiple devices with the emulator.  

Resources:
Support different pixel densities 
Device Metrics



# Android View rendering cycle

---

When Android draws information on the screen, three distinct passes happen in quick succession: 
Measure pass - calculate the precise dimensions of each View, including expensive operations like wrap_contents you used. 
Layout pass - align views based on the rules of the layout manager. 
Draw - render the results based on the previous two steps.

# Drawing region

![](img/Lesson%205%20Layouts2.png)

---

No matter the shape of a widget, when it comes to drawing it on-screen, the draw calls are bounded by rectangles, which serve as an invisible border to the View.

# View margins and padding

View with margin

View with margin and padding

---

You can add whitespace between views by adding padding, and/or a margin. Padding adjusts the amount of space inside that invisible border, but the View doesn’t change its relationship to other views. Margin, on the other hand, determines the amount of external space between a View and other views around it.

<span style="color:#FAFAFA"> __ConstraintLayout__ </span>

# Deeply nested layouts are costly

Deeply nested ViewGroups require more computation

Views may be measured multiple times

Can cause UI slowdown and lack of responsiveness

Use ConstraintLayout to avoid some of these issues\!

---

Transition: 1 click

Placing views in ViewGroups, like LinearLayout, can help you organize your layout. If you nest too many layouts within each other, however, you can make your UI unresponsive to user input. That’s because every element on the screen has to be measured precisely before it can be drawn. If drawing an element depends on other elements, a particular View may have to be measured several times. To avoid this, one solution is to use ConstraintLayout.

# What is ConstraintLayout?

Recommended default layout for Android

Solves costly issue of too many nested layouts\, while allowing complex behavior

Position and size views within it using a set of constraints

---

ConstraintLayout mitigates many of the previous issues we’ve talked about. It duplicates all the functionality of LinearLayout and RelativeLayout, while allowing the developer to make the layout flatter with less hierarchy and nesting. Less nesting means being able to measure, layout, and draw views in less passes, thus increasing the speed of displaying the UI. ConstraintLayout’s most important way of doing this is through constraints.

Resources:
Build a Responsive UI with ConstraintLayout

# What is a constraint?

![](img/Lesson%205%20Layouts3.png)

A restriction or limitation on the properties of a View that the layout attempts to respect

---

Behind the scenes, the solver is taking all the constraints into account, deciding how to break ties if constraints conflict, and determining the final position and dimensions of elements.

For example, in the diagram, B is constrained to always be to the right of A, and C is constrained below A.

# Relative positioning constraints

__Can set up a constraint relative to the parent container__

__Format:__  __ __  __layout\_constraint<__  __SourceConstraint__  __>\_to<__  __TargetConstraint__  __>__  __Of__

Example attributes on a TextView:

<span style="color:#37474F">app:layout\_constraintTop\_toTopOf=</span>  <span style="color:#388E3C">"parent"</span>

<span style="color:#37474F">app:layout\_constraintLeft\_toLeftOf=</span>  <span style="color:#388E3C">"parent"</span>

![](img/Lesson%205%20Layouts4.png)

---

You’ll see many constraints in this general form. Parent refers to the enclosing container, which is the ConstraintLayout. If you set these example attributes in a TextView within a ConstraintLayout, it would appear in the Design view like the preview on the right. In this case, the source is the current TextView, while target is the Parent container. This first constraint says "I want to align the top of this TextView to the top of the parent layout." The second constraint says "I want to align the left of this TextView to the left of the parent layout." Note that there’s also a top and left margin of 16dp on this TextView.



---

Starting in the vertical direction, we can add a constraint to the top or bottom of an element, or to the text’s baseline if the View contains text.

---

Horizontally, we can constrain the start and end edges of a View. Left and right are included for completion, but as a best practice, you should default to start and end. This is so that the layout still works well if your app is translated to other languages, such as those with right-to-left (RTL) scripts. Thus, if you want to specify a left constraint, use start constraint instead. If you want to specify a right constraint, use end constraint instead.

Resource:
Update existing resources


# Simple ConstraintLayout example

<span style="color:#37474F"><androidx\.constraintlayout\.widget\.ConstraintLayout</span>

<span style="color:#37474F">    android:layout\_width=</span>  <span style="color:#388E3C">"match\_parent"</span>

<span style="color:#37474F">    android:layout\_height=</span>  <span style="color:#388E3C">"match\_parent"</span>  <span style="color:#37474F">></span>

<TextView

\.\.\.

__app:layout\_constraintBottom\_toBottomOf=__  <span style="color:#388E3C"> __"parent"__ </span>

__        app:layout\_constraintEnd\_toEndOf=__  <span style="color:#388E3C"> __"parent"__ </span>

__        app:layout\_constraintStart\_toStartOf=__  <span style="color:#388E3C"> __"parent"__ </span>

__        app:layout\_constraintTop\_toTopOf=__  <span style="color:#388E3C"> __"parent"__ </span>  />

\</androidx\.constraintlayout\.widget\.ConstraintLayout>

![](img/Lesson%205%20Layouts5.png)

---

Here are some constraints you might see in an app. In this example, we have a ConstraintLayout containing one child TextView, which has top, bottom, start, and end constraints.

# Layout Editor in Android Studio

You can click and drag to add constraints to a View\.

![](img/Lesson%205%20Layouts6.gif)

---

You can create a constraint by editing the XML of a layout (as shown in previous slides), or by using Android Studio’s Layout Editor. In the Layout Editor, every View in a ConstraintLayout is shown with four circular handles to quickly constrain this View to the start, end, top, and bottom of other views. In this case, we’ve created a layout_constraint Start to the Start of the parent, and End to the End of the parent. By default, these two constraints act equally on the object. That is, they have an equal constraint bias (50% on each side by default), so the object ends up centered. You can adjust the bias by dragging the bias slider in the Attributes window to pull the View to either side.

# Constraint Widget in Layout Editor

![](img/Lesson%205%20Layouts7.png)

![](img/Lesson%205%20Layouts8.png)

![](img/Lesson%205%20Layouts9.png)

![](img/Lesson%205%20Layouts10.png)

__Match constraints__

---

In the Layout Editor, you’ll see the Constraint Widget in the Attributes Window at the right of the screen. You’ll see three types of symbols (shown above), indicating which type of constraint has been placed on the start, end, top, and bottom of the currently selected View. 

Let’s zoom in with a stylized and simplified Constraints Widget to understand constraints.

Resource:
Adjust the view size

# Wrap content for width and height

![](img/Lesson%205%20Layouts11.png)

![](img/Lesson%205%20Layouts12.png)

---

The square to the right represents a view with wrap_content on its height and width.

# Wrap content for width, fixed height

![](img/Lesson%205%20Layouts13.png)

![](img/Lesson%205%20Layouts14.png)

---

There’s also a different symbol resembling a pipe that indicates that dimension has a fixed size in dp (48dp) for the height of the View. The width of the View is wrap_content as in the previous slide.

# Center a view horizontally

![](img/Lesson%205%20Layouts15.png)

![](img/Lesson%205%20Layouts16.png)

---

We can have multiple constraints on a View that determine how much they will affect the final position. In this case, there are start and end constraints on the View in the horizontal direction. There’s also a bias of 50 (notice the gray slider in the callout), so the constraints are equally applied. The end result is that the View is centered horizontally within the parent.

Resource:
Adjust the constraint bias

# Use match_constraint

Can’t use match\_parent on a child view\, use match\_constraint instead

![](img/Lesson%205%20Layouts17.png)

![](img/Lesson%205%20Layouts18.png)

---

In LinearLayout, we used match_parent to indicate that we wanted a view to take up as much space as was available to it. In ConstraintLayout, we can't use match_parent on a child view, so instead we use match_constraint. Depending on your version of Android Studio, you may see this as 0dp (match_constraint).

# Chains

Let you position views in relation to each other

Can be linked horizontally or vertically

Provide much of LinearLayout functionality

---

You can also create chains within a ConstraintLayout. A chain is a group of views that are linked to each other with bi-directional position constraints.

Resource:
Chains in ConstraintLayout

# Create a Chain in Layout Editor

![](img/Lesson%205%20Layouts19.png)

Select the objects you want to be in the chain\.

Right\-click and select  __Chains\.__

Create a horizontal or vertical chain\.

---

Within the Layout Editor, follow these three steps to create a chain.

# Chain styles

Adjust space between views with these different chain styles\.

![](img/Lesson%205%20Layouts20.png)

Spread Inside Chain

---

Chains can be styled in a number of ways, as shown above. More details on each style can be found in the resource linked below.
Resource:
Chains in ConstraintLayout

<span style="color:#FAFAFA"> __Additional topics for ConstraintLayout__ </span>

---

Here are some additional topics that you may find useful when using the ConstraintLayout.


# Guidelines

Let you position multiple views relative to a single guide

Can be vertical or horizontal

Allow for greater collaboration with design/UX teams

Aren't drawn on the device

---

You can position multiple views relative to a guideline within a ConstraintLayout. Guidelines are not displayed on the device, and are only used for layout purposes. 

Resource:
Guideline

# Guidelines in Android Studio

![](img/Lesson%205%20Layouts21.png)

---

This is how guidelines appear in Android Studio. You can adjust them in code, or by clicking and dragging. Views that are constrained to a guideline will adjust themselves when you adjust the guideline.

# Example Guideline

<span style="color:#37474F">\<ConstraintLayout></span>

<span style="color:#37474F">   </span>  <span style="color:#37474F"> __<androidx\.constraintlayout\.widget\.Guideline__ </span>

<span style="color:#37474F">       android:id=</span>  <span style="color:#388E3C">"@\+id/start\_guideline"</span>

<span style="color:#37474F">       android:layout\_width=</span>  <span style="color:#388E3C">"wrap\_content"</span>

<span style="color:#37474F">       android:layout\_height=</span>  <span style="color:#388E3C">"wrap\_content"</span>

<span style="color:#37474F">       android:orientation=</span>  <span style="color:#388E3C">"vertical"</span>

<span style="color:#37474F">       app:layout\_constraintGuide\_begin=</span>  <span style="color:#388E3C">"16dp"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">   <TextView \.\.\.</span>

<span style="color:#37474F">       </span>  <span style="color:#37474F"> __app:layout\_constraintStart\_toEndOf=__ </span>  <span style="color:#388E3C"> __"@id/start\_guideline"__ </span>  <span style="color:#37474F"> __ __ </span>  <span style="color:#37474F">/></span>

<span style="color:#37474F">\</ConstraintLayout></span>

---

Here’s an example where this TextView is constrained to a vertical Guideline.

# Creating Guidelines

layout\_constraintGuide\_begin

layout\_constraintGuide\_end

layout\_constraintGuide\_percent

---

You can set guidelines by a specific number of dp from the "begin" or "end" of a layout, or by a numeric percent between 0 and 1 (e.g., 0.05).

# Groups

![](img/Lesson%205%20Layouts22.gif)

Control the visibility of a set of widgets

Group visibility can be toggled in code

# Example group

<span style="color:#37474F"><androidx\.constraintlayout\.widget\.Group</span>

<span style="color:#37474F">    android:id=</span>  <span style="color:#388E3C">"@\+id/group"</span>

<span style="color:#37474F">    android:layout\_width=</span>  <span style="color:#388E3C">"wrap\_content"</span>

<span style="color:#37474F">    android:layout\_height=</span>  <span style="color:#388E3C">"wrap\_content"</span>

<span style="color:#37474F">    app:constraint\_referenced\_ids=</span>  <span style="color:#388E3C">"locationLabel\,locationDetails"</span>  <span style="color:#37474F">/></span>

---

Resource:
Group

# Groups app code

<span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> onClick\(v: View?\) \{</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">if</span>  <span style="color:#37474F"> \(group\.visibility == View\.GONE\) \{</span>

<span style="color:#37474F">        group\.visibility = View\.VISIBLE</span>

<span style="color:#37474F">        button\.setText\(R\.string\.hide\_details\)</span>

<span style="color:#37474F">    \} </span>  <span style="color:#3F51B5">else</span>  <span style="color:#37474F"> \{</span>

<span style="color:#37474F">        group\.visibility = View\.GONE</span>

<span style="color:#37474F">        button\.setText\(R\.string\.show\_details\)</span>

<span style="color:#37474F">    \}</span>

<span style="color:#37474F">\}</span>

---

Data binding is an important concept that we’ll be revisiting several times as this course goes on. It can simplify your code and make your code more robust. Let’s look at a couple of use cases.

# Current approach: findViewById()

Traverses the View hierarchy each time

__activity\_main\.xml__

\<ConstraintLayout … >

<TextView

android:id="@\+id/name"/>

<TextView             android:id="@\+id/age"/>

<TextView            android:id="@\+id/loc"/>

\</ConstraintLayout>

val name = findViewById\(\.\.\.\)

val age = findViewById\(\.\.\.\)

val loc = findViewById\(\.\.\.\)

name\.text = …

age\.text = …

loc\.text =  __…__

---

Within your Activity code, you could use findViewById() to find View instances. However, IDs are global to all layouts, so you can end up with runtime crashes if you reference an ID that isn't actually in the current layout.



# Use data binding instead

Bind UI components in your layouts to data sources in your app\.

__activity\_main\.xml__

\<layout>

\<ConstraintLayout … >

<TextView

android:id= <span style="color:#388E3C">"@\+id/name"</span> />

<TextView                        android:id= <span style="color:#388E3C">"@\+id/age"</span> />

<TextView                        android:id= <span style="color:#388E3C">"@\+id/loc"</span> />

__   __ \</ConstraintLayout>

\</layout>

Val binding:ActivityMainBinding

binding\.name\.text = …

binding\.age\.text = …

binding\.loc\.text = …

initialize binding

---

Instead, use data binding to simplify your code and catch bugs at compile time by having type safety with the views you’re accessing. In this example, we initialize a binding object specifically for the main activity layout and can access the views immediately, rather than having to call findViewById individually.

On the binding object instance, you can access the name, age, and location TextViews (e.g., binding.name) and change the text within them (e.g., binding.name.text). This is possible because name, age, and loc are the resource ID names that were declared on the TextViews in the XML layout.

Let’s look at how to modify our app to use data binding.

# Modify build.gradle file

__android \{__

__   \.\.\.__

__   buildFeatures__  __ \{__

__       dataBinding __  <span style="color:#3F51B5">true</span>

__   \}__

__\}__

---

To begin, we add the displayed code to the android section in our build.gradle file. This indicates to Gradle that it should generate some classes for us when we mark a layout in XML.

# Add layout tag

__\<layout>__

__    \<androidx\.constraintlayout\.widget\.ConstraintLayout>__

__        <TextView \.\.\. android:id=__  <span style="color:#388E3C">"@\+id/username"</span>  __ />__

__        <EditText \.\.\. android:id=__  <span style="color:#388E3C">"@\+id/password"</span>  __ />__

__    \</androidx\.constraintlayout\.widget\.ConstraintLayout>__

__\</layout>__

---

Next, we add a layout tag. When we enclose a layout in a layout tag, we are indicating that we want a binding class created for us. The binding class will contain references to any views that have a resource ID.

# Layout inflation with data binding

Replace this

__setContentView\(R\.layout\.activity\_main\)__

with this

<span style="color:#3F51B5">val</span>  <span style="color:#37474F"> binding: ActivityMainBinding = DataBindingUtil\.setContentView\(</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">this</span>  <span style="color:#37474F">\, R\.layout\.activity\_main\)</span>

<span style="color:#37474F">binding\.username = </span>  <span style="color:#388E3C">"Melissa"</span>

---

In our Activity, instead of calling setContentView() from the Activity, we call DataBindingUtil.setContentView() and pass the Activity(this) and resource ID of the desired layout. The resulting binding variable will have access to the previously named views. Notice that we didn’t have to call findViewById before accessing our views (such as the username TextView).

# Data binding layout variables

__\<layout> __

__   __  <span style="color:#3F51B5"> __\<data>__ </span>

__       <variable name=__  <span style="color:#388E3C"> __"name"__ </span>  __ type=__  <span style="color:#388E3C"> __"String"__ </span>  __/>__

__   __  <span style="color:#3F51B5"> __\</data>__ </span>

__   \<androidx\.constraintlayout\.widget\.ConstraintLayout>__

__       <TextView__

__           android:id=__  <span style="color:#388E3C">"@\+id/textView"</span>

__           android:text=__  <span style="color:#388E3C"> __"@\{name\}"__ </span>  __ />__

__   \</androidx\.constraintlayout\.widget\.ConstraintLayout>__

__\</layout>__

__In __  __MainActivity\.kt__  __:__

__binding\.name = __  <span style="color:#388E3C">"John"</span>

---

Transition: 1 click

Instead of modifying the binding values in code, we can set them in the layout. At the top of this layout XML, we insert the data tag to declare that the layout will have access to a String variable called name. Then we use that name variable as the text to display in the TextView.

In the activity code, we set the text of the TextView by setting the name value on the binding object.

Resource:
Layouts and binding expressions

# Data binding layout expressions

__\<layout>__

__   __  <span style="color:#3F51B5">\<data></span>

__       <variable name=__  <span style="color:#388E3C">"name"</span>  __ type=__  <span style="color:#388E3C">"String"</span>  __/>__

__   __  <span style="color:#3F51B5">\</data></span>

__   \<androidx\.constraintlayout\.widget\.ConstraintLayout>__

__       <TextView__

__           android:id=__  <span style="color:#388E3C">"@\+id/textView"</span>

__           android:text=__  <span style="color:#388E3C">"</span>  <span style="color:#388E3C"> __@\{name\.toUpperCase\(\)\}__ </span>  <span style="color:#388E3C">"</span>  __ />__

__   \</androidx\.constraintlayout\.widget\.ConstraintLayout>__

__\</layout>__

---

Expression language lets you do many things in a single line of code, such as simple transformations, displaying content based on a comparison, or accessing the content of other views. In this case, we call toUpperCase() on the name variable String. 
We’ll explore options for more complex transformations and binding to events later in the course. Check the resource below for more examples on the expressions you can create.

Resource:
Layouts and binding expressions


<span style="color:#FAFAFA"> __Displaying lists with RecyclerView__ </span>

# RecyclerView

Widget for displaying lists of data

"Recycles" \(reuses\) item views to make scrolling more performant

Can specify a list item layout for each item in the dataset

Supports animations and transitions

# RecyclerView.Adapter

Supplies data and layouts that the RecyclerView displays

A custom Adapter extends from RecyclerView\.Adapter and overrides these three functions:

__getItemCount __

__onCreateViewHolder __

__onBindViewHolder__

---

A basic RecyclerView adapter will need to override the following three functions: 
getItemCount returns the total number of items available in your list of data
onCreateViewHolder is called to create a new list item layout
onBindViewHolder is called when reusing a list item layout by updating the data that’s displayed within it

A ViewHolder represents a list item layout and has references to all the views within the list item layout.

Resources:
RecyclerView.Adapter
RecyclerView.ViewHolder 

# View recycling in RecyclerView

If item is scrolled offscreen\, it isn’t destroyed\. Item is put in a pool to be recycled\.

Boston\, Massachusetts

Chicago\, Illinois

Mountain View\, California

Seattle\, Washington

onBindViewHolder binds the view with the new values\, and then the view gets reinserted in the list\.

Nashville\, Tennessee

Little Rock\, Arkansas

---

When you have a large number of items in your list (greater than the amount of space on screen to display them all), don’t create a View for items that have not been scrolled to yet. 

The adapter’s onCreateViewHolder() method is called to create view holders for the number of items that can be displayed on the screen at one time. After that initial creation, when you scroll, the system removes offscreen list item views from the hierarchy, and calls onBindViewHolder() on the adapter to “recycle” the list item views and use them again. The values within the list item view are updated to reflect the data in the new list item (that’s about to appear on screen), and the list item view is added back to the view hierarchy. 
Let’s look at the code for how to add a RecyclerView to your app.

# Add RecyclerView to your layout

<span style="color:#37474F"><androidx\.recyclerview\.widget\.RecyclerView</span>

<span style="color:#37474F">    android:id=</span>  <span style="color:#388E3C">"@\+id/rv"</span>

<span style="color:#37474F">    android:scrollbars=</span>  <span style="color:#388E3C">"vertical"</span>

<span style="color:#37474F">    android:layout\_width=</span>  <span style="color:#388E3C">"match\_parent"</span>

<span style="color:#37474F">    android:layout\_height=</span>  <span style="color:#388E3C">"match\_parent"</span>  <span style="color:#37474F">/></span>

---

First, add the RecyclerView element to your layout. For example, if your app only has one Activity, include the RecyclerView in the layout XML file for that Activity. Be sure to include the RecyclerView library as a dependency in your build.gradle file.

# Create a list item layout

res/layout/item\_view\.xml

<span style="color:#37474F"><FrameLayout</span>

<span style="color:#37474F">   android:layout\_width=</span>  <span style="color:#388E3C">"match\_parent"</span>

<span style="color:#37474F">   android:layout\_height=</span>  <span style="color:#388E3C">"wrap\_content"</span>  <span style="color:#37474F">></span>

<span style="color:#37474F">   <TextView</span>

<span style="color:#37474F">       android:id=</span>  <span style="color:#388E3C">"@\+id/number"</span>

<span style="color:#37474F">       android:layout\_width=</span>  <span style="color:#388E3C">"match\_parent"</span>

<span style="color:#37474F">       android:layout\_height=</span>  <span style="color:#388E3C">"wrap\_content"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">\</FrameLayout></span>

---

Create a new layout file that represents a list item layout (in this case a FrameLayout that contains a single TextView). This list item layout is used for each entry in the list.

# Create a list adapter

<span style="color:#3F51B5">class</span>  __ __  __MyAdapter\(__  <span style="color:#3F51B5">val</span>  <span style="color:#3F51B5"> </span>  <span style="color:#3F51B5">data</span>  __:__  __ __  __List\<Int>\)__  __ __  __:__  __ __  __RecyclerView\.Adapter__  __\<MyAdapter\.MyViewHolder>\(\)__  __ __  __\{__

__   __  <span style="color:#3F51B5">class</span>  __ MyViewHolder\(__  <span style="color:#3F51B5">val</span>  __ row: View\)__  __ __  __:__  __ __  __RecyclerView\.ViewHolder__  __\(row\) \{__

__       __  <span style="color:#3F51B5">val</span>  __ textView = row\.findViewById\<TextView>\(R\.id\.number\)__

__   \}__

__   __  <span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F"> __onCreateViewHolder__ </span>  <span style="color:#37474F">\(parent: ViewGroup\, viewType: Int\): MyViewHolder \{</span>

<span style="color:#37474F">       </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> layout = LayoutInflater\.from\(parent\.context\)\.inflate\(R\.layout\.item\_view\,</span>

<span style="color:#37474F">                    parent\, </span>  <span style="color:#3F51B5">false</span>  <span style="color:#37474F">\)</span>

<span style="color:#37474F">       </span>  <span style="color:#3F51B5">return</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F"> __MyViewHolder__ </span>  <span style="color:#37474F">\(layout\)</span>

<span style="color:#37474F">   \}</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F"> __onBindViewHolder__ </span>  <span style="color:#37474F">\(holder: MyViewHolder\, position: Int\) \{</span>

<span style="color:#37474F">       holder\.textView\.text = </span>  <span style="color:#3F51B5">data</span>  <span style="color:#37474F">\.get\(position\)\.toString\(\)</span>

<span style="color:#37474F">   \}</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F"> __getItemCount__ </span>  <span style="color:#37474F">\(\): Int = </span>  <span style="color:#3F51B5">data</span>  <span style="color:#37474F">\.size</span>

---

Transitions: 3 clicks
Next, create a list adapter to create list items for the RecyclerView. 
Create a new Adapter class (MyAdapter) that extends from RecyclerView.Adapter. 
Define a custom ViewHolder class that will hold the views in the layout for a single list item.
Override the 3 methods from RecyclerView.Adapter class: 
onCreateViewHolder
onBindViewHolder
getItemCount

# Set the adapter on the RecyclerView

In __ __ MainActivity\.kt:

<span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> onCreate\(savedInstanceState: Bundle?\) \{</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">super</span>  <span style="color:#37474F">\.onCreate\(savedInstanceState\)</span>

<span style="color:#37474F">    setContentView\(R\.layout\.activity\_main\)</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> rv: RecyclerView = findViewById\(R\.id\.rv\)</span>

<span style="color:#37474F">    rv\.layoutManager = LinearLayoutManager\(</span>  <span style="color:#3F51B5">this</span>  <span style="color:#37474F">\)</span>

<span style="color:#37474F">    </span>  <span style="color:#37474F"> __rv\.adapter__ </span>  <span style="color:#37474F"> = MyAdapter\(IntRange\(</span>  <span style="color:#C53929">0</span>  <span style="color:#37474F">\, </span>  <span style="color:#C53929">100</span>  <span style="color:#37474F">\)\.toList\(\)\)</span>

<span style="color:#37474F">\}</span>

---

Then make these changes in the MainActivity file.

Find a reference to the RecyclerView in the layout. 
Set a Layout Manager on it. LinearLayoutManager or GridLayoutManager are standard ones provided for you, but you can define your own. 
Initialize an instance of your custom adapter, and set the adapter on the RecyclerView so that the adapter can populate the list items in the RecyclerView.

# Summary

In Lesson 5\, you learned how to:

<span style="color:#1C4587">[Specify lengths in dp for your layout](slide5.xml)</span>

<span style="color:#1C4587">[Work with screen densities for different Android devices](slide6.xml)</span>

<span style="color:#1C4587">[Render Views to the screen of your app](slide7.xml)</span>  <span style="color:#1C4587"> </span>

<span style="color:#1C4587">[Layout views within a ](slide10.xml)</span>  <span style="color:#1C4587">[ConstraintLayout](slide10.xml)</span>  <span style="color:#1C4587">[ using constraints](slide10.xml)</span>

<span style="color:#1C4587">[Simplify getting View references from layout with data binding](slide35.xml)</span>

<span style="color:#1C4587">[Display a list of text items using a ](slide43.xml)</span>  <span style="color:#1C4587">[RecyclerView](slide43.xml)</span>  <span style="color:#1C4587">[ and custom adapter](slide43.xml)</span>

# Learn more

_[Pixel density on Android](https://material.io/design/layout/pixel-density.html#pixel-density-on-android)_

_[Spacing](https://material.io/design/layout/spacing-methods.html#spacing)_

_[Device metrics](https://material.io/resources/devices/)_  __ __

_[Type scale](https://material.io/design/typography/the-type-system.html#type-scale)_

_[Build a Responsive UI with ConstraintLayout](https://developer.android.com/training/constraint-layout)_

_[Data Binding Library](https://developer.android.com/topic/libraries/data-binding)_

_[Create dynamic lists with RecyclerView](https://developer.android.com/guide/topics/ui/layout/recyclerview)_

# Pathway

![](img/Lesson%205%20Layouts23.png)

Practice what you’ve learned bycompleting the pathway:

_[Lesson 5: Layouts](http://developer.android.com/courses/pathways/android-development-with-kotlin-5)_

---





