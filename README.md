# Transcend

***v.*** be or go beyond the range or limits of

A prototype of a browser-based VR environment in which people across geographical boundaries can congregate, move around, explore, and interact as if they were in the same space. It's a world that goes beyond traditional boundaries, allowing people from different places, situations, and walks of life to come together to share ideas and experiences.

## Why?

Social VR apps like [AltSpace](https://altvr.com/) and [vTime](https://vtime.net/) are redefining what it means to hang out with someone(s). However, Fullstack Academy has chosen Daydream as its VR platform of choice for its Remote Immersive program. vTime has only recently added Daydream support, and AltSpace still doesn't natively support Daydream. Both only allow small groups, up to about six people/avatars, to join one "room" and hang out with each other.

As Mark Davis, Fullstack's Product Manager, describes [in a post about Fullstack's VR Lab](https://www.fullstackacademy.com/blog/vr-lab-jan-2017):

> Here’s what we wish existed, now: a simple VR environment where up to 25 avatars can interact with each other, with real-time voice chat, that’s accessible on a Google Daydream headset as an MVP, but is also extensible to any WebVR enabled headset.

This project was built during my Senior Phase at Fullstack Academy as a hackathon project, in attempt to begin addressing that need. It later served as the foundation for my team's Capstone project, which goes by the same name and can be found [here](https://github.com/TranscendVR/transcend).

## Demo

[Live link](https://transcend-prototype.herokuapp.com/)

### On a Desktop:

Transcend supports non-WebVR-enabled browsers, although you will not be able to enter VR mode (if you try, you'll just be full-screened). To see multiuser capabilities, open the app in two incognito browsers, or have a friend hop on a different computer. Move around with WASD controls or the arrow keys, and rotate your view by clicking and dragging your mouse.

### On a WebVR-enabled Headset/Device:

If you have a device with a WebVR-enabled browser (see [here](https://webvr.info/) for details), pressing the icon in the lower right-hand corner will allow you to enter VR mode. Movement has not yet been enabled, but simply turning your head will allow you to look around the scene.

### Features in Both Versions:

When someone enters, a randomly-colored box (their avatar) will appear on the screen. All movement and rotation of your avatar is broadcasted to every user currently using the app. When someone leaves, their avatar will disappear.

## Built with:

* Node & Express on the backend
* A-Frame, with some raw three.js on the frontend
* Socket.io for real-time event-based communication between users
