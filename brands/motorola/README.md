# Motorola/Lenovo

- Verdict: **⛔ Avoid!**

To start off, to unlock your bootloader you have to submit a request on their website, which is pretty bad on its own (*wink* [Huawei](/brands/huawei/README.md)). 

In addition, [this forum post][Old devices ineligible] says that once a device passes a certain age (the age not being specified), the device becomes ineligible.

Motorola also requires the phone to have a stable internet connection for at least a week for the bootloader to be unlocked, this is not mentioned anywhere on the unlock website but has been confirmed by [posts on the Motorola development forum][Connection Required].

So how do you know if your device is unlockable? Well...

* [This page][Most Devices] says that "Most of our latest devices support our bootloader unlock program."
* [This page][Some Devices] says only "Photon Q 4G LTE, DROID RAZR M(Developer Edition), DROID RAZR HD(Developer Edition CDMA-LTE), MOTOROLA RAZR HD (Rest of World -UMTS/LTE), MOTOROLA RAZR HD (Rogers Canada - UMTS/LTE) and MOTOROLA RAZR i are supported by the Bootloader Unlock site."
* [And from this conversation][turistu's post] [turistu](https://github.com/turistu) had with their support: "most of our E devices doesn't support bootloader unlock program. Please see below a list of devices that support the bootloader unlock program : g100, g51 , g71 , g200 , g52 , g82 , g42 , g62 , g32"
* There's also an unofficial way with CID to check if your device can be unlocked, check here: [xdaforums.com][CID check]

## Unofficial ways
For some Motorola devices, the firmware is not developed by the company's core team, but simply purchased solutions from various OEMs.

These are exactly the devices that lack any instructions on how to unlock the bootloader or are completely locked, with no way to unlock. 

Examples of such devices include the Moto G23, G13, G24, and G24 Power. 

Fortunately, enthusiasts have managed to find unofficial ways to unlock these devices, despite the fact that Moto Agents stubbornly deny the existence of such methods:
* Moto G13/G23 - Decompiled the bootloader, studied the algorithm for unlocking the bootloader and [developed a keygen](https://penangf.fuckyoumoto.xyz/docs/dev/bootloader), which is required to get the key to unlock the bootloader.
* Moto G24/G24 Power - Thanks to a leaked engineering DA with full permissions to all partitions and using a custom ChouChou bootloader, [a way to unlock was found](https://fogorow.fuckyoumoto.xyz/docs/dev/bootloader)

### MtkClient + BROM
Most MTK-based Motorola devices **released before 2022 are susceptible to [mtkclient](https://github.com/bkerler/mtkclient) bypass**, and full unlock may require [ChouChou](https://github.com/R0rt1z2/chouchou) / [Kaeru](https://github.com/R0rt1z2/kaeru) patches to disable automatic bootloader lock.

However, on devices **released after 2022, this method is ineffective** as the preloader vulnerability has been patched and the BROM is blocked via eFuse, and attempting to crash the preloader results in a bootloop in the preloader.

> Moto used confusion! It seems pretty effective...

***
Additional info provided by [Ivy / Lost-Entrepreneur439](https://github.com/Lost-Entrepreneur439).<br/>
CID info provided by [FPSensor](https://github.com/FPSensor).<br/>
Unofficial ways to unlock "Moto G13/G23/G24/G24 Power" bootloader provided by [DiabloSat](https://github.com/progzone122) & [Shomy](https://github.com/shomykohai)<br />
Authored by [melontini](https://github.com/melontini).

[Most Devices]:https://en-us.support.motorola.com/app/answers/detail/a_id/87215
[Some Devices]:https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a
[turistu's post]:https://xdaforums.com/t/how-to-guide-unlocking-using-deeptest-gdpr.4585829/post-88734665
[CID check]:https://xdaforums.com/t/guide-un-locking-motorola-bootloader.4079111/post-85375429
[Connection Required]:https://forums.lenovo.com/topic/findpost/15261/5289637/6254146
[Old devices ineligible]:https://forums.lenovo.com/t5/MOTOROLA-Android-Developer-Community/Your-device-does-not-qualify-for-bootloader-unlocking/m-p/5234690?page=3#6297769