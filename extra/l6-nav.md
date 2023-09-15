![](img/Lesson%206%20App%20navigation0.png)

<span style="color:#FAFAFA">Lesson 6: </span>

<span style="color:#FAFAFA">App navigation</span>

# About this lesson

Lesson 6: App navigation

_[Multiple activities and intents](slide3.xml)_

_[App bar\, navigation drawer\, and menus](slide10.xml)_

_[Fragments](slide18.xml)_

_[Navigation in an app](slide22.xml)_

_[More custom navigation behavior](slide33.xml)_

_[Navigation UI](slide43.xml)_

_[Summary](slide49.xml)_

<span style="color:#FAFAFA"> __Multiple activities and intents__ </span>

# Multiple screens in an app

__Sometimes app functionality may be separated into multiple screens__ \.

Examples:

View details of a single item \(for example\, product in a shopping app\)

Create a new item \(for example\, new email\)

Show settings for an app

Access services in other apps \(for example\, photo gallery or browse documents\)

---

So far we’ve looked at Android apps that have a single screen that is implemented as a single Activity. As you add more functionality to your app, it may make sense to separate the features into different screens within your app. One way to have different screens in your app is to implement them as individual Activities that each have a specific purpose (as shown by the examples mentioned above). This can make your code easier to maintain and reuse.

Resource:
Introduction to Activities

# Intent

* Requests an action from another app component\, such as another Activity
* An Intent usually has two primary pieces of information:
  * Action to be performed \(for example\, ACTION\_VIEW\, ACTION\_EDIT\, ACTION\_MAIN\)
  * Data to operate on \(for example\, a person’s record in the contacts database\)
* Commonly used to specify a request to transition to another Activity

---

Android uses a construct called an Intent to request an action from another component. For example, an Intent can specify a request to transition to another Activity. 
Although our discussion of Intents will focus on navigating between Activities, they can do much more. For example, an Intent could contain data for the destination Activity to use, such as details about an item to be displayed. Data can also be passed back to the source Activity.

Resources:
Intents and Intent Filters 
Intent Structure 


# Explicit intent

Fulfills a request  __using__   __a specific component__

Navigates internally to an Activity in your app

Navigates to a specific third\-party app or another app you've written

---

There are two primary types of Intents: explicit and implicit Intents. Explicit intents are the most strict, indicating a specific component that should handle the request. Explicit intents are commonly used when navigating between components within your app, and you know what the class name is. You can also use them to navigate to a known third-party app if you are absolutely sure what type of Intent they can handle. 

# Explicit intent examples

Navigate between activities in your app:

<span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> viewNoteDetail\(\) \{</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> intent = Intent\(</span>  <span style="color:#3F51B5">this</span>  <span style="color:#37474F">\, NoteDetailActivity::</span>  <span style="color:#3F51B5">class</span>  <span style="color:#37474F">\.java\)</span>

<span style="color:#37474F">   intent\.putExtra\(NOTE\_ID\, note\.id\)</span>

<span style="color:#37474F">   startActivity\(intent\)</span>

<span style="color:#37474F">\}</span>

Navigate to a specific external app:

<span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> openExternalApp\(\) \{</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> intent = Intent\(</span>  <span style="color:#388E3C">"com\.example\.workapp\.FILE\_OPEN"</span>  <span style="color:#37474F">\)</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">if</span>  <span style="color:#37474F"> \(intent\.resolveActivity\(packageManager\) \!= </span>  <span style="color:#3F51B5">null</span>  <span style="color:#37474F">\) \{</span>

<span style="color:#37474F">       startActivity\(intent\)</span>

<span style="color:#37474F">   \}</span>

<span style="color:#37474F">\}</span>

---

Transition: 1 click

We have two explicit Intent examples above: one where the destination activity is contained within our own app, and a second intent that navigates to an external app. Notice that in the second example we first check that we can resolve the Intent; that is, is there an app on the device that can handle this Intent? If so, then we can safely call startActivity() with that Intent. 

Intent Extras give us a means to pass data to the activity that will handle our request. 

Resource:
Example Explicit Intent 



# Implicit intent

Provides generic action the app can perform

Resolved using mapping of the data type and action to known components

Allows any app that matches the criteria to handle the request

---

Implicit intents on the other hand don’t specify an intended target, and instead provide just enough information for the system to resolve which component should handle the intent. For components that your app doesn’t own, this is the recommended type of intent. If multiple apps can handle the intent, the system launches the default app or lets the user select one. 

Unlike explicit intents, implicit intents don't depend on a specific component being available. 

Resources:
Intent
Common Intents 


# Implicit intent example

