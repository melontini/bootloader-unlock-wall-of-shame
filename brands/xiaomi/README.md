# Xiaomi/Redmi/POCO

- Verdict: **⛔ Avoid!**

In the past, Xiaomi allowed most of its devices to be unlocked after a period of 7+ days (depending on how new the device is).

With the launch of Xiaomi's new Android fork, HyperOS, they have introduced a number of changes to the unlock process, with new device limits and Mi Account requirements.

Look here if you want to learn about how Ximi's bootloader works: [Xiaomi-bootloader]

### China

> [!NOTE]
> The specifics of what can and cannot be done change over time and different sources claim different things depending on the time period.

Currently it is near impossible to unlock Xiaomi phones of the china region, especially if you are outside China and imported the phone.

- [This source][bootloader-unlock-block-mainland-china] claims that the final day one could use the provided form to request an unlock was September 9, 2024. It also has an update, it seems that Xiaomi is suggesting inside the Community App that they will bring back the service in 2025, but it wouldn't be the first time a company lied about this.
- In various forum posts [like this one][bootloader-unlock-block-mainland-china-alt] it is mentioned that a china region phone can only be unlocked if one is situated in China and has a level 5 Xiaomi account, or pays for the service in the hopes that a technician can unlock it.

### Global

> [!WARNING]
> Since October 2024 [there have been rumors][bootloader-unlock-block-global] that Xiaomi will kill bootloader unlocking on the Global market, after having done so for the China market.
>
> If you own a Xiaomi device and your warranty has ended or you don't care for it, you should unlock your device while you can.

### Devices running HyperOS (even if they were upgraded to it from MIUI)

First of all we should clear up something: HyperOS is essentially a new marketing term for what would've been MIUI 15. So it's still a vendor skin/theming engine on top of Linux-based Android, it's just called HyperOS instead of MIUI as it used to be called.

Secondly: One might remember how, in order to unlock the device back in the good old MIUI days, you would:

* Ensure a Xiaomi account was logged in on the device in the Settings app
* Go to Developer Options > Mi Unlock Status and press the button to request your device to be unlocked in the Xiaomi servers
* Then after 7 days you can use the official Mi Unlock tool which will check those servers to see if a request has been made for that specific device and sllow you to unlock it.

Not straightforward or fast, but doable.
WELL:

With HyperOS Xiaomi essentially makes the second stop more compilated.

That is, you can only make the request for unlocking the device inside Developer Options, ONLY AFTER you have made another SEPARATE successful request inside the Xiaomi Community App, which will then allow you to make the ACTUAL first request you wanted inside the Developer Settings ([yo dawg...][yo-dawg-meme])

If [xiaomiui.net][global-requirements] is to be believed, the requirements for the Community App request are as follows:
* Your Mi Account has been active for more than 30 days.
* Xiaomi Community App version 5.3.31 or above.
* Xiaomi has [updated their policies][updated-policies], further restricting bootloader unlocking. As of January 1st, 2025, they only let you unlock 1 device per year. *What a good way to start the year, right?*
* And if this wasn't enoough now in China from 6th of february there are [other restrictions] or requirements, call them as you like.

And it gets even better! As people have found it the hard way [in the xda forums][community-app-cap], there is a cap on the amount of people who can request per day inside the Community App, and it gets filled pretty much instantly, so your only chance to make a successful request there is if you get lucky spamming the request at midnight, Beijing time (or whatever that is in your timezone).

As such, for as long as the option is available, you'll skip this community BS and use the bypass methods:

* [HyperSploit][hypersploit] is the newer option. This is a simple to use program with no external dependencies.
* [Xiaomi-HyperOS-BootLoader-Bypass][xiaomi-hyperos-bootLoader-bypass] is the original proof of concept, but it's written in PHP and it's cumbersome to set up.

These will both (for now) allow you to continue with the good old steps, where you wait for 7 days and can then unlock your phone successfully.

### Devices running MIUI 14 and below

You should be able to use the "normal" unlock process by itself, wihtout the community app BS
(the one descibed in the "good old MIUI days" section above).

As the "1 device per year" policy is shown in the Xiaomi Community app when applying for unlocking HyperOS devices, this shouldn't affect devices running MIUI, however it's still unknown whether or not they are affected too.

## Android One

* [**🔓️ Unlock Guide**](/misc/generic-unlock.md)

Devices shipping with Android One do NOT have any unlock requirements. They follow the standard Android unlock process.

***
Updated info provided by [n1ses](https://github.com/n1ses).<br/>
Authored by [melontini](https://github.com/melontini).

[hypersploit]:https://github.com/TheAirBlow/HyperSploit
[xiaomi-hyperos-bootLoader-bypass]:https://github.com/MlgmXyysd/Xiaomi-HyperOS-BootLoader-Bypass
[bootloader-unlock-block-mainland-china]:https://xiaomitime.com/bootloader-unlocking-comes-to-an-end-with-xiaomi-hyperos-2-0-12926/
[bootloader-unlock-block-mainland-china-alt]:https://xiaomi.eu/community/threads/right-now-is-there-any-way-to-unlock-the-bootloader-on-chinese-versions-of-xiaomi-devices.73029/#post-726609
[bootloader-unlock-block-global]:https://x.com/chunvn8888/status/1841901853073953254
[global-requirements]:https://xiaomiui.net/how-unlock-bootloader-xiaomi-hyperos-53493/
[Xiaomi-bootloader]:https://github.com/lrh2000/Xiaomi-bootloader
[yo-dawg-meme]:https://knowyourmeme.com/memes/xzibit-yo-dawg
[community-app-cap]:https://xdaforums.com/t/application-quota-limit-reached.4695764/
[updated-policies]:https://xiaomitime.com/xiaomi-global-bootloader-unlock-policy-has-changed-20295/
[other restrictions]:https://xiaomitime.com/xiaomi-restricts-bootloader-unlocking-with-new-180-day-rule-23160/
