---
title: git
description: A guide in my new Starlight docs site.
---

Git

## Git Fundamentals

These links provide additional details. The first one has easier to understand images

- [https://www.atlassian.com/git/tutorials/using-branches/git-merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
- [https://www.varonis.com/blog/git-branching](https://www.varonis.com/blog/git-branching)
- [https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

### Creating Branches

- Essentially creates a "fork" so you can make changes that don't affect the original
- You usually branch off of "main", but you can also branch off of a branch or an old commit.
- Why create a branch  so you can work on a task without affecting other people or even other tasks you are working on.
- How long should you work on a branch  Usually until the task is complete or until a key milestone/subtask for a larger task is complete
- Naming -> Use branch names that are meaningful and related to the task. You can also create exploratory branches and name them accordingly.

### Making commits on a branch

- Commit as usual. Will only affect local branch until pushed. Then the remote branch with the same name will be updated too (and created remotely if not already there).

### Switching to a different branch

- You can explicitly "Check out" a branch. [Git -> Branches -> Select local or remote branch]
- This means all the files in Android Studio are now in the state they were as of that branches last commit.
- Any new changes you make and commit will happen only on that branch
- You will want to commit any changes you have made before switching to a branch or they will be lost.

### Exploring an old commit

- Implicitly: "Checking out" a commit.
- You can then create a branch from that commit explicitly [Git -> Branches -> New Branch]

### History

- You can access the Git log to view the history of commits [Git -> Show Git Log]

### Comparisons

- At any time, you can get details on past version of a given file.
- Most often, you want to see the changes you made in that file since the last commit.
  - In Project Explorer or editor tab name, right-click on file name, choose Git -> Show Diff
- But, you can also
  - "Show History" to see the history of changes for a particular file (only those commits where you changed that file will appear)
  - "Compare with Branch" or "Compare with Revision" to compare it to an earlier version. "Revision" here means an earlier commit.

### Merging your branch with main

- "Fast forward" merge when main hasn't changed in the meantime
- When main has changed since you created your branch, first merge main into your branch, then resolve conflicts. Commit those changes in your branch. Then switch to main and merge your branch into main. This is a 3-way merge done the safest way.

### Resolving merge conflicts

- When changes have been made to the same file in your branch and on main
- Git tries to auto merge where possible (e.g., a new function introduced here and a different new function there don't conflict, so add both functions into the merged version)
- Git will flag a conflict when it cannot resolve it automatically. The IDE will then provide you with a merge conflict view where you can see both original versions and the merged version. You can use the UI to keep the changes you want, delete the changes you don't want and/or edit in place. (e.g., both added a new parameter to a function, so keep both parameters since they are different, or both added a parameter to do the same thing but named it differently – just keep one parameter and choose one name to use)

Everything in GIT can also be done in a terminal at a command line, but probably easiest to stick with Android Studio UI approach for now.
