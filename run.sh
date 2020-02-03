#!/bin/bash

# look for our static file server
if [ "$(whereis simple-http-server)" != "simple-http-server:\n" ] ; then
  simple-http-server --ip 127.0.0.1 \
  	--port 8000 \
  	--nocache 
else
# it cannot be found so recommend installing it
	println "%s\n%s\n" \
		"Error: simple-http-server not installed." \
		"Run $ cargo install simple-http-server"
fi
