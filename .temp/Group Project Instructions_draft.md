# Group Project

* Worth 30% of grade\, Due June 30\, with final presentations & demos on June 30 in class \(in the afternoon\)
* For the group project\, your team must develop a multi\-screen\, multi\-platform mobile CR2UD application with 3 data repositories
* Key Technical Requirements:
  * Must implement a "CR2UD" application \(R2 = read single and read all\) in Flutter or Kotlin Multiplatform\.
  * Must have 3 sources of data\.  Each team member must have implementation responsibility for one source of data\. \[ 2 sources for group of 2 \]
  * Must use a declarative UI approach \(Flutter or Compose\) with separation of concerns between display and data \(e\.g\.\, MVVM approach\)
  * Must use a serverless approach with an online database \(e\.g\.\, Firebase or MongoDb\) backing the data model
  * Must include a user login/register capability with associated serverless authentication \(e\.g\.\, Firebase or MongoDb\)
  * Important source code files must be appropriately documented meaningfully\.
  * All files should include documentation at the top indicating which team member\(s\) did the main coding for that file
* Key Functional Requirements:
  * Must have at least three functional screens \(ideally at least one per data source\)\. CR2UD operations may be split as appropriate across screens\.
  * Must implement a navigation approach that allows user to move to different screens and that works with device back button \(e\.g\.\, NavBar\, but other approaches are possible\)
  * Must gate access to some UI elements and associated data access based on whether user is logged in or not\.
  * Must have an "About Us" screen that describes your team and the motivation for the app\.
  * Must have at least one information screen in addition to the About Us screen\.
  * All screens must use Material design and share a common look and feel\.
  * The user should be able to perform all interactions with the application by starting the app and then navigating appropriately within the app\.
  * User inputs should be handled appropriately \(e\.g\.\, hide password\, some minimal form of validation\)
  * The application should not hang or crash
* Key Business Logic Requirements:
  * Your app must serve a clear purpose and provide effective means of achieving that purpose\.
  * Your project should largely follow your design document \(Milestone 1\)\, though minor variations/deviations are allowed\.  Major deviations should be discussed with the teacher in advance\.
* Soft Requirements:
  * Good usability
  * Good aesthetic design \(Layout\, images\, formatting\, color scheme\, etc\.\)\.
  * Usefulness of app

# Deliverables

* Deliverables to be submitted on Lea before presentation/demo:
  * Presentation slides
* Deliverables to be submitted in zip file on Lea by midnight\, June 30\.
  * Project source code\.  This means the entire project folder\.
    * To save space\, please perform a "flutter clean" first so build files are not included\.
  * Link to your GitHub repository
  * Readme with instructions on how to run and use the application\.  Include any non\-standard installation or configuration instructions \(i\.e\.\, any not used in class\)\.
  * Self\-report on team member contributions \(scale of 1\-10 with description\)\.
    * Details should be given on any lack of or poor participation so that undue reward is not given\.  In such cases\, provide details\.  Ideally\, bring such issues to my attention early in the effort so they can be addressed\.
    * These should be submitted separately in Lea by each team member
* Final project presentation in class on June 30\. All team members must participate equally\.
  * Practice together beforehand\!
  * Make sure one person does not dominate\.
* Final demo of working project during class on June 30\.  All team members must participate equally\.
  * Make sure your demo works beforehand\!  "Last\-minute issues" and non\-working code will result in low marks\.
  * Recommend: Make a specific "backup demo" commit that you can rely on in case "last minute" changes you couldn't resist cause problems\.
  * Practice together beforehand\!
  * Make sure one person does not dominate\.  Each team member should spend some time demoing the capability\(\-ies\) they coded the most\.
* Please note: Functional capabilities and aesthetics of your code are being marked during the demo\.  Fixes/changes made after the demo will not be marked unless an exception was made by the teacher during the demo\. Documentation and code quality will be graded based on final submission\.

# Presentation Guidelines

