# Setting up Gitpod with Ona

Gitpod is a browser-based development environment that lets you contribute to a
codebase without the need to set up any local dependencies. Ona is Gitpod's AI assistant that can help you with coding tasks. To learn more about Gitpod,
check out their docs at <https://gitpod.io/docs>.

Before you can start working on eBL, you need to set up a few things. Most of the steps
below need to be done only once (with the exception of setting up environment variables
for the frontend - see below).

- [1. Create an SSH Key and API Environment Variables](#1-create-an-ssh-key-and-api-environment-variables)
  - [1.1 Logging in](#11-logging-in)
  - [1.2 Setting up an SSH Key](#12-setting-up-an-ssh-key)
  - [1.3 Setting up Environment Variables (API)](#13-setting-up-environment-variables-api)
- [2. Creating Workspaces](#2-creating-workspaces)
  - [2.1 API Workspace](#21-api-workspace)
  - [2.2 Frontend Workspace](#22-frontend-workspace)
- [3. Running eBL Locally](#3-running-ebl-locally)
  - [3.1 Version A: Open the Workspaces in VS Code Desktop and use Native Port Forwarding](#31-version-a-open-the-workspaces-in-vs-code-desktop-and-use-native-port-forwarding)
  - [3.2 Version B: Use Manual SSH Forwarding](#32-version-b-use-manual-ssh-forwarding)
  - [3.3 Version C: Use Ona's Preview URLs (Simplest)](#33-version-c-use-onas-preview-urls-simplest)
- [4. General Notes and Best Practices](#4-general-notes-and-best-practices)
  - [4.1 Timeouts](#41-timeouts)
  - [4.2 Data Persistence](#42-data-persistence)
  - [4.3 Keep it Simple](#43-keep-it-simple)
  - [4.4 Work Smarter, not Harder](#44-work-smarter-not-harder)
- [5. Troubleshooting](#5-troubleshooting)

## 1. Create an SSH Key and API Environment Variables

### 1.1 Logging in

Navigate to <https://gitpod.io/login/> and log in **using your GitHub credentials**.
Once you're logged in, you should see the Gitpod dashboard.

![Gitpod dashboard](<img/dashboard.png>)

Your account should display you as a part of the *Electronic Babylonian Literature*
organization and the Open Source plan with 2500 monthly credits. Make sure
everything is correct by clicking on your username at the top left (it should show
the organization) and navigating to Billing (it should show the Open Source plan) -
it should look like in the screenshots below.

![Gitpod dashboard user menu](<img/dashboard-billing.png>)

![Gitpod billing](<img/billing.png>)

### 1.2 Setting up an SSH Key

In order to use Gitpod to its full potential you need to set up an SSH key pair. It
is necessary to set up port forwarding and to run Gitpod in a local VS Code
instance.

Open your User Settings from the avatar menu at the top right.

![Gitpod dashboard user settings](<img/dashboard-settings.png>)

In the menu on the left, click on SSH Keys and add a new SSH Key. You can use an existing
SSH key if you have one (e.g., in ~/.ssh/id_rsa.pub) or create a new one. If you have not
done that before, please check out the
[Learn more](https://www.gitpod.io/docs/configure/user-settings/ssh) link offered by
Gitpod or some other SSH tutorial (the process is fairly straightforward).

![Gitpod user settings ssh](<img/settings-ssh.png>)

### 1.3 Setting up Environment Variables (API)

We will provide you with two separate sets of personalized environment variables:
one for the API, and one for the frontend. Due to the way environment variables
work in Gitpod, the process of setting them up is slightly different in the API and
the frontend (we will get to setting up the frontend variables shortly). For the
API, navigate to the Variables entry in the user settings:

![Gitpod user settings variables](<img/settings-variables.png>)

For each of the variables we sent you, create a new variable and enter its name, its
value, and `electronicbabylonianliterature/ebl-api` as scope. You only need to do this
once: The variables will automatically be available whenever you create a new ebl-api
environment.

![Gitpod set a variable](<img/new-variable.png>)

## 2. Creating Workspaces

Now you are ready to create your first workspace. A workspace is an instance of VS Code
running in your browser that has all the requirements you need to run the code
pre-configured. The requirements are automatically installed when creating a new
workspace; on subsequent executions, your settings, installed libraries and modules are
still there, so it is recommended to re-use workspaces once set up. For that purpose,
I'd recommend to **pin** one workspace for the API and one for the frontend. You can
do that by visiting the dashboard after creating a workspace, clicking on the
three dots besides it and clicking *Pin*.

### 2.1 API Workspace

Navigate back to your Gitpod dashboard at <https://gitpod.io/workspaces> and create a
new workspace.

![Gitpod dashboard](<img/dashboard.png>)

Select the ebl-api repository, leave the other default settings and click Continue.

![Gitpod new ebl-api workspace](<img/dashboard-new-ebl-api.png>)

Gitpod will create and start the new environment.

![Gitpod creating workspace](<img/creating-workspace.png>)

After a while, a VS Code Browser instance will start up,
containing the ebl-api source code on the master branch.
It will also run some local db script that you can ignore.

![Gitpod first time ebl-api](<img/ebl-api-first-time.png>)

If you open up the topmost terminal from the list of terminals in
the lower right menu, you will see that poetry is installing the
project requirements. Please wait for everything to be installed
before proceeding. As noted above, the installation is only required
the first time you create a workspace (unless the requirements change in which case you
need to run `poetry install` manually after pulling the changes, but that happens quite
rarely.)

![Gitpod poetry](<img/ebl-api-first-time-poetry.png>)

Feel free to explore the code a bit while the installation is
running. Once it's complete, you are ready to make changes to
the code. Please be sure to read our contribution guidelines beforehand.

You can also run the Python app from the Gitpod terminal, but
before you do that some additional steps are necessary
(see below).

### 2.2 Frontend Workspace

Creating a frontend workspace is largely identical to creating an api workspace, with one
important difference: You need to manually set up the **environment variables** every
time you create a new workspace. That is because the frontend dynamically switches
between different sets of environment variables which cannot be achieved with the Gitpod
way of handling them. Luckily, all you need to do is to create an .env.local file with
your variables once the workspace is created, and you only need to do that once for every
workspace.

With the api environment running in your browser, open up a new tab or window and go to
your Gitpod dashboard at <https://gitpod.io/workspaces> again.

As before, create a new workspace, this time selecting the
ebl-frontend repository.

![Gitpod new ebl-frontend workspace](<img/dashboard-new-ebl-frontend.png>)

Again, a new environment is created and requirements are installed once the VS Code Browser
instance starts up.

![Gitpod first time ebl-frontend](<img/ebl-frontend-first-time-yarn-install.png>)

Once VS Code is opened up, create a new file called .env.local at the topmost level of
the file structure, next to the .env and .env.test files, and paste your environment
variables there (or upload a local copy of .env.local by dragging and dropping it into
the file tree).

![Gitpod first time ebl-frontend](<img/ebl-frontend-env-local.png>)

## 3. Running eBL Locally

In order to start the Python and React apps and run a fully functional, local instance of eBL,
there's one last thing to do that has to do with authentication. The problem is that Gitpod
creates some hashed urls that change every time you run a workspace and our authentication
provider blocks them. We cannot whitelist all of them, but we do allow the app to run from
localhost. I.e., we need to forward the Gitpod urls to localhost in order for you to be able
to log in to eBL as you would do on the public version at <www.ebl.lmu.de>.

There are three ways to achieve that.

### 3.1 Version A: Open the Workspaces in VS Code Desktop and use Native Port Forwarding

As an alternative to running VS Code in the browser, you can open the workspaces in your locally
installed, full version of VS Code Desktop via a SSH connection. This has a number of benefits:
You can use the keyboard shortcuts and settings you are used to, and more importantly, VS Code
Desktop natively supports port forwarding (while the browser version **does not**!)
which is essential for your local eBL instance to be fully functional.

A caveat: The browser tabs running your workspace **must stay open**. If you close them the
workspaces will shutdown after a few minutes and need to be restarted.

In order to run workspaces in VS Code Desktop, follow these steps:

1. In the API workspace, open up the **command palette** by pressing
   Ctrl+Shift+P (in Firefox: F1) and use the smart search function to find and run the
   command *Gitpod: Open in VS Code* (just start typing it and use the arrow keys and
   Enter once you found it).

   (Alternatively, click on the orange Gitpod button at the lower left corner and find the
   command from there.)

   ![Gitpod open in VS Code](<img/gitpod-open-vs-code.png>)

   If you have VS Code installed on your machine and your SSH keys are set up correctly,
   the workspace should now open up in a new window in your VS Code Desktop (cf. the
   screenshot below - note that this time we are in the full app, not the browser, and the
   title bar shows we're connected to a gitpod workspace via SSH).

   Confirm the SSH connection.

   ![Workspace in VS Code Desktop](<img/trust-authors.png>)

2. Do the same for the frontend workspace such that you end up with two VS Code windows.
   You are now ready to start the eBL app.

3. Run the API by executing `task start` in a terminal of the **ebl-api** workspace:

   ![Running task start](<img/task-start.png>)

4. Switch to the VS Code window with the **ebl-frontend** workspace and run `yarn start`
   from the terminal.

   ![Running yarn start](<img/yarn-start.png>)

  It should open <http://localhost:3000/> in your browser. If it asks you if you want to
  open a url starting with `https://3000-electronicb-eblfrontend-<hash>`, just cancel it
  (likewise, if a url other than localhost opens up in your browser, just close the tab).
  Don't worry if initially you get a blank page or a "page not found" error. The app needs to
  fully compile first. Once it's done it should look like in the screenshot below, and it
  automatically refreshes when you edit the code - neat!

  ![Running yarn start](<img/yarn-start.png>)

  If you refresh the page, it should now show the eBL homepage:

  ![eBL homepage](<img/ebl-homepage.png>)

  The app should be fully functional, including the possibility to log in using your
  credentials for <www.ebl.lmu.de>. As long as your environment variables are set up correctly,
  you can freely edit fragments, too, as you are working on the development db. Check which db
  you are working on by running `echo $MONGODB_DB` in a terminal in the API workspace -
  it should be set to `ebldev` by default.

  If anything doesn't seem to work, please check out the troubleshooting section below.

### 3.2 Version B: Use Manual SSH Forwarding

Instead of running VS Code Desktop locally you can also develop in the browser. In that
case you need to forward your workspace traffic to localhost manually because VS Code
Browser does not support port forwarding at the time of writing. In the past, Gitpod
offered a script to achieve this task (*Gitpod local companion*), but it is no longer
supported. So you need to set up port forward with SSH, which is actually not that difficult:

1. In the **ebl-api** workspace terminal, run `gp ssh`. You will get an output resembling `ssh
   'electronicb-eblfrontend-<hash>@electronicb-eblfrontend-<hash>.ssh.ws-eu108.gitpod.io'`.
   Copy the url enclosed by single quotation marks `''` (without the quotation marks).
  ![gp ssh command](<img/gp-ssh.png>)

2. On your **local machine**, open up a console of your choice and run the command below,
   replacing `<copied-url>` with the url from step 1.

   ```sh
   ssh -L 8000:localhost:8000 <copied-url>
   ```

   The first time you do this with a fresh workspace, it will ask you to confirm the ssh connection.
   Confirmation is not needed on subsequent startups of the same workspace. It should look like this:
  ![ssh forwarding](<img/ssh-forwarding.png>)

3. For the **frontend** you need to do basically the same thing **but with port 3000**:
   - Run `gp ssh` in the frontend terminal and copy the url
   - Open up another console tab or window **locally**
   - In the console, run `ssh -L 3000:localhost:3000 <copied-url>`, again inserting your url - note
     this time it's port **3000** for the frontend app!

### 3.3 Version C: Use Ona's Preview URLs (Simplest)

If you're using Ona (Gitpod's AI assistant), you can skip the port forwarding setup entirely. Ona can start development servers and provide you with preview URLs automatically.

**To use this method:**

1. In your **ebl-api** workspace, ask Ona in the chat:
   ```
   "Start the API server"
   ```
   or
   ```
   "Run task start"
   ```

2. In your **ebl-frontend** workspace, ask Ona:
   ```
   "Start the development server"
   ```
   or
   ```
   "Run yarn start"
   ```

3. Ona will provide you with preview URLs that look like:
   ```
   https://3000-electronicb-eblfrontend-<hash>.ws-eu108.gitpod.io
   ```

4. Click on the URL to access your application.

**Important notes:**
- These preview URLs are publicly accessible but temporary
- They change each time you create a new workspace
- **Do not use localhost URLs** - they won't work in Gitpod
- Authentication may not work with preview URLs due to Auth0 restrictions (use Version A or B for full functionality)

**Tip:** You can also ask Ona for help with other tasks:
- "Run the tests"
- "Check if my environment variables are set correctly"
- "Show me the last 50 lines of the server logs"

## 4. General Notes and Best Practices

Finally, here are some things to note and best practices when working with workspaces
(from my experience):

### 4.1 Timeouts

Workspaces automatically shut down after staying idle for a while. It is not enough for
a process to run to prevent this from happening, you need to actually edit files.
If you keep working on one workspace for a prolonged time, you should occasionally
do some dummy edits in the other workspace every once in a while in order to prevent it
from shutting down. If it does shut down, just open it up again and restart the app -
your data should still be there, but see the next section.

### 4.2 Data Persistence

First things first: If you don't open a workspace for 14 days it will be deleted permanantly.
You can prevent that from happening by **pinning** the workspace
(three dot menu in the dashboard -> *Pin*).
Other than that, your data is generally safe in workspaces, but you should behave like it isn't.
I.e., while changes you make to a workspace are generally saved and will still be there when
you shut down and reopen the workspace, that is not guaranteed - workspaces may stop to work
at some point due to configuration changes, which may lead to data loss. So always make sure to
commit and push your code changes, and if you need to upload any files to a workspace, make
sure to keep a backup copy elsewhere.

### 4.3 Keep it Simple

As illustrated by the setup process, you will generally need to keep several windows open
at a time just to have eBL running. Add some more programs and browser tabs and things can
easily get confusing. It's a matter of personal preference, but I find it much easier to stay
focused without too many things open at once. You can also  reduce cognitive load by keeping
only one workspace open (if possible for your current task). E.g., when refactoring or
writing tests you generally don't need to have the full eBL instance running locally.

### 4.4 Work Smarter, not Harder

VS Code offers a huge amount of functionality. Watch or read some tutorials even if you
have some experience using it because most likely there are things you don't know about
yet. Our codebase is fairly large and complex, so make sure to make use of the features
offered by VS Code to make developing and navigating the repo easier and more efficient
(the same applies to other IDEs of course).

## 5. Troubleshooting

You might find that things stop working at some point. Please try the following steps
before reaching out to us:

1. Make sure both the API and the frontend workspaces are up and running
2. Make sure the ports are correctly forwarded (in VS Code Desktop, check the ports tab;
   in VS Code Browser, ensure ssh tunneling is active).
3. Double-check your environment variables are correctly set both in the API and the
   frontend. You can inspect them in the terminal by running `echo $MY_VARIABLE_NAME`.
4. If the db structure or dependenices changed you might need to update your workspace to
   the latest version of the master branch. Sometimes it might in fact be more practical to
   just set up a new workspace (follow the steps above), checkout your branch and keep
   working from there.
   1. Commit and push (or stash) your changes
   2. Switch to the master branch (`switch master`) and run `git pull`
   3. In ebl-api: run `poetry install` to make sure all dependencies are up to date
   4. In ebl-frontend: run `yarn install`
   5. Switch back to your feature branch (`switch -`)
   6. Merge master into your branch (`git merge master`), resolving any conflicts
      that may appear.
5. If you still can't make it work, please let us know!
