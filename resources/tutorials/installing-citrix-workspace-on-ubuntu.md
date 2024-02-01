# Installing Citrix Workspace on Ubuntu
2021-04-11

The following tutorial should work on all versions of Ubuntu, 14+ and Debian 7+, or any distro with the 
capacity to install `.deb` packages.

## Dependencies

The Citrix Workspace application has very outdated dependencies.
This might call in question the secure nature of this application (for any interested security researches).
In order to get the Citrix Workspace working on my Linux OS, I needed the following three dependencies:
 - [libicu60](https://packages.ubuntu.com/bionic/amd64/libicu60)
 - [libjavascriptcoregtk-3.0-0](https://packages.ubuntu.com/bionic/libjavascriptcoregtk-3.0-0)
 - [libwebkitgtk-1.0-0](https://packages.ubuntu.com/xenial/amd64/libwebkitgtk-1.0-0)

Let's use `wget` to download all these packages:
```shell
wget http://archive.ubuntu.com/ubuntu/pool/main/i/icu/libicu60_60.2-3ubuntu3_amd64.deb
wget http://archive.ubuntu.com/ubuntu/pool/universe/w/webkitgtk/libjavascriptcoregtk-1.0-0_2.4.11-4_amd64.deb
wget http://archive.ubuntu.com/ubuntu/pool/universe/w/webkitgtk/libwebkitgtk-1.0-0_2.4.11-4_amd64.deb
```

Using `sudo`, install the dependencies:
```shell
dpkg -i libicu60_60.2-3ubuntu3_amd64.deb
dpkg -i libjavascriptcoregtk-1.0-0_2.4.11-4_amd64.deb
dpkg -i libwebkitgtk-1.0-0_2.4.11-4_amd64.deb
```

## The Workspace App

Now we're ready to install the Citrix Workspace.
You'll be able to find the latest version of the Citrix Workspace 
[here](https://www.citrix.com/downloads/workspace-app/linux/workspace-app-for-linux-latest.html).
Find the section labelled `Debian Packages`, and download either the `Citrix Workspace app for Linux (x86_64)` or the 
`Citrix Workspace app for Linux (x86)`.
For my machine (Dell XPS 15), I went with the first.

## The Certificate

It's likely that you'll need a certificate in order to get the Workspace receiver functioning.
You'll need to download a `.crt` file.
In my case, I ran the following command (yours may be different):
```shell
wget https://secure.globalsign.com/cacert/gsextendvalsha2g3r3.crt
```

Under `sudo`, copy the certificate into the ICAClient's keystore:
```shell
cp -v gsextendvalsha2g3r3.crt /opt/Citrix/ICAClient/keystore/cacerts/
```

Then we'll need to navigate to the ICAClient's utilities folder, which contains a myriad of command line applications.
We have to run `ctx_rehash` in order make use of the certificate.
```shell
cd /opt/Citrix/ICAClient/util/
exec ctx_rehash
```

## Conclusion

Following the final step, you should be able to connect to your remote desktop environment via the Citrix Workspace 
application.
This should be facilitated by your designated browser which will download an `.ica` file when you navigate to whatever 
page is dictated by your organization's Citrix administrator.

**Disclaimer**: *I'm not an employee of Citrix or a consultant. 
I'm just some dude with computer hacking skills whose company IT department didn't respond when my Windows instance of 
the Citrix Workspace when kaput.
It took me about a day and a half of piecing together crumbs of information across the internet to figure this out, 
along with running some sketchy shell commands (one of which uninstalled my GUI). 
My incentive to provide this article is so that reader may have a little more direction than I did.*

Following the initial install, I've been able to update the Citrix Workspace app seamlessly, and only had to make a 
minor configuration change when I transitioned from a fibre based internet to a 5G wireless internet service.