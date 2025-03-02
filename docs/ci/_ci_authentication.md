Most Shorebird functionality, like creating releases and patches, requires being authenticated. In order to authenticate with Shorebird in CI, you will need to generate a CI token.

```sh
shorebird login:ci
```

You will be prompted to go through a similar OAuth Flow as when using `shorebird login`, however, `shorebird login:ci` will not store any credentials on your device. Instead, a Shorebird token will be generated for you to use in CI.

The output should look something like:

```sh
$ shorebird login:ci
The Shorebird CLI needs your authorization to manage apps, releases, and patches on your behalf.

In a browser, visit this URL to log in:

https://accounts.google.com/o/oauth2/v2/auth...

Waiting for your authorization...

🎉 Success! Use the following token to login on a CI server:

<SHOREBIRD_TOKEN>

Example:

export SHOREBIRD_TOKEN="$SHOREBIRD_TOKEN" && shorebird patch android
```

:::caution
The `SHOREBIRD_TOKEN` is a secret and should not be committed directly in your source code or shared publicly.
:::
