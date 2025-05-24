# ZTE

> 🧹 This page is missing a lot of info!

- Verdict: **🍅 Terrible!**

Old devices (pre Android 8):<br/>
[xdaforums.com][pre-android-8]

Devices Until Android 11 with engineering firmware:<br/>
[xdaforums.com][until-android-11-few-models]

There is also a chance that your device is vulnerable to one of the MTK or Unisoc [exploits](../../README.md#universal-soc-based-methods).

About ZTE unisoc models pre android 10, ZTE used a custom signature for boot, vbmeta, recovery and system meaning that without an engineering firmware flashing magisk would lead to bootloop, in the same way patching vbmeta as described on [hovatek-vbmeta] does the same thing, same if you try to patch recovery. Android 11 models don't have this problem, but them can only be rooted by magisk, vbmeta has a custom signature and editing super leads to bootloop. On android 13 ZTE blocked the unlock [unlock-block]

Side note, on the A11 link there is a collection of apps to grant a system shell, but they would probably only work on old models.

***
Additional info provided by [Skorpion96](https://github.com/Skorpion96).
Authored by [melontini](https://github.com/melontini).

[pre-android-8]:https://xdaforums.com/t/bootloader-unlocking-on-older-qualcomm-zte-devices-devinfo-partition-modification.4100897/
[until-android-11-few-models]:https://xdaforums.com/t/zte-blade-a5-2019-2020-etc-root-guide-locked-bootloader-valid-for-all-unisoc-zte-models-with-an-engineering-firmware.4612391/
[unisoc-cve]:https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/releases/tag/1.72
[hovatek-vbmeta]:https://www.hovatek.com/forum/thread-32664.html

[unlock-block]:https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/wiki/patch_do_cboot%E2%80%90FDL1#set_lock_status
