---
sidebar_position: 11
title: 🛠️ Troubleshooting
description: Fixes for common Shorebird issues
---

# 🛠️ Troubleshooting

Find help for issues with Shorebird.

## I created a patch, but it's not showing up in my app

There are several reasons this might be happening. Start by running your release
on a device or Android emulator using the `shorebird preview` command to see the
log output.

Common causes of this problem are:

### The patch was created for a different release version than the one running on your device/emulator.

Patches are only compatible with the release version they were created for. If
you create a patch for version `1.0.0+1`, it will not work on version `1.0.0+2`.

#### How to tell if this is the problem

You will see `Shorebird updater: no active patch` in your device logs.

#### How to fix it

Ensure that the version of your app on your device/emulator matches the version
of the patch you created. You can see what release version your app is running
by looking in the device logs for:

```
Sending patch check request: PatchCheckRequest {
  app_id: "<your app id>",
  channel: "stable",
  release_version: "1.0.3+16", <-- this is the release version
  patch_number: <some patch number>,
  platform: "android",
  arch: "aarch64"
}
```

Only patches created for this release version will be compatible with your app.

### The build uploaded to the Play Store/App Store is not the build Shorebird is using for patches.

If you uploaded an .aab or .xcarchive created using `shorebird build` or
`shorebird patch`, it will not be patchable. You **must** upload the build
created by `shorebird release`.

#### How to tell if this is the problem

You see `Update rejected: hash mismatch` in your device logs. Note: this is not
the only thing that can cause a hash mismatch error.

#### How to fix it.

Unfortunately, you will need to create a new release using `shorebird release`.

### The app you're running on your device/emulator was not built using one of the `shorebird release` commands.

#### How to tell if this is the problem

If you are running your app using `shorebird preview`, this is not the problem.

If you have installed the app on your device/emulator a different way, check
your device logs for output from Shorebird. If you don't see anything like
`Starting Shorebird update` or `Sending patch check request`, you are not
running a Shorebird-built app.

To check your Android device logs, run `adb logcat` in your terminal. You can
filter the output to only show Flutter logs by running `adb logcat | grep flutter`.

#### How to fix it

Use `shorebird preview`.

## I installed Shorebird, and now I can't run my app in VS Code

If you see error output like the following when using the Run or Debug button in
VS Code:

```
FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:checkDebugAarMetadata'.
> Could not resolve all files for configuration ':app:debugRuntimeClasspath'.
   > Could not find io.flutter:arm64_v8a_debug:1.0.0-4a5e8142f3e7368a48e4f6151cb7b1a684d6dd83.
     Searched in the following locations:
```

