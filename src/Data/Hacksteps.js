const stepText = `# Anything on the internet can be hacked
Anything that isn't completely trivial can be hacked.
From [household appliances](https://www.cnet.com/news/fridge-caught-sending-spam-emails-in-botnet-attack/)...
...to the [national power grid](https://www.bbc.com/news/technology-48675203)...
If it's online, hackers can get in.

<img src="http://www.maxpixel.net/static/photo/1x/Anonymous-Mask-Hacker-Cyber-Network-Computer-2821433.jpg" width="200" height="200" />

# Millions of dangerous devices are being put on the internet
Things you might not expect...or even believe:
  Like [gas ovens](https://www.geappliances.com/ge/connected-appliances/ranges-ovens-cooking.htm)
  ...[firearms](https://www.wired.com/2015/07/hackers-can-disable-sniper-rifleor-change-target/)
  ...[medical devices](https://www.wired.com/story/medtronic-insulin-pump-hack-app/)\
  ...and even...[cars](https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/)

# Hackers can turn them into weapons...
blah blah

#  There are already millions of these potential weapons in the US
FACT: There are about _50 million_ Internet-connected cars on U.S. roads today.
  That number is growing rapidly, as most major automakers will only sell net-connected cars by the end of 2019.

# Millions are being added with no restriction  
There are no laws or regulations stopping most dangerous devices from being connected to the Internet.
  Manufacturers are creating them with reckless abandon,
  marketing them as "smart devices",
  and charging consumers hundreds or thousands more for them.
  
# Russia, China, North Korean hackers have us in their sights
Their fingerprints have been found in our power grid,
  and in other critical systems.

# The first shots in the cyberwar have been fired
The U.S. and other major powers
are openly bragging about their cyber-warfare capabilities.,
The coming cyber-war will not be fought on a remote battlefield.
It will be fought in our cities and in our homes.

# Does any of this concern you?
blah blah 
`;

const Hacksteps = stepText.split("\n# ");
Hacksteps[0] = Hacksteps[0].substr(2);
export default Hacksteps;