<span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> sendEmail\(\) \{</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> intent = Intent\(Intent\.ACTION\_SEND\)</span>

<span style="color:#37474F">    intent\.type = </span>  <span style="color:#388E3C">"text/plain"</span>

<span style="color:#37474F">    intent\.putExtra\(Intent\.EXTRA\_EMAIL\, emailAddresses\)</span>

<span style="color:#37474F">    intent\.putExtra\(Intent\.EXTRA\_TEXT\, </span>  <span style="color:#388E3C">"How are </span>  <span style="color:#388E3C">you</span>  <span style="color:#388E3C">?"</span>  <span style="color:#37474F">\)</span>

<span style="color:#3F51B5">    if</span>  <span style="color:#37474F"> \(intent\.resolveActivity\(packageManager\) \!= </span>  <span style="color:#3F51B5">null</span>  <span style="color:#37474F">\) \{</span>

<span style="color:#37474F">        startActivity\(intent\)</span>

<span style="color:#37474F">    \}</span>

<span style="color:#37474F">\}</span>

---

Here’s an example of creating an implicit intent to send an email on the device. We don’t mind which email app handles the request, as long as it's able to send the email for us.

Resource:
Email Intent

<span style="color:#FAFAFA"> __App bar\, navigation drawer\, and menus__ </span>

---

Let’s briefly discuss some of the common UI elements you’ll use to navigate your apps.

# App bar

![](img/Lesson%206%20App%20navigation1.png)

![](img/Lesson%206%20App%20navigation2.png)

---

At the top of the screen is the App Bar. It displays the name of your Activity or app. It provides the user with access to important actions in a predictable way, such as the overflow menu (represented by the 3 vertical dots) which displays additional menu options. It also has support for navigation (navigation drawer) or view switching (with tabs or drop-down lists).

Resource:
App bar


# Navigation drawer

![](img/Lesson%206%20App%20navigation3.png)

![](img/Lesson%206%20App%20navigation4.png)

---

The navigation drawer is an element that's often seen in apps. Open the drawer by tapping the hamburger icon (the three horizontal lines), or with a swipe in gesture from the left side of the screen. The navigation drawer lets you quickly navigate to locations in your app. The options menu and the navigation drawer both use menus behind the scenes.

Resources:
Use action views and action providers 
Navigation Drawer Usage 


# Menu

Define menu items in XML menu resource \(located in res/menu folder\)

<span style="color:#37474F"><menu xmlns:android=</span>  <span style="color:#388E3C">"http://schemas\.android\.com/apk/res/android"</span>

<span style="color:#37474F">   xmlns:app=</span>  <span style="color:#388E3C">"http://schemas\.android\.com/apk/res\-auto"</span>  <span style="color:#37474F">></span>

<span style="color:#37474F">   <item</span>

<span style="color:#37474F">       android:id=</span>  <span style="color:#388E3C">"@\+id/action\_settings"</span>

<span style="color:#37474F">       android:orderInCategory=</span>  <span style="color:#388E3C">"100"</span>

<span style="color:#37474F">       android:title=</span>  <span style="color:#388E3C">"@string/action\_settings"</span>

<span style="color:#37474F">       app:showAsAction=</span>  <span style="color:#388E3C">"never"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">\</menu></span>

---

There are different types of menus provided by the framework: options menus, context menus, and popup menus. Menu resources are located in the res/menu directory, and are defined with a menu tag. In your menu XML file, you can set the string resources that this menu item uses as a title, an id, and several other options like ordering or icons.

Resource:
Menus 


# More menu options

<span style="color:#37474F">\<menu></span>

<span style="color:#37474F">   <group android:checkableBehavior=</span>  <span style="color:#388E3C">"single"</span>  <span style="color:#37474F">></span>

<span style="color:#37474F">       <item</span>

<span style="color:#37474F">           android:id=</span>  <span style="color:#388E3C">"@\+id/nav\_home"</span>

<span style="color:#37474F">           android:icon=</span>  <span style="color:#388E3C">"@drawable/ic\_menu\_camera"</span>

<span style="color:#37474F">           android:title=</span>  <span style="color:#388E3C">"@string/menu\_home"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">       <item</span>

<span style="color:#37474F">           android:id=</span>  <span style="color:#388E3C">"@\+id/nav\_gallery"</span>

<span style="color:#37474F">           android:icon=</span>  <span style="color:#388E3C">"@drawable/ic\_menu\_gallery"</span>

<span style="color:#37474F">           android:title=</span>  <span style="color:#388E3C">"@string/menu\_gallery"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">       <item</span>

<span style="color:#37474F">           android:id=</span>  <span style="color:#388E3C">"@\+id/nav\_slideshow"</span>

<span style="color:#37474F">           android:icon=</span>  <span style="color:#388E3C">"@drawable/ic\_menu\_slideshow"</span>

<span style="color:#37474F">           android:title=</span>  <span style="color:#388E3C">"@string/menu\_slideshow"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">   \</group></span>

<span style="color:#37474F">\</menu></span>

---

Here is the XML for a navigation drawer. It demonstrates the use of icons and groups. We won’t use the navigation drawer until later in the lesson, but its underlying representation as a menu is useful to mention briefly now. 

# Options menu example

<span style="color:#37474F"><menu xmlns:android=</span>  <span style="color:#388E3C">"http://schemas\.android\.com/apk/res/android"</span>

<span style="color:#37474F">   xmlns:app=</span>  <span style="color:#388E3C">"http://schemas\.android\.com/apk/res\-auto"</span>  <span style="color:#37474F">></span>

<span style="color:#37474F">   <item android:id=</span>  <span style="color:#388E3C">"@\+id/action\_intent"</span>

<span style="color:#37474F">       android:title=</span>  <span style="color:#388E3C">"@string/action\_intent"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">   <item</span>

<span style="color:#37474F">       android:id=</span>  <span style="color:#388E3C">"@\+id/action\_settings"</span>

<span style="color:#37474F">       android:orderInCategory=</span>  <span style="color:#388E3C">"100"</span>

<span style="color:#37474F">       android:title=</span>  <span style="color:#388E3C">"@string/action\_settings"</span>

<span style="color:#37474F">       app:showAsAction=</span>  <span style="color:#388E3C">"never"</span>  <span style="color:#37474F"> /></span>

<span style="color:#37474F">\</menu></span>

![](img/Lesson%206%20App%20navigation5.png)

---

Transition: 1 click

Let’s look at an options menu example in an Activity. Add a menu item by creating a new item tag and giving it an ID and title. We now have a new menu item that does nothing when we click it.

# Inflate options menu

<span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F"> __onCreateOptionsMenu__ </span>  <span style="color:#37474F">\(menu: Menu\): Boolean \{</span>

<span style="color:#37474F">    menuInflater\.inflate\(R\.menu\.main\, menu\)</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">return</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">true</span>

<span style="color:#37474F">\}</span>

