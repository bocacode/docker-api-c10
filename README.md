# Using Docker

First, build with:

`docker build -t "test-api":0.4`

changing the version each time...

Then to run:

`docker run -p 3010:3000 -v /Users/toddalbert/code-c10/docker/:/src/ "test-api":0.4`

Where you replace the directory after -v with your working directory.

Now you can change code in index.js and see the changes live in Docker.
