/*  ==========================================================================

    OATH OF THE VELVET ANTLER
    Paladin Sacred Oath for D&D 5e Revised Rules (2024 / 5.5e)

    Catalogue Code: DA42SC-001
    Author Tag: DA42SC
    Setting: Stormhaven
    Faith: The Order of the Velvet Antler

    --------------------------------------------------------------------------
    VERSION INFORMATION
    --------------------------------------------------------------------------

    Content Version 1.0.0
    Script Version 2.0.0 :: First Public Release

    Created by      :: Daniel Lott
    Published under :: DruidAllanon42

    © Daniel Lott
    Published under the DruidAllanon42 imprint.

    --------------------------------------------------------------------------
    COMPATIBILITY
    --------------------------------------------------------------------------

    Designed for:
    - D&D 5e Revised Rules (2024 / 5.5e)
    - MorePurpleMoreBetter Character Record Sheet v14.0.6+

    --------------------------------------------------------------------------
    COMMUNITY & SUPPORT
    --------------------------------------------------------------------------

    Patreon:
    https://www.patreon.com/cw/DruidAllanon42

    Reddit:
    https://www.reddit.com/r/DruidAllanon42/

    DMs Guild:
    Coming Soon

    --------------------------------------------------------------------------
    USE & REDISTRIBUTION
    --------------------------------------------------------------------------

    This script is intended for use with MorePurpleMoreBetter's Character
    Record Sheet.

    Redistribution, republication, sale, or commercial distribution of this
    script without permission from Daniel Lott is prohibited.

    Personal modifications for private use are permitted.

    --------------------------------------------------------------------------
    THE GREAT LITANY
    --------------------------------------------------------------------------

    Life is difficult enough.

    Share a drink.
    Share a story.
    Share a laugh.
    Share a kiss.
    Share a bed.

    Give people another chance.

    ========================================================================== */


var iFileName =
    "DA42SC-001 - Oath of the Velvet Antler v1.0.0.js";


RequiredSheetVersion("14.0.6");


/*  ==========================================================================
    SOURCE REGISTRATION
    ========================================================================== */

if (!SourceList["DA42"]) {
    SourceList["DA42"] = {
        name : "DruidAllanon42 Publications",
        abbreviation : "DA42",
        abbreviationSpellsheet : "DA42",
        group : "DruidAllanon42",
        url : "https://www.patreon.com/cw/DruidAllanon42",
        date : "2026/07/15"
    };
}


/*  ==========================================================================
    OATH OF THE VELVET ANTLER
    ========================================================================== */

