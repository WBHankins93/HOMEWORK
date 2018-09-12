Commit 1:

#1. What command do you use to setup a git repository inside of your folder?
  - git init

#2. What command do you use to ask git to start tracking a file?
  git add .

#3. What command do you use to ask git to move your file from the staging area to the repository?  
  git push origin master


Commit 2:

#1. What command do you use to pull any changes from the master repository into your local repository?
  git pull origin master

#2: What command do you use to unstage a file?
  git reset [file]

#3: What command do you use to change your files back to how they were after a commit?
  git pull upstream master

#4: Why is it important to use -- when changing files back to a previous state?
  to differentiate trees from branches

#5: Why might you want to reset your files back to a previous commit?
  In case you've gone too far in a project and become lost or jumbled in code that you aren't sure where to find a solution


  Commit 3:

#1: What command do you use to create a branch?
  $ git checkout [branch-name]

#2: What command do you use to use a different branch?
  $ git merge [branch-name]

#3: Why would you want to use a branch other than the default master?
  To get a more recent version of source code after it has deployed
