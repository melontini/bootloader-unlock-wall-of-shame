![Banner. A lock and a key on fire on the left and the text 'Bootloader Unlock: Wall of Shame' on the right.](/misc/banner/banner.jpg)

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

## ⛔ Avoid at all costs!

### [Huawei/Honor](/brands/huawei/README.md)

### [HMD Global/Nokia](/brands/nokia/README.md)

### [Vivo/IQOO](/brands/vivo/README.md)

### [OPPO/Realme](/brands/oppo/README.md)

### [Xiaomi/Redmi/POCO](/brands/xiaomi/README.md)

### [Samsung](/brands/samsung/README.md)

### [ZTE](/brands/zte/README.md)

### [LG](/brands/lg/README.md)

### [HTC](/brands/htc/README.md)

### [Meizu](/brands/meizu/README.md)

### [Asus](/brands/asus/README.md)

### [Alcatel](/brands/alcatel/README.md)

### [Apple](/brands/apple/README.md)

### [Motorola/Lenovo](/brands/motorola/README.md)

### [Energizer](/brands/energizer/README.md)

### [Cat](/brands/cat/README.md)

### [Sharp](/brands/sharp/README.md)

### Carrier Locked Devices

> [!NOTE]
> Phone brands handle carrier locks differently, so check your device manual or contact support.

Carrier locked devices are the ones you get after making a commitment with a carrier of your choice. This is quite common in North America and (supposedly) allows you to save some money on your device.

As a rule, almost all carrier locked devices do not allow the bootloader to be unlocked. This usually makes sense, as it would allow you to completely bypass the contract. The problem is that many devices still do not allow you to unlock the bootloader even after the carrier lock has been lifted.

## ⚠️ Proceed with caution!

### [Fairphone](/brands/fairphone/README.md)

### [Sony](/brands/sony/README.md)

### [Microsoft](/brands/microsoft/README.md)

### [OnePlus](/brands/oneplus/README.md)

### [Infinix](/brands/infinix/README.md)

## ℹ️ "Safe for now" :trollface: 

### [Google](/brands/google/README.md)

### [Nothing](/brands/nothing/README.md)

### [Umidigi](/brands/umidigi/README.md)

### [Micromax](/brands/micromax/README.md)

# Misc info

## Custom AVB Keys

Custom Android Verified Boot keys is a feature which allows you to run a custom OS with a locked bootloader.

It's rare to see a device which supports custom AVB keys, but some devices can be found [here](https://github.com/chenxiaolong/avbroot/issues/299).

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

