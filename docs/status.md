---
sidebar_position: 8
title: 👷 Status
description: Status of the Shorebird project.
---

## Stable

Shorebird is available on Android and iOS, with ~1000 apps using Shorebird on
the App Store and Play Store.

## Link Percentage (iOS)

As part of [complying with the the App Store
guidelines](faq#does-shorebird-comply-with-app-store-guidelines), Shorebird uses
an interpreter on iOS to run any changed Dart code in your patch. This
interpreter runs Dart about 100x slower than running on the CPU. To make patches
run fast, Shorebird has modified the Dart compiler and runtime to make it
possible to _only_ run changed code on the interpreter and run any unchanged
code on the CPU. This determination is done at a per-function level.

The program that decides which code runs on the CPU vs the interpreter is called
the "linker" and we call this percentage the "link percentage".

Most of the time this system works very well, and Shorebird is able to run 90%+
of your Dart code on the CPU. However there are still a few types of changes
which can confuse the "linker" into running more code on the interpreter than
necessary.

Known linker issues include:

- [Adding or removing a class can affect link percentage](https://github.com/shorebirdtech/shorebird/issues/1825)

If your app has reported an unexpectedly low link percentage, please let us
know, we'd love to help. You can report an issue here:
https://github.com/shorebirdtech/shorebird/issues
Or reach us via Discord: https://discord.gg/shorebird.

:::info
Link percentage is not itself a great measure of performance. We've seen apps
link only 30% and run smoothly, and other apps link 99.5% and struggle to run
at 30fps. What matters is that the hot code paths in your app end up on the
CPU. Most of the time, all the hot code paths in your app are the ones deep
inside Flutter's framework (which very few apps ever change), and those end up
on the CPU. However if your app does a lot of intensive computation in Dart,
you may notice a slowdown in your app if you change those functions in a patch.

Regardless, if you ever see slowdowns when patching your app, please
let us know. There are many ways we can continue to improve Shorebird's
update system to run patches without any performance impact.
:::
