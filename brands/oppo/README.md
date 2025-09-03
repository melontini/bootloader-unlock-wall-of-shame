# OPPO

> 🧹 Deep Testing section needs apk links.
>
> 🧹 There should be a guide to running code with the debuggable apk.

- Verdict: **⛔ Avoid!**


## OPPO

There's not much to say about OPPO. They provide Deep Testing too, but only for Chinese models before Find X5 series. Starting from Find X5 series, OPPO no longer allows unlocking.


## Deep Testing

Deep Testing is the application used to request the fastboot key. Internally, it writes the key to the (oplus/oppo)reserve1 partition, which is later read by fastboot. Realme and Oppo have different versions of Deep Testing, but the apps are almost identical in function.

Oppo Deep Testing uses a different API endpoint to request the unlock code. Only 2 versions of Oppo Deep Testing exist: v1.0.1 and v1.1.0.

***
Authored by [melontini](https://github.com/melontini) and [EraserCN](https://github.com/EraserCN).

[rmx3474-rooting]:https://github.com/turistu/rmx3474-rooting
[announcement]:https://c.realme.com/in/post-details/1671137365285982208
[Full-OTA region switch]:https://xdaforums.com/t/change-region-via-full-ota.4535659/
[deep-testing-thread]:https://xdaforums.com/t/discussion-a-thread-to-collate-and-share-what-is-known-about-unlocking-fastboot-on-oppo-devices.4490041/post-89323153
[debuggable-deep-testing]:https://xdaforums.com/attachments/gt5-deeptesting-apk.6065115/
