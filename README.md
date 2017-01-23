# Transcend

***v.*** be or go beyond the range or limits of

A VR environment in which many (at least 25) avatars can interact with each other and communicate with real-time audio.

It's a world that goes beyond traditional boundaries, allowing people from different places, situations, and walks of life to come together to share ideas and experiences.

## Why?

Social VR apps like [AltSpace](https://altvr.com/) and [vTime](https://vtime.net/) are redefining what it means to hang out with someone(s). However, Fullstack Academy has chosen Daydream as its VR platform of choice for its Remote Immersive program. vTime has only recently added Daydream support, and AltSpace still doesn't natively support Daydream. Both only allow small groups, up to about six people/avatars, to join one "room" and hang out with each other.

This project was built during my Senior Phase at Fullstack Academy as a hackathon project. It's a prototype of a virtual world where many (the maximum has not been tested to date, but it's definitively more than AltSpace or vTime) people can congregate, move around and explore, and interact as if they were actually together.

## Demo

[Live link](https://transcend.herokuapp.com/)

### On a Desktop:

Transcend supports non-WebVR-enabled browsers, although you will not be able to enter VR mode (if you try, you'll just be full-screened). To see multiuser capabilities, open the app in two incognito browsers, or have a friend hop on a different computer. Move around with WASD controls or the arrow keys, and rotate your view by clicking and dragging your mouse.

### On a WebVR-enabled Headset/Device:

If you have a device with a WebVR-enabled browser (see here for details), pressing the icon in the lower right-hand corner will allow you to enter VR mode. Movement has not yet been enabled, but simply turning your head will allow you to look around the scene.

### Features in Both Versions:

When someone enters, a randomly-colored box (their avatar) will appear on the screen. All movement and rotation of your avatar is broadcasted to every user currently using the app. When someone leaves, their avatar will disappear.

## Future Goals

* Real-time audio communication.
* Integrate movement with the Daydream controller to allow users to move around the world in VR mode.
* Allow avatars to be more than just a pretty-colored box - create unique identifiers for every avatar, or let the user select the appearance of their avatar.

## Built with:

* A-Frame, with a few lines of raw three.js
* Socket.io
