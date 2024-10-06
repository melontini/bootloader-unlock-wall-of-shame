# OPPO/Realme

- Verdict: **⛔ Avoid!**

I don't have much to say about OPPO.<br/>
The most annoying thing about them is that you *can* unlock your bootloader, but only if you can get into fastboot. And guess what? They locked fastboot with an RSA key!

As per Realme, they decided that segregating people by ~~race~~ their phone's region is cool. If you didn't buy your phone in China or India, chances are you won't be unlocking anything anytime soon.

In April-May 2023 you could unlock any Realme phone using this script [rmx3474-rooting], but on May 26th Realme posted this joke of an announcement on their forum [c.realme.com][announcement]. (They've deleted the original announcement)
Since then, they have forced their servers to only return "new struct" keys, which have model data attached, making the script useless.

In theory, if available, you could use full-OTA packages to change your phone's firmware region and use the deep testing app directly, but I can't verify that this works (please, correct me if I'm wrong). Guide: [xdaforums.com][Full-OTA region switch]

As for China and India... Seeing how easily Realme dropped the ball on their global users, I personally would be worried about their future plans. For now, you'll have to find and follow device-specific instructions at [c.realme.com](https://c.realme.com/in/). The process is pretty much the same for most phones, but newer models may require a HeyTap account.

## Deep Testing

Deep Testing is the application used to request the bootloader key. Internally, it writes the key to the (oplus/oppo)reserve1 partition, which is later read by fastboot. Realme and Oppo have different versions of Deep Testing, but the apps are almost identical in function.

### Realme

While Realme's posts make it seem like you need a specific version of DT for each device, this is not true. All devices with RUI 2 and below need to use v1.0.0, all devices with RUI 3 and above need to use v1.0.1 or v1.1.0.

**v1.0.1:**
- Changes the signing key.

**v1.1.0:**
- Introduces HeyTap accounts.

#### Debugging

> 🧹 There should be a guide to running code with this exploit.

A debuggable version of Deep Testing 1.1.0 has been accidentally released. Equipped with Android Studio, you can execute code with full system privileges (UID 1000, not root).

Brought up by [gargargar666 on XDA][deep-testing-thread]. Download [GT5-DeepTesting.apk][debuggable-deep-testing]

### Oppo

Oppo Deep Testing uses a different API endpoint to request the unlock code. Only 2 versions of Oppo Deep Testing exist: v1.0.1 and v1.1.0.

***
Authored by [melontini](https://github.com/melontini).

[rmx3474-rooting]:https://github.com/turistu/rmx3474-rooting
[announcement]:https://c.realme.com/in/post-details/1671137365285982208
[Full-OTA region switch]:https://xdaforums.com/t/change-region-via-full-ota.4535659/
[deep-testing-thread]:https://xdaforums.com/t/discussion-a-thread-to-collate-and-share-what-is-known-about-unlocking-fastboot-on-oppo-devices.4490041/post-89323153
[debuggable-deep-testing]:https://xdaforums.com/attachments/gt5-deeptesting-apk.6065115/