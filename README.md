# Code Grabber

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installation](#installing)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

A simple CSS tweak for Tumblr media that automatically hides the mature content community-label-cover on images and videos that are tagged: #mature

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A userscript manager extension for your browser. Note: script was written and tested with: [Violentmonkey](https://violentmonkey.github.io/get-it/)

    ```
    Follow the link for whichever browser you are using to install the extension
    ```

### Installing

Create a new virtual enviroment.

```
mkdir env
cd env
python3 -m venv env
```

Using Linux Teminal:

```
source env/bin/activate
```

Using Windows Termninal:

```
env/bin/activate.bat //In CMD

env/bin/Activate.ps1 //In Powershell
```

Install dependencies

```
python3 -m pip install -r requirements.txt
```

## Usage <a name = "usage"></a>

To run open the app with the python interpreter.
```
python3 app.py
```
Visit: https://ai.google.dev/ and get your free API Token.

![Get API Token](image-1.png)[https://ai.google.dev/]

Enter your token and it will be saved for future use.

![Enter Token](image-2.png)

Enter the name of any Roblox game you want to retrieve codes for.

![Getting Codes](image.png)
