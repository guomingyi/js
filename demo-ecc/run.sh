#!/bin/bash


if [ "y$1" = "yd" ]; then
    echo "chrome://inspect/#devices"
    node --inspect server.js
else
    node server.js
fi

