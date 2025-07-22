# LG

- Verdict: **⛔ Avoid!**
- Verdict: **🍅 Terrible!** (Unisoc)

In the past, LG had a developer portal which could be used to unlock phones on their website, however it only supported international models of their phones, but in December 2021, LG [announced][announcement-archive] the developer portal would be shutting down due to LG ending production of all phones. Unisoc devices will never be unlockable, this is *not* LG's fault, Unisoc does not allow unlocking.

On some models (such as the Stylo 3 Plus and G6), the bootloader can still be unlocked via `fastboot oem unlock` **only if** [the phone is a T-Mobile model][t-mobile-unlock].

Older devices (prior to 2015) do not have partition verification, and assuming you have a root exploit, you can just flash modified partitions with dd -- as recommended by some official LineageOS [install guides]

***
Authored by [Ivy / Lost-Entrepreneur439](https://github.com/Lost-Entrepreneur439).<br/>

[announcement-archive]:https://www.reddit.com/r/LineageOS/comments/r961u3/termination_of_lg_mobile_developer_website/
[t-mobile-unlock]:https://xdaforums.com/t/unlock-bootloader-tmo.3578099/
[install guides]:https://wiki.lineageos.org/devices/d852/install/#installing-a-custom-recovery-using-dd
