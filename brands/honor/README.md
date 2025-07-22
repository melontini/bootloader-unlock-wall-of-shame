# Honor

- Verdict: **⛔ Avoid!**
- Verdict: **🍅 Terrible!** (Unisoc/Spreadtrum)

Following Honor's split from Huawei in 2020, Honor re-introduced the unlock command in fastboot, however when you run it, it'll act like the bootloader has been unlocked, but it [won't actually unlock][fake unlock]. Possibly Honor is slowly re-adding unlocks? No one really knows. Someone in that thread also claims they managed to unlock their bootloader, so maybe bootloaders are unlockable. Best off to avoid Honor for now but things could improve in the future for them. Unisoc and Spreadtrum devices will never be unlockable, this is Honor's fault, first Unisoc/Spreadtrum does allow unlocking through fastboot oem unlock-go or similar, although this is rare and normally the command is removed, but in any case if Honor wanted to reintroduce the unlock they could had just used unisoc default signature to allow the unlock through the [Identifier-token]

Certain Kirin-based phones can use [PotatoNV]

***
Authored by [Ivy/Lost-Entrepreneur439](https://github.com/lost-entrepreneur439).

[PotatoNV]:../../README.md#kirin
[fake unlock]:https://xdaforums.com/t/unlock-honor-50-bootloader.4495577/
[Identifier-token]:https://www.hovatek.com/forum/thread-32287.html
