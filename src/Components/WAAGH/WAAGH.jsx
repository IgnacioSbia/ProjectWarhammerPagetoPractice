import React from 'react'
import KOPTERO from '../../assets/output-onlinegiftools.gif'
import './WAAGH.css'
import BadMoons from '../../assets/BadMoons.png'
import BloodAxes from '../../assets/BloodAxes.png'
import DeathSkulls from '../../assets/DeathSkulls.png'
import EvilSunz from '../../assets/EviilSunz.png'
import FreeBooterz from '../../assets/Freebooterz.png'
import Goffs from '../../assets/Goffs.png'
import SnakeBites from '../../assets/SakeBites.png'
import NavBar from '../NavBar/NavBar'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import tus50 from '../../assets/emanero.mp3'
import mainSong from '../../assets/Warhammer 40,000_ Darktide - .mp3'
import fondo from '../../assets/backGround.png'
import Footer from '../Footer/Footer.jsx'

const tracks = [
    {
        url: tus50,
        title: "MOMO",
        tags: ["house"],
    },
    {
        url: mainSong,
        title: "Warhammer 40,000_ Darktide",
        tags: ["dnb"],
    },

];
function WAAGH() {
    return (
        <>

            <NavBar />
            <div id='containerWAAGH'>

                <section> <img src={KOPTERO} alt="" className='animation' /></section>
                <main className='mainSectionOrkoz'>

                    <section id='orkozMaiinIfo'>
                        <h2>ORKZ</h2>
                        <div><p>The Orks, also called greenskins, are a savage, warlike, green-skinned species of humanoids who possess physiological features of both animals and fungi who are spread all across the Milky Way Galaxy. They share many features with Warhammer Fantasy Orcs (and were initially called "Space Orcs" to distinguish them).

                            They are seen by their enemies (pretty much everyone else in the universe) as savage, violent, and crude, but they are the most successful species in the whole galaxy, outnumbering possibly every other intelligent starfaring species, even Humanity (with the very plausible exception of the Tyranids).

                            Greenskins are one of the most dangerous alien races to plague the galaxy. Numerous beyond belief and driven always to fight and conquer, the Orks threaten every single intelligent species of the galaxy.

                            Orks are possibly the most warlike aliens in the 41st Millennium, and their number is beyond counting. Amid constant, seething tides of battle and bloodshed, burgeoning Ork stellar empires rise and fall.
                            Mercifully most are short-lived, soon destroying themselves in a maelstrom of violence and internecine conflict, but should the Orks ever truly unify, they would crush all opposition.

                            Orks generate a potent psychic gestalt field that allows them to accomplish many feats of technological engineering that might otherwise seem impossible. At the same time, the power of this psychic field is directly proportional to the number of greenskins present in a given location.

                            The more Orks that gather, the more Orks are drawn to them, at the same time that the power and intelligence of the greenskins begins to grow with their numbers.

                            The Orks' unquenchable thirst for battle has always proved their downfall: historically, the Ork tribes have spent much of their time fighting amongst themselves, waging brutal wars with only the strongest surviving. On occasion, an Ork leader will emerge who is mighty enough to defeat his rivals and unite the warring tribes.

                            His success draws other tribes to him, and soon a great WAAAGH! is underway -- partly a migration, partly a holy war that can exterminate the populations of entire star systems.

                            When the Orks are on the rampage, the galaxy trembles, and in the Age of the Dark Imperium there are more WAAAGH!s rising than ever before recorded.</p></div>
                    </section>
                    <section className='clanzSectiion'>
                        <a href="#badMoons" aria-hidden="true"> <div className='cardClanzComponent'>
                            <img src={BadMoons} alt="BadMoons" className='clanzImgSize' />
                            <h4>Bad Moons</h4>
                        </div>
                        </a>
                        <a href="#BloodAxes"><div className='cardClanzComponent'>
                            <img src={BloodAxes} alt="BloodAxes" className='clanzImgSize' />
                            <h4>Blood Axes</h4>
                        </div></a>
                        <a href="#DeathSkulls"><div className='cardClanzComponent'>
                            <img src={DeathSkulls} alt="DeathSkulls" className='clanzImgSize' />
                            <h4>Death Skulls</h4>
                        </div></a>
                        <a href="#EvilSunz"><div className='cardClanzComponent'>
                            <img src={EvilSunz} alt="EvilSunz" className='clanzImgSize' />
                            <h4>Evil Sunz</h4>
                        </div></a>
                        <a href="#freeBooterz"><div className='cardClanzComponent'>
                            <img src={FreeBooterz} alt="FreeBooterz" className='clanzImgSize' />
                            <h4>FreeBooterz</h4>
                        </div></a>
                        <a href="#Goffs"><div className='cardClanzComponent'>
                            <img src={Goffs} alt="Goffs" className='clanzImgSize' />
                            <h4>Goffs</h4>
                        </div></a>
                        <a href="#snakeBites"><div className='cardClanzComponent'>
                            <img src={SnakeBites} alt="SnakeBites" className='clanzImgSize' />
                            <h4>Snake Bites</h4>
                        </div></a>
                    </section>
                    <section className='orkzHistorySection'>
                        <h4>History</h4>
                        <div>
                            <h5>Origin</h5>
                            <p>The Orks are a biologically-engineered species, created more than 60 million Terran years ago as a warrior race originally called the Krork by the long-vanished reptilian alien species known as the Old Ones, whom the Orks refer to as the Brain Boyz.</p>
                            <p>The ancient Krork were known to possess more advanced technology than that of the present greenskin race, and to be on average larger, in some cases standing as tall as 12 metres.</p>
                            <p>The Orks were created by the Brain Boyz to fight the Necrons and their C'tan masters in the great interstellar conflict called the War in Heaven that shattered the galactic civilisation of the Old Ones that existed prior to the rise of the Aeldari.</p>
                            <p>Orks are thus genetically engineered to be muscular, aggressive, and none too bright; their technology is maintained by a caste of Oddboyz who possess genetically-implanted dispositions and technical knowledge that grant them unusual skill with maintaining and developing technology.</p>
                            However, this skill is an unconscious one preserved through genetic memories hard-wired into the Oddboyz's DNA by the Brain Boyz millions of standard years ago.
                            <p>Indeed, the Brain Boyz were apparently able to encode information on how to build simple machinery into the genomes of all Orks; thus Mekboyz require very little training in their function within Ork "kultur," since they understand mechanical principles at a fully instinctive level.</p>
                            <p>Orks lack individual psychic power, being denied such abilities by the Old Ones. However, they do have a sort of collaborative, collective psychic ability, meaning that if enough Orks believe something is true, then it will actually become so, brought into being in realspace through the power of the Immaterium by their gestalt psychic ability.

                                For example, Ork rockets painted yellow create bigger explosions, simply because the vast majority of Orks believe they do.

                                This is also why much of the Orks' seemingly ramshackle technology will do terrible damage in the hands of Orks, but will cease to function when used by other intelligent races.</p>
                        </div>
                    </section>
                    <section className='clanzInfoSection'>
                        <section id='badMoons'>
                            <h4 className='titleGap'><img src={BadMoons} alt="BadMoons" className='clanzImgicon' />Bad Moons <img src={BadMoons} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>The Bad Moons are the richest Orks around, because their teef grow faster than anyone else's. This is not regarded as an unfair advantage, as any Ork big and nasty enough can simply smash the teef out of a Bad Moon's head. The Bad Moons essentially fulfill the role of a merchant caste in what passes for Ork society, and have a reputation for showing off.

                                They are always continuously buying, selling, swapping, and conning to get teeth. The highest ranking amongst them wear garishly decorated war banners on their backs and the richest openly flaunt their wealth by wearing necklaces of teef. They trade with other Orks to get the biggest gunz, the flashiest wargear, and the best food, but are not as concerned with close combat as other Orks.

                                They have been noted to have a greater proportion of Weirdboyz in their ranks than other klanz, who use their wealth to dress flamboyantly. Unfortunately for them, they end up being dragged off to battle and used against the enemy like any other weapon.

                                The signature mob of the Bad Moons are the Flash Gitz: Orks with devastating kustom Shootas who have a taste for the best wargear and clothing. For instance, Kaptin Badrukk, the infamous Ork Freebooter, is a Bad Moon and was kicked out of the klan for having too many teef for his own good.

                                Bad Moons love gold more than any other metal, and will commonly sport a couple of glinting teef in their avaricious grins. They favour strikingly-patterned golden yellow and black for their wargear. Their armour and wargear is painted with gaudy patterns in the klan colours and they have more jewelry and piercings than any other klan. The Bad Moons Klan take a snarling moon on a field of flames as their klan sigil.</p>
                        </section>
                        <section id='BloodAxes'>
                            <h4><img src={BloodAxes} alt="BadMoons" className='clanzImgicon' />Blood Axes<img src={BloodAxes} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>The Blood Axes were the first Orks to encounter the Imperium of Man. They have picked up many human tactics, such as using camouflage (although it may seem a bit too brightly colored to a human's eye) and retreating when they are losing ("It don't count as losing, cuz we can also come back for anuvver go, see?"). Indeed, when they do retreat, Blood Axes will in fact return with larger numbers.

                                They trade with humans for wargear and vehicles, and have even worked as mercenaries for the Imperium at times (such as during the Massacre at Big Toof River). All of these things lead followers of other klanz to brand them as dangerously treacherous, cowardly, and downright un-Orky!

                                Most Blood Axes are back-stabbing "Kommandoz", essentially serving as Ork special operations troops. Blood Axes wear combat fatigues and forage caps in shades of green and drab colours, commonly in camouflage patterns. This betrays the influence of Imperial military style, as do the other personal adornments commonly worn by Orks of this klan. The Blood Axes bear the klan motif of crossed, bloodied axes.</p>
                        </section>
                        <section id='DeathSkulls'>
                            <h4><img src={DeathSkulls} alt="BadMoons" className='clanzImgicon' />DeathSkulls<img src={DeathSkulls} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>The Deathskulls are looters and plunderers who grab whatever they can from corpses on the battlefield, although they are not above "acquiring" things from other Orks who are not watching. They collect anything that might be useful, as well as grisly trophies and various lucky trinkets and charms.

                                They are superstitious even for Orks, and often paint themselves and their wargear blue (which Orks feel is a lucky colour) to protect themselves from harm.

                                It is not uncommon to find looted Imperial vehicles in Death Skull armies, such as Chimeras and Rhinos. When dealing with the Death Skulls, many other Ork klans will often find a few of their vehicles missing as well, and then suspiciously similar ones reappearing painted blue amid the ranks of the Death Skulls' vehicle pool.

                                The symbol of the Death Skulls is the horned skull.They also use skulls, other intelligent races' teef as luck charms and have more Gretchin than most Ork tribes as they are used to scout for (and occasionally make off with) valuables.</p>
                        </section>
                        <section id='EvilSunz'>
                            <h4><img src={EvilSunz} alt="BadMoons" className='clanzImgicon' />Evil Sunz<img src={EvilSunz} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>The Evil Sunz are an Ork klan who are dedicated to speed and making as loud a noise as possible when in combat. Just as the Goffs klan loves violence and aggression, so the Evil Sunz love speed.

                                The Evil Sunz have adopted the general Ork maxim that "Red 'uns go faster" as their klan motto. Evil Sunz prize fast vehicles like Ork Warbikes, Warbuggies and Trukks on which their Boyz can ride to battle.

                                To assist their highly-mobile warbands, the Evil Sunz possess a larger population than normal of Mekboyz to keep those vehicles tuned and running. By far the largest number of Ork Speed Freeks come from the Evil Sunz klan.

                                An Ork's love of speed can easily affect his brain, to the point where an Ork becomes addicted to the thrill of a wild ride into battle. Beyond even a Speed Freek's delirium there are also Flyboyz, whose need for speed has driven them into the air in search of ever greater thrills, piloting the Ork's Fightas and Fighta-Bommerz.

                                Members of this klan wear at least one item of red clothing at all times, which makes their appearance quite distinctive. Red is a hard colour for Orks to come by as few of their regular enemies have red uniforms to loot and rip up, and most red dye is used for red paint. The use of red face paint is another expression of this klan's obsession with the colour red.

                                Once again, they resort to the use of blood when the red paint runs out. Evil Sunz are distinguished by their use of bright colours, especially red and yellow. They like flame patterns and many sport goggles and driving gloves, whether they are driving a vehicle or not. The Evil Sunz are also found as an Orc tribe of the same name on the Warhammer World of Warhammer Fantasy.</p>
                        </section>
                        <section id='Goffs'>
                            <h4><img src={Goffs} alt="BadMoons" className='clanzImgicon' />Goffs<img src={Goffs} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>The Goffs are the toughest and most brutal Orks to be found in the galaxy, roughly equivalent to elite Warhammer Fantasy Black Orcs. The Goffs are the biggest, meanest and most brutish of all their kind, and that's saying something, since they are Orks. Of all the Ork klanz, the Goffs are the most inspired by the thrill and thunder of battle.

                                Goffs will take any excuse to start a brawl, even amongst themselves. As a result, the Goffs are specialists in hand-to-hand combat who prefer their battles up-close and personal. They are particularly fond of the Stikkbomb, because these Ork grenades are hurled by hand and are good for close combat in trenches, ruins, bunkers and ratholes. Goffs usually carry a brace of hefty Stikkbombz stuffed down their black jackboots.
                                Goff armies are notorious for the sheer number of Ork infantry they muster in times of war. A mob of Goff Boyz is usually at least twenty strong, and a true Goff horde has a hundred times that number at its heart.

                                When the Goffs go to war, the ground shakes to the incessant thump of thousands of steel-capped boots. The Goffs boast the greatest numbers of Nobz and Stormboyz amongst any of the greenskin klanz. This is because the Goffs are the most militaristic of all the Orks.

                                All Orks love war and combat, and wage war as a way of life, but of the Goffs it can truly be said that they live only for war. Goffs dress mostly in black, with some white checks for relief, as they see bright colors as being un-Orky. Their symbol is the black bull's head, and Goff Nobz almost always wear big horns on their helmets. Ghazghkull Thraka is a member of the Goff klan.</p>
                        </section>
                        <section id='snakeBites'>
                            <h4><img src={SnakeBites} alt="BadMoons" className='clanzImgicon' />Snakebites<img src={SnakeBites} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>The Snakebites prefer ancient Orky tradition to advanced technology, shunning things like force fields and armoured vehicles in favour of protecting themselves with war paint and riding into battle on huge boars wielding spearz and choppas.

                                Depending on how fundamentalist their anti-technology beliefs are, the Snakebites may choose to remain as Feral Orks even after their civilisation possesses the technical knowledge required to advance to an industrial state.

                                Orks of this klan are covered in swirling red tattoos, like coiled snakes. They are also known to cultivate Hair Squigs so they can decorate themselves with extravagant crests and topknots. Other common features are wolfskin headgear and wolf pelts, which add to their wild and primitive appearance.

                                One of this klan's most distinctive elements of dress is their snake belts, which are fastened with metal buckles in the form of a snake. The totem of this clan is the venomous serpent. This klan's whelps are toughened by allowing venomous snakes to bite them, hence the name "Snakebites" given to them by the other klanz, which they adopted for their own.</p>
                        </section>
                        <section id='freeBooterz'>
                            <h4><img src={FreeBooterz} alt="BadMoons" className='clanzImgicon' />Freebooterz<img src={FreeBooterz} alt="BadMoons" className='clanzImgicon' /></h4>
                            <p>Ork Freebooterz are not in themselves a klan but notorious pirates and thieves, plying the void in smoking, sparking voidships with the intent of causing as much mayhem and destruction as possible. They prey upon anyone foolish enough to stray into their hunting grounds, screaming out of the dark on plumes of fire to blast apart their foes.

                                When an enemy vessel is crippled or foolishly tries to surrender, the Freebooterz will smash their way on board, killing anything that moves and stealing anything that doesn't. The Freebooterz will then haul their booty back to their hidden bases and count their ill-gotten gains.

                                When a Warboss wants to invade a planet, he calls on fleets of Freebooterz to see off enemy ships and clear the way for the Orks to get down to the surface.

                                For this service Freebooterz claim exorbitant scavenging rights as well as a fortune in teef, and a Warboss has little choice but to pay up if he wants their help, as Freebooterz that don't get their price often simply vanish into the void in search of more loot.

                                Even if a Freebooter's terms are met, he might still get distracted by better prospects, the lure of easy plunder enough to sway most kaptins. Whether they fight alongside a WAAAGH! or tear around the void raiding planets and stealing ships, Freebooterz often become disgustingly rich, leading many to become Flash Gitz.

                                Freebooter Boy
                                A Freebooter Kaptin.

                                Ork Freebooterz are by no means always Flash Gitz, but all Flash Gitz eventually end up as Freebooterz. Arrogant and boorish, a Nob who fancies himself a Flash Git will normally alienate himself in short order from the rest of his tribe.

                                Whether because of his grating self-aggrandisement, eating the local Big Mek's favourite Grot oiler without permission, or committing the cardinal sin of strutting about with a bigger, shinier Shoota than the Warboss, a Flash Git will normally find himself ejected from his tribe.

                                When a whole band of Nobz get ideas above their place in the order of things within the tribe all at once, it can lead to bloody infighting. This will usually end up with the departure -- at gunpoint or otherwise -- of a whole mob of newly freebootin' Flash Gitz.

                                However they find their way into this new situation, Flash Git mobs will quickly take to the Freebooter life. Fighting as mercenaries allows successful Gitz to accumulate vast sums of wealth in a short space of time. Even better, they can gleefully spend it all on themselves without a Warboss around to take his cut.

                                With teef galore flowing into their coffers, successful mobs of Flash Gitz will soon be riding through the void in their very own Kill Kroozer while wielding the kind of firearms that Deathskulls Lootas can only dream of stealing.

                                They bedeck themselves with natty finery, and even their Grot minions get stuffed into gold-buttoned frock coats and brag loudly of their masters' wealth. Flash Gitz also sport profusions of piercings, furs, glyph-plates, brightly coloured pirate garb and extravagant hats. All of this showy nonsense does absolutely nothing though to hide the hulking, muscular bulk and bestial lethality of the Flash Gitz themselves.</p>
                        </section>
                    </section>

                </main>
                <footer className='footerOrkz'>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default WAAGH