* Your team must give a ~10 minute final presentation on your project before demonstrating the code\.
  * Specifically: You have 20 minutes for presentation \+ demo\.
* Required presentation outline:
* All slides should indicate "created by \<team member>" and "presented by \<team member>"
  * 1 slide motivation for app with inspiring image and/or logo\.
  * 1 slide summary of the key capabilities your app is providing\.  i\.e\.\, these are essentially the business requirements
  * 2\-3 slide summary of key features with final screenshots\.  Aim is to showcase the "feel" of the final app\.
    * Keep it simple since you'll be demoing right afterwards\.  These should help clarify the demo\.
    * Mention any key changes to design since Milestone 1
  * 1 slide summary of final database design\.
  * 2 slides on final project status
    * 1 slide with final key achievements on a timeline
      * Slide should give a sense of what was accomplished when\.
      * This can all be done in a single table or in a single graphic\.  Focus on the big things\, not all the little details\.
    * 1 slide with tasks/capabilities that were not completed or only partially completed\.
  * 1 slide with summary of issues encountered\, solutions found\, lessons learned\, etc\.
    * Indicate any issues with task allocations and how things may have changed in your team
  * 1 slide with "Next Steps"
    * What would you like to do with the app next?  If you had more time\, what would you add/change?
    * You can role\-play this as if you were a business\, presenting to a venture capitalist\, etc\.\, or make it personal to your real life\, pretend there was another class project phase after this\,  talk about actual plans\, etc\.
* You should aim to spend at most 1 minute per slide\.
  * You don't need a lot of words on each slide\.  Let images / tables do the work for you\.
  * You don't need to read all the words on the slide when presenting\.  Focus on conveying the main message\(s\)\.
  * Leverage as much content from your milestone \#1 document as possible\.
  * Unlike the document\, here short bullets are your friend…
  * In other words\,  _keep it simple_  so you don't get bogged down spending a lot of time on any particular slide \(and also don't spend too much time creating the slides\!\)

# Demo Guidelines

* Your team must give an ~10 minute demo of your app
  * Specifically: You have 20 minutes for presentation \+ demo\.
* Final demo must show me a fully working app\.
  * All key capabilities should work \("must\-haves"\)
  * Some optional capabilities can be working but "incomplete" \("nice\-to\-haves"\)\.  i\.e\.\, a "nice\-to\-have" can't cause a runtime issue/crash\, but may only have partial functionality\.
  * The demo must be run from a single codebase \(no separate branches\)\.
* Demo setup:
  * Make sure everything is setup and that your app is working before you start your presentation\.
  * Recommend: Do a demo run through beforehand
* Demo followup:
  * After the demo\, the teacher may go through the code with you "over your shoulder"\.
  * We may drill\-down into capabilities that were unclear in the demo\.

# Marking Scheme

* Marking Scheme:
  * 40% Functionality: Did your project meet the technical and functional requirements set by the teacher? Did your code meet the business logic requirements as per your design?
    * 30% will be a group grade based on the entire project
    * 10% will be an individual grade based on their CR2UD code: Each individual will receive a grade based on the quality and completeness of the data capability they are responsible for\.
  * 10% Aesthetics: How well did your app meet the soft requirements and your design aesthetics?  Is your app usable? Does it have a good aesthetic design? How useful is the app?
  * 10% Code quality: Is your code appropriately organized and show good separation of concerns\.  Does it use good variable\, class and method naming? Is it formatted well and readable?
  * 10% Documentation: Have you put meaningful effort into documenting key classes\.  Particular attention will be paid to classes that manage data and main UI "screens"\.
  * 10% Final Presentation: Good presentation with participation by all team members in professional and timely manner\, plus quality and completeness of presentation slides as per guidelines
  * 10% Final Demo: Good working demo with participation by all team members in professional and timely manner\.
  * 10% Individual contribution: \(Based on self\-reports and teacher assessment\)
    * Note: Poor participation on the project will result in penalties for that individual on other marking categories as appropriate based on their actual contributions\.

