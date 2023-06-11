# Bootloader Unlock: Wall of Shame
Keeping track of companies that "care about your data 🥺"

## Why?
Over the past few years, a suspicious number of companies have started to "take care of your data", aka block/strictly limit your ability to unlock the bootloader on your *own* devices.

While this may not affect you directly, it sets a bad precedent and it might be a good idea to keep track of companies and workarounds.

If you know of specific details/unlocking methods, please PR them or drop them in the issues.

# The list:

## Avoid at all costs!

### 1. Huawei/Honor
In the past, Huawei allowed you to unlock with a special code you get by submitting some information to emui.com (IMEI, serial, model, and product ID), but in 2018 "corporate values have changed" and the site went down. <br/>
Worse, on Android 10+, the unlock command has been **completely removed** from fastboot.

But for some models, it's still possible to unlock.

Kirin 620, Kirin 650, Kirin 655, Kirin 658, Kirin 659, Kirin 925, Kirin 935, Kirin 950, Kirin 960:<br/>
It's possible to unlock using testpoints and https://github.com/mashed-potatoes/PotatoNV (Read the readme)

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

Well, anyway. On some models, hikari_calyx leaked the prototype ABL.

Nokia 8.3 5G:
https://forum.xda-developers.com/t/guide-how-to-unlock-the-bootloader-for-nokia-8-3-5g.4233949/

Nokia 5.3:
https://forum.xda-developers.com/t/guide-heres-how-to-unlock-the-bootloader-of-nokia-5-3.4568619/

### 4. Vivo/IQOO
The BBK family has an unlocking problem. If in case of OPPO/Realme they at least offer an app in some regions, Vivo is locked completely.

Well, that is if https://forum.xda-developers.com/t/how-to-unlock-bootloader-of-vivo-phones.3686690/ doesn't apply to you.

On pre-May 2020 firmware. I believe these methods *were* ~universal, but proceed with caution: <br/>
Vivo x70 Pro+: https://forum.xda-developers.com/t/vivo-x70-pro-bootloader-unlock-how-to-guide.4444989/ <br/>
Vivo Y31 2021: https://forum.xda-developers.com/t/unlocking-bootloader-rebooting-in-edl-without-testpoint-vivo-y31-2021.4440801/

### 5. OPPO/Realme (Non CN/IN)
I don't have a lot to say about OPPO.<br/>
The most annoying part about them is that you *can* unlock your bootloader, but only if you can enter fastboot. And guess what? They locked fastboot with an RSA key!<br/>
https://forum.xda-developers.com/t/discussion-a-thread-to-collate-and-share-what-is-known-about-unlocking-fastboot-on-oppo-devices.4490041/

As per Realme, they decided that segregating people by ~~race~~ their phone's region is cool. If you didn't buy your phone in China or India, chances are you won't be unlocking anything anytime soon.

In April-May 2023 you could unlock any Realme phone using this script https://github.com/turistu/rmx3474-rooting, but on May 26th Realme posted this joke of an announcement on their forum https://c.realme.com/in/post-details/1661960232244367360 <br/>
The script *might* still work on some models. (Not a lot of info is available) <br/>
If you need DeepTesting, try this: https://forum.xda-developers.com/t/unlock-bootloader-help.4425415/post-86777721

Older MTK-based models can use the [mtkclient method](https://github.com/melontini/bootloader-unlock-wall-of-shame#mediatek). There *might* be a Unisoc method, but I've never seen it.

## Proceed with caution!

### 1. Realme (IN/CN)
Seeing how easily Realme dropped the ball on their global users, I personally would be worried about their future plans.

For now you can use any of the guides here https://c.realme.com/in/post-details/1248075024070344704 (They're just copy-pasting the same info as the unlock process didn't change much at all)

If you need DeepTesting, try this: https://forum.xda-developers.com/t/unlock-bootloader-help.4425415/post-86777721

### 2. Samsung (Exynos)
If you have an Exynos-based Samsung, you can unlock your phone, but this will permanently trip Knox. As a result *any* Knox based features will be broken *even if you re-lock*. This includes, but not limited to: Samsung Pay, Pass, Flow, Health, Secure Folder, Secure Wi-Fi, Smart View. Can you be denied warranty? Probably...

Some of those features can be fixed with this LsPosed module https://github.com/BlackMesa123/KnoxPatch and this Magisk Module https://github.com/BlackMesa123/KnoxPatch#knoxpatch-enhancer.

# Additional Info

## MediaTek
If you own a MediaTek device exploitable by https://github.com/bkerler/mtkclient you can unlock the bootloader using that.<br/>
If it also happens to be an OPPO/Realme device and you need to access fastboot: https://github.com/R0rt1z2/oplus-unlock
