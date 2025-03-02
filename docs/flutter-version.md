---
sidebar_position: 5
title: 🐦 Flutter Version
description: How to manage your Shorebird Flutter version
---

# Flutter Version Management

When Shorebird CLI is installed, it pulls down the latest stable version of
Shorebird's Flutter. In this section, we'll take a look at how to list and
change the Flutter version used by Shorebird CLI.

## Supported Flutter Versions

:::note
Shorebird currently focuses our efforts on support for the latest stable version
of Flutter. When we make changes to Shorebird we do not currently backport those
changes to previous release of Flutter.
:::

Shorebird supports creating a release with older versions of Flutter (back to
3.10.0), a release created with one of these versions may not contain all of the
most recent Shorebird features. Because of this, we recommend using the latest
stable version of Flutter whenever possible.

## List Flutter Versions

To list all Flutter versions Shorebird has published, use the
`shorebird flutter versions list` command:

```
$ shorebird flutter versions list
✓ 3.19.5
  3.19.4
  3.19.3
  3.19.2
  3.19.1
  3.19.0-0.4.pre
  3.19.0
  3.16.9
  3.16.7
  3.16.5
  3.16.4
  3.16.3
  3.13.9
  3.13.8
  3.13.7
  3.13.6
  3.13.5
  3.13.4
  3.13.3
  3.13.2
  3.13.1
  3.13.0
  3.10.6
  3.10.5
  3.10.4
  3.10.3
  3.10.2
  3.10.1
  3.10.0

```

:::note
The current Flutter version used by your Shorebird CLI installation will be marked with a `✓`.
:::

:::tip
Another way to see the current Flutter version is by running `shorebird --version`.
:::

## Use a Different Flutter Versions

By default, Shorebird will use the latest stable version of Flutter. If you need
to create a release with a different version of Flutter, you can use the
`--flutter-version` option with the `shorebird release` command:

```bash
$ shorebird release android --flutter-version=3.10.6
```

Any patches created with this release will be built with the version of Flutter
used by the release.

:::note
Only the release command supports the `--flutter-version` option. Patches will
always be built with the version of Flutter used by the release.
:::

## Supported Functionality

At this time, not all functionality is supported for each Flutter version.

Android requires Flutter 3.10.0 or later.

`package:shorebird_code_push` requires Flutter 3.10.6 or later.

iOS requires Flutter 3.16.9 or later.

:::info
We would like Shorebird to support to as many Flutter versions as possible. If
there are older versions of Flutter which you need Shorebird to support, please
[let us know](https://github.com/shorebirdtech/shorebird/issues/1100).
:::
