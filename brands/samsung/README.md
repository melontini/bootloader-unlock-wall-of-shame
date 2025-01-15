# Samsung

- Verdict: **⛔ Avoid!**

If you have a North American device, well, uh... If you're lucky enough not to update for a while, you can check out [this paid service][Paid North American Unlock]. (At your own risk). Any phones prior to the S23 with an Exynos SoC can be unlocked if not carrier locked, regardless of region.

Snapdragon phones prior to the S7/Note7 (2016) can be unlocked regardless of region, as long as it's not locked to a carrier like AT&T or Verizon. The Canadian S7 can also be unlocked as it uses an Exynos SoC, despite Canada normally being a Snapdragon region.

Be aware that unlocking a Samsung device will permanently trip Knox. As a result, many Knox-based features will be broken. This includes, but not limited to: Samsung Pay, Pass, Flow, Health, Secure Folder, Secure Wi-Fi, Smart View. Can you be denied warranty? Probably...

In the past, there have been hardware issues caused by unlocking the boatloader, but these have been fixed. [1][1] [2][2]

## KnoxPatch

Some of Knox-based features can be fixed with this LsPosed module [KnoxPatch] and its companion Magisk module [KnoxPatch#knoxpatch-enhancer].

## VoLTE on Custom ROMs

Samsung's IMS service is not compatible with AOSP's, so VoLTE will not work on GSI ROMs.

There is an [open source VoLTE service] developed by phh, but it's incomplete and not stable.

***
Additional info provided by [aries-ts-indo](https://github.com/aries-ts-indo) and [Ivy / Lost-Entrepreneur439](https://github.com/Lost-Entrepreneur439).<br/>
Authored by [melontini](https://github.com/melontini).

[1]:https://www.xda-developers.com/bootloader-unlocking-no-longer-kills-galaxy-z-fold-3-cameras/
[2]:https://www.xda-developers.com/samsung-galaxy-s22-bootloader-unlock-camera-working/

[open source VoLTE service]:https://github.com/phhusson/ims
[Paid North American Unlock]:https://xdaforums.com/t/android-unsamlock-bootloader-unlock-for-samsung-us-canada-devices.4215101/
[KnoxPatch]:https://github.com/BlackMesa123/KnoxPatch
[KnoxPatch#knoxpatch-enhancer]:https://github.com/BlackMesa123/KnoxPatch#knoxpatch-enhancer
