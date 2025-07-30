- Verdict: **🍅 Terrible!**

TCL got their start in the mobile world as a contract manufacturer for BlackBerry, and while TCL's contract with BlackBerry ended in 2020, TCL has continued BlackBerry's lineage of "secure bootloaders", AKA, doing everything they can to make you unable to unlock the bootloader. Because of TCL's history with BlackBerry, who has always been horrible with bootloader unlocks, it is unlikely TCL bootloaders will ever be unlockable.

## Authboot
TCL has its own fork of the fastboot utility called `authboot`, which **requires special authorization from their server to perform any bootloader-related operations**. Without this authorization, **it is impossible to unlock the device** or flash unsigned images, effectively eliminating any possibility of installing custom ROMs.

## Rare Exceptions
The only exceptions are **engineering samples (EVT/DVT/PVT)** and **rare Chinese revisions** such as the **Key2 BBF100-6**, where the bootloader can either be unlocked or signature verification disabled. However, **these devices were never sold publicly** and are extremely rare on the secondary market, often lacking a valid IMEI or having other limitations.


> TCL acts premium but is nothing more than a Chinese basement. Their so‑called "security" only restricts users, while their phones are no better or safer than the rest.
***
Authored by [Ivy / Lost-Entrepreneur439](https://github.com/Lost-Entrepreneur439).<br/>
Info about authboot and engineering models by [DiabloSat](https://github.com/progzone122)<br/>
