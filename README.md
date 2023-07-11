![Bootloader Unlock: Wall of Shame](https://raw.githubusercontent.com/melontini/bootloader-unlock-wall-of-shame/main/bu_wos_banner_s.webp)
# Bootloader Unlock: Wall of Shame
Keeping track of companies that "care about your data 🥺"

![GitHub](https://img.shields.io/github/license/melontini/bootloader-unlock-wall-of-shame)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmelontini%2Fbootloader-unlock-wall-of-shame&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Why?
Over the past few years, a suspicious number of companies have started to "take care of your data", aka block/strictly limit your ability to unlock the bootloader on your *own* devices.

While this may not affect you directly, it sets a bad precedent. You never know what will get the axe next: Shizuku? ADB? Sideloading? I thought it might be a good idea to keep track of bad companies and workarounds.

If you know of specific details/unlocking methods, please PR them or drop them in the [discussions](https://github.com/melontini/bootloader-unlock-wall-of-shame/discussions)

# The list:

## Avoid at all costs!

### 1. Huawei/Honor
In the past, Huawei allowed you to unlock with a special code you get by submitting some information to emui.com (IMEI, serial, model, and product ID), but in 2018 "corporate values have changed" and the site went down. <br/>
Worse, on Android 10+, the unlock command has been **completely removed** from fastboot.

Certain Kirin-based phones can use [PotatoNV](https://github.com/melontini/bootloader-unlock-wall-of-shame#kirin)

Older models, through bruteforce:<br/>
https://github.com/rainxh11/HuaweiBootloader_Bruteforce <br/>
https://github.com/Martazza/Huawei-Bootloader-Unlocker

Paid methods:<br/>
I don't recommend paid methods due to general sketchiness. I have used one of these tools a while ago, it was okay.<br/>
Through HCU-client (Not everything is supported + incredible prices https://hcu-client.com/buy/) or DC-Unlocker (Same problems as HCU https://www.dc-unlocker.com/buy)

### 2. Samsung (Qualcomm)
It's not possible. (I think)

### 3. HMD Global/Nokia
In the flaming pile of HMD's "great" decisions to improve Nokia, one stands out more than others: They decided to follow the fresh "lock the bootloader" trend.<br/>
Why was this necessary? I don't know...

Well, anyway. On some models, hikari_calyx found the prototype ABL.

Nokia 8.3 5G: https://forum.xda-developers.com/t/guide-how-to-unlock-the-bootloader-for-nokia-8-3-5g.4233949/ <br/>
Nokia 5.3: https://forum.xda-developers.com/t/guide-heres-how-to-unlock-the-bootloader-of-nokia-5-3.4568619/

### 4. Vivo/IQOO
The BBK family has an unlocking problem. If in case of OPPO/Realme they at least offer an app in some regions, Vivo is locked completely.

Well, that is if https://forum.xda-developers.com/t/how-to-unlock-bootloader-of-vivo-phones.3686690/ doesn't apply to you.

On pre-May 2022 firmware. I believe these methods *were* ~universal, but proceed with caution:

Vivo x70 Pro+: https://forum.xda-developers.com/t/vivo-x70-pro-bootloader-unlock-how-to-guide.4444989/ <br/>
Vivo Y31 2021: https://forum.xda-developers.com/t/unlocking-bootloader-rebooting-in-edl-without-testpoint-vivo-y31-2021.4440801/

### 5. OPPO/Realme (Non CN/IN)
I don't have a lot to say about OPPO.<br/>
The most annoying part about them is that you *can* unlock your bootloader, but only if you can enter fastboot. And guess what? They locked fastboot with an RSA key!<br/>
https://forum.xda-developers.com/t/discussion-a-thread-to-collate-and-share-what-is-known-about-unlocking-fastboot-on-oppo-devices.4490041/

As per Realme, they decided that segregating people by ~~race~~ their phone's region is cool. If you didn't buy your phone in China or India, chances are you won't be unlocking anything anytime soon.

In April-May 2023 you could unlock any Realme phone using this script https://github.com/turistu/rmx3474-rooting, but on May 26th Realme posted this joke of an announcement on their forum https://c.realme.com/in/post-details/1661960232244367360 <br/>
~The script *might* still work on some models. (Not a lot of info is available)~ <br/>

June 21st update:
The unlock server has been shut down once more. <br/>
This time they posted the same message for the second time! https://c.realme.com/in/post-details/1671137365285982208 🤡🤡🤡 <br/>
They also sneakily deleted their old announcement, even though the server has never been open since then.

If you need DeepTesting, try this: https://forum.xda-developers.com/t/unlock-bootloader-help.4425415/post-86777721

## Proceed with caution!

### 1. Realme (IN/CN)
Seeing how easily Realme dropped the ball on their global users, I personally would be worried about their future plans.

For now you can use any of the guides here https://c.realme.com/in/post-details/1248075024070344704 (They're just copy-pasting the same info as the unlock process didn't change much at all)

If you need DeepTesting, try this: https://forum.xda-developers.com/t/unlock-bootloader-help.4425415/post-86777721

### 2. Samsung (Exynos)
If you have an Exynos-based Samsung, you can unlock your phone, but this will permanently trip Knox. As a result *any* Knox based features will be broken *even if you re-lock*. This includes, but not limited to: Samsung Pay, Pass, Flow, Health, Secure Folder, Secure Wi-Fi, Smart View. Can you be denied warranty? Probably...

Some of those features can be fixed with this LsPosed module https://github.com/BlackMesa123/KnoxPatch and this Magisk Module https://github.com/BlackMesa123/KnoxPatch#knoxpatch-enhancer.

### Motorola
To start off, to unlock your bootloader you need to make a request on their website, which is pretty bad on its own (*wink* Huawei), but there's also no way to know if your model supports unlocking beforehand.

[This page](https://en-us.support.motorola.com/app/answers/detail/a_id/87215) says that "Most of our latest devices support our bootloader unlock program."<br/>
[This page](https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a) says only "Photon Q 4G LTE, DROID RAZR M(Developer Edition), DROID RAZR HD(Developer Edition CDMA-LTE), MOTOROLA RAZR HD (Rest of World -UMTS/LTE), MOTOROLA RAZR HD (Rogers Canada - UMTS/LTE) and MOTOROLA RAZR i are supported by the Bootloader Unlock site."<br/>
[And from this conversation](https://forum.xda-developers.com/t/how-to-guide-unlocking-using-deeptest-gdpr.4585829/post-88734665) [turistu](https://github.com/turistu) had with their support: "most of our E devices doesn't support bootloader unlock program. Please see below a list of devices that support the bootloader unlock program : g100, g51 , g71 , g200 , g52 , g82 , g42 , g62 , g32"

> Moto used confusion! It seems pretty effective...

### 3. OnePlus
What? OnePlus? Aren't their phones super easy to unlock? - yes, but... <br/>
You probably heard about the OnePlus X OPPO os merger and while it did get called off, both companies started sharing a "unified codebase". You can probably see where I'm going.

If one day OnePlus decides to practice racism like Realme or go nuclear like OPPO/Vivo, they'll have those "unified" tools at their disposal.

### 4. Xiaomi/Redmi/POCO
Currently, Xiaomi allows everyone to unlock, well, that is, if you have a SIM card, internet connection, a MI account, can set up their unlock tool and have 7 days (or more) at your disposal. <br/>
The problem is that their unlock process is similar to that of OPPO, where you have accounts, verifications, RSA keys and more. And while it doesn't seem like they're going to change their policy anytime soon, but if they do, they can just break the unlock tool/block you with that MI account.

Read more here: https://github.com/lrh2000/Xiaomi-bootloader

# SOC based
Universal methods for different SOCs.

## Kirin
Kirin 620, Kirin 650, Kirin 655, Kirin 658, Kirin 659, Kirin 925, Kirin 935, Kirin 950, Kirin 960:<br/>
It's possible to unlock using testpoints and https://github.com/mashed-potatoes/PotatoNV (Read the readme)

## MediaTek
If you own a MediaTek device exploitable by https://github.com/bkerler/mtkclient you can unlock the bootloader using that.<br/>
If it also happens to be an OPPO/Realme device and you need to access fastboot: https://github.com/R0rt1z2/oplus-unlock

## Unisoc
If you own a phone with the Unisoc ud710 or ums512 SOCs you can look into this exploit: https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader

Otherwise, you can also look into this: https://github.com/zhuofan-16/Spectrum_UnlockBL_Tool <br/>
This: https://forum.xda-developers.com/t/alldocube-t803-smile_1-bootloader-unlock-w-unisoc-t310.4393389/ <br/>
Or this: https://github.com/Iscle/subut

## Qualcomm 
There's no Universal Qualcomm method, unfortunately.

Although some of these might work for you:

The general exploit:<br/>
https://alephsecurity.com/2018/01/22/qualcomm-edl-2/ the bootloader unlock section.

Old ZTE devices:<br/>
https://forum.xda-developers.com/t/bootloader-unlocking-on-older-qualcomm-zte-devices-devinfo-partition-modification.4100897/

Xiaomi Mi A1 and maybe all MSM89** manufactured before 2018:<br/>
https://github.com/Giovix92/EDLUnlock
