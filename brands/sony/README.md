# Sony

- Verdict: **⚠️ Proceed with caution!**

Sony has an open policy for software developers:
- They are releasing AOSP sources under [Sony Open Devices Program].
- Jolla provides first-class support for installing [Sailfish OS] on select Xperias.

Since Sony likes to ruin a perfect thing:
- Sony requires you to request an unlock code from their [Unlock Service]. They can pull the plug anytime. You have to send your IMEI and agree to warranty voiding.

Some carrier locked and US devices can never be unlocked. On Sony devices ([but not all?][service-menu-gone]) you can check if the bootloader is unlockable using the service menu.

1. Dial `*#*#7378423#*#*` in the dialer.
2. Tap "Service Info", then "Configuration", then "Rooting Status".
3. Under Rooting Status look for "Bootloader unlock allowed"
4. If "Yes", then the device is unlockable.

***
Additional info provided by [K4sum1](https://github.com/K4sum1).<br/>
Authored by [konradmb](https://github.com/konradmb).

[Sony Open Devices Program]:https://developer.sony.com/open-source/aosp-on-xperia-open-devices
[Sailfish OS]:https://shop.jolla.com/
[Unlock Service]:https://developer.sony.com/open-source/aosp-on-xperia-open-devices/get-started/unlock-bootloader
[service-menu-gone]:https://www.reddit.com/r/SonyXperia/comments/qir0ze/what_happened_to_the_service_menu/