AddSubClass("paladin", "oath of the velvet antler", {

    regExpSearch :
        /^(?=.*velvet)(?=.*antler).*$/i,

    subname :
        "Oath of the Velvet Antler",

    subnameShort :
        "Velvet Antler",

    source :
        [["DA42", 0]],


    /*  ======================================================================
        OATH SPELLS
        ======================================================================

        Paladin Level 3:
        - Heroism
        - Command

        Paladin Level 5:
        - Calm Emotions
        - Branding Smite

        Paladin Level 9:
        - Beacon of Hope
        - Spirit Guardians

        Paladin Level 13:
        - Aura of Life
        - Staggering Smite

        Paladin Level 17:
        - Greater Restoration
        - Holy Weapon
        ====================================================================== */

    spellcastingExtra : [
        "heroism",
        "command",
        "calm emotions",
        "branding smite",
        "beacon of hope",
        "spirit guardians",
        "aura of life",
        "staggering smite",
        "greater restoration",
        "holy weapon"
    ],


    /*  ======================================================================
        SUBCLASS FEATURES

        Part II begins inside this object with the 3rd-level features.
        Do not close the features object or AddSubClass block yet.
        ====================================================================== */

    features : {
        /*  ==================================================================
            3RD-LEVEL FEATURE
            INITIATE OF THE VELVET ANTLER
            ================================================================== */

        "subclassfeature3" : {
            name : "Initiate of the Velvet Antler",
            source : [["DA42", 0]],
            minlevel : 3,

            description : desc([
                "I gain proficiency in Insight and choose proficiency in Medicine, Performance, or Survival",
                "I also gain proficiency with brewer's supplies, cook's utensils, an herbalism kit, or one musical instrument",
                "Once per Long Rest, when I or a creature I can see within 30 ft fails a D20 Test, I can grant that creature Heroic Inspiration"
            ]),

            skillstxt :
                "Insight; choose Medicine, Performance, or Survival",

            toolProfs : [
                [
                    "Brewer's supplies, cook's utensils, herbalism kit, or one musical instrument",
                    1
                ]
            ],

            usages : 1,
            recovery : "long rest",
            limfeaname : "First Antler's Guidance",

            toNotesPage : [{
                name : "Initiate of the Velvet Antler",
                note : [
                    "The first lesson of the Velvet Antler is not how to wield a blade.",
                    "It is how to welcome another to your table.",
                    "",
                    "You gain proficiency in Insight.",
                    "You also choose proficiency in Medicine, Performance, or Survival.",
                    "",
                    "You gain proficiency with one of the following:",
                    "• Brewer's supplies",
                    "• Cook's utensils",
                    "• Herbalism kit",
                    "• One musical instrument",
                    "",
                    "FIRST ANTLER'S GUIDANCE",
                    "Once per Long Rest, when you or a creature you can see within 30 feet fails a D20 Test, you can grant that creature Heroic Inspiration.",
                    "",
                    "Followers of the Velvet Antler believe that even when success appears beyond reach, hope should never be the first thing surrendered.",
                    "",
                    "\"A full table. A warm fire. An open heart.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },


        /*  ==================================================================
            3RD-LEVEL FEATURE
            THE REVELER'S WELCOME
            ================================================================== */

        "subclassfeature3.1" : {
            name : "The Reveler's Welcome",
            source : [["DA42", 0]],
            minlevel : 3,

            description : desc([
                "After a Long Rest that includes at least 10 minutes of food, drink, stories, laughter, or fellowship, I can perform the Morning Revel",
                "I choose willing creatures, including myself, equal to my Cha modifier, minimum one",
                "I choose one of the Seven Blessings of the Reveler; its effects last until each chosen creature finishes its next Long Rest",
                "The complete blessings appear on the Notes page"
            ]),

            additional : levels.map(function (n) {
                return n < 3 ?
                    "" :
                    "Cha modifier creatures, minimum 1";
            }),

            toNotesPage : [{
                name : "The Reveler's Welcome",
                note : [
                    "Hospitality is the first miracle of the Velvet Antler.",
                    "",
                    "Whenever you finish a Long Rest after spending at least 10 minutes sharing food, drink, stories, laughter, or meaningful fellowship with one or more willing creatures, you can perform the Morning Revel.",
                    "",
                    "Choose a number of willing creatures, including yourself, equal to your Charisma modifier, with a minimum of one creature.",
                    "",
                    "Choose one of the Seven Blessings of the Reveler. Its benefits apply to the chosen creatures until each of them finishes its next Long Rest.",
                    "",
                    "You choose the blessing each time you perform the Morning Revel.",
                    "",
                    "Among the faithful, this daily ritual is also known as Welcome to My Table.",
                    "",
                    "\"No soul should dine alone.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },


        /*  ==================================================================
            THE SEVEN BLESSINGS OF THE REVELER
            NOTES-PAGE REFERENCE
            ================================================================== */

        "subclassfeature3.2" : {
            name : "Seven Blessings of the Reveler",
            source : [["DA42", 0]],
            minlevel : 3,

            description : desc([
                "When I perform the Morning Revel, I choose Share a Drink, Share a Story, Share a Laugh, Share a Kiss, Share a Bed, Give Another Chance, or Leave the World Warmer",
                "The complete effects of all seven blessings appear on the Notes page"
            ]),

            toNotesPage : [{
                name : "The Seven Blessings of the Reveler",
                note : [
                    "When you perform the Morning Revel, choose one of the following blessings.",
                    "",
                    "SHARE A DRINK",
                    "\"May every toast strengthen your resolve.\"",
                    "Each chosen creature gains Resistance to Poison damage and has Advantage on saving throws against the Poisoned condition.",
                    "",
                    "SHARE A STORY",
                    "\"Wisdom shared is never diminished.\"",
                    "Choose one affected creature and one of the following skills: Arcana, History, Investigation, Nature, or Religion.",
                    "That creature gains proficiency in the chosen skill until it finishes its next Long Rest.",
                    "If the creature is already proficient in that skill, it instead gains Expertise with the skill for the same duration.",
                    "",
                    "SHARE A LAUGH",
                    "\"Even the darkest road grows lighter in good company.\"",
                    "Each chosen creature has Advantage on saving throws against becoming Frightened.",
                    "",
                    "SHARE A KISS",
                    "\"Love freely given is among the greatest miracles.\"",
                    "Each chosen creature has Advantage on saving throws against becoming Charmed.",
                    "",
                    "SHARE A BED",
                    "\"True rest prepares the spirit for tomorrow.\"",
                    "The first time each chosen creature regains Hit Points before finishing its next Long Rest, it regains additional Hit Points equal to your Proficiency Bonus + your Charisma modifier.",
                    "",
                    "GIVE ANOTHER CHANCE",
                    "\"No story should end with a single mistake.\"",
                    "Choose one affected creature. That creature gains Heroic Inspiration.",
                    "",
                    "LEAVE THE WORLD WARMER",
                    "\"Kindness lingers long after footsteps fade.\"",
                    "Each chosen creature gains Temporary Hit Points equal to your Proficiency Bonus + your Charisma modifier."
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },


        /*  ==================================================================
            3RD-LEVEL CHANNEL DIVINITY
            REVELER'S EMBRACE
            ================================================================== */

        "subclassfeature3.3" : {
            name : "Channel Divinity: Reveler's Embrace",
            source : [["DA42", 0]],
            minlevel : 3,

            description : desc([
                "As an action, I present my Holy Symbol and choose one creature I can see within 30 ft",
                "The creature regains 2d8 + my Cha modifier Hit Points",
                "If it is Prone, it can immediately stand without expending movement",
                "It can then move up to half its Speed without provoking Opportunity Attacks if it ends adjacent to a willing creature",
                "This expends one use of my Channel Divinity"
            ]),

            action : [
                ["action", ""]
            ],

            toNotesPage : [{
                name : "Channel Divinity: Reveler's Embrace",
                note : [
                    "The greatest strength is often found in lifting another to their feet.",
                    "",
                    "As an Action, you present your Holy Symbol and choose one creature you can see within 30 feet.",
                    "",
                    "That creature regains Hit Points equal to 2d8 + your Charisma modifier.",
                    "",
                    "If the creature is Prone, it can immediately stand without expending movement.",
                    "",
                    "The creature can then move up to half its Speed without provoking Opportunity Attacks, provided it ends this movement adjacent to a willing creature.",
                    "",
                    "This feature expends one use of your Channel Divinity.",
                    "",
                    "\"Shared burdens become lighter.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },


        /*  ==================================================================
            3RD-LEVEL CHANNEL DIVINITY
            SECOND CHANCE
            ================================================================== */

        "subclassfeature3.4" : {
            name : "Channel Divinity: Second Chance",
            source : [["DA42", 0]],
            minlevel : 3,

            description : desc([
                "When a creature I can see within 30 ft fails a D20 Test, I can use my reaction",
                "I expend one use of Channel Divinity; that creature rerolls the d20 and must use the new result"
            ]),

            action : [
                ["reaction", ""]
            ],

            toNotesPage : [{
                name : "Channel Divinity: Second Chance",
                note : [
                    "Failure is not the end of a story.",
                    "It is merely the moment before another begins.",
                    "",
                    "When a creature you can see within 30 feet fails a D20 Test, you can use your Reaction and expend one use of your Channel Divinity.",
                    "",
                    "That creature immediately rerolls the d20 and must use the new result.",
                    "",
                    "Among the faithful, this miracle is remembered as the blessing granted during the Tale of the Second Roll.",
                    "",
                    "\"The Reveler wasn't finished with your story.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },
        /*  ==================================================================
            7TH-LEVEL FEATURE
            AURA OF FELLOWSHIP
            ================================================================== */

        "subclassfeature7" : {
            name : "Aura of Fellowship",
            source : [["DA42", 0]],
            minlevel : 7,

            description : desc([
                "While I am conscious, I and friendly creatures within my aura have Advantage on saves against becoming Charmed or Frightened",
                "Whenever a creature within the aura regains Hit Points, it can immediately stand if Prone without expending movement",
                "It can then move up to half its Speed without provoking Opportunity Attacks if it ends adjacent to a willing creature",
                "The aura has a 10-ft radius, increasing to 30 ft at Paladin level 18"
            ]),

            additional : levels.map(function (n) {
                return n < 7 ?
                    "" :
                    n < 18 ?
                        "10-ft aura" :
                        "30-ft aura";
            }),

            savetxt : {
                adv_vs : [
                    "charmed",
                    "frightened"
                ]
            },

            toNotesPage : [{
                name : "Aura of Fellowship",
                note : [
                    "Not every battle is won by the sharpest blade.",
                    "Some are won by the reassuring hand upon a shoulder, the familiar face standing beside you, or the simple reminder that no one fights alone.",
                    "",
                    "While you are conscious, you and friendly creatures within your aura have Advantage on saving throws against becoming Charmed or Frightened.",
                    "",
                    "Whenever a creature within the aura regains Hit Points, it can immediately stand if it is Prone without expending movement.",
                    "",
                    "That creature can then move up to half its Speed without provoking Opportunity Attacks, provided it ends this movement adjacent to a willing creature.",
                    "",
                    "The aura has a 10-foot radius. At Paladin level 18, its radius increases to 30 feet.",
                    "",
                    "\"Shared burdens become lighter.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },


        /*  ==================================================================
            15TH-LEVEL FEATURE
            HEART OF THE REVELER
            ================================================================== */

        "subclassfeature15" : {
            name : "Heart of the Reveler",
            source : [["DA42", 0]],
            minlevel : 15,

            description : desc([
                "I am immune to the Frightened condition",
                "Once during each of my turns, when Divine Smite deals Radiant damage to a creature, I can choose one friendly creature within my Aura of Fellowship",
                "The target must have taken damage since the start of my previous turn",
                "The chosen creature regains Hit Points equal to my Proficiency Bonus + Cha modifier"
            ]),

            additional : levels.map(function (n) {
                return n < 15 ?
                    "" :
                    "Healing: PB + Cha modifier";
            }),

            savetxt : {
                immune : [
                    "frightened"
                ]
            },

            toNotesPage : [{
                name : "Heart of the Reveler",
                note : [
                    "Sir Sloppy teaches that joy is not merely an emotion.",
                    "It is an act of defiance.",
                    "",
                    "You are immune to the Frightened condition.",
                    "",
                    "Once during each of your turns, when you deal Radiant damage to a creature with Divine Smite, you can choose one friendly creature within your Aura of Fellowship that has taken damage since the start of your previous turn.",
                    "",
                    "The chosen creature regains Hit Points equal to your Proficiency Bonus + your Charisma modifier.",
                    "",
                    "The faithful believe that every righteous blow struck against cruelty carries with it a measure of hope for those it sought to protect.",
                    "",
                    "\"A courageous heart gives others strength.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        },


        /*  ==================================================================
            20TH-LEVEL FEATURE
            AVATAR OF THE REVELER
            ================================================================== */

        "subclassfeature20" : {
            name : "Avatar of the Reveler",
            source : [["DA42", 0]],
            minlevel : 20,

            description : desc([
                "As a bonus action, I become an Avatar of the Reveler for 1 minute",
                "I shed Bright Light for 30 ft and Dim Light for another 30 ft",
                "Friendly creatures within 30 ft can't become Charmed or Frightened",
                "At the start of each of their turns, friendly creatures within 30 ft regain Hit Points equal to my Cha modifier",
                "When a friendly creature within 30 ft fails a D20 Test or rolls a natural 1 on one, it can reroll and must use the new result",
                "Once during each of my turns, when I hit with a weapon attack, it deals +2d8 Radiant damage",
                "I can also grant one friendly creature within 30 ft Heroic Inspiration if it doesn't already have it"
            ]),

            usages : 1,
            recovery : "long rest",

            action : [
                ["bonus action", ""]
            ],

            additional : levels.map(function (n) {
                return n < 20 ?
                    "" :
                    "1 minute";
            }),

            toNotesPage : [{
                name : "Avatar of the Reveler",
                note : [
                    "As a Bonus Action, you become an Avatar of the Reveler for 1 minute.",
                    "",
                    "Silver velvet antlers rise from your brow.",
                    "Lantern light dances around your form.",
                    "Flowers bloom beneath your feet while music drifts upon unseen winds.",
                    "",
                    "For the duration, you gain the following benefits:",
                    "",
                    "• You shed Bright Light in a 30-foot radius and Dim Light for an additional 30 feet.",
                    "",
                    "• Friendly creatures within 30 feet of you cannot become Charmed or Frightened.",
                    "",
                    "• Friendly creatures within 30 feet regain Hit Points equal to your Charisma modifier at the start of each of their turns.",
                    "",
                    "• Whenever a friendly creature within 30 feet fails a D20 Test or rolls a natural 1 on a D20 Test, it can immediately reroll the die and must use the new result.",
                    "",
                    "• Once during each of your turns, when you hit a creature with a weapon attack, the attack deals an additional 2d8 Radiant damage.",
                    "",
                    "• When you deal this additional Radiant damage, you can choose one friendly creature within 30 feet. That creature gains Heroic Inspiration if it does not already possess it.",
                    "",
                    "Once you use this feature, you cannot use it again until you finish a Long Rest.",
                    "",
                    "\"Where joy endures, despair cannot.\""
                ],
                page3notes : false,
                source : ["DA42", 0],
                origin : "Oath of the Velvet Antler"
            }]
        }
    }
});
/*  ==========================================================================
    PART IV
    SACRED OATH, TENETS, PUBLICATION INFORMATION, AND VERSION HISTORY
    ========================================================================== */


/*  ==========================================================================
    LOCATE THE REGISTERED SUBCLASS
    ==========================================================================

    AddSubClass normally registers this subclass under:
    "paladin-oath of the velvet antler"

    This reference allows the script to append additional Notes-page material
    after the main subclass registration has closed.
    ========================================================================== */

var DA42VelvetAntlerKey =
    "paladin-oath of the velvet antler";

var DA42VelvetAntlerSubclass =
    typeof ClassSubList !== "undefined" &&
    ClassSubList[DA42VelvetAntlerKey] ?
        ClassSubList[DA42VelvetAntlerKey] :
        null;


/*  ==========================================================================
    APPEND PUBLICATION NOTES
    ========================================================================== */

if (
    DA42VelvetAntlerSubclass &&
    DA42VelvetAntlerSubclass.features &&
    DA42VelvetAntlerSubclass.features["subclassfeature3"]
) {
    var DA42VelvetAntlerInitiate =
        DA42VelvetAntlerSubclass.features["subclassfeature3"];

    if (!DA42VelvetAntlerInitiate.toNotesPage) {
        DA42VelvetAntlerInitiate.toNotesPage = [];
    }


    /*  ======================================================================
        THE GREAT LITANY
        ====================================================================== */

    DA42VelvetAntlerInitiate.toNotesPage.push({
        name : "The Great Litany of the Velvet Antler",

        note : [
            "Every initiate kneels before the altar of the Reveler and recites the Great Litany, first spoken by Sir Sloppy during the Last Great Revel and later preserved by Saint Aric Silvermoon.",
            "",
            "Life is difficult enough.",
            "",
            "I shall share a drink with the weary.",
            "I shall share a story with the forgotten.",
            "I shall share a laugh with the sorrowful.",
            "I shall share a kiss where love is freely given.",
            "I shall share a bed where hearts are joined in trust.",
            "",
            "And when others falter,",
            "I shall give them another chance.",
            "",
            "For joy is not weakness.",
            "Compassion is not surrender.",
            "Passion is not shame.",
            "",
            "Where fear seeks to silence laughter,",
            "where cruelty seeks to divide hearts,",
            "where despair would leave another soul to suffer alone,",
            "there I shall stand.",
            "",
            "Until my final breath,",
            "I shall leave the world warmer than I found it."
        ],

        page3notes : false,
        source : ["DA42", 0],
        origin : "Oath of the Velvet Antler"
    });


    /*  ======================================================================
        TENETS OF THE VELVET ANTLER
        ====================================================================== */

    DA42VelvetAntlerInitiate.toNotesPage.push({
        name : "Tenets of the Velvet Antler",

        note : [
            "LIVE FULLY",
            "Life is a gift meant to be experienced, not merely endured. Seek beauty, wonder, celebration, and meaning wherever your journey leads.",
            "",
            "LOVE WITHOUT SHAME",
            "Affection honestly given and freely received is never weakness. Protect the freedom of others to love, desire, and express themselves without fear, cruelty, or needless judgement.",
            "",
            "SHARE GENEROUSLY",
            "A drink. A story. A meal. A kiss. A bed. A burden. A second chance. Each becomes richer when shared with willing hearts.",
            "",
            "LIFT THE WEARY",
            "No soul should face despair alone. Offer your hand before your judgement. Lead with compassion before condemnation.",
            "",
            "LEAVE WARMTH BEHIND",
            "When your journey ends, let every place you leave behind be kinder, brighter, and more welcoming because you passed through it.",
            "",
            "\"A full table. A warm fire. An open heart.\""
        ],

        page3notes : false,
        source : ["DA42", 0],
        origin : "Oath of the Velvet Antler"
    });


    /*  ======================================================================
        PLAYING AN OATH OF THE VELVET ANTLER PALADIN
        ====================================================================== */

    DA42VelvetAntlerInitiate.toNotesPage.push({
        name : "Playing a Velvet Antler Paladin",

        note : [
            "The Oath of the Velvet Antler is embraced by those who believe the smallest moments often become life's greatest treasures.",
            "",
            "Its paladins may be wandering healers, musicians, storytellers, cooks, brewers, pilgrims, matchmakers, protectors, or trusted companions.",
            "",
            "Consider the following questions when portraying your character:",
            "",
            "• Who first welcomed you to their table?",
            "• What story do you tell most often?",
            "• What simple joy reminds you why life is worth protecting?",
            "• How do you comfort those burdened by grief or despair?",
            "• Which of the Seven Blessings do you most often invoke?",
            "• What promise have you made that you refuse to break?",
            "",
            "The things worth defending are rarely crowns or treasure.",
            "They are the people gathered around the fire.",
            "",
            "\"No two songs are ever sung the same. That is why every voice matters.\""
        ],

        page3notes : false,
        source : ["DA42", 0],
        origin : "Oath of the Velvet Antler"
    });


    /*  ======================================================================
        PUBLICATION INFORMATION
        ====================================================================== */

    DA42VelvetAntlerInitiate.toNotesPage.push({
        name : "DA42SC-001 Publication Information",

        note : [
            "OATH OF THE VELVET ANTLER",
            "",
            "Catalogue Code: DA42SC-001",
            "Content Version: 1.0.0",
            "Script Version: 2.0.0",
            "Release: First Public Release",
            "",
            "Created by: Daniel Lott",
            "Published under: DruidAllanon42",
            "",
            "© Daniel Lott",
            "Published under the DruidAllanon42 imprint.",
            "",
            "PATREON",
            "https://www.patreon.com/cw/DruidAllanon42",
            "",
            "REDDIT",
            "https://www.reddit.com/r/DruidAllanon42/",
            "",
            "DMS GUILD",
            "Coming Soon",
            "",
            "Designed for D&D 5e Revised Rules (2024 / 5.5e) and MorePurpleMoreBetter Character Record Sheet v14.0.6 or newer."
        ],

        page3notes : false,
        source : ["DA42", 0],
        origin : "Oath of the Velvet Antler"
    });


    /*  ======================================================================
        VERSION HISTORY
        ====================================================================== */

    DA42VelvetAntlerInitiate.toNotesPage.push({
        name : "Oath of the Velvet Antler: Version History",

        note : [
            "VERSION 1.0.0",
            "First Public Release",
            "",
            "• Introduced the Oath of the Velvet Antler.",
            "• Added Initiate of the Velvet Antler and First Antler's Guidance.",
            "• Added the Morning Revel and Seven Blessings of the Reveler.",
            "• Added Reveler's Embrace and Second Chance.",
            "• Added Aura of Fellowship.",
            "• Added Heart of the Reveler.",
            "• Added Avatar of the Reveler.",
            "• Established the Oath as DA42SC-001 within the DruidAllanon42 catalogue."
        ],

        page3notes : false,
        source : ["DA42", 0],
        origin : "Oath of the Velvet Antler"
    });
}


/*  ==========================================================================
    SCRIPT METADATA
    ========================================================================== */

var DA42SC001 = {
    catalogueCode : "DA42SC-001",
    authorTag : "DA42SC",
    title : "Oath of the Velvet Antler",
    contentVersion : "1.0.0",
    scriptVersion : "2.0.0",
    release : "First Public Release",
    creator : "Daniel Lott",
    imprint : "DruidAllanon42",
    setting : "Stormhaven",
    faith : "The Order of the Velvet Antler",

    links : {
        patreon :
            "https://www.patreon.com/cw/DruidAllanon42",

        reddit :
            "https://www.reddit.com/r/DruidAllanon42/",

        dmsguild :
            "Coming Soon"
    }
};


/*  ==========================================================================
    END OF DA42SC-001
    ========================================================================== */