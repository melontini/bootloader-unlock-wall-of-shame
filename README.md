![Bootloader Unlock: Wall of Shame](https://github.com/melontini/bootloader-unlock-wall-of-shame/assets/104443436/2b9dbf70-faf3-49ab-886b-d88f50c5dbe0)

Keeping track of companies that "care about your data 🥺"

[Switch to Russian translation](ru/README.md)

![Terrible](https://raw.githubusercontent.com/melontini/mini-badges/main/personal/terrible.svg)
[![License CC BY-NC-SA](https://raw.githubusercontent.com/melontini/mini-badges/main/licenses/cc/CC-BY-NC-SA-4.0.svg)](https://github.com/melontini/bootloader-unlock-wall-of-shame/blob/main/LICENSE)

## Why?
Over the past few years, a suspicious number of companies have started to "take care of your data", aka block/strictly limit your ability to unlock the bootloader on your *own* devices.

While this may not affect you directly, it sets a bad precedent. You never know what will get the axe next: Shizuku? ADB? Sideloading? I thought it might be a good idea to keep track of bad companies and workarounds.

If you know of specific details/unlocking methods, please PR them or drop them in the [discussions](https://github.com/melontini/bootloader-unlock-wall-of-shame/discussions)

# The list:

> [!CAUTION]
> Reminder that no matter how nice a company is, <br/>
> you should not trust them unless their unlock process is 100% offline!

[[toc]]

## ⛔ Avoid at all costs!

### Huawei/Honor
In the past, Huawei allowed you to unlock with a special code you get by submitting some information to emui.com (IMEI, serial, model, and product ID), but in 2018 "corporate values have changed" and the site went down. <br/>
Worse, on Android 10+, the unlock command has been **completely removed** from fastboot.

Certain Kirin-based phones can use [PotatoNV](https://github.com/melontini/bootloader-unlock-wall-of-shame#kirin)

Paid methods:<br/>
I don't recommend paid methods due to general sketchiness. I have used one of these tools a while ago, it was okay.<br/>
Through HCU-client (Not everything is supported + incredible prices [hcu-client.com](https://hcu-client.com/buy/)) or DC-Unlocker (Same problems as HCU [dc-unlocker.com](https://www.dc-unlocker.com/buy))

### HMD Global/Nokia
In the flaming pile of HMD's "great" decisions to improve Nokia, one stands out more than others: They decided to follow the fresh "lock the bootloader" trend.<br/>
Why was this necessary? I don't know...

Well, anyway. Models released before early 2019 can request unlocking using Hikari Calyx's unofficial service [hikaricalyx.com](https://hikaricalyx.com/request-bootloader-unlock)

And for some other models, Hikari Calyx has a repo with prototype ABLs. [fih-firmware.hikaricalyx.com](https://fih-firmware.hikaricalyx.com/protoabl/)

Models 7.2, 8.3 and 5.3 can be unlocked offline, while others may require HMD Device Kit **which is not public and requires a service account.**

> Info kindly provided by [Hikari Calyx](https://github.com/HikariCalyx) themselves!

### Vivo/IQOO
The BBK family has an unlocking problem. If in case of OPPO/Realme they at least offer an app in some regions, Vivo is locked completely.

Well, that is, if [xdaforums.com](https://xdaforums.com/t/how-to-unlock-bootloader-of-vivo-phones.3686690/) doesn't apply to you.

On pre-May 2022 firmware. I believe these methods *were* ~universal, but proceed with caution:

* Vivo x70 Pro+: [xdaforums.com](https://xdaforums.com/t/vivo-x70-pro-bootloader-unlock-how-to-guide.4444989/)
* Vivo Y31 2021: [xdaforums.com](https://xdaforums.com/t/unlocking-bootloader-rebooting-in-edl-without-testpoint-vivo-y31-2021.4440801/)

### OPPO/Realme
I don't have much to say about OPPO.<br/>
The most annoying thing about them is that you *can* unlock your bootloader, but only if you can get into fastboot. And guess what? They locked fastboot with an RSA key!

As per Realme, they decided that segregating people by ~~race~~ their phone's region is cool. If you didn't buy your phone in China or India, chances are you won't be unlocking anything anytime soon.

In April-May 2023 you could unlock any Realme phone using this script [rmx3474-rooting](https://github.com/turistu/rmx3474-rooting), but on May 26th Realme posted this joke of an announcement on their forum [c.realme.com](https://c.realme.com/in/post-details/1671137365285982208). (They've deleted the original announcement)
Since then, they have forced their servers to only return "new struct" keys, which have model data attached, making the script useless.

In theory, if available, you could use full-OTA packages to change your phone's firmware region and use the deep testing app directly, but I can't verify that this works (please, correct me if I'm wrong). Guide: [xdaforums.com](https://xdaforums.com/t/change-region-via-full-ota.4535659/)

As for China and India... Seeing how easily Realme dropped the ball on their global users, I personally would be worried about their future plans. For now, you'll have to find and follow device-specific instructions at [c.realme.com](https://c.realme.com/in/). The process is pretty much the same for most phones, but newer models may require a HeyTap account.

### Xiaomi/Redmi/POCO

While this (currently) only affects users in China, Xiaomi's new policy makes unlocking very annoying. 

With this new policy, **You must have a Level 5 developer Xiaomi Community account.** </br>
And here's a list of things you have to do to get that:
- You must be a citizen of China.
- You have to use HyperOS and report at least 1 bug per day. (????)
- You have to submit at least 1 HyperOS suggestion per month. (????)
- You must be an active Xiaomi Community user.

Additional BS applies:
- The permission to unlock is temporary and is granted for 1-year only.
- You can only unlock 3 devices per-year.
- You will not receive OTA updates.
- your warranty will be void.

Also, check out [Xiaomi-HyperOS-BootLoader-Bypass](https://github.com/MlgmXyysd/Xiaomi-HyperOS-BootLoader-Bypass) by [MlgmXyysd](https://github.com/MlgmXyysd).

> [!NOTE]
> While not as extreme, if [xiaomiui.net](https://xiaomiui.net/how-unlock-bootloader-xiaomi-hyperos-53493/) is to be believed, global unlock has also undergone some changes:
> * Your Mi Account has been active for more than 30 days.
> * Xiaomi Community App version 5.3.31 or above.
> * You can only unlock the bootloader of 3 devices per year with your account.

Look here if you want to learn about how Ximi's bootloader works: [Xiaomi-bootloader](https://github.com/lrh2000/Xiaomi-bootloader)

> Info kindly provided by [n1ses](https://github.com/n1ses)!

### Samsung
If you have a North American device, well, uh... If you're lucky enough not to update for a while, you can check out [this paid service](https://xdaforums.com/t/android-unsamlock-bootloader-unlock-for-samsung-us-canada-devices.4215101/). (At your own risk)

If you bought your phone elsewhere, and it's not carrier locked, you can use the standard process, but brace yourself for all the breakage coming your way!

For example, unlocking will permanently trip Knox. As a result, *any* Knox-based features will be broken *even if you re-lock*. This includes, but not limited to: Samsung Pay, Pass, Flow, Health, Secure Folder, Secure Wi-Fi, Smart View. Can you be denied warranty? Probably...
Some of those features can be fixed with this LsPosed module [KnoxPatch](https://github.com/BlackMesa123/KnoxPatch) and this Magisk Module [KnoxPatch#knoxpatch-enhancer](https://github.com/BlackMesa123/KnoxPatch#knoxpatch-enhancer).

In addition, some basic features can, and will probably break, such as VoLTE, (thanks to Samsung's proprietary implementation) and in certain cases [even the camera](https://xdaforums.com/t/a52s-5g-sm-a528b-unlock-bootloader-camera-failed.4336007/).

> Info kindly provided by [aries-ts-indo](https://github.com/aries-ts-indo)!

### ZTE

Old devices (pre Android 8):<br/>
[xdaforums.com](https://xdaforums.com/t/bootloader-unlocking-on-older-qualcomm-zte-devices-devinfo-partition-modification.4100897/)

### LG

In the past, LG had a developer portal which could be used to unlock phones on their website, however it only supported international models of their phones, but in December 2021, LG announced the developer portal would be shutting down due to LG ending production of all phones. On some models (such as the Stylo 3 Plus and G6), the bootloader can be unlocked via `fastboot oem unlock` **only if** [the phone is a T-Mobile model.](https://xdaforums.com/t/unlock-bootloader-tmo.3578099/)

### HTC
In the past, HTC allowed you to unlock your bootloader on their developer website, but in June 2018 for whatever reason, HTC announced that any new phones would not have unlockable bootloaders, however their developer website would remain up for older devices.
As of September 2024, the [website to unlock legacy bootloaders](https://www.htcdev.com/bootloader) is still up and working (tested with an HTC Raider), however since HTC hasn't supported it in over 6 years, it may go down at any time, and even for these legacy devices, BS applies. HTC had a system as "S-ON/S-OFF" with S-ON enabled, [the only partitions that can be flashed are system and recovery](https://www.htcdev.com/bootloader/about_unlock_process), all other partitions are read only. While HTC claims you can write boot with S-ON, it's complicated for boot, for whatever reason, HTC made it so you can't flash boot.img from recovery, if you want to flash boot.img, you have to flash it in fastboot, meaning if you want to flash a ROM, you have to install it in recovery, then reboot to fastboot and flash boot.img, then you can boot. There have been systems to work around this, such as TWRP's [HTC Dumlock](https://xdaforums.com/t/htc-dumlock-flash-boot-from-recovery-without-fastboot-updated-2012-02-28-v2.1509743/). There are ways to achieve S-OFF, but it's different for each device. Search for your specific device on [XDA](https://xdaforums.com).

## ⚠️ Proceed with caution!

### Motorola/Lenovo
To start off, to unlock your bootloader you have to submit a request on their website, which is pretty bad on its own (*wink* Huawei). But how do you know if your device is unlockable? Well...

* [This page](https://en-us.support.motorola.com/app/answers/detail/a_id/87215) says that "Most of our latest devices support our bootloader unlock program."
* [This page](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a) says only "Photon Q 4G LTE, DROID RAZR M(Developer Edition), DROID RAZR HD(Developer Edition CDMA-LTE), MOTOROLA RAZR HD (Rest of World -UMTS/LTE), MOTOROLA RAZR HD (Rogers Canada - UMTS/LTE) and MOTOROLA RAZR i are supported by the Bootloader Unlock site."
* [And from this conversation](https://xdaforums.com/t/how-to-guide-unlocking-using-deeptest-gdpr.4585829/post-88734665) [turistu](https://github.com/turistu) had with their support: "most of our E devices doesn't support bootloader unlock program. Please see below a list of devices that support the bootloader unlock program : g100, g51 , g71 , g200 , g52 , g82 , g42 , g62 , g32"
* There's also an unofficial way with CID to check if your device can be unlocked, check here: [xdaforums.com](https://xdaforums.com/t/guide-un-locking-motorola-bootloader.4079111/post-85375429)
* Motorola also requires the phone to have a stable internet connection for at least a week for the bootloader to be unlocked, this is not mentioned anywhere on the unlock website but has been confirmed by [posts on the Motorola development forum](https://forums.lenovo.com/topic/findpost/15261/5289637/6254146)


> Moto used confusion! It seems pretty effective...

### OnePlus
What? OnePlus? Aren't their phones super easy to unlock? - yes, but... <br/>
You probably heard about the OnePlus X OPPO os merger and while it did get called off, both companies started sharing a "unified codebase". You can probably see where I'm going.

If one day OnePlus decides to practice racism like Realme or go nuclear like OPPO/Vivo, they'll have those "unified" tools at their disposal.

### Fairphone
> Ugh, well, this is just egregious!

No, wait, I have a point.

All Fairphones after 2 require you to request a code from [this](https://www.fairphone.com/en/bootloader-unlocking-code-for-fairphone) website to enable OEM unlock. There is nothing stopping them from requiring an account and having device unlock limits in the future. This is "proceed with caution" after all.

Not very fair in my opinion, but whatever fairs your phone.

### Sony

Sony has an open policy for software developers:
- They are releasing AOSP sources under [Sony Open Devices Program](https://developer.sony.com/open-source/aosp-on-xperia-open-devices).
- Jolla provides first-class support for installing [Sailfish OS](https://shop.jolla.com/) on select Xperias. That wouldn't be possible without Sony's openness.

Since Sony likes to ruin a perfect thing:
- Sony requires you to request an unlock code from [their servers](https://developer.sony.com/open-source/aosp-on-xperia-open-devices/get-started/unlock-bootloader). They can pull the plug anytime. You have to send your IMEI and agree to warranty voiding.

## ℹ️ "Safe for now" :trollface: 

### Google
Allows unlocking on almost any non-carrier locked device, but is also a pioneer in making rooting and custom ROMs painful with things like Safety Net and Play Integrity. With the latest feat being RCS messaging which requires DEVICE integrity to work. (To prevent "spam", of course)

### Nothing
Nothing Phones can be unlocked via fastboot without any codes. The only requirement is 
to enable **OEM unlocking** in **Developer Options** settings page. This is the same procedure as on Google Pixel.

# Misc info

## Universal SOC-based methods

### Kirin
Kirin 620, 650, 655, 658, 659, 925, 935, 950, 960:<br/>
It's possible to unlock using testpoints and [PotatoNV](https://github.com/mashed-potatoes/PotatoNV) (Read the readme)

### MediaTek
If you own a MediaTek device exploitable by [mtkclient](https://github.com/bkerler/mtkclient) you can unlock the bootloader using that.<br/>
If it also happens to be an OPPO/Realme device and you need to access fastboot: [lkpatcher](https://github.com/R0rt1z2/lkpatcher) ([web version](https://lkpatcher.r0rt1z2.com/))

### Unisoc
If you own a phone with the Unisoc ud710 or ums512 SOCs you can look into this exploit: [CVE-2022-38694_unlock_bootloader](https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader)

Otherwise, you can also look into this: [Spectrum_UnlockBL_Tool](https://github.com/zhuofan-16/Spectrum_UnlockBL_Tool) <br/>
This: [xdaforums.com](https://xdaforums.com/t/alldocube-t803-smile_1-bootloader-unlock-w-unisoc-t310.4393389/) <br/>
Or this: [subut](https://unisoc-android.github.io/subut/)

### Qualcomm 
There's no Universal Qualcomm method, unfortunately.

Although some of these might work for you:

The general exploit:<br/>
[alephsecurity.com](https://alephsecurity.com/2018/01/22/qualcomm-edl-2/) the bootloader unlock section.

Xiaomi Mi A1 and maybe all MSM89** manufactured before 2018:<br/>
[EDLUnlock](https://github.com/Giovix92/EDLUnlock)

***

