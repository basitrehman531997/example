FROM hashicorp/http-echo

# By default, http-echo supports setting args on CMD
CMD [ "-listen=:80", "-text=Hello from App1" ]

