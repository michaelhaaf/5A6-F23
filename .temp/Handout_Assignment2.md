# Assignment #2: Multi-Screen CRUD Kotlin Multiplatform / Compose Multiplatform App

* Worth 5% of grade\.  Due Apr 18 by 4:00pm\.  This is an individual assignment\.
* For this assignment\, you will create a multi\-screen mobile app that runs on two platforms\(\*\) \(iOS and Android\)\, and uses the multiplatform technologies taught in class\.
  * \(\*\) Assuming the recent iOS compile issues can be worked out by end of class on Friday\.  Otherwise\, just Android is required\.
* The topic of the app is of your choice
  * Recommendation: As before\, choose a screen/subject that aligns with your project\.  Try to focus on something different than your teammates\.
  * Recommendation: Continue by extending your assignment \#1\.  But\, you are not required to do so
* Key Functional Requirements:
  * Implement a minimum of 5 CR2UD operations
    * 4 \(CRUD\) may work for a single item at a time
    * 1 \(R\) must display a list \(i\.e\.\, getAll\)
  * Must have two "functional" screens in your domain of choice and two "information" screens \(e\.g\.\, About Us and Contact Us are information screens\)\.
    * Functional screens must get appropriate user input \(button and/or text input\)\.
      * Recommend you identify at least one functional screen that would be a useful additional contribution to your group project \(i\.e\.\, differs from teammates'\)
      * Update what is on the functional screens appropriately based on user input \(e\.g\.\, using mutableState\, rememberScreenModel\, etc\.\)
    * Information screen must show some effort to look interesting and informative\.  They do not need to be interactive\.  They may share "content" with your teammates information screens\, but must be different in their UI design if you do so\.
    * Note: Do not make the "hard\-wired" kinds of short\-cuts we were using in the Frog example in class \(those were just to help focus learning on other elements\)
  * Must implement a navigation bar that allows user to move to different screens and that works with device back button
* Additional Requirements:  Your program must…
  * Apply the Model\-View\-ViewModel design pattern\, as taught in class
  * Be based on the AppKickstarter template and programmed in Kotlin
  * Use the Voyager Screen/ScreenModel approach for navigation
  * Use the Mongo Realm database as taught in class\.  Local is ok\.  Sync is good if kinks can be worked out\.
  * Show good separation of state into stateful and stateless components\, where applicable\.
  * Contain multiple UI components on each screen and show good attention to layout
  * All screens must use Material design and share a common look and feel\.  Layouts should be the same where appropriate\.
  * Show reasonable attention to styling/theming throughout site

* The code must be documentation internally and contain a Readme file
  * The internal documentation should be informative and meaningful \(i\.e\.\, not vacuous\)
  * The Readme should give a high\-level indication of what the product is and how to use it\.  If there are any known issues\, they should be described/explained in the Readme\.  The Readme file should live at the root level of the project\.
* The code must compile and run\.
  * If you submit something with compile errors or that shows no meaningful output\, a high penalty will be assessed\, as appropriate\.
* The app should be usable – with clear wording/instructions and understandable\, easy\-to\-use interface
* Marking Scheme:
  * 40% Functionality
  * 15% Appropriate Design for Navigation and Database Use
  * 15% Styling/Layout
  * 15% Documentation
  * 15% Usability/Design
  * 10% Bonus: Works on Realm Sync online and Local Realm
* Submission:
  * Submit zip file of entire project on Lea\.
  * You will demo you work the morning after it is due\.
* Late Penalty:
  * Late submissions lose 10% per day to a maximum of 1 day \(specifically: midnight the next day\)
  * Nothing accepted after 1 day without prior arrangement and a grade of zero may be given\.
  * Strong Recommendation: Submit incomplete version ON TIME with explanation of what is not done\.  Submit completed version the next day\.  This will likely result in a lower penalty than just submitting late\.
* Original work\!
  * "Your submitted work must be clear\, complete\, and YOUR OWN\.  You must be prepared to explain any of your work to me in person\.  Failure to be able to defend your work or to be able to do a similar question in front of me in person can/will void any grade you get on this assignment\."
  * Any code snippets copied or highly inspired from a 3rd party source must be explicitly indicated in the code documentation or Readme\.  The total amount of such non\-original code should be a small portion of your code\.

