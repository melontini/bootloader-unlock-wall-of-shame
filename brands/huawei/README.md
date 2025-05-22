# Huawei

- Verdict: **🍅 Terrible! _(but could be worse!)_**

In the past, Huawei allowed you to unlock (userlock) with a special code you get by submitting some information to emui.com (IMEI, serial, model, and product ID), but in 2018 "corporate values have changed" and the site went down. <br/>
Worse, on Android 10+, the unlock command has been **completely removed** from fastboot, removing the "userlock" capability.
Huawei has left another unlock flag which previously was stored in a partition (nvme) in cleartext, which is FBLock. 

However, from Android 10+, the "FBLock" unlock method on newer platforms can only be triggered by a RSA signature **(RDLOCK)**, signed by Huawei's public key inside OEMINFO.

**RDLOCK** (Research&Development Lock, from official documentation) has been considered as the unlock method used by Authorized Service Center and the factory to permanently unlock a device while the signature exists on the OEMINFO partition, and this unlock method allows you to flash to any partition, and allows to flash load any insecure image (excluding fastboot).

Devices using Kirin 6xx-659, and Kirin 9xx-960 can use [PotatoNV] to write a new bootloader unlock code AND to set **FBLock** capabilities to fully unlock the bootloader.
Devices using Kirin 970 no longer have the bootloader unlock key in cleartext but in the form of a RSA signature, as well, in OEMINFO. You can write a new code using [HCU-client].
However, this SoC can be unlocked in higher versions of Android (10+) via RDLOCK signature. [HCU-client] is the ONLY program capable of achieving FBunlock as they have the RSA keys.

Devices using Kirin 710 (A/F) and Kirin 980 can't have a new bootloader unlock key written as the RSA public key in fastboot is different than the one from the paid tools. If you somehow got an unlock code officially or manually triggered userlock*, it will only work if you're below Android 10.
_*Some custom, unsigned bootloaders using onchiprom (BootROM) vulnerability can be made to allow fastboot to unlock (userlock) your device without an unlock code on these platforms._

Anything over Kirin 810, and Kirin 990 remains non-unlockable for the time being. However, couple of BootROM-based exploits for tethered unlocking are currently being worked on! (shh!)

Paid methods:<br/>
I don't recommend paid methods due to general sketchiness. I have used one of these tools a while ago, it was okay.<br/>
Through HCU-client (Not everything is supported + incredible prices [hcu-client.com]) or DC-Unlocker (Same problems as HCU [dc-unlocker.com])
However, if you feel like you need a license for whatever reason, look out for their official resellers instead of paying the full price on their website. Retailers usually sell the licenses for a better price.

***
Authored by [melontini](https://github.com/melontini), [AntiEngineer](https://github.com/antiengineer).

[PotatoNV]:../../README.md#kirin
[hcu-client.com]:https://hcu-client.com/buy/
[dc-unlocker.com]:https://www.dc-unlocker.com/buy