---

To inflate the menu, we need to override onCreateOptionsMenu() within the Activity. Once you add this code, the menu options will show in the app bar. Some of the default project templates come with onCreateOptionsMenu() already implemented.

Resource:
Create Options Menu

# Handle menu options selected

<span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> onOptionsItemSelected\(item: MenuItem\): Boolean \{</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">when</span>  <span style="color:#37474F"> \(item\.itemId\) \{</span>

<span style="color:#37474F">        R\.id\.action\_intent \-> \{</span>

<span style="color:#37474F">            </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> intent = Intent\(Intent\.ACTION\_WEB\_SEARCH\)</span>

<span style="color:#37474F">            intent\.putExtra\(SearchManager\.QUERY\, </span>  <span style="color:#388E3C">"pizza"</span>  <span style="color:#37474F">\)</span>

<span style="color:#37474F">            </span>  <span style="color:#3F51B5">if</span>  <span style="color:#37474F"> \(intent\.resolveActivity\(packageManager\) \!= </span>  <span style="color:#3F51B5">null</span>  <span style="color:#37474F">\) \{</span>

<span style="color:#37474F">                startActivity\(intent\)</span>

<span style="color:#37474F">            \}</span>

<span style="color:#37474F">        \}</span>

<span style="color:#37474F">        </span>  <span style="color:#3F51B5">else</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F">\-></span>  <span style="color:#37474F"> </span>  <span style="color:#37474F">Toast\.makeText\(</span>  <span style="color:#3F51B5">this</span>  <span style="color:#37474F">\,</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F">item\.title\,</span>  <span style="color:#37474F"> </span>  <span style="color:#37474F">Toast\.LENGTH\_LONG\)\.show\(\)</span>

__    \.\.\.__

---

To respond to the user selecting a menu item, override onOptionsItemSelected() within the Activity as shown in the example. Now our menu will conditionally launch a web search Intent for pizza, or show a toast message depending on the menu item.

Resource:
Create Options Menu
Add and handle actions

---

As we navigate to different screens in our app, we can use different activities. Or we can use fragments.

# Fragments for tablet layouts

![](img/Lesson%206%20App%20navigation6.png)

---

Fragments were first introduced into the Android platform in Android 3.0 (the Honeycomb release), when support for tablets was added. An Activity that displayed a list of items would look silly if the list items took up the entire width of the screen on a tablet. Hence, the need for fragments arose. With the introduction of fragments, on a tablet device, an activity could display a list fragment on the left, and a detail fragment on the right. On a phone device, an activity could display one fragment at a time because of the smaller screen real estate available. 

It turns out that breaking up the structure of your UI into fragments is useful in other contexts besides building for tablets. Fragments are a core concept to understand when building apps in Android. 

# Fragment

Represents a behavior or portion of the UI in an activity \("microactivity"\)

Must be hosted in an activity

Lifecycle tied to host activity's lifecycle

Can be added or removed at runtime

---

More formally, a fragment represents a behavior or a portion of the UI in an Activity. You can think of it as a "micro activity". You can display multiple fragments in a single activity (as in the tablet case), or reuse a fragment in multiple activities. You can think of a fragment as a modular section of an activity that has its own lifecycle, receives its own input events, and which you can add or remove while the activity is running.

Resources:
Fragments: Past, Present, and Future (Android Dev Summit '19) 
Fragments 



# Note about fragments

Use the AndroidX version of the Fragment class\. \(androidx\.fragment\.app\.Fragment\)\.

Don't use the platform version of the Fragment class \(android\.app\.Fragment\)\, which was deprecated\.

---

When using the Fragment class, be sure you use the version provided in the androidx package, rather than the Fragment class provided in the platform (which originated in API level 11 and was deprecated in API level 28).

Resource:
Fragment

# Navigation within an app

---

As you add more fragments to your app, you will want to consider how to navigate between them.

# Navigation component

* Collection of libraries and tooling\, including an integrated editor\, for creating navigation paths through an app
* Assumes one Activity per graph with many Fragment destinations
* Consists of three major parts:
  * Navigation graph
  * Navigation Host \(NavHost\)
  * Navigation Controller \(NavController\)

---

The navigation component is a collection of libraries, tooling, and IDE integrations for creating navigation paths through an app. It works best with the paradigm of "one activity, many fragments" over having many activities. It’s composed of three parts that work together analogous to how you might experience watching television or listening to the radio. 
The Navigation Graph represents a set of destination fragments or activities your app is able to display. In our TV analogy, this would be a list of available programs to watch.
The Navigation Host is the container that displays the destinations listed in your navigation graph, like a TV or monitor screen. 
The Navigation Controller is the means of navigating between different destinations. In our TV analogy, this would be the equivalent of a TV remote with which to switch to different programs or channels. 

Fragments can link to other fragments, creating a full graph of destinations, while Activities can only be a terminal destination for the graph, meaning that they are always an endpoint on the graph.  (Each activity can have its own navigation graph, but this provides less benefit than having all of the destinations in a single graph.)

# Add dependencies

In build\.gradle\, under dependencies:

<span style="color:#37474F">implementation</span>  <span style="color:#37474F"> </span>  <span style="color:#388E3C">"androidx\.navigation:navigation\-fragment\-ktx:</span>  <span style="color:#C53929">$nav\_version</span>  <span style="color:#388E3C">"</span>

<span style="color:#37474F">implementation</span>  <span style="color:#37474F"> </span>  <span style="color:#388E3C">"androidx\.navigation:navigation\-ui\-ktx:</span>  <span style="color:#C53929">$nav\_version</span>  <span style="color:#388E3C">"</span>

---

To begin working with the Navigation component, we need to add some dependencies to the build.gradle file. For the nav_version,  look at the Navigation library release notes page for the current stable release.

Resources:
Navigation 
Set up your environment 

# Navigation host (NavHost)

__<fragment__

__   __  __ android:id=__  <span style="color:#388E3C">"</span>  <span style="color:#388E3C"> __@\+id/nav\_host__ </span>  <span style="color:#388E3C">"</span>

__    android:name=__  <span style="color:#388E3C">"</span>  <span style="color:#388E3C"> __androidx\.navigation\.fragment\.NavHostFragment__ </span>  <span style="color:#388E3C">"</span>

__    android:layout\_width=__  <span style="color:#388E3C">"match\_parent"</span>

__    android:layout\_height=__  <span style="color:#388E3C">"match\_parent"</span>

__    __  __app:defaultNavHost=__  <span style="color:#388E3C"> __"true"__ </span>

__    __  __app:navGraph=__  <span style="color:#388E3C"> __"@navigation/nav\_graph\_name"__ </span>  __/>__

---

Let’s start with our navigation host, which is an empty container where destinations are swapped in and out as a user navigates through your app. A navigation host must implement the NavHost interface. The default NavHost implementation, NavHostFragment, handles swapping fragment destinations for you, so let’s use that.

Use the fragment XML tag to declare the NavHostFragment within the activity XML layout. This NavHostFragment must be declared within the Activity that will house all the Fragments we’ll be switching between. Note a couple of important attributes that we’ll be revisiting later. 
android:name attribute has a value that is the fully qualified class name of our fragment
app:defaultNavHost is set to true to ensure that this navigation host will intercept the system's Back button taps
app:navGraph points to the navigation graph listing all of our fragment destinations

Resource:
Add a NavHost to an activity 


# Navigation graph

<span style="color:#202124">New resource type </span>  __located in __  __res/navigation__  __ directory__

__XML file containing all of your navigation destinations and actions __

__Lists all the \(__  __Fragment/Activity__  __\) destinations that can be navigated to __

__Lists the associated actions to traverse between them __

__Optionally lists animations for entering or exiting__

![](img/Lesson%206%20App%20navigation7.png)

---

You will be creating a navigation graph, which is a resource file that contains all your destinations and the actions to navigate between them. It represents all the possible navigation paths within your Activity. This example shows a visual representation of a navigation graph for a sample app with destinations and the actions that connect them (represented by arrows).


# Navigation Editor in Android Studio

![](img/Lesson%206%20App%20navigation8.png)

---

In Android Studio, the Design view of the navigation graph resource file shows you a visual representation of the connections between different destinations for your Activity. This is called the Navigation Editor in Android Studio. You can link destinations (the arrow button) and set entry points (the home button) from this interface.

# Creating a Fragment

Extend Fragment class

Override onCreateView\(\)

Inflate a layout for the Fragment that you have defined in XML

<span style="color:#3F51B5">class</span>  <span style="color:#37474F"> DetailFragment : Fragment\(\) \{</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> onCreateView\(inflater: LayoutInflater\, container: ViewGroup?\,</span>

<span style="color:#37474F">           savedInstanceState: Bundle?\): View? \{</span>

<span style="color:#37474F">       </span>  <span style="color:#3F51B5">return</span>  <span style="color:#37474F"> inflater\.inflate\(R\.layout\.detail\_fragment\, container\, </span>  <span style="color:#3F51B5">false</span>  <span style="color:#37474F">\)</span>

<span style="color:#37474F">   \}</span>

<span style="color:#37474F">\}</span>

---

Transition: 1 click

Let’s talk about fragment destinations next. To create a fragment, extend the Fragment class. In an Activity, we would override the onCreate() method, but within a fragment’s onCreate() method, it isn’t guaranteed that any of the host activity’s view hierarchy is initialized. Instead, layout inflation is done in the fragment’s onCreateView() method. We recommended only inflating views in onCreateView().

Resources:
Fragment 
Fragments Guide 

# Specifying Fragment destinations

__Fragment destinations are denoted by the __  __action__  __ tag in the navigation graph\. __

__Actions can be defined in XML directly or in the Navigation Editor by dragging from source to destination\. __

__Autogenerated action IDs take the form of __  __action\_\<sourceFragment>\_to\_\<destinationFragment>__  __\.__

---

Actions can be defined in XML directly, or using the Navigation Editor. From the Navigation Editor's navigation graph UI, specify destination paths by dragging from a source fragment to a destination fragment. This automatically gives the action an ID in the form action_<sourceFragment>_to_<destinationFragment>. You can subsequently rename the action ID using a shorter name. 

# Example fragment destination

<span style="color:#37474F"><fragment</span>

<span style="color:#37474F">    android:id=</span>  <span style="color:#388E3C">"@\+id/welcomeFragment"</span>

<span style="color:#37474F">    android:name=</span>  <span style="color:#388E3C">"com\.example\.android\.navigation\.WelcomeFragment"</span>

<span style="color:#37474F">    android:label=</span>  <span style="color:#388E3C">"fragment\_welcome"</span>

<span style="color:#37474F">    tools:layout=</span>  <span style="color:#388E3C">"@layout/fragment\_welcome"</span>  <span style="color:#37474F"> ></span>

<span style="color:#37474F">    </span>  <span style="color:#37474F"> __<action__ </span>

<span style="color:#37474F"> __        android:id=__ </span>  <span style="color:#388E3C"> __"@\+id/action\_welcomeFragment\_to\_detailFragment"__ </span>

<span style="color:#37474F"> __        app:destination=__ </span>  <span style="color:#388E3C"> __"@id/detailFragment"__ </span>  <span style="color:#37474F"> __ />__ </span>

<span style="color:#37474F">\</fragment></span>

---

This snippet shows how you can specify fragment destinations directly in XML.

# Navigation Controller (NavController)

NavController manages UI navigation in a navigation host\.

Specifying a destination path only names the action\, but it doesn’t execute it\.

To follow a path\, use NavController\.

---

After naming all your paths, to actually navigate to them, you need to use the NavController when the button or link in your UI is selected. 

Resource:
Navigate to a destination

# Example NavController

<span style="color:#3F51B5">class</span>  __ MainActivity : AppCompatActivity\(\) \{__

__   __  <span style="color:#3F51B5">override fun</span>  __ onCreate\(savedInstanceState: Bundle?\) \{__

__      __  __ \.\.\.__

__       __  <span style="color:#3F51B5"> __val__ </span>  __ navController = findNavController\(R\.id\.myNavHostFragment\)__

__   \}__

__   __  <span style="color:#3F51B5">fun</span>  __ navigateToDetail\(\) \{__

__       __  __navController\.navigate\(R\.id\.action\_welcomeFragment\_to\_detailFragment\)__

__   \}__

__\}__

---

In your Activity, your NavController will be tied to the navigation host. navigate will navigate to a destination fragment with no arguments.

# More custom navigation behavior

# Passing data between destinations

Using Safe Args:

Ensures arguments have a valid type

Lets you provide default values

Generates a \<SourceDestination>Directions class with methods for every action in that destination

Generates a class  __to set arguments __ for every named action

Generates a \<TargetDestination>Args class providing access to the destination's arguments

---

In many cases, your destination fragment will need some data to construct itself. The Navigation component has a Gradle plugin called Safe Args that generates simple object and builder classes for type-safe navigation, and access to any associated arguments. Safe Args is strongly recommended when navigating and passing data between destinations to ensure type-safety.

# Setting up Safe Args

In the project build\.gradle file:

__buildscript \{__

__   repositories \{__

__       google\(\)__

__   \}__

__   dependencies \{__

__       classpath __  <span style="color:#388E3C">"androidx\.navigation:navigation\-safe\-args\-gradle\-plugin:</span>  <span style="color:#C53929">$nav\_version</span>  <span style="color:#388E3C">"</span>

__   \}__

__\}__

__In the app's or module's __  __build\.gradle__  __ file:__

__apply plugin: __  <span style="color:#388E3C">"androidx\.navigation\.safeargs\.kotlin"</span>

---

Transition: 1 click

To get started with Safe Args, you will need to edit two of your Gradle files. First, edit the top level build.grade file to add a classpath dependency for the Safe Args plugin. Next, add a line in your app or module's build.gradle file to apply the plugin.

Resource:
Use Safe Args to pass data with type safety 

# Sending data to a Fragment

Create arguments the destination fragment will expect\.

Create action to link from source to destination\.

Set the arguments in the action method on \<Source>FragmentDirections\.

Navigate according to that action using the Navigation Controller\.

Retrieve the arguments in the destination fragment\.

---

After setting up the Gradle dependencies and plugins for Safe Args, here are the steps you must complete to send data between fragments. As a concrete example, the next few slides refer to an app that takes in two numbers on one fragment, and then sends them to the next fragment to be multiplied together.

Resource:
Pass data between destinations

# Destination arguments

__<fragment__

__    android:id=__  <span style="color:#388E3C">"@\+id/multiplyFragment"</span>

__    android:name=__  <span style="color:#388E3C">"com\.example\.arithmetic\.MultiplyFragment"</span>

__    android:label=__  <span style="color:#388E3C">"MultiplyFragment"</span>  __ >__

__   __  __ __  __<argument__

__        android:name=__  <span style="color:#388E3C"> __"number1"__ </span>

__        app:argType=__  <span style="color:#388E3C"> __"float"__ </span>

__        android:defaultValue=__  <span style="color:#388E3C"> __"1\.0"__ </span>  __ />__

__    <argument__

__        android:name=__  <span style="color:#388E3C"> __"number2"__ </span>

__        app:argType=__  <span style="color:#388E3C"> __"float"__ </span>

__        android:defaultValue=__  <span style="color:#388E3C"> __"1\.0"__ </span>  __ />__

__ \</fragment>__

![](img/Lesson%206%20App%20navigation9.png)

---

Define arguments on the destination fragment that will receive them. Android Studio provides a helpful way to create arguments for a fragment within the Navigation Editor. It creates the XML code in our navigation graph for us. In this example, we have set two arguments (of type Float) that MultiplyFragment expects to receive.

Resources:
Define destination arguments

# Supported argument types

| Type | Type Syntax<br />app:argType=<type> | Supports Default <br />Values | Supports Null <br />Values |
| :-: | :-: | :-: | :-: |
| Integer | "integer" | Yes | No |
| Float | "float" | Yes | No |
| Long | "long" | Yes | No |
| Boolean | "boolean" | Yes  ("true" or "false") | No |
| String | "string" | Yes | Yes |
| Array | above type + "[]"<br />(for example, "string[]" "long[]") | Yes  (only "@null") | Yes |
| Enum | Fully qualified name of the enum | Yes | No |
| Resource reference | "reference" | Yes | No |

---

You aren’t just limited to floats, as in the example code. You can pass most types as arguments in a fragment. Primitive types like numbers, booleans, and strings require their lowercase name as the argument type. You are also able to pass an array of those types. Enum classes require the fully qualified name and resources from the res/ directory require “reference” as the argument type. 
Resource:
Supported argument types 

# Supported argument types: Custom classes

| Type | Type Syntax<br />app:argType=<type> | Supports Default <br />Values | Supports Null <br />Values |
| :-: | :-: | :-: | :-: |
| Serializable | Fully qualified class name | Yes (only "@null") | Yes |
| Parcelable | Fully qualified class name | Yes (only "@null") | Yes |

---

We haven’t talked much in this course about Serializable or Parcelable, but we'll include them for completion’s sake. Serialization is the process of taking an object’s state and converting it into a stream of data for transmission. Serializable is the interface you would implement for a pure JVM class. Parcelable does serialization as well, but in a way that’s more optimized for Android. With either, the intent system we learned about earlier and in the Navigation component, you will need to use one or the other to pass custom classes as arguments. 

Resources:
Serializable
Parcelable 
Supported argument types 

# Create action from source to destination

In nav\_graph\.xml:

__<fragment__

__    android:id=__  <span style="color:#388E3C">"@\+id/fragment\_input"</span>

__    android:name=__  <span style="color:#388E3C">"com\.example\.arithmetic\.InputFragment"</span>  __>__

__ __  __   __  __<action__

__        android:id=__  <span style="color:#388E3C"> __"@\+id/action\_to\_multiplyFragment"__ </span>

__        app:destination=__  <span style="color:#388E3C"> __"@id/multiplyFragment"__ </span>  __ />__

__\</fragment>__

![](img/Lesson%206%20App%20navigation10.png)

---

Let’s look at a more complete example. In our navigation graph, we’ve created an action from the InputFragment to the MultiplyFragment. 

# Navigating with actions

In InputFragment\.kt:

<span style="color:#3F51B5">override fun</span>  __ onViewCreated\(view: View\, savedInstanceState: Bundle?\) \{__

__   __  <span style="color:#3F51B5">super</span>  __\.onViewCreated\(view\, savedInstanceState\)__

__   binding\.button\.setOnClickListener \{__

__       __  <span style="color:#3F51B5">val</span>  __ n1 = binding\.number1\.text\.toString\(\)\.toFloatOrNull\(\) ?: __  <span style="color:#C53929">0\.0</span>

__       __  <span style="color:#3F51B5">val</span>  __ n2 = binding\.number2\.text\.toString\(\)\.toFloatOrNull\(\) ?: __  <span style="color:#C53929">0\.0</span>

__       __  <span style="color:#3F51B5"> __val__ </span>  __ action__  __ = __  __InputFragmentDirections\.actionToMultiplyFragment\(n1\, n2\)__

__       view\.findNavController\(\)\.navigate\(action\)__

__   \}__

__\}__

---

In the onClickListener of our source fragment, we call the action function on the Directions class (called InputFragmentDirections), both of which were created for us. Because the target destination (MultiplyFragment) requires two arguments, the action class for that transition also has two arguments. After assembling those, we can call navigate() on the NavController. 

In this example, we are using data binding for our fragments. It’s also important to note that while you can put the setOnClickListener inside onCreateView, putting it inside onViewCreated removes the safety (?.) checks you would have to do. 

# Retrieving Fragment arguments

<span style="color:#3F51B5">class</span>  <span style="color:#37474F"> MultiplyFragment : Fragment\(\) \{</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> args: MultiplyFragmentArgs </span>  <span style="color:#3F51B5">by</span>  <span style="color:#37474F"> navArgs\(\)</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">lateinit</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">var</span>  <span style="color:#37474F"> binding: FragmentMultiplyBinding</span>

<span style="color:#37474F">   </span>  <span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> onViewCreated\(view: View\, savedInstanceState: Bundle?\) \{</span>

<span style="color:#37474F">       </span>  <span style="color:#3F51B5">super</span>  <span style="color:#37474F">\.onViewCreated\(view\, savedInstanceState\)</span>

<span style="color:#37474F">       </span>  <span style="color:#3F51B5"> __val__ </span>  <span style="color:#37474F"> __ number1 = args\.number1__ </span>

<span style="color:#37474F"> __       __ </span>  <span style="color:#3F51B5"> __val__ </span>  <span style="color:#37474F"> __ number2 = args\.number2__ </span>

<span style="color:#37474F">       </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> result = number1 \* number2</span>

<span style="color:#37474F">       binding\.output\.text = </span>  <span style="color:#388E3C">"</span>  <span style="color:#C53929">$\{</span>  <span style="color:#388E3C">number1</span>  <span style="color:#C53929">\}</span>  <span style="color:#388E3C"> \* </span>  <span style="color:#C53929">$\{</span>  <span style="color:#388E3C">number2</span>  <span style="color:#C53929">\}</span>  <span style="color:#388E3C"> = </span>  <span style="color:#C53929">$\{</span>  <span style="color:#388E3C">result</span>  <span style="color:#C53929">\}</span>  <span style="color:#388E3C">"</span>

<span style="color:#37474F">   \}</span>

<span style="color:#37474F">\}</span>

---

Finally, we are able to retrieve our arguments. MultiplyFragmentArgs is another generated class based on our navigation graph. navArgs comes from androidx.navigation.fragment.navArgs. After the fragment’s view is created, we can access and use the arguments. In this case, we update a TextView with the product of the two numbers. 



# Navigation UI

---

NavigationUI is a class that works to connect elements like the navigation drawer, bottom navigation bar, and menus to your Navigation Controller. 

# Menus revisited

<span style="color:#3F51B5">override</span>  <span style="color:#37474F"> </span>  <span style="color:#3F51B5">fun</span>  <span style="color:#37474F"> onOptionsItemSelected\(item: MenuItem\): Boolean \{</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">val</span>  <span style="color:#37474F"> navController = findNavController\(R\.id\.nav\_host\_fragment\)</span>

<span style="color:#37474F">    </span>  <span style="color:#3F51B5">return</span>  <span style="color:#37474F"> item\.onNavDestinationSelected\(navController\) ||</span>

<span style="color:#37474F">            </span>  <span style="color:#3F51B5">super</span>  <span style="color:#37474F">\.onOptionsItemSelected\(item\)</span>

<span style="color:#37474F">\}</span>

---

Earlier in the lesson, we learned how to navigate between Activities using intents. Now that we have the Navigation Component set up, let’s replace that functionality to use the NavigationUI class. If the menu item id is the same as an action or destination id, NavigationUI will route to the proper place. This frees us from having to handle each menu item separately.

Resources:
onNavDestinationSelected


# DrawerLayout for navigation drawer

__<androidx\.drawerlayout\.widget\.DrawerLayout    __

__    android:id=__  <span style="color:#388E3C"> __"@\+id/drawer\_layout"__ </span>  __ \.\.\.>__

__    <fragment__

__        android:name=__  <span style="color:#388E3C">"androidx\.navigation\.fragment\.NavHostFragment"</span>

__        android:id=__  <span style="color:#388E3C">"@\+id/nav\_host\_fragment"</span>  __ \.\.\. />__

__    <com\.google\.android\.material\.navigation\.NavigationView__

__        android:id=__  <span style="color:#388E3C">"@\+id/nav\_view"</span>

__        app:menu=__  <span style="color:#388E3C">"@menu/activity\_main\_drawer"</span>  __ __  __\.\.\. />__

__\</androidx\.drawerlayout\.widget\.DrawerLayout>__

---

Using a navigation drawer requires a bit of setup, in addition to the menu XML for the navigation drawer that we saw earlier. In the layout XML file for your activity, declare a DrawerLayout as the root view. Within the DrawerLayout, add a layout for the main UI content (which is NavHostFragment in this case), and another view for the contents of the navigation drawer (which is the NavigationView). Notice that the NavigationView app:menu attribute points to the activity_main_drawer menu XML resource, which is where the menu items for our navigation drawer are defined.

Resources:
Add a navigation drawer 
Navigation Views 


# Finish setting up navigation drawer

Connect DrawerLayout to navigation graph:

<span style="color:#3F51B5">val</span>  appBarConfiguration = AppBarConfig\(navController\.graph\, drawer\)

__Set up __  __NavigationView__  __ for use with a __  __NavController__  __:__

<span style="color:#3F51B5">val</span>  __ navView = findViewById\<NavigationView>\(R\.id\.nav\_view\)__

__navView\.setupWithNavController\(navController\)__

---

Transition: 1 click
Within your Activity code, connect the DrawerLayout to the navigation graph. Then set up the NavigationView with the NavController. This will call MenuItem.onNavDestinationSelected when a menu item is selected. The selected item in the NavigationView will automatically be updated when the destination changes.

Resource:
Add a navigation drawer 

# Understanding the back stack

---

Transitions: 3 clicks

Let’s talk about another concept that you’ll encounter as you deal with app navigation: the back stack. Within your app, Android keeps track of the activities you’ve opened as a collection of activities in a stack, known as the back stack. 

When your app first launches, the first activity gets added onto the back stack. As you traverse through an app, Android has a "last in, first out" approach for keeping track of the activities you’ve visited. Android adds the most recent Activity you just started on top of the stack.
 
State 1: A new Activity (Activity 2) is started and added to the top of the stack. Activity 2 now has the focus and the user can interact with it.

State 2: When you start another (Activity 3), it gets added to the top of the stack. Activity 2 is stopped, and Activity 3 now has the focus.

State 3: When you tap the Back button, Android pops Activity 3 off the stack and finishes it. Activity 2 is now on top of the stack and gets resumed. 

Resource:
Understand Tasks and Back Stack


# Fragments and the back stack

---

Transitions: 3 clicks

Conveniently, when using fragments with the Navigation component, there is also a back stack of fragments that gets maintained as we traverse through different fragments in our app. In this example:

State 1: We start with Activity 2 displaying Fragment 1. (Activity 1 is currently stopped and in the background.)

State 2: Then within Activity 2, we navigate to another Fragment (Fragment 2), which gets adds to the top of the back stack within its host Activity.

State 3: When you tap the Back button, Fragment 2 is popped off the back stack and Fragment 1 would become the active Fragment again.

Note that although Fragments have their own lifecycle within the host Activity, their lifecycle is directly tied to that of the Activity. 

We'll talk about the Activity and Fragment lifecycles and the back stack in more detail in the next lesson.


# Summary

In Lesson 6\, you learned how to:

<span style="color:#1C4587">[Use explicit and implicit intents to navigate between Activities](slide4.xml)</span>

<span style="color:#1C4587">S</span>  <span style="color:#1C4587">[tructure apps using fragments instead of putting all UI code in the Activity](slide19.xml)</span>

<span style="color:#1C4587">[Handle navigation with NavGraph\, NavHost\, and NavController](slide22.xml)</span>

<span style="color:#1C4587">U</span>  <span style="color:#1C4587">[se Safe Args to pass data between fragment destinations](slide35.xml)</span>  <span style="color:#1C4587"> </span>

<span style="color:#1C4587">[Use NavigationUI to hook up top app bar\, navigation drawer\, and bottom navigation](slide43.xml)</span>

<span style="color:#1C4587">[Android keeps a back stack of all the destinations you’ve visited\, with each new destination being pushed onto the stack\.](slide47.xml)</span>

# Learn more

_[Principles of navigation](https://developer.android.com/guide/navigation/navigation-principles)_

_[Navigation component](https://developer.android.com/guide/navigation/navigation-getting-started)_

_[Pass data between destinations](https://developer.android.com/guide/navigation/navigation-pass-data)_

_[NavigationUI](https://developer.android.com/guide/navigation/navigation-ui)_

# Pathway

![](img/Lesson%206%20App%20navigation11.png)

Practice what you’ve learned bycompleting the pathway:

_[Lesson 6: App navigation](http://developer.android.com/courses/pathways/android-development-with-kotlin-6)_

---