It's possible that VS Code is incorrectly using Shorebird's version of Flutter
instead of the Flutter on your path (see
https://github.com/Dart-Code/Dart-Code/issues/4607). You can fix this by
explicitly providing VS Code with the path to your Flutter installation. In your
`settings.json` file, add the line:

```json
"dart.flutterSdkPath": "/path/to/flutter"
```

Where "/path/to/flutter" is the path to your Flutter installation. You can get
this by running `which flutter` in your terminal (or `where.exe flutter` on
Windows) and removing the `/bin/flutter` from the end of that path.

## Could not find an option named "dart define" when using the `--` separator

Powershell handles the `--` separator differently than other shells (see
[this StackOverflow answer](https://stackoverflow.com/a/15788023) for more
info). To work around this, you can quote the `--` separator. For example:

```sh
shorebird release android '--' --dart-define=foo=bar
```

## Shorebird fails to install

There are a number of reasons this might happen. Common causes are:

### I see a message saying that `git stat` failed because a file was too long

This can happen on Windows due to Windows' limit of 260 characters for a filename.

You can fix this by running:

```sh
git config --system core.longpaths true
```

You may need to run this as an administrator, and you will need to restart your
terminal after running this command.

## My iOS build number increments when I try to make a release or patch

This is likely because you are providing an export options .plist file that
sets `manageAppVersionAndBuildNumber` to true. This is incompatible with
Shorebird because Shorebird requires that you maintain control over your app's
version and build numbers in order to target patches at specific releases. You
can fix this problem by either setting `manageAppVersionAndBuildNumber` to false
or removing the value from your export options .plist file.

## I see a `The release artifact contains asset changes` warning when running `shorebird release` (#asset-changes)

The `shorebird patch` command will print a warning if it detects changes to
files in your compiled app that correspond to asset changes (e.g. added or
removed images, fonts, etc.). This does not always mean that your patch will not
work, but shorebird cannot be sure that the changes are safe.

Shorebird does not (yet) have the
[ability to patch assets](https://github.com/shorebirdtech/shorebird/issues/318)
but intends to add such in the future, at which time this warning may go away.

An example of this warning:

```
✓ Verifying patch can be applied to release (4.0s)
[WARN] The release artifact contains asset changes, which will not be included in the patch.
    Added files:
        base/assets/flutter_assets/assets/images/bg_button_disable.png
    Changed files:
        base/assets/flutter_assets/AssetManifest.bin
        base/assets/flutter_assets/AssetManifest.json
        base/assets/flutter_assets/fonts/MaterialIcons-Regular.otf
Continue anyways? (y/N)
```

So what does this mean? In this case, it means I added a new image to my app.
The warning is because my patched Dart code could _depend_ on those new assets
which will not be present when the patch is applied in the wild. It can be safe
to ignore this kind of warning if you're removing an asset that is not used by
your code, or your Dart code knows how to handle the asset being missing.

Also included in the above changes are the `AssetManifest` files. These files
change any time you add or remove an asset from your app, and are generally
a symptom rather than the cause of the warning.

The final file changed above is the `MaterialIcons-Regular.otf` font file,
which can happen if your app uses more or fewer icons from the Dart code.
Flutter will automatically "tree shake" your fonts, so if you don't use an icon
in your Dart code, it will not be included in the final app. You can
disable this behavior with `--no-tree-shake-icons` at the risk of increasing
your app size. This type of warning will also go away once we add
[https://github.com/shorebirdtech/shorebird/issues/318](asset patching).

A type of change not shown above is one which changes .dex files on Android or
the `Runner.app` directory on iOS. These changes represent changes to the
native code of your app, and are not patchable by Shorebird. If you see this
warning, you should be very careful about publishing your patch, as it may
cause your app to crash when the Dart code tries to call into native code
which operates differently than expected. See
[the next section](#unexpected-native-changes).

It is always good practice to test your patch with `--staging` and then use
`shorebird preview --staging` to install the patch on your device. That way
you can see your patch exactly as it will appear on user's devices where
the "patch" will replace the Dart code, but not change the underlying native
code or assets in the app.

## I see a `The release artifact contains native changes` warning when running `shorebird patch`, even though I haven't changed Swift/Objective-C/Kotlin/Java code {#unexpected-native-changes}

The `shorebird patch` command will print a warning if it detects changes to
files in your compiled app that correspond to native code changes (`.dex` files
on Android, files in the `Runner.app` directory on iOS). This does not always
mean that your patch will not work, but because shorebird cannot be sure that
the changes are safe, and because shorebird can't patch non-Dart code, it prints
a warning.

This can be caused by a number of things. The most common causes are:

1. A dependency/plugin you are using has changed its native code. **You should
   use caution when publishing patches that include changes to native code from
   plugins. In the worst case, these changes may cause your patched app to
   crash.**
2. A dependency/plugin produces a different output on every build. This can
   happen if the dependency it includes a timestamp indicating when it was
   built, for example. This kind of change is usually safe to publish, but you
   should be sure this is the only reason you are seeing this warning.
3. (iOS only) The release was built with a different version of Xcode than the
   patch. This can be fixed by ensuring that you are using the same
   version of Xcode to build the release and the patch. If you've upgraded to a
   newer version of Xcode since building the release, you can download older
   versions of Xcode from
   [Apple's developer downloads page](https://developer.apple.com/download/all/).
4. (iOS only) You are building with an old version of Xcode. Specifically, we've
   seen this warning when building with Xcode 14.1. If you are using a version
   of Xcode that is not the latest, try upgrading to the latest version.

If you are confident that the changes are safe, you can ignore this warning by
passing the `--force` flag to `shorebird patch`.

## "Invalid `Podfile` file: cannot load such file" when running `pod install`

You might see this error message if the `FLUTTER_ROOT` definition in your
project's `ios/Flutter/Generated.xcconfig` points to a Shorebird Flutter
installation. This can be fixed by running any of:

1. `flutter clean`, or
2. `flutter build ios` in your project's root directory, or
3. `flutter run` in your project's root directory and targeting an iOS
   simulator/device.

## Have a problem that's not addressed here?

We're happy to help on [Discord](https://discord.gg/shorebird)!
