# Motorola/Lenovo

- Verdict: **⛔ Avoid!**
- Verdict: **🍅 Terrible!** (Unisoc)

## Kernel sources
Motorola is one of the manufacturers that provide kernel source code for their devices via official repositories on GitHub. However, they usually have weird build instructions, and will not share them unless you threaten to report to the SFC. 

It is recommended to request and download the source code as soon as possible after the device is released to the market, as Motorola may ignore requests for older models over time. For older devices, you can usually get the kernel source by pinging the user asbraga-motorola

Typically, source code becomes available about a month after the issue is opened in the appropriate repository.

- [MTK devices](https://github.com/MotorolaMobilityLLC/kernel-mtk)
- [Snapdragon devices](https://github.com/MotorolaMobilityLLC/kernel-msm)
- [Unisoc devices](https://github.com/MotorolaMobilityLLC/kernel-sprd)
- [Exynos devices](https://github.com/MotorolaMobilityLLC/kernel-slsi)
- [Texas Instruments devices](https://github.com/MotorolaMobilityLLC/kernel-omap)

## Bootloader
To unlock your bootloader, you have to submit a request on [this][Unlock Code Website] website, which is pretty bad on its own (*wink* [Huawei](../huawei/README.md)). Unisoc devices will never be unlockable, this is *not* Motorola's fault, Unisoc does not allow unlocking.

In addition, [this forum post][Old devices ineligible] says that once a device passes a certain age (the age not being specified), the device becomes ineligible.

Motorola also requires the phone to have a stable internet connection for at least a week for the bootloader to be unlocked, this is not mentioned anywhere on the unlock website but has been confirmed by [posts on the Motorola development forum][Connection Required].

So how do you know if your device is unlockable? Well...

* [This page][Most Devices] says that "Most of our latest devices support our bootloader unlock program."
* [This page][Some Devices] says only "Photon Q 4G LTE, DROID RAZR M(Developer Edition), DROID RAZR HD(Developer Edition CDMA-LTE), MOTOROLA RAZR HD (Rest of World -UMTS/LTE), MOTOROLA RAZR HD (Rogers Canada - UMTS/LTE) and MOTOROLA RAZR i are supported by the Bootloader Unlock site." -- Considering these devices are all over 13 years old, this is likely outdated.
* [And from this conversation][turistu's post] [turistu](https://github.com/turistu) had with their support: "most of our E devices doesn't support bootloader unlock program. Please see below a list of devices that support the bootloader unlock program : g100, g51 , g71 , g200 , g52 , g82 , g42 , g62 , g32"
* There's also an unofficial way with CID to check if your device can be unlocked, check here: [xdaforums.com][CID check]

### Non-Lenovo devices
Even though Motorola has been owned by Lenovo for a while, there are still devices around that aren't made by Lenovo.

### Certain G series devices
For some Motorola devices, the firmware is not developed by the company's core team, but simply purchased solutions from various OEMs.

These are exactly the devices that lack any instructions on how to unlock the bootloader or are completely locked, with no way to unlock. 

Examples of such devices include the Moto G23, G13, G24, and G24 Power. 

Fortunately, enthusiasts have managed to find unofficial ways to unlock these devices, despite the fact that Moto Agents stubbornly deny the existence of such methods:
* Moto G13/G23 - Decompiled the bootloader, studied the algorithm for unlocking the bootloader and [developed a keygen](https://penangf.fuckyoumoto.xyz/docs/dev/bootloader), which is required to get the key to unlock the bootloader.
* Moto G24/G24 Power - Thanks to a leaked engineering DA with full permissions to all partitions and using a custom ChouChou bootloader, [a way to unlock was found](https://fogorow.fuckyoumoto.xyz/docs/dev/bootloader)

### Google Motos (2012-2014)
For a short while, Google owned Motorola Mobility (from May 2012 to October 2014). Despite Google devices following the normal procedure, Google Motos used the same unlock portal that the modern Lenovo devices use, and of course, Lenovo removed the ability to unlock older devices, so these Google-era Motos are no longer unlockable. This does not include the Nexus 6, see the [Google](../google/README.md) page for Nexus devices.

### Independent Motorola (2012 and earlier)
Devices made before Google purchased Motorola Mobility (May 2012) do not have unlockable bootloaders, the unlock command is removed from Fastboot, and you cannot get the unlock code either. For Motorola's more popular devices from this time, such as the DROID lineup, and pretty much any device with a Texas Instruments SoC, there are usually root exploits, and Hashcode's Safestrap, which allows you to get TWRP and run custom ROMs on a locked bootloader with kexec. These can vary on device to device though, you'll have to check XDA for your specific device. Old Motorola rooting tools usually won't work on modern operating systems, and will require a legacy OS such as Windows 7, OS X El Capitan or Ubuntu 14.04. 

### Motorola Solutions (radios)
tldr, Motorola split into two companies in 2011. Motorola Mobility, which made the phones and DVRs and is now owned by Lenovo, and Motorola Solutions, who makes everything else. Solutions has recently started making radios which run Android. Not much is known about these devices, Motorola doesn't even reveal which SoC they use, so nothing is really known about these devices. This [datasheet] for the MOTOTRBO ION mentions "Root Detection: Standard", which in Moto-speak, means "this device always ships with root detection.", indicating that the bootloader is probably not unlockable on these devices. Via [this spreadsheet] from Google, you can see the MOTOTRBO ION's codename -- mkz_sdm660_64, which indicates that possibly it uses a Snapdragon 660 SoC, but the MOTOTRBO ION runs Android 13, which seems weirdly new for a 2017 SoC, no it might just be gibberish or something unrelated.

### MtkClient + BROM
Most MTK-based Motorola devices **released before 2022 are susceptible to [mtkclient](https://github.com/bkerler/mtkclient) bypass**, and full unlock may require [ChouChou](https://github.com/R0rt1z2/chouchou) / [Kaeru](https://github.com/R0rt1z2/kaeru) patches to disable automatic bootloader lock.

However, on devices **released after 2022, this method is ineffective** as the preloader vulnerability has been patched and the BROM is blocked via eFuse, and attempting to crash the preloader results in a bootloop in the preloader.

> Moto used confusion! It seems pretty effective...

### Legal Agreement Controversy

Motorola's [Bootloader Unlocking Legal Agreement][Bootloader Unlocking Legal Agreement] includes a particularly concerning clause attempting to restrict the owner's rights after unlocking the bootloader.

The 4th clause of the agreement states:

> User is unlocking the Device and/or altering the Device's software or operating system for his/her own personal use; User agrees not to transfer (i.e. sell, lease, or otherwise receive compensation from any third party for the right to use, possess, or operate such Device) such Device to any third party;

This clause attempts to prohibit the user from selling, leasing, or otherwise transferring their own device after unlocking the bootloader. Such a restriction directly conflicts with established legal principles safeguarding ownership rights, namely the [First-Sale Doctrine][First-Sale Doctrine] and the [Exhaustion Doctrine][Exhaustion Doctrine], which grant the owner the right to resell or dispose of property they have lawfully acquired. While the legal validity of this clause is highly questionable and likely unenforceable, its inclusion in the agreement is still a point of concern.

***
Additional info provided by [Ivy / Lost-Entrepreneur439](https://github.com/Lost-Entrepreneur439).<br/>
CID info provided by [FPSensor](https://github.com/FPSensor).<br/>
Unofficial ways to unlock "Moto G13/G23/G24/G24 Power" bootloader provided by [DiabloSat](https://github.com/progzone122) & [Shomy](https://github.com/shomykohai).<br/>
Legal agreement info provided by [FaridZelli](https://github.com/FaridZelli).<br/>
Authored by [melontini](https://github.com/melontini).

[Bootloader Unlocking Legal Agreement]:https://en-us.support.motorola.com/ci/fattach/get/741421/1385047216/redirect/1/filename/Boot_revised.pdf
[First-Sale Doctrine]:https://en.wikipedia.org/wiki/First-sale_doctrine
[Exhaustion Doctrine]:https://en.wikipedia.org/wiki/Exhaustion_doctrine_under_U.S._law
[Unlock Code Website]:https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-b
[Most Devices]:https://en-us.support.motorola.com/app/answers/detail/a_id/87215
[Some Devices]:https://en-us.support.motorola.com/app/standalone/bootloader/unlock-your-device-a
[turistu's post]:https://xdaforums.com/t/how-to-guide-unlocking-using-deeptest-gdpr.4585829/post-88734665
[CID check]:https://xdaforums.com/t/guide-un-locking-motorola-bootloader.4079111/post-85375429
[Connection Required]:https://forums.lenovo.com/topic/findpost/15261/5289637/6254146
[Old devices ineligible]:https://forums.lenovo.com/t5/MOTOROLA-Android-Developer-Community/Your-device-does-not-qualify-for-bootloader-unlocking/m-p/5234690?page=3#6297769
[datasheet]:https://www.motorolasolutions.com/content/dam/msi/docs/products/two-way-radios/mototrbo/portable-radios/mototrbo-ion-radio/MOTOTRBO_Ion_DataSheet_NAM.pdf
[this spreadsheet]:https://storage.googleapis.com/play_public/supported_devices.